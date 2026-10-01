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
            <Link to="/qr-code-component" className={cn(style["hover-link"])}>
              [QR CODE COMPONENT]
            </Link>
          </div>
          <div className="space-x-2">
            <p className="inline">01</p>
            <Link to="/blog-preview-card" className={cn(style["hover-link"])}>
              [BLOG PREVIEW CARD]
            </Link>
          </div>
          <div className="space-x-2">
            <p className="inline">02</p>
            <Link
              to="/social-links-profile"
              className={cn(style["hover-link"])}
            >
              [SOCIAL LINKS PROFILE]
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
