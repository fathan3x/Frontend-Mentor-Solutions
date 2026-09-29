import { Link } from "@tanstack/react-router";

export type Breadcrumb = {
  id: string;
  path?: string;
  label: string;
};

type HeaderProps = {
  breadcrumbs?: Breadcrumb[];
};

export function Header({ breadcrumbs }: HeaderProps) {
  return (
    <header className="p-6 flex items-center gap-4 font-black">
      <Link to="/" className="hover-link block">
        [/]
      </Link>
      {breadcrumbs?.map((bc) => (
        <>
          <p>&gt;</p>
          <Link
            key={bc.id}
            to={bc.path ?? "/"}
            activeProps={{ className: bc.path ? "active-link" : "" }}
            className="hover-link block"
          >
            [{bc.label}]
          </Link>
        </>
      ))}
    </header>
  );
}
