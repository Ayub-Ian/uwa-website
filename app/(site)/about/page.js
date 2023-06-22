import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="tw-w-full">
      <div className="tw-rounded-md tw-text-center tw-px-4 tw-py-4 lg:tw-px-28">
        <h1 className="tw-font-bold tw-text-2xl">Our Mission</h1>
      </div>
      <div className="tw-bg-[#A6D49F] tw-mt-2.5 tw-rounded-md tw-px-4 tw-py-12 lg:tw-px-28">
        <h1 className="tw-font-bold tw-text-2xl">
          Ushauri - The Swahili word for “advice”
        </h1>
      </div>

      <div className="tw-space-y-4 tw-mt-2.5 md:tw-grid tw-grid-cols-2 tw-gap-4 tw-grid-flow-row md:tw-items-center">
        <div className=" tw-relative tw-aspect-square tw-w-full tw-rounded-md  tw-bg-black md:tw-col-start-2 md:tw-col-end-3 md:tw-row-start-1 md:tw-row-end-2">
          <Image
            src="/about-first.jpg"
            alt="uwa management"
            fill={true}
            className="tw-object-cover tw-object-top tw-w-full tw-rounded-md	"
          />
        </div>
        <div className="tw-py-4 md:tw-px-10  md:tw-col-start-1 md:tw-col-end-2 md:tw-row-start-1 md:tw-row-end-2 md:tw-mt-0 md:tw-my-auto">
          Ushauri Wellness Africa(UWA) is a non-profit organization dedicated to
          promoting mental health, drug and substance awareness, financial
          literacy and civic education in the Ongata Rongai area of Kenya. We
          began as an innovation of 15 young people who wanted to make a
          positive impact in their community, offering peer-to-peer education
          and support. Since then, we have grown and have reached over 200
          youth.
        </div>
        <div className=" tw-relative tw-aspect-square tw-w-full tw-rounded-md  tw-bg-black  md:tw-col-start-1 md:tw-col-end-1 md:tw-row-start-2 md:tw-row-end-3">
          <Image
            src="/about-second.jpg"
            alt="uwa management"
            fill={true}
            className="tw-object-cover tw-object-top tw-w-full	tw-rounded-md"
          />
        </div>
        <div className="tw-py-4 md:tw-px-10  md:tw-col-start-2 md:tw-col-end-3 md:tw-row-start-2 md:tw-row-end-3">
          Our core focus is on mental health and substance abuse awareness,
          recognizing the devastating impact these issues can have on
          individuals, families and communities. We provide education and
          support to those dealing with these challenges, with the aim of
          reducing stigma and promoting a healthy, holistic lifestyle.
        </div>
        <div className=" tw-relative tw-aspect-square tw-w-full tw-rounded-md   tw-bg-black  md:tw-col-start-2 md:tw-col-end-3 md:tw-row-start-3 md:tw-row-end-4">
          <Image
            src="/about-third.jpg"
            alt="uwa management"
            fill={true}
            className="tw-object-cover tw-object-top tw-w-full tw-rounded-md	"
          />
        </div>
        <div className="tw-py-4  md:tw-col-start-1 md:tw-col-end-2 md:tw-row-start-3 md:tw-row-end-4">
          At UShauri Wellness Africa, we believe that everyone has a role to
          play in creating a better world and we empower individuals to take an
          active role in their own well-being and that of their community. We
          are committed to promoting holistic wellness and making a positive
          impact in Ongata Rongal and beyond.
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
