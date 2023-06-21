import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "pc1y0wgw",
  dataset: "production",
  title: "Ushauri Wellness Africa Website",
  apiVersion: "2023-06-21",
  basePath: "/admin",
  plugins: [deskTool()],
  // schema: { types: schemas }
})

export default config