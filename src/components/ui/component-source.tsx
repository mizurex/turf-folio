// components/ComponentSource.tsx
export function ComponentSource({
  className,
  collapsible = true,
  children,
}: React.ComponentProps<"div"> & {
  src?: string; // used by rehype
  title?: string;
  showLineNumbers?: boolean;
  collapsible?: boolean;
}) {
  if (!collapsible) {
    return <div className={className}>{children}</div>;
  }
  return <div className={className}>{children}</div>;
}