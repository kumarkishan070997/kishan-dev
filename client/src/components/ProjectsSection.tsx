import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    id: 1,
    name: "Workstatus",
    type: "Workforce Management",
    features: [
      "Real-time analytics",
      "Automated reporting",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    name: "Membership.io",
    type: "Content Management",
    features: [
      "Backend API optimization",
      "Third-party integrations",
      "Scalable architecture",
    ],
  },
  {
    id: 3,
    name: "HiringDay",
    type: "Resume Platform",
    features: [
      "Full-stack Laravel solution",
      "Resume generation",
      "Expert-crafted templates",
    ],
  },
  {
    id: 4,
    name: "XactiMatch",
    type: "Insurance Claim System",
    features: [
      "Document comparison",
      "Data scraping & mapping",
      "Automated report generation",
    ],
  },
  {
    id: 5,
    name: "Mpact International",
    type: "Learning Management System",
    features: [
      "Vue.js frontend",
      "Assessment & surveys",
      "Employee management",
    ],
  },
  {
    id: 6,
    name: "Brizzle Store",
    type: "E-commerce Platform",
    features: [
      "Amazon-like functionality",
      "Secure transactions",
      "Platform security",
    ],
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="projects-title"
          >
            ls -la projects/
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: any;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 font-mono text-sm hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-testid={`project-card-${index}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-secondary mb-2">
          {project.name}
        </h3>
        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
          {project.type}
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <span className="json-key">"features"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-bracket">[</span>
        </div>
        {project.features.map((feature: string, featureIndex: number) => (
          <div key={featureIndex} className="ml-4">
            <span className="json-string">"{feature}"</span>
            {featureIndex < project.features.length - 1 && (
              <span className="json-bracket">,</span>
            )}
          </div>
        ))}
        <div>
          <span className="json-bracket">]</span>
        </div>
      </div>
    </div>
  );
}
