import { defineConfig, defineSchema, RouteMappingPlugin } from "tinacms";
import { client } from "./__generated__/client";
import type { TinaTemplate } from "tinacms";

const imageText50Block:TinaTemplate = {
  name: 'imageText50',
  label: 'Image + Text 50/50',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text:
        'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
      template: 'img_left',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Template',
      name: 'template',
      options: [
        {
          label: 'Image Left',
          value: 'img_left'
        },
        {
          label: 'Image Right',
          value: 'img_right'
        },
        {
          label: 'Image Top',
          value: 'img_top'
        },
      ],
    },
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
    },
    {
      type: 'string',
      label: 'Button Label',
      name: 'btn_label',
    },
    {
      type: 'string',
      label: 'Button Link',
      name: 'btn_link',
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image',
    },
    {
      type: 'string',
      label: 'Image Alt Tag',
      name: 'img_alt',
    },
  ],
}

const heroBlock:TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text:
        'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      // ui: {
      //   component: 'markdown',
      // },
    },
    {
      type: 'image',
      label: 'Hero image',
      name: 'image',
    },
  ],
}

const schema = defineSchema({
  config: {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    branch:
      process.env.NEXT_PUBLIC_TINA_BRANCH ||
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
      process.env.HEAD,
    token: process.env.TINA_TOKEN,
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Home Page",
      name: "home",
      path: "content",
      format: "mdx",
      fields: [
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Sections',
          templates: [heroBlock, imageText50Block],
        },
      ],
    },
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          type: 'image',
          label: 'Hero image',
          name: 'hero',
        },
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ]
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: 'image',
          label: 'Hero image',
          name: 'imgSrc',
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
});

export default schema;

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    const RouteMapping = new RouteMappingPlugin((collection, document) => {
      if ("home" === collection.name && "home" === document._sys.filename){
        return "/";
      }

      if (["page"].includes(collection.name)) {
        return `/${document._sys.filename}`;
      }

      if (["post"].includes(collection.name)) {
        return `/posts/${document._sys.filename}`;
      }

      return `/${collection.name}/${document._sys.filename}`;
    });

    cms.plugins.add(RouteMapping);

    return cms;
  },
});