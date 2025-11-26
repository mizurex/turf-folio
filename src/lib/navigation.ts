export type NavigationItem = {
  title: string;
  href: string;
  external?: boolean;
  icon?: string;
  children?: NavigationItem[];
};

export const navigation: NavigationItem[] = [
    {
        title: "Portfolio",
        href: "/",
      },
      {
        title: "Blogs",
        href: "/blog",
      },
  {
    title: "Introduction",
    href: "/components",
  },
  {
    title: "Components",
    href: "#",
    children: [
      {
        title: "Bouncy Button",
        href: "/components/bouncy-button",
      },
      {
        title: "Browser",
        href: "/components/browser-demo",
      },
      {
        title: "Dashed Button",
        href: "/components/dashed-button",
      },
      {
        title: "LeetCode Graph",
        href: "/components/leetcode-graph",
      },
      {
        title: "Meteor Card",
        href: "/components/meteor-card",
      },
      {
        title: "Nav Bar",
        href: "/components/nav-bar",
      },
      {
        title:"Skeleton",
        href: "/components/skeleton",
      },
      {
        title: "Rainbow Button",
        href: "/components/rainbow-button",
      }
    ],
  },
];

export const externalLinks: NavigationItem[] = [
  {
    title: "GitHub",
    href: "https://github.com/mizurex",
    external: true,
    icon: "github",
  },
];

