import { Mail, MapPin, Phone } from "lucide-react";

import { CopyButton } from "@/components/shared/motion/copy-button";
import { Magnetic } from "@/components/shared/motion/magnetic";
import { RippleButton } from "@/components/shared/motion/ripple-button";
import { TiltCard } from "@/components/shared/motion/tilt-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { profile } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-10 py-10 sm:py-12">
      <SectionHeading id="contact-title" index="06" title="Contact" icon={Mail} />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-6 text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.2] tracking-[-0.02em]">
            Open to new opportunities and collaborations. Let&apos;s build something reliable together.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <RippleButton href={`mailto:${profile.email}`}>
                <Mail size={16} aria-hidden />
                Send an email
              </RippleButton>
            </Magnetic>
            <CopyButton value={profile.email} label="Copy email" copiedLabel="Email copied" variant="outline" />
          </div>
        </div>

        <TiltCard className="rounded-xl" tilt={5}>
          <ul className="divide-y divide-border rounded-xl border border-border bg-card/85">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-5 transition-colors hover:bg-secondary/60"
              >
                <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-soft text-brand">
                  <Mail size={16} aria-hidden />
                </span>
                <span className="min-w-0 break-all text-[15px]">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 p-5 transition-colors hover:bg-secondary/60"
              >
                <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-soft text-brand">
                  <Phone size={16} aria-hidden />
                </span>
                <span className="text-[15px]">{profile.phone}</span>
              </a>
            </li>
            <li className="flex items-center gap-4 p-5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-soft text-brand">
                <MapPin size={16} aria-hidden />
              </span>
              <span className="text-[15px]">{profile.location}</span>
            </li>
          </ul>
        </TiltCard>
      </div>
    </section>
  );
}
