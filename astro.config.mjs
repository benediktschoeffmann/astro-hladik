import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import netlify from "@astrojs/netlify/functions";
import NetlifyCMS from 'astro-netlify-cms';

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), compress(), NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: 'git-gateway',
        branch: 'master'
      },
      // Configure where our media assets are stored & served from
      media_folder: 'public/assets/blog',
      public_folder: '/assets/blog',
      // Configure the content collections
      collections: [{
        name: 'posts',
        label: 'Blog Posts',
        label_singular: 'Blog Post',
        folder: 'src/pages/posts',
        create: true,
        delete: true,
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Post Title'
        }, {
          name: 'publishDate',
          widget: 'datetime',
          format: 'DD MMM YYYY',
          date_format: 'DD MMM YYYY',
          time_format: false,
          label: 'Publish Date'
        }, {
          name: 'teaserImage',
          widget: 'image',
          label: 'Teaser Image',
          required: false
        }, {
          name: 'author',
          widget: 'string',
          label: 'Author Name',
          required: false
        }, {
          name: 'authorURL',
          widget: 'string',
          label: 'Author URL',
          required: false
        }, {
          name: 'description',
          widget: 'string',
          label: 'Description',
          required: false
        }, {
          name: 'body',
          widget: 'markdown',
          label: 'Post Body'
        }, {
          name: 'layout',
          widget: 'select',
          default: '../../layouts/BlogPost.astro',
          options: [{
            label: 'Blog Post',
            value: '../../layouts/BlogPost.astro'
          }]
        }]
      }, {
        name: 'articles',
        label: 'Articles',
        label_singular: 'Article',
        folder: 'src/pages/articles',
        create: true,
        delete: true,
        fields: [{
          name: 'title',
          widget: 'string',
          label: 'Title'
        }, {
          name: 'publishDate',
          widget: 'datetime',
          format: 'DD MMM YYYY',
          date_format: 'DD MMM YYYY',
          time_format: false,
          label: 'Publish Date'
        }, {
          name: 'teaserImage',
          widget: 'image',
          label: 'Teaser Image',
          required: false
        }, {
          name: 'leadText',
          widget: 'string',
          label: 'Lead Text',
          required: false
        },
        // { 
        //   label: 'Tags', 
        //   name: 'tags', 
        //   widget: 'list', 
        //   fields:
        //     - {label: NamedNodeMap, name: name, widget: string},
        //   required: false
        // },
        {
          name: 'body',
          widget: 'markdown',
          label: 'Body Text'
        }]
      }]
    }
    // previewStyles: ['../../styles/blog.css'],
  }), playformCompress()],
  output: "server",
  adapter: netlify()
});