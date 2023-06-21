import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'


export async function getPrograms() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "program"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      url,
      content
    }`
  )
}

