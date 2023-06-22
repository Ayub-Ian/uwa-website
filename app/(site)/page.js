import { getPrograms } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const programs = await getPrograms();

  return (
    <div className="tw-w-full">
      <div className="tw-bg-[#A6D49F] tw-rounded-md tw-px-4 tw-py-28 lg:tw-px-28 lg:tw-py-32">
        <div className="tw-flex tw-flex-col-reverse md:tw-flex-row md:tw-items-center">
          <div className="tw-space-y-4">
            <h1 className=" tw-text-black tw-font-bold tw-text-2xl lg:tw-text-5xl tw-tracking-tighter">
              Open conversations for a better future
            </h1>
            <h3 className="tw-text-black tw-text-lg lg:tw-text-4xl tw-tracking-tighter">
              Mobilising Conversations: Creating Safe Spaces for Critical
              Discussions
            </h3>
          </div>
          <div className="tw-relative md:tw-w-full tw-h-48 lg:tw-h-64 ">
            <Image
              src="/hero-image.png"
              alt="Mental health"
              fill={true}
              className="tw-object-contain"
            />
          </div>
        </div>
      </div>

      <div className="tw-bg-[#9CB380] tw-mt-2.5 tw-rounded-md tw-px-4 tw-py-28 lg:tw-px-28 lg:tw-py-32 tw-space-y-8">
        <p className="tw-text-black tw-font-bold tw-text-3xl lg:tw-text-4xl tw-tracking-tighter">
          Ushauri for Wellness for Africa
        </p>
        <p className="tw-leading-6">
          Ushauri Wellness Africa is dedicated to promoting open conversations
          around mental health, drugs and substance abuse, financial literacy,
          and civic education amongst individuals aged 40 years and under. We
          believe that by creating a safe space for people to discuss these
          important topics, we can help break down stigmas and barriers that
          prevent individuals from seeking the help and resources they need.
        </p>
        <div className="tw-bg-black tw-w-fit tw-text-white tw-py-2.5 tw-px-6 tw-flex tw-items-center tw-space-x-2.5 hover:tw-scale-95 tw-ease-in-out tw-duration-300 tw-group">
          <Link href="/about">More about Ushauri Wellness</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-5 tw-h-5 group-hover:tw-translate-x-2 tw-ease-in-out tw-duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>

      <div className="tw-mt-2.5 ">
        <div className="tw-py-16 tw-px-4 lg:tw-px-44 tw-rounded-md tw-bg-white tw-text-center tw-space-y-6">
          <h1 className="tw-text-xl tw-font-bold tw-tracking-tighter">
            Our Programs
          </h1>
          <p>
            We offer a variety of programs and resources to support individuals
            in their journey towards mental wellness, financial stability, and
            civic engagement.
          </p>
        </div>
        <div className="tw-mt-2.5 tw-space-y-4 md:tw-space-y-0 md:tw-grid tw-grid-cols-4 tw-gap-4 ">
          {programs.map((program) => (
            <div
              key={program._id}
              className="tw-space-y-6 tw-rounded-md tw-px-6 tw-py-16"
              style={{ backgroundColor: `#${program.hexcode}` }}
            >
              <p className="tw-font-bold tw-text-xl">{program.name}</p>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" tw-mt-2.5 tw-py-16 tw-px-4 lg:tw-px-44 tw-rounded-md tw-bg-[#522A27] tw-text-center tw-text-white tw-space-y-6">
        <h1 className="tw-text-xl tw-font-bold tw-tracking-tighter">
          Get involved, Stay Connected
        </h1>
        <p>
          We are always looking for passionate individuals to join our community
          and help us drive positive change. Whether you are interested in
          volunteering, donating, or simply spreading the word about our cause,
          there are many ways to get involved and make a difference. Follow us
          on our socials for updates to know how you can be a part of the
          movement!
        </p>
        <div className="tw-bg-black tw-w-fit tw-mx-auto tw-text-white tw-py-2.5 tw-px-6 tw-flex tw-items-center tw-space-x-2.5 hover:tw-scale-95 tw-ease-in-out tw-duration-300 tw-group">
          <Link href="/about">Stay in touch</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-5 tw-h-5 group-hover:tw-translate-x-2 tw-ease-in-out tw-duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
