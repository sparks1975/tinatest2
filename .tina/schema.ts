import { defineConfig, defineSchema, RouteMappingPlugin } from "tinacms";
import { client } from "./__generated__/client";
import type { TinaTemplate } from "tinacms";

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  image: "",
  image_alt: "This is the image alt text.",
  // there is no `icon` field on the 
  // icon: {
  //     color: "",
  //     style: "float",
  //     name: "",
  // },
};

const featureBlock: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
        },
        {
          type: 'string',
          label: 'Image Alt Tag',
          name: 'image_alt',
        },
      ],
    },
    {
      type: 'string',
      label: 'Layout',
      name: 'layout',
      options: [
        {
          label: '2 up',
          value: '50'
        },
        {
          label: '4 up',
          value: '25'
        },
        {
          label: 'Full Width',
          value: '100'
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};

const imageText50Block: TinaTemplate = {
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
      label: 'Custom Class',
      name: 'custom',
      options: [
        {
          label: 'Inset',
          value: 'inset'
        }
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
      label: 'Headline Class',
      name: 'headline_class',
      options: [
        {
          label: 'Blue to Purple',
          value: 'blue_purple'
        },
        {
          label: 'Pink to Blue',
          value: 'pink_blue'
        },
        {
          label: 'Gold to Orange',
          value: 'gold_orange'
        },
      ],
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

const heroBlock: TinaTemplate = {
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
          templates: [heroBlock, imageText50Block, featureBlock],
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
      if ("home" === collection.name && "home" === document._sys.filename) {
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
