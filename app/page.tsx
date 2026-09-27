const githubProfile = "https://github.com/yramtirey";

const linkedinProfile =
  "https://www.linkedin.com/in/yeritmaryrodriguez-/";

const colorimetricRepo =
  "https://github.com/xthomaswang/Project_02762";

const nucleiRepo =
  "https://github.com/yramtirey/Uncertainty-Guided-Nuclei-Segmentation-and-Morphology-Robustness-with-an-Image-Quality-Gate";

const ixazomibRepo =
  "https://github.com/yramtirey/predicting-ixazomib-response-in-cancer-cell-lines";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F1E8] text-[#2B2023]">

      {/* soft background glow */}
      <div className="pointer-events-none fixed right-[-140px] top-[80px] h-[460px] w-[460px] rounded-full bg-[#E9C2CB]/30 blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-180px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[#722F45]/10 blur-3xl" />

      <div className="px-6 md:px-12 lg:px-20">

        {/* navigation */}
        <nav className="relative z-20 flex items-center justify-between py-6 md:py-8">
          <a
            href="#top"
            className="text-2xl font-bold tracking-tight text-[#4B202B]"
          >
            YRD ✦
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#about"
              className="transition-colors hover:text-[#722F45]"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-[#722F45]"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="transition-colors hover:text-[#722F45]"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[#722F45]"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* hero */}
        <section
          id="top"
          className="relative z-10 flex min-h-[82vh] items-center"
        >
          <div className="w-full max-w-7xl py-10">

            <div className="mb-10 inline-flex rounded-full border border-[#722F45]/20 bg-[#E9C2CB]/30 px-5 py-2.5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#722F45] sm:text-xs">
                Automated Science · Robotics · Machine Learning
              </p>
            </div>

            <h1 className="font-serif text-[10vw] leading-[0.92] tracking-[-0.045em] text-[#2B2023] sm:whitespace-nowrap sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.7rem]">
              <span className="inline-block animate-[fadeUp_0.9s_ease-out]">
                Yeritmary Rodriguez Delgado
              </span>
            </h1>

            <p className="mt-10 max-w-[58rem] text-xl leading-9 text-[#4B202B] md:text-2xl">
              I build systems for science that need to work outside of a notebook.
            </p>

            <p className="mt-5 max-w-[48rem] text-base leading-8 text-[#5B5052] md:text-lg">
              I work across automated experimentation, robotics, machine learning,
              and computational imaging, connecting biological questions with
              usable technical systems.
            </p>

            {/* hero buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#F7F1E8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#722F45]"
              >
                Explore my work
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/40"
              >
                Resume ↗
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#4B202B]/40 px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/30"
              >
                Full CV ↗
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#4B202B]/40 px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/30"
              >
                GitHub ↗
              </a>

              <a
                href={linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#4B202B]/40 px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/30"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 font-serif text-sm italic text-[#722F45]/75">
              <span>✦</span>
              <span>from scientific questions to working systems</span>
              <span>✦</span>
            </div>
          </div>
        </section>

        {/* about */}
        <section
          id="about"
          className="relative z-10 border-t border-[#4B202B]/10 py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            <div>
              <SectionLabel>About Me</SectionLabel>

              <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-[#2B2023] md:text-5xl">
                Tools to help us see, automate, and{" "}
                <span className="italic text-[#4B202B]">
                  understand science.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-9 text-[#4B202B]">
                I&apos;m a robotics engineer with a background in biology and
                computational training. I build tools that connect experiments,
                images, and data to the questions scientists are trying to
                answer. I&apos;m especially interested in what it takes for those
                tools to become part of everyday scientific and clinical workflows.
              </p>

              <p className="mt-6 text-base leading-8 text-[#5B5052]">
                The technical challenge is only part of the work. When I automate
                a protocol or analyze biological images, I ask whether the system
                still serves the experimental goal and makes sense for the biology.
                I also care about the person who has to use it: what they need to
                understand, where things can go wrong, and how the tool fits into
                their work.
              </p>

              <div className="mt-9 border-l-2 border-[#E9C2CB] pl-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#722F45]">
                  Currently interested in
                </p>

                <p className="mt-3 font-serif text-xl italic leading-8 text-[#4B202B]">
                  Autonomous labs · Scientific robotics · Computational imaging
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section
          id="projects"
          className="relative z-10 border-t border-[#4B202B]/10 py-24"
        >
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>
              <SectionLabel>Selected Work</SectionLabel>

              <h2 className="mt-3 font-serif text-4xl text-[#2B2023] md:text-5xl">
                What I&apos;ve been building.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#5B5052]">
              Tools for choosing the next experiment, interpreting biological
              images, and learning from molecular data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <ProjectCard
              number="01"
              title="Automated Colorimetric Assay Optimization"
              description="Reaching a target color requires deciding which dye formulation to try next. Our closed-loop system connects OT-2 liquid handling, camera feedback, and active learning to use each experiment to guide the next formulation."
              tags={[
                "Robotics",
                "Active Learning",
                "Computer Vision",
                "OT-2",
              ]}
              href={colorimetricRepo}
              note="Team project · Experiment design & documentation"
            />

            <ProjectCard
              number="02"
              title="Uncertainty-Guided Nuclei Segmentation"
              description="With a limited labeling budget, which microscopy images are most useful to annotate? I built a nuclei segmentation workflow that uses a U-Net and Monte Carlo dropout to estimate uncertainty and prioritize informative images for active learning."
              tags={[
                "Computer Vision",
                "Active Learning",
                "U-Net",
                "PyTorch",
                "Uncertainty",
              ]}
              href={nucleiRepo}
              note="BBBC006 · BBBC039"
            />

            <ProjectCard
              number="03"
              title="Predicting Ixazomib Response in Cancer Cell Lines"
              description="Can molecular data help predict how cancer cell lines respond to Ixazomib? Our project modeled drug response from gene expression and other molecular data, using custom SVM/SVR implementations, Elastic Net regression, biological feature engineering, and PCA."
              tags={[
                "Biomedical ML",
                "Regression",
                "Elastic Net",
                "Gene Expression",
                "PCA",
              ]}
              href={ixazomibRepo}
              note="Team project · CMU Machine Learning for Scientists"
            />

            <ProjectCard
              number="04"
              title="LabOS"
              description="Automated experiments need robots to coordinate their work and adapt when plans change. I’m developing LabOS, a generative-AI framework for multi-robot laboratory scheduling and dynamic replanning."
              tags={[
                "Generative AI",
                "Robotics",
                "Multi-Robot Systems",
                "Scheduling",
              ]}
              note="In development"
            />
          </div>
        </section>

        {/* experience */}
        <section
          id="experience"
          className="relative z-10 border-t border-[#4B202B]/10 py-24"
        >
          <div className="mb-14">
            <SectionLabel>Experience</SectionLabel>

            <h2 className="mt-3 font-serif text-4xl text-[#2B2023] md:text-5xl">
              Where I&apos;ve been building.
            </h2>
          </div>

          <div className="relative ml-3 border-l border-[#4B202B]/15 pl-8 md:ml-4 md:pl-10">

            <ExperienceItem
              role="Robotics Engineer"
              company="Magnify Biosciences"
              date="2026 — Present"
              description="I develop and debug robotic laboratory workflows and liquid-handling protocols on Opentrons Flex and OT-2 systems. I integrate labware, troubleshoot motion and positioning, and build Python tools to make experimental automation more reliable."
              tags={[
                "Robotics",
                "Laboratory Automation",
                "Opentrons Flex",
                "OT-2",
                "Python",
                "Liquid Handling",
              ]}
            />

            <ExperienceItem
              role="Post-baccalaureate Research Fellow"
              company="Carnegie Mellon University"
              date="2024 — 2025"
              description="I studied gap-junction plaque behavior by imaging and quantifying connexin proteins. I combined microscopy, image analysis, and computational workflows to turn observations into measurements for biological analysis."
              tags={[
                "Experimental Imaging",
                "Microscopy",
                "Image Analysis",
                "Quantitative Biology",
              ]}
            />

          </div>
        </section>

        {/* contact */}
        <section
          id="contact"
          className="relative z-10 border-t border-[#4B202B]/10 py-28 text-center"
        >
          <SectionLabel>Contact</SectionLabel>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#2B2023] md:text-6xl">
            Let&apos;s build something{" "}
            <span className="italic text-[#4B202B]">
              useful.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#5B5052]">
            Working on a scientific problem that needs better tools? I&apos;d
            like to hear about it.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:yeritmar@andrew.cmu.edu"
              className="rounded-full bg-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#F7F1E8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#722F45]"
            >
              Email me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/40"
            >
              Resume ↗
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/40"
            >
              Full CV ↗
            </a>

            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/40"
            >
              GitHub ↗
            </a>

            <a
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#4B202B] px-7 py-3.5 text-sm font-medium text-[#4B202B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E9C2CB]/40"
            >
              LinkedIn ↗
            </a>

          </div>
        </section>

        {/* footer */}
        <footer className="relative z-10 flex flex-col items-center justify-between gap-3 border-t border-[#4B202B]/10 py-8 text-sm text-[#722F45]/70 md:flex-row">
          <p>YRD ✦</p>

          <p className="font-serif italic">
            from scientific questions to working systems
          </p>

          <p>© 2026 Yeritmary Rodriguez Delgado</p>
        </footer>

      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs uppercase tracking-[0.32em] text-[#722F45]">
      {children}
    </p>
  );
}

function ProjectCard({
  number,
  title,
  description,
  tags,
  href,
  note,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  note?: string;
}) {
  const cardClass =
    "group block rounded-[2rem] border border-[#4B202B]/10 bg-white/30 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#722F45]/30 hover:shadow-[0_20px_60px_rgba(75,32,43,0.08)] md:p-9";

  const content = (
    <>
      <div className="flex items-start justify-between">
        <span className="text-xs tracking-[0.25em] text-[#722F45]">
          {number}
        </span>

        <span className="text-xl text-[#4B202B] transition-transform duration-300 group-hover:rotate-12">
          ✦
        </span>
      </div>

      <h3 className="mt-12 font-serif text-3xl leading-tight text-[#2B2023]">
        {title}
      </h3>

      {note && (
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#722F45]/70">
          {note}
        </p>
      )}

      <p className="mt-5 max-w-lg text-sm leading-7 text-[#5B5052] md:text-base">
        {description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#E9C2CB]/35 px-3 py-1.5 text-xs text-[#722F45]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-9 text-sm font-medium text-[#4B202B]">
        {href ? "View on GitHub →" : "Currently building ✦"}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return <article className={cardClass}>{content}</article>;
}

function ExperienceItem({
  role,
  company,
  date,
  description,
  tags,
}: {
  role: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
}) {
  return (
    <article className="relative mb-16 last:mb-0">

      <div className="absolute -left-[2.47rem] top-2 h-3 w-3 rounded-full border-2 border-[#F7F1E8] bg-[#722F45] md:-left-[2.97rem]" />

      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-serif text-2xl text-[#2B2023] md:text-3xl">
            {role}
          </h3>

          <p className="mt-1 text-base text-[#722F45]">
            {company}
          </p>
        </div>

        <p className="text-sm text-[#5B5052]">
          {date}
        </p>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-8 text-[#5B5052]">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#E9C2CB]/30 px-3 py-1.5 text-xs text-[#722F45]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
