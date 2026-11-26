import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { coreStack, education, experience, profileParagraphs, projects } from "@/data/portfolio";
import { profile, siteUrl, socialProfiles } from "@/data/site";

const ACCENT = "#0F766E";
const INK = "#0F1F33";
const BODY = "#2B3A4A";
const MUTED = "#6B7785";
const RULE = "#D9DEE5";
const TINT = "#EEF7F5";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 52,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.45,
    color: BODY,
  },
  topBand: { position: "absolute", top: 0, left: 0, right: 0, height: 6, backgroundColor: ACCENT },

  // Header
  name: { fontSize: 26, fontFamily: "Helvetica-Bold", color: INK, letterSpacing: -0.5 },
  title: { fontSize: 11, fontFamily: "Helvetica-Bold", color: ACCENT, marginTop: 3 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  contactItem: { fontSize: 8.5, color: MUTED, marginRight: 12, marginBottom: 3 },
  headerRule: { borderBottomWidth: 1, borderBottomColor: RULE, marginTop: 10, marginBottom: 2 },

  // Sections
  sectionTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    letterSpacing: 1.4,
    marginTop: 12,
    marginBottom: 7,
    paddingBottom: 4,
    borderBottomWidth: 0.8,
    borderBottomColor: ACCENT,
  },
  paragraph: { fontSize: 8.8, color: BODY, lineHeight: 1.5, marginBottom: 5 },

  // Core stack
  stackBox: { backgroundColor: TINT, borderRadius: 4, padding: 9 },
  stackRow: { flexDirection: "row", marginBottom: 4 },
  stackLabel: { width: 120, fontFamily: "Helvetica-Bold", fontSize: 8.8, color: INK },
  stackItems: { flex: 1, fontSize: 8.8, color: BODY },

  // Entries
  entry: { marginBottom: 8 },
  entryHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  entryTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, color: INK, flex: 1, paddingRight: 8 },
  entryPeriod: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: MUTED },
  entrySub: { flexDirection: "row", justifyContent: "space-between", marginTop: 1.5 },
  entryCompany: { fontSize: 9, fontFamily: "Helvetica-Bold", color: ACCENT, flex: 1, paddingRight: 8 },
  entryLocation: { fontSize: 8.5, color: MUTED },
  bullet: { flexDirection: "row", marginTop: 3.5 },
  bulletDot: { width: 12, fontSize: 9, color: ACCENT },
  bulletText: { flex: 1, fontSize: 9, color: BODY, lineHeight: 1.45 },
  pointLabel: { fontFamily: "Helvetica-Bold", color: INK },
  description: { fontSize: 9, color: BODY, marginTop: 3, lineHeight: 1.5 },
  projectSubtitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: ACCENT, marginTop: 1.5 },
  stackLine: { fontSize: 8.3, color: MUTED, fontFamily: "Helvetica-Oblique", marginTop: 4 },

  // Footer
  footer: {
    position: "absolute",
    bottom: 22,
    left: 44,
    right: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: RULE,
    paddingTop: 6,
    fontSize: 7.8,
    color: MUTED,
  },
});

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children.toUpperCase()}</Text>;
}

function Bullet({ children, label }: { children: string; label?: string }) {
  return (
    <View style={styles.bullet} wrap={false}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>
        {label && <Text style={styles.pointLabel}>{label}: </Text>}
        {children}
      </Text>
    </View>
  );
}

const websiteLabel = siteUrl.replace(/^https?:\/\//, "");
const githubLabel = socialProfiles[0]?.replace(/^https?:\/\/(www\.)?/, "");

/** PDF resume: the same content as the web resume, with a print-friendly layout. */
export function ResumeDocument() {
  return (
    <Document title={`${profile.name} - Resume`} author={profile.name} subject={profile.title}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.topBand} fixed />

        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{profile.email}</Text>
            <Text style={styles.contactItem}>{profile.phone}</Text>
            <Text style={styles.contactItem}>{profile.location}</Text>
            <Text style={styles.contactItem}>{websiteLabel}</Text>
            {githubLabel && <Text style={styles.contactItem}>{githubLabel}</Text>}
          </View>
          <View style={styles.headerRule} />
        </View>

        <SectionTitle>Profile</SectionTitle>
        {profileParagraphs.map((paragraph) => (
          <Text key={paragraph.slice(0, 40)} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <SectionTitle>Core stack</SectionTitle>
        <View style={styles.stackBox}>
          {coreStack.map((group) => (
            <View key={group.title} style={styles.stackRow} wrap={false}>
              <Text style={styles.stackLabel}>{group.title}</Text>
              <Text style={styles.stackItems}>{group.items.join("  ·  ")}</Text>
            </View>
          ))}
        </View>

        {experience.map((job, index) => (
          <View key={job.company + job.period} style={styles.entry} wrap={index > 0}>
            {index === 0 && <SectionTitle>Professional experience</SectionTitle>}
            <View style={styles.entryHead} wrap={false}>
              <Text style={styles.entryTitle}>{job.role}</Text>
              <Text style={styles.entryPeriod}>{job.period}</Text>
            </View>
            <View style={styles.entrySub} wrap={false}>
              <Text style={styles.entryCompany}>{job.company}</Text>
              <Text style={styles.entryLocation}>{job.location}</Text>
            </View>
            <View style={{ marginTop: 3 }}>
              {job.highlights.map((highlight) => (
                <Bullet key={highlight}>{highlight}</Bullet>
              ))}
            </View>
          </View>
        ))}

        {projects.map((project, index) => (
          <View key={project.title} style={styles.entry} wrap={index > 0}>
            {index === 0 && <SectionTitle>Projects</SectionTitle>}
            <View style={styles.entryHead} wrap={false}>
              <Text style={styles.entryTitle}>{project.title}</Text>
              <Text style={styles.entryPeriod}>{project.period}</Text>
            </View>
            <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
            <Text style={styles.description}>{project.summary}</Text>
            <View style={{ marginTop: 3 }}>
              {project.points
                .filter((point) => point.text)
                .map((point) => (
                  <Bullet key={point.label ?? point.text} label={point.label}>
                    {point.text ?? ""}
                  </Bullet>
                ))}
            </View>
            <Text style={styles.stackLine}>Stack: {project.stack.join(", ")}</Text>
          </View>
        ))}

        {education.map((item, index) => (
          <View key={item.degree} style={styles.entry} wrap={index > 0}>
            {index === 0 && <SectionTitle>Education</SectionTitle>}
            <View style={styles.entryHead} wrap={false}>
              <Text style={styles.entryTitle}>{item.degree}</Text>
              <Text style={styles.entryPeriod}>{item.period}</Text>
            </View>
            <View style={styles.entrySub} wrap={false}>
              <Text style={styles.entryCompany}>{item.institution}</Text>
              <Text style={styles.entryLocation}>{item.address ?? item.location}</Text>
            </View>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text>
            {profile.name} · {profile.title}
          </Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
