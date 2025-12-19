import Link from "next/link";
import { cn } from "@/lib/utils";

const components = [
   // {
      //title: "Bouncy Button",
      //href: "/components/bouncy-button",
      //description: "A button that bounces when clicked.",
    //},
  {
    title: "Browser",
    href: "/components/browser-demo",
    description: "A browser window mockup.",
  },
 // {
  //  title: "Dashed Button",
  //  href: "/components/dashed-button",
 //   description: "A button with a dashed border.",
 // },
  {
    title: "LeetCode Graph",
    href: "/components/leetcode-graph",
    description: "A contribution graph like LeetCode's.",
  },
  {
    title: "Meteor Card",
    href: "/components/meteor-card",
    description: "A card with a meteor shower effect.",
  },
  {
    title: "Nav Bar",
    href: "/components/nav-bar",
    description: "A responsive navigation bar.",
  },
  {
    title: "Skeleton",
    href: "/components/skeleton",
    description: "A skeleton loading animation.",
  },
  {
    title: "Rainbow Button",
    href: "/components/rainbow-button",
    description: "A button with a rainbow glow effect.",
  },
  {
    title: "Image Button",
    href: "/components/image-button",
    description: "An expandable image button.",
  },
  {
    title: "Payment Form",
    href: "/components/payment-form",
    description: "A payment form with a card design.",
  },
];

export default function Page() {
  return (
    <div className=" max-w-4xl py-6 lg:py-10 mx-auto font-satoshi">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className={cn("inline-block text-foreground/80 text-4xl tracking-tight lg:text-5xl font-light")}>
            UI Collection
          </h1>
          <p className="text-sm md:text-base text-muted-foreground/80 italic">
            this is my personal collection. i like to build small ui components.
            feel free to go through and use them in your projects.
          </p>  
          
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="group relative p-3 hover:bg-accent border border-border transition-colors overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-0 h-0 border-r-2 opacity-0 border-t-2 border-primary group-hover:w-[8px] group-hover:h-[8px] group-hover:opacity-100 transition-all duration-300 delay-200 ease-out" />
            
            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-2 opacity-0 border-b-2 border-primary group-hover:w-[8px] group-hover:h-[8px] group-hover:opacity-100 transition-all duration-300 delay-200 ease-out" />
            
            <h3 className="font-light leading-none tracking-tight text-foreground/80 ">
              {component.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground font-light text-foreground/80 ">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}


