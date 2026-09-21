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
              I design and build systems at the intersection of automation,
              robotics, machine learning, and experimental imaging science.
            </p>

            <p className="mt-5 max-w-[48rem] text-base leading-8 text-[#5B5052] md:text-lg">
              My work spans robotic systems, laboratory automation, computer
              vision, scientific machine learning, and AI-driven tools for
              research.
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
              <span>automation, intelligence, and visual science</span>
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
                I build systems where software meets the{" "}
                <span className="italic text-[#4B202B]">
                  physical world.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-9 text-[#4B202B]">
                I&apos;m a robotics engineer working across laboratory
                automation, machine learning, computer vision, and experimental
                imaging. I&apos;m most interested in systems where software has
                to interact with the physical world — robots, instruments,
                imaging pipelines, and scientific workflows.
              </p>

              <p className="mt-6 text-base leading-8 text-[#5B5052]">
                My biological background and computational training let me
                follow a project from the scientific question through technical
                implementation. That perspective helps me evaluate whether an
                engineering solution actually makes sense for the biology,
                recognize when the implementation is drifting from the
                experimental goal, and pivot when needed.
              </p>

              <div className="mt-9 border-l-2 border-[#E9C2CB] pl-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#722F45]">
                  Currently interested in
                </p>

                <p className="mt-3 font-serif text-xl italic leading-8 text-[#4B202B]">
                  Autonomous labs · Scientific AI · Computer vision · Robotics
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
                Projects I&apos;ve been building.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#5B5052]">
              Robotics, autonomous experimentation, machine learning,
              computer vision, and scientific software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <ProjectCard
              number="01"
              title="Automated Colorimetric Assay Optimization"
              description="A closed-loop experimental system that combines OT-2 liquid handling, camera-based feedback, and active learning to iteratively optimize dye formulations toward target colors."
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
              description="Active learning for scientific image segmentation using a U-Net and Monte Carlo dropout to prioritize informative microscopy images under limited labeling budgets."
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
              description="Integrated gene-expression and multimodal molecular data to model Ixazomib response using custom SVM/SVR implementations, Elastic Net regression, biological feature engineering, and PCA."
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
              description="A generative-AI framework for multi-robot laboratory scheduling and dynamic replanning across automated scientific workflows."
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
              description="Developing and debugging robotic laboratory workflows, liquid-handling protocols, and automation infrastructure for scientific experiments. My work includes protocol execution, labware integration, robotic workflow design, motion and positioning troubleshooting, and software tools for improving automation reliability."
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
              description="Worked on experimental imaging and quantitative analysis of connexin proteins, combining microscopy, image analysis, and computational workflows to study gap-junction plaque behavior."
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
              interesting.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#5B5052]">
            I&apos;m always interested in robotics, automation, machine
            learning, scientific software, and ambitious technical projects.
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
            automation, intelligence, and visual science
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