import Head from "next/head";

import { ResumeView } from "@/components/resume/resume-view";
import { profile, siteUrl } from "@/data/site";

/** Web version of the resume: readable on screen, print-ready, and downloadable as PDF from the toolbar. */
export default function ResumePage() {
  return (
    <>
      <Head>
        <title>{`Resume | ${profile.name}`}</title>
        <meta
          name="description"
          content={`Resume of ${profile.name}, ${profile.title}: experience, projects, skills and education.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/resume`} />
      </Head>
      <ResumeView />
    </>
  );
}
