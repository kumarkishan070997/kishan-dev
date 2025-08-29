import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ExperienceCounter from "./ExperienceCounter";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-8 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="about-title"
          >
            cat about.json
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className={`lg:col-span-2 bg-card border border-border rounded-lg p-8 font-mono text-sm hover-glow section-fade ${
                isVisible ? "visible" : ""
              }`}
              data-testid="about-content"
            >
              <div className="space-y-2">
                <div>
                  <span className="json-bracket">{`{`}</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"name"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">"Kishan Maharana"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"title"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">"Software Engineer"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"experience"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-value">"5+ years"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"description"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-string">
                    "Experienced Laravel Developer with 5+ years of expertise in
                    web-based MVC pattern applications, RESTful API development,
                    and Kafka-based services. Strong knowledge of optimized API
                    design, versioning, and modularized Laravel structures.
                    Proficient in HTML, CSS, JS, Bootstrap, and AJAX. Skilled in
                    backend development, database optimization, and real-time data
                    updates using WebSockets."
                  </span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-4">
                  <span className="json-key">"strengths"</span>
                  <span className="json-bracket">:</span>{" "}
                  <span className="json-bracket">[</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Clean Code Architecture"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Performance Optimization"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Team Leadership"</span>
                  <span className="json-bracket">,</span>
                </div>
                <div className="ml-8">
                  <span className="json-string">"Client Collaboration"</span>
                </div>
                <div className="ml-4">
                  <span className="json-bracket">]</span>
                </div>
                <div>
                  <span className="json-bracket">{`}`}</span>
                </div>
              </div>
            </div>
            
            <div
              className={`section-fade ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <ExperienceCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
