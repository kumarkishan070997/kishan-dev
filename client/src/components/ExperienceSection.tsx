import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Rishabh Software",
    location: "Vadodara, Gujarat, India",
    duration: "Apr 2025 - Present",
    current: true,
    responsibilities: [
      "Developed and enhanced RESTful APIs; resolved critical server-side issues and performance bottlenecks",
      "Extended and modified existing Kafka-based services as per evolving business requirements",
      "Backend development using Laravel and PostgreSQL with clean code architecture principles",
      "Contributed to AdTech project with focus on data-driven performance and efficiency",
      "Collaborated within a cross-functional Agile team to deliver robust and timely solutions.",
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Codebuddy Pvt. Ltd.",
    location: "Kolkata, West Bengal, India",
    duration: "Oct 2023 - Apr 2025",
    current: false,
    responsibilities: [
      "Developed and integrated both APIs and UI components for seamless user experiences",
      "Directly collaborated with clients to understand requirements and deliver tailored solutions.",
      "Integrated authentication with Google, Facebook, GitHub, YouTube, and Google Drive",
      "Implemented Stripe payment gateway and worked with AI tools like ChatGPT and Gemini",
      "Optimized database queries and integrated WebSockets for real-time data updates",
      "Hands-on experience in working with Docker across multiple projects.",
      "Proficient in troubleshooting and optimizing server-side processes.",
    ],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "ValueCoders",
    location: "Gurugram, Haryana, India",
    duration: "Mar 2020 - Oct 2023",
    current: false,
    responsibilities: [
      "API development, versioning, error handling, and server level debugging",
      "Integrated Stripe payment gateway and worked on service-repository patterns",
      "Frontend integration with Vue.js and managed team of junior employees",
      "Amazon AWS S3 integration and query optimization with socket integration",
      "worked on query optimization and socket integration to show real-time data.",
      "Managing a team of junior employees.",
    ],
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="experience-title"
          >
            grep -r "experience" career.json
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
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

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: any;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-8 font-mono text-sm hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      data-testid={`experience-card-${index}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-secondary">
            {experience.title}
          </h3>
          <p className="text-accent">{experience.company}</p>
          <p className="text-muted-foreground">{experience.location}</p>
        </div>
        <span
          className={`px-3 py-1 rounded text-xs flex-shrink-0 ${
            experience.current
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
          data-testid={`experience-duration-${index}`}
        >
          {experience.duration}
        </span>
      </div>

      <div className="space-y-2">
        <div>
          <span className="json-key">"responsibilities"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-bracket">[</span>
        </div>
        {experience.responsibilities.map((resp: string, respIndex: number) => (
          <div key={respIndex} className="ml-4">
            <span className="json-string">"{resp}"</span>
            {respIndex < experience.responsibilities.length - 1 && (
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
