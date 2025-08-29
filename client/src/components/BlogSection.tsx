import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExternalLink, Calendar } from "lucide-react";

// Sample blog articles - in a real app, these would come from an API
const blogArticles = [
  {
    id: 1,
    title: "Building Scalable Laravel APIs: Best Practices",
    excerpt: "Learn how to design and implement robust REST APIs in Laravel with proper versioning, error handling, and performance optimization.",
    date: "2024-12-15",
    readTime: "8 min read",
    url: "https://thedevnerd.com/building-scalable-laravel-apis",
  },
  {
    id: 2,
    title: "Kafka Integration with Laravel: A Complete Guide",
    excerpt: "Step-by-step guide to integrate Apache Kafka with Laravel for building event-driven microservices architecture.",
    date: "2024-11-28",
    readTime: "12 min read",
    url: "https://thedevnerd.com/kafka-laravel-integration",
  },
  {
    id: 3,
    title: "WebSocket Implementation in PHP: Real-time Features",
    excerpt: "Implementing real-time data updates using WebSockets in PHP applications for better user experience.",
    date: "2024-11-10",
    readTime: "10 min read",
    url: "https://thedevnerd.com/websockets-php-realtime",
  },
  {
    id: 4,
    title: "Database Query Optimization in Laravel",
    excerpt: "Advanced techniques for optimizing database queries in Laravel applications to improve performance and reduce server load.",
    date: "2024-10-22",
    readTime: "15 min read",
    url: "https://thedevnerd.com/laravel-query-optimization",
  },
];

export default function BlogSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-primary mb-12 terminal-prompt section-fade ${
              isVisible ? "visible" : ""
            }`}
            data-testid="blog-title"
          >
            curl -X GET thedevnerd.com/latest
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {blogArticles.map((article, index) => (
              <BlogCard
                key={article.id}
                article={article}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://thedevnerd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors terminal-prompt inline-flex items-center justify-center gap-2"
              data-testid="view-all-articles"
            >
              <ExternalLink size={20} />
              visit --all-articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  article,
  index,
  isVisible,
}: {
  article: any;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 font-mono text-sm hover-glow section-fade ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      data-testid={`blog-card-${index}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-secondary mb-3 leading-tight">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
        <span className="json-value">{article.readTime}</span>
      </div>

      <div className="space-y-2 text-xs mb-4">
        <div>
          <span className="json-key">"status"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-string">"published"</span>
          <span className="json-bracket">,</span>
        </div>
        <div>
          <span className="json-key">"category"</span>
          <span className="json-bracket">:</span>{" "}
          <span className="json-string">"Laravel & PHP"</span>
        </div>
      </div>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        data-testid={`read-article-${index}`}
      >
        <span className="terminal-prompt text-xs">read --full</span>
        <ExternalLink size={14} />
      </a>
    </div>
  );
}