import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import "@fontsource-variable/figtree";

export const Route = createFileRoute("/blog-preview-card/")({
  component: RouteComponent,
});

function RouteComponent() {
  const style = {
    "bg-yellow": "dark:bg-[hsl(47,88%,63%)]",
    "border-gray-950": "border-2 border-[hsl(0,0%,7%)]",
    "text-gray-500": "text-[hsl(0,0%,42%)]",
    "hover-link":
      "dark:hover:bg-neutral-950 dark:hover:text-[hsl(47,88%,63%)] font-black",
    "active-link": "bg-neutral-950 text-[hsl(47,88%,63%)]",
  };
  return (
    <div
      className={cn(
        "min-w-screen min-h-screen dark:text-neutral-950",
        style["bg-yellow"],
      )}
      style={{ fontFamily: "Figtree Variable" }}
    >
      <header className="p-6 flex items-center gap-2 font-black">
        <Link to="/" className={cn(style["hover-link"])}>
          [/]
        </Link>
        <p>&gt;</p>
        <p className={cn(style["active-link"])}>[BLOG PREVIEW CARD]</p>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <section
          className={cn(
            "p-6 bg-white rounded-xl max-w-96 space-y-6 shadow-[8px_8px_0px_1px_rgba(0,0,0,1)]",
            style["border-gray-950"],
          )}
        >
          <img
            src="/images/blog-preview-illustration.svg"
            className="max-h-80 w-full object-cover rounded-lg"
          />
          <article className="space-y-2">
            <p
              className={cn(
                style["bg-yellow"],
                "font-extrabold rounded px-4 py-1.5 w-fit",
              )}
            >
              Learning
            </p>
            <p className="font-semibold">Published 21 Dec 2023</p>
          </article>
          <article className="space-y-2">
            <h1 className="text-2xl font-extrabold">HTML & CSS Foundations</h1>
            <p className="font-medium text-gray-500">
              These languages are the backbone of every website, defining
              structure, content and presentation.
            </p>
          </article>
          <article className="flex items-center gap-2">
            <img
              src="/images/blog-preview-avatar.webp"
              className="w-8 h-8 rounded-full border border-black/60"
            />
            <p className="font-black">Greg Hooper</p>
          </article>
        </section>
      </main>
    </div>
  );
}
