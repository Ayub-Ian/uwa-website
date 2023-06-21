const program = {
    name: "program",
    title: "Programs",
    type: "document",
    fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "name" }
        },
        {
          name: "url",
          title: "URL",
          type: "url"
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }]
        }
      ]
}

export default program;