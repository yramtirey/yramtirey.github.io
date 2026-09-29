import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NeuroVasc Workbench | Yeritmary Rodriguez Delgado",
  description: "Cerebrovascular imaging, quantitative geometry and synthetic validation. A research software prototype with linked caliber profiles and 3D vessel visualization.",
  alternates: { canonical: "https://yramtirey.github.io/projects/neurovasc-workbench/" },
};

// Set only after the public source repository has been created and verified.
const repositoryUrl: string | null = null;
const sections = [
  ["The problem", "A labeled vascular segmentation is only the starting point. Turning it into interpretable measurements requires physical coordinates, centerlines, vessel identity and a network representation that makes failures visible."],
  ["What it does", "NeuroVasc combines anatomical vessel selection, an interactive Circle-of-Willis view, caliber profiles and chart-to-3D point linking. The Python tools also support centerline, branch and network-topology experiments, with advanced methods kept separate from production defaults."],
  ["Technical architecture", "NIfTI segmentation → Python analysis → geometry, topology and caliber → case JSON and VTP → FastAPI → React, VTK.js and Recharts."],
  ["Validation", "Analytic synthetic phantoms provide known geometric truth. Caliber, centerline and topology experiments measure error, coverage and connectivity while retaining failed cases. An isolated VMTK benchmark adds an external comparator. Lee centerlines and EDT caliber remain the current baselines; advanced recovery and topology methods remain experimental."],
  ["Data provenance", "Development examples include TopCoW-released Circle-of-Willis annotations derived from the IXI MRA dataset. Raw imaging data are not redistributed. Original IXI data are licensed CC BY-SA 3.0; TopCoW and IXI both receive attribution. Synthetic validation phantoms are generated independently by NeuroVasc."],
  ["Scientific responsibility", "This is a research/engineering prototype, not diagnostic medical software. Synthetic validation does not establish clinical validation. Segmentation-derived caliber and candidate relative caliber reduction are geometric descriptors, not diagnoses."],
];

export default function NeuroVascProject() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] px-6 py-10 text-[#2B2023] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link href="/#personal-projects" className="text-sm text-[#722F45]">← Personal Projects</Link>
        <header className="py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[#722F45]">Computational Imaging · Scientific Software</p>
          <h1 className="mt-5 font-serif text-5xl tracking-tight md:text-7xl">NeuroVasc Workbench</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#4B202B]">Interactive cerebrovascular imaging and quantitative geometry.</p>
          {repositoryUrl && <a className="mt-8 inline-block rounded-full bg-[#4B202B] px-7 py-3 text-[#F7F1E8]" href={repositoryUrl}>Source on GitHub ↗</a>}
        </header>
        <figure className="mb-16">
          {/* Genuine UI capture; unoptimized static asset for GitHub Pages. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/neurovasc/neurovasc-linked-view.png" alt="NeuroVasc dashboard with a selected vessel, real caliber profile and corresponding 3D point marker" width="1440" height="1328" className="w-full rounded-3xl border border-[#4B202B]/10" />
          <figcaption className="mt-3 text-sm leading-7 text-[#5B5052]">Actual application capture using an annotated TopCoW/IXI MRA example. Rendering and UI by NeuroVasc; dataset-derived image under CC BY-SA 3.0. No diagnostic interpretation is shown.</figcaption>
        </figure>
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map(([title,copy]) => <section key={title} className="border-t border-[#4B202B]/15 pt-7"><h2 className="font-serif text-3xl text-[#4B202B]">{title}</h2><p className="mt-4 leading-8 text-[#5B5052]">{copy}</p></section>)}
        </div>
        <section className="mt-14 border-t border-[#4B202B]/15 py-10">
          <h2 className="font-serif text-3xl">Stack</h2>
          <p className="mt-4 leading-8 text-[#5B5052]">Python · FastAPI · React · TypeScript · VTK.js · VTK/PyVista · NiBabel · scikit-image · SciPy · NetworkX · Recharts</p>
          <div className="mt-6 flex flex-wrap gap-6 text-[#722F45]">
            <a href="https://zenodo.org/records/15692630">TopCoW data release ↗</a>
            <a href="https://brain-development.org/ixi-dataset/">Original IXI source ↗</a>
            <a href="https://creativecommons.org/licenses/by-sa/3.0/">Image/data license ↗</a>
            <a href="/projects/neurovasc/ATTRIBUTION.md">Screenshot attribution ↗</a>
            {repositoryUrl && <><a href={`${repositoryUrl}/blob/main/DATA_SOURCES.md`}>Data Sources ↗</a><a href={`${repositoryUrl}/tree/main/docs/validation`}>Methods and validation ↗</a></>}
          </div>
        </section>
      </div>
    </main>
  );
}
