import { getPrograms } from "@/sanity/sanity-utils";

export default async function Home() {
  const programs = await getPrograms();
  // console.log(programs)
  return (
    <div className="tw-w-full">
      <div className="tw-bg-[#A6D49F] tw-rounded-md tw-px-4 tw-py-32">
        <h1 className=" tw-text-black tw-font-bold tw-text-xl">
          Open conversations for a better future
        </h1>
        <h3 className="tw-text-black">
          Mobilising Conversations: Creating Safe Spaces for Critical
          Discussions
        </h3>
      </div>
    </div>
  );
}
