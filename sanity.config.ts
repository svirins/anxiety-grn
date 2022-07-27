import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';

export default createConfig({
  name: 'trevoga',
  title: 'trevoga',
  projectId: 'kfa1qxw1',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }]
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string'
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
          }
        ]
      }
    ]
  }
});
