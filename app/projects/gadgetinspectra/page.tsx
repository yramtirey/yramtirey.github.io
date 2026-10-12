import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GadgetInspectra | Yeritmary Rodriguez Delgado",
  description: "Simulated robotic inspection with thickness checks, operator review and verification. An interactive browser demo with a separate live ROS 2 workflow.",
  alternates: { canonical: "https://yramtirey.github.io/projects/gadgetinspectra/" },
};

const repositoryUrl = "https://github.com/yramtirey/GadgetInspectra";
const demoUrl = "https://yramtirey.github.io/GadgetInspectra/?mode=demo";
const sections = [
  ["The problem", "A thickness reading needs to lead to a traceable decision. A thin spot should pause the workflow, rework should require approval, and a fresh scan should determine whether the repair passes. Missing sensor responses should fail visibly."],
  ["What it does", "The dashboard follows three scan points against a 7.0 mm threshold. Try a clear panel, a repaired thin spot, a persistent thin spot, or a sensor timeout. Approve simulated rework or reject the inspection when a thin spot requires review."],
  ["Technical architecture", "The ROS 2 workflow connects a Python inspection controller and simulated thickness sensor to a React/Three.js dashboard through Rosbridge. The standalone browser demo reuses the scenario readings and runs its own illustrative workflow without a backend."],
  ["Scope and validation", "Readings, robot motion and rework are simulated. The demo illustrates workflow decisions; it does not establish sensor accuracy or control physical hardware. Browser results stay in memory. The separate ROS workflow records completed inspections in a local JSON Lines audit log."],
];

export default function GadgetInspectraProject() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] px-6 py-10 text-[#2B2023] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/#personal-projects" className="text-sm text-[#722F45]">← Personal Projects</Link>
        <header className="py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[#722F45]">Robotics · Inspection Workflows</p>
          <h1 className="mt-5 break-words font-serif text-4xl tracking-tight sm:text-5xl md:text-7xl">GadgetInspectra</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#4B202B]">From a thickness reading to an inspection decision.</p>
          <p className="mt-5 max-w-3xl leading-8 text-[#5B5052]">An interactive simulation of inspection, operator review and verification. The browser demo needs no ROS 2 installation or Rosbridge server.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="inline-block rounded-full bg-[#4B202B] px-7 py-3 text-[#F7F1E8]" href={demoUrl}>Launch Demo ↗</a>
            <a className="inline-block rounded-full border border-[#4B202B] px-7 py-3 text-[#4B202B]" href={repositoryUrl}>Source on GitHub ↗</a>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#722F45]">Independent prototype · Simulated readings, motion and rework · No physical robot</p>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map(([title, copy]) => <section key={title} className="border-t border-[#4B202B]/15 pt-7"><h2 className="font-serif text-3xl text-[#4B202B]">{title}</h2><p className="mt-4 leading-8 text-[#5B5052]">{copy}</p></section>)}
        </div>
        <section className="mt-14 border-t border-[#4B202B]/15 py-10">
          <h2 className="font-serif text-3xl">Explore the live ROS workflow</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#5B5052]">Run the ROS nodes and local dashboard to use live telemetry, operator actions and inspection audit records. Select Live ROS in the dashboard to connect to your local Rosbridge server.</p>
          <a className="mt-6 inline-block text-[#722F45] underline underline-offset-4" href={`${repositoryUrl}#run-locally`}>Local ROS setup ↗</a>
          <p className="mt-8 leading-8 text-[#5B5052]">ROS 2 · Python · React · TypeScript · Three.js · Rosbridge</p>
        </section>
      </div>
    </main>
  );
}
