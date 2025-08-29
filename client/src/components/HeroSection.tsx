import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhurFZM9n2OgHBrhLGO-IqWzr8AJ2MVQmj1-PBBg-fvJcbmxP_oyB0aQOvoVY4f9D9iLHOTLx3Zn32s0ZEJIKejwHL0hNBAebIv0rNPLXtYl_XU_NSwGPs1su3ZH4ZGnX1GlthqGuEQNA6YTX6jIi5kWjAyQX_MskzifuMnWmoEZJ4BnqwJUc7GT0JhukRX/s16000/1703862582322%20(1).jpg"
            alt="Kishan Maharana Profile"
            className="w-40 h-40 rounded-full border-4 border-primary mx-auto object-cover hover-glow"
            data-testid="profile-image"
          />
        </div>

        <div className="font-mono space-y-4">
          <div className="text-muted-foreground text-lg">
            <span className="terminal-prompt">whoami</span>
          </div>
          <h1
            className={`text-4xl md:text-6xl font-bold text-primary ${
              !isTypingComplete ? "typing-animation" : ""
            } ${isTypingComplete ? "terminal-cursor" : ""}`}
            data-testid="hero-title"
          >
            Kishan Maharana
          </h1>
          <div className="text-xl md:text-2xl text-secondary font-semibold">
            <span className="json-bracket">{`{`}</span>{" "}
            <span className="json-string">"role"</span>
            <span className="json-bracket">:</span>{" "}
            <span className="json-value">"Software Engineer"</span>{" "}
            <span className="json-bracket">{`}`}</span>
          </div>
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="json-key">"specialization"</span>
            <span className="json-bracket">:</span>{" "}
            <span className="json-string">
              "Laravel | PHP | Kafka | REST APIs | WebSocket | MySQL | PostgreSQL"
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="mailto:kishan@example.com"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="contact-email"
          >
            <Mail size={20} />
            contact --email
          </a>
          <a
            href="https://linkedin.com/in/kishan-maharana"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="connect-linkedin"
          >
            <Linkedin size={20} />
            connect --linkedin
          </a>
          <a
            href="https://github.com/kishan-maharana"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
            data-testid="view-github"
          >
            <Github size={20} />
            view --github
          </a>
        </div>
      </div>
    </section>
  );
}
