import dynamic from "next/dynamic";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";

const SectionSkeleton = () => (
  <div
    aria-hidden="true"
    className="mx-auto my-24 h-[40vh] max-w-7xl animate-pulse rounded-2xl border border-white/5 bg-white/[0.015]"
  />
);

// Below-the-fold: lazy-loaded so the hero ships first.
const LogoBar = dynamic(
  () => import("@/components/sections/LogoBar").then((m) => m.LogoBar),
  { loading: SectionSkeleton },
);
const Categories = dynamic(
  () => import("@/components/sections/Categories").then((m) => m.Categories),
  { loading: SectionSkeleton },
);
const Courses = dynamic(
  () => import("@/components/sections/Courses").then((m) => m.Courses),
  { loading: SectionSkeleton },
);
const WhyChooseUs = dynamic(
  () => import("@/components/sections/WhyChooseUs").then((m) => m.WhyChooseUs),
  { loading: SectionSkeleton },
);
const InstructorSpotlight = dynamic(
  () =>
    import("@/components/sections/InstructorSpotlight").then(
      (m) => m.InstructorSpotlight,
    ),
  { loading: SectionSkeleton },
);
const LearningPaths = dynamic(
  () =>
    import("@/components/sections/LearningPaths").then((m) => m.LearningPaths),
  { loading: SectionSkeleton },
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { loading: SectionSkeleton },
);
const Stats = dynamic(
  () => import("@/components/sections/Stats").then((m) => m.Stats),
  { loading: SectionSkeleton },
);
const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => m.Pricing),
  { loading: SectionSkeleton },
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
  { loading: SectionSkeleton },
);
const FinalCTA = dynamic(
  () => import("@/components/sections/FinalCTA").then((m) => m.FinalCTA),
  { loading: SectionSkeleton },
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
  { loading: SectionSkeleton },
);

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <LogoBar />
        <Categories />
        <Courses />
        <WhyChooseUs />
        <InstructorSpotlight />
        <LearningPaths />
        <Testimonials />
        <Stats />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
