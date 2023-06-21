import { getPrograms } from "@/sanity/sanity-utils"

export default async function Home() {

  const programs = await getPrograms();
  // console.log(programs)
  return (
    <div>Projects go here</div>
  )
}
