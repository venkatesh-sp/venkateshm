import Head from "next/head";

import { education, experience, headlineSkills } from "@/data/portfolio";
import { profile, siteMeta, siteUrl } from "@/data/site";

/** Page metadata: search snippets, Open Graph and Twitter cards, plus Person/WebSite structured data. */
export function Seo() {
  const personId = `${siteUrl}/#person`;
  const pageImage = `${siteUrl}${siteMeta.ogImage}?v=${siteMeta.ogImageVersion}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        jobTitle: profile.title,
        description: siteMeta.description,
        url: siteUrl,
        image: pageImage,
        email: `mailto:${profile.email}`,
        telephone: `+91${profile.phone}`,
        address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
        knowsAbout: headlineSkills,
        worksFor: { "@type": "Organization", name: experience[0].company },
        alumniOf: education.map((item) => ({ "@type": "EducationalOrganization", name: item.institution })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteMeta.title,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
    ],
  };

  return (
    <Head>
      <title>{siteMeta.title}</title>
      <meta name="description" content={siteMeta.description} />
      <meta name="keywords" content={siteMeta.keywords.join(", ")} />
      <meta name="author" content={profile.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={siteMeta.themeColor} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content={siteMeta.locale} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteMeta.title} />
      <meta property="og:description" content={siteMeta.description} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${profile.name} portfolio`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteMeta.title} />
      <meta name="twitter:description" content={siteMeta.description} />
      <meta name="twitter:image" content={pageImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </Head>
  );
}
