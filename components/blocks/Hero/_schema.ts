import { TinaTemplate } from 'tinacms';

export const heroBlock: TinaTemplate = {
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
      label: 'Hero image alt text',
      name: 'alt_text',
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
