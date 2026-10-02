import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  const style = {
    "hover-link": "hover:text-neutral-950 hover:bg-neutral-50 font-black",
  };
  return (
    <div className="min-w-screen min-h-screen bg-neutral-950 text-neutral-50">
      <header className="p-6">
        <Link to="/" className={cn(style["hover-link"])}>
          [/]
        </Link>
      </header>
      <main className="p-6">
        <section>
          <div className="space-x-2">
            <p className="inline">00</p>
            <a
              href="https://fathan3x.github.io/fms-qr-code-component/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(style["hover-link"])}
            >
              [QR CODE COMPONENT]
            </a>
          </div>
          <div className="space-x-2">
            <p className="inline">01</p>
            <a
              href="https://fathan3x.github.io/fms-blog-preview-card/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(style["hover-link"])}
            >
              [BLOG PREVIEW CARD]
            </a>
          </div>
          <div className="space-x-2">
            <p className="inline">02</p>
            <a
              href="https://fathan3x.github.io/fms-social-links-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(style["hover-link"])}
            >
              [SOCIAL LINKS PROFILE]
            </a>
          </div>
          <div className="space-x-2">
            <p className="inline">03</p>
            <a
              href="https://fathan3x.github.io/fms-recipe-page/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(style["hover-link"])}
            >
              [RECIPE PAGE]
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
