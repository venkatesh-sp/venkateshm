import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { education, experience, headlineSkills, profileSummary, projects, skillGroups } from "@/data/portfolio";
import { profile } from "@/data/site";

const ACCENT = "#0F766E";
const INK = "#0F1F33";
const MUTED = "#55606E";
const RULE = "#D9DEE5";
const CHIP_BG = "#E6F4F1";

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 44,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.45,
    color: INK,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: ACCENT,
    paddingBottom: 12,
    marginBottom: 6,
  },
  name: { fontSize: 25, fontFamily: "Helvetica-Bold", letterSpacing: -0.4 },
  title: { fontSize: 11, fontFamily: "Helvetica-Bold", color: ACCENT, marginTop: 4 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
  contactItem: { fontSize: 9, color: MUTED, marginRight: 14 },
  sectionTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    letterSpacing: 1.2,
    marginTop: 16,
    marginBottom: 7,
    paddingBottom: 3,
    borderBottomWidth: 0.6,
    borderBottomColor: RULE,
  },
  summary: { color: INK, fontSize: 9.5 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 2 },
  chip: {
    fontSize: 8.5,
    color: ACCENT,
    backgroundColor: CHIP_BG,
    paddingVertical: 2.5,
    paddingHorizontal: 7,
    borderRadius: 3,
    marginRight: 5,
    marginBottom: 5,
  },
  skillRow: { flexDirection: "row", marginBottom: 4 },
  skillLabel: { width: 128, fontFamily: "Helvetica-Bold", fontSize: 9 },
  skillItems: { flex: 1, color: MUTED, fontSize: 9 },
  entry: { marginBottom: 11 },
  entryHead: { flexDirection: "row", justifyContent: "space-between" },
  entryTitle: { fontFamily: "Helvetica-Bold", fontSize: 10.5 },
  entryMeta: { fontSize: 8.5, color: MUTED, marginTop: 1.5 },
  period: { fontSize: 8.5, color: MUTED, fontFamily: "Helvetica-Bold" },
  company: { fontSize: 9.5, color: ACCENT, fontFamily: "Helvetica-Bold", marginTop: 1 },
  bulletRow: { flexDirection: "row", marginTop: 3 },
  bulletDot: { width: 10, color: ACCENT },
  bulletText: { flex: 1, color: INK },
  stackLine: { fontSize: 8.5, color: MUTED, marginTop: 4 },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: MUTED,
  },
});

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children.toUpperCase()}</Text>;
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

/** Resume laid out in the portfolio's own style: same name, sections, accent colour and content. */
export function ResumeDocument() {
  return (
    <Document title={`${profile.name} - Resume`} author={profile.name} subject={profile.title}>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title} · 7+ years of experience</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{profile.email}</Text>
            <Text style={styles.contactItem}>{profile.phone}</Text>
            <Text style={styles.contactItem}>{profile.location}</Text>
          </View>
        </View>

        <SectionTitle>Profile</SectionTitle>
        <Text style={styles.summary}>{profileSummary}</Text>

        <SectionTitle>Core stack</SectionTitle>
        <View style={styles.chipRow}>
          {headlineSkills.map((skill) => (
            <Text key={skill} style={styles.chip}>
              {skill}
            </Text>
          ))}
        </View>

        <SectionTitle>Skills</SectionTitle>
        {skillGroups.map((group) => (
          <View key={group.title} style={styles.skillRow} wrap={false}>
            <Text style={styles.skillLabel}>{group.title}</Text>
            <Text style={styles.skillItems}>{group.items.join("  ·  ")}</Text>
          </View>
        ))}

        <SectionTitle>Professional experience</SectionTitle>
        {experience.map((job) => (
          <View key={job.company + job.period} style={styles.entry}>
            <View style={styles.entryHead}>
              <Text style={styles.entryTitle}>{job.role}</Text>
              <Text style={styles.period}>{job.period}</Text>
            </View>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.entryMeta}>{job.location}</Text>
            {job.highlights.map((highlight) => (
              <Bullet key={highlight}>{highlight}</Bullet>
            ))}
          </View>
        ))}

        <SectionTitle>Projects</SectionTitle>
        {projects.map((project) => (
          <View key={project.title} style={styles.entry} wrap={false}>
            <View style={styles.entryHead}>
              <Text style={styles.entryTitle}>{project.title}</Text>
              <Text style={styles.period}>{project.period}</Text>
            </View>
            <Text style={styles.company}>{project.subtitle}</Text>
            <Text style={[styles.summary, { marginTop: 3 }]}>{project.summary}</Text>
            <Text style={styles.stackLine}>Stack: {project.stack.join(", ")}</Text>
          </View>
        ))}

        <SectionTitle>Education</SectionTitle>
        {education.map((item) => (
          <View key={item.degree} style={styles.entry} wrap={false}>
            <View style={styles.entryHead}>
              <Text style={styles.entryTitle}>{item.degree}</Text>
              <Text style={styles.period}>{item.period}</Text>
            </View>
            <Text style={styles.company}>{item.institution}</Text>
            <Text style={styles.entryMeta}>{item.location}</Text>
          </View>
        ))}

        <View style={styles.footer} fixed>
          <Text>{profile.name} · Resume</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
