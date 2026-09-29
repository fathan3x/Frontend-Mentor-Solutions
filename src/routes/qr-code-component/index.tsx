import type { Breadcrumb } from "#/components/shared/header";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import "@fontsource-variable/outfit";

export const Route = createFileRoute("/qr-code-component/")({
  component: RouteComponent,
});

function RouteComponent() {
  const style = {
    "bg-slate-300": "dark:bg-[hsl(212,45%,89%)]",
    "text-slate-900": "text-[hsl(218,44%,22%)]",
    "text-slate-500": "text-[hsl(216,15%,48%)]",
    "hover-link":
      "dark:hover:bg-neutral-950 dark:hover:text-[hsl(212,45%,89%)] font-black",
    "active-link": "bg-neutral-950 text-[hsl(212,45%,89%)]",
  };
  return (
    <div
      className={cn(
        "min-w-screen min-h-screen dark:text-neutral-950",
        style["bg-slate-300"],
      )}
    >
      <header className="p-6 flex items-center gap-4 font-black">
        <Link to="/" className={cn(style["hover-link"])}>
          [/]
        </Link>
        <p>&gt;</p>
        <p className={cn(style["active-link"])}>[QR CODE COMPONENT]</p>
      </header>
      <main
        className="flex-1 flex items-center justify-center p-4"
        style={{ fontFamily: "Outfit Variable" }}
      >
        <section className="p-6 bg-white rounded-2xl max-w-96 space-y-6 shadow-xl">
          <img
            src="/images/qr-code.png"
            className="max-h-77 w-full object-cover rounded-lg"
          />
          <div className="space-y-4 pb-4">
            <h1
              className={cn(
                "font-bold text-center text-2xl px-4",
                style["text-slate-900"],
              )}
            >
              Improve your front-end skills by building projects
            </h1>
            <p
              className={cn(
                "text-center px-4 text-lg font-regular",
                style["text-slate-500"],
              )}
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

const breadcrumbs: Breadcrumb[] = [
  {
    id: "0",
    path: "/qr-code-component",
    label: "QR CODE COMPONENT",
  },
];
