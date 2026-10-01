import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import "@fontsource-variable/inter";

export const Route = createFileRoute("/social-links-profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const style = {
    "bg-new-gray-900": "bg-[hsl(0,0%,8%)]",
    "bg-new-gray-800": "bg-[hsl(0,0%,12%)]",
    "bg-new-gray-700": "bg-[hsl(0,0%,20%)]",
    "text-new-green": "text-[hsl(75,94%,57%)]",
    "button-hover": "hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,8%)]",
    "hover-link": "hover:bg-white hover:text-[hsl(0,0%,8%)] font-black",
    "active-link": "bg-white text-[hsl(0,0%,8%)]",
  };
  return (
    <div
      className={cn(
        "min-w-screen min-h-screen text-white",
        style["bg-new-gray-900"],
      )}
      style={{ fontFamily: "Inter Variable" }}
    >
      <header className="p-6 flex items-center gap-2 font-black">
        <Link to="/" className={cn(style["hover-link"])}>
          [/]
        </Link>
        <p>&gt;</p>
        <p className={cn(style["active-link"])}>[SOCIAL LINKS PROFILE]</p>
      </header>
      <main className="flex-1 flex items-center justify-center p-6">
        <section
          className={cn(
            "p-8 rounded-xl max-w-100 w-full flex flex-col gap-6 items-center",
            style["bg-new-gray-800"],
          )}
        >
          <img
            src="/images/social-links-profile-avatar.jpeg"
            className="w-20 h-20 rounded-full border border-black/60"
          />
          <div className="text-center space-y-1">
            <h1 className="font-bold text-2xl">Jessica Randall</h1>
            <p className={cn(style["text-new-green"], "text-sm font-semibold")}>
              London, United Kingdom
            </p>
          </div>
          <p className="text-sm text-center">
            "Front-end developer and avid reader."
          </p>
          <div className="flex flex-col gap-4 w-full">
            {links.map((link) => (
              <button
                key={link.id}
                className={cn(
                  style["bg-new-gray-700"],
                  style["button-hover"],
                  "px-4 py-3 w-full rounded-md cursor-pointer font-bold",
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const links = [
  {
    id: "github",
    label: "GitHub",
  },
  {
    id: "frontend-mentor",
    label: "Frontend Mentor",
  },
  {
    id: "linkedin",
    label: "Linkedin",
  },
  {
    id: "twitter",
    label: "Twitter",
  },
  {
    id: "instagram",
    label: "Instagram",
  },
];
