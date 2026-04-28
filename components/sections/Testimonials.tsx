"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Quote = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

const ROW_A: Quote[] = [
  {
    name: "Avery Chen",
    role: "Engineer · Vercel",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: "I shipped my first internal tool in week three. By month two I was leading a code review on the same patterns I'd just learned.",
  },
  {
    name: "Lucas Møller",
    role: "Designer · Linear",
    avatar: "https://i.pravatar.cc/80?img=11",
    text: "The mentor reviews are the entire game. I've done bootcamps that cost 10× more and gave me less.",
  },
  {
    name: "Hana Park",
    role: "PM · Notion",
    avatar: "https://i.pravatar.cc/80?img=49",
    text: "Prime Learning feels like a magazine you can actually take action on. Beautiful, but real.",
  },
  {
    name: "Tomás Riera",
    role: "Founder · Solo",
    avatar: "https://i.pravatar.cc/80?img=13",
    text: "I bought it for the AI track and stayed for the storytelling course. Refreshingly broad library.",
  },
  {
    name: "Sara Okafor",
    role: "Data Lead · Wise",
    avatar: "https://i.pravatar.cc/80?img=44",
    text: "The certificate actually meant something — recruiters at three of my interviews recognized it.",
  },
];

const ROW_B: Quote[] = [
  {
    name: "Imani Tate",
    role: "Eng Manager · Block",
    avatar: "https://i.pravatar.cc/80?img=23",
    text: "We rolled Prime Learning out to my whole team. Onboarding velocity improved measurably the next quarter.",
  },
  {
    name: "Ben Carter",
    role: "iOS Dev · Spotify",
    avatar: "https://i.pravatar.cc/80?img=33",
    text: "Polished without being hollow. Every lesson assumes you have taste — and respects your time.",
  },
  {
    name: "Mei-Ling Zhao",
    role: "Researcher · DeepMind",
    avatar: "https://i.pravatar.cc/80?img=39",
    text: "Honestly the best subscription I pay for. Not even close.",
  },
  {
    name: "Diego Ramos",
    role: "Brand Lead · Patagonia",
    avatar: "https://i.pravatar.cc/80?img=58",
    text: "Production value rivals MasterClass. Practical depth rivals my old MFA program.",
  },
  {
    name: "Olu Bankole",
    role: "Eng · Figma",
    avatar: "https://i.pravatar.cc/80?img=64",
    text: "I unsubscribed from three other platforms after the first month here.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(224,180,88,0.10),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Loved by learners"
          title={
            <>
              The kind of reviews
              <br />
              <span className="italic text-teal-400">we screenshot.</span>
            </>
          }
        />
      </div>

      <div className="relative mt-14 space-y-5">
        <MarqueeRow items={ROW_A} direction="left" />
        <MarqueeRow items={ROW_B} direction="right" />
      </div>

      {/* edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent"
      />
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Quote[];
  direction: "left" | "right";
}) {
  const animClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-rev";
  // Duplicate the list so the -50% loop reads continuously.
  const all = [...items, ...items];
  return (
    <div className="group relative overflow-hidden">
      <div
        className={`marquee-track ${animClass} group-hover:[animation-play-state:paused]`}
      >
        {all.map((q, i) => (
          <article
            key={`${q.name}-${i}`}
            className="w-[340px] shrink-0 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <Image
                src={q.avatar}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-sm font-medium text-white">{q.name}</div>
                <div className="text-xs text-white/55">{q.role}</div>
              </div>
              <div className="ml-auto flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-3 w-3 fill-amber text-amber"
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              &ldquo;{q.text}&rdquo;
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
