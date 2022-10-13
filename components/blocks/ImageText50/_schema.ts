import { TinaTemplate } from 'tinacms';

export const imageText50Block: TinaTemplate = {
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
      name: 'image_alt',
    },
  ],
}
