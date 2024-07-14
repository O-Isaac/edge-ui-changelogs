import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: "O-Isaac/edge-ui-changelogs"
  },
  collections: {
    posts: collection({
      label: 'Releases',
      slugField: 'title',
      path: 'src/content/releases/*',
      entryLayout: "content",
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: "Date", defaultValue: { kind: "today" } }),
        versionNumber: fields.text({ label: "Version Number"}),
        description: fields.text({ label: "Description" }),
        banner: fields.image({
            label: "Banner",
            directory: "public/banners",
            publicPath: "/banners/",
        }),
        image: fields.object({
            src: fields.image({
                label: "Image",
                directory: "src/assets",
                publicPath: "../../assets/"
            }),
            alt: fields.text({ label: "Alt" })
        }),
        content: fields.markdoc({ 
            extension: "md",
            label: 'Content',
            options: {
                image: fields.image({ 
                    label: "Image", 
                    directory: "public/images/", 
                    publicPath: "/images/"
                })
            } 
        }),
      },
    }),
  },
});
