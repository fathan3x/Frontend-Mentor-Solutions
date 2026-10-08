import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "#/components/ui/hover-card";
import { links } from "#/constants/links";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: RouteComponent });

function RouteComponent() {
  return (
    <div className="min-w-screen min-h-screen bg-neutral-950 text-neutral-50">
      <header className="p-6">
        <Link to="/" className="hover-link">
          [/]
        </Link>
      </header>
      <main className="p-6">
        <section>
          {links.map((link) => (
            <HoverCard>
              <HoverCardTrigger
                className="block hover-link w-fit cursor-pointer"
                delay={50}
                closeDelay={50}
              >
                [{link.label}]
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                side="right"
                alignOffset={-1}
                sideOffset={16}
                className="bg-neutral-900 border-2 border-neutral-50 w-80 h-50 p-4"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <img
                    src={`/images/${link.id}.webp`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </HoverCardContent>
            </HoverCard>
          ))}
        </section>
      </main>
    </div>
  );
}
