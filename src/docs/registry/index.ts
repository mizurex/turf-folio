import React from "react";

type RegistryComponent =
  | React.ComponentType<any>
  | React.LazyExoticComponent<React.ComponentType<any>>;

export const TutorialRegistry: Record<
  string,
  { files: { path: string }[]; component?: RegistryComponent }
> = {
  // Skeleton
  demo: {
    files: [
      {
        path: "src/docs/registry/demo/demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/demo")
    ),
  },
  skeleton:{
    files:[
      {
        path: "src/docs/registry/components/skeleton.tsx",
      },
    ],
    component:React.lazy(
      () => import("@/docs/registry/components/skeleton")
    )
  },

  // Browser Demo
  browserDemo:{
    files: [
      {
        path: "src/docs/registry/demo/browser-demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/browser-demo")
    ),
  },
  // Browser
  browser:{
    files: [
      {
        path: "src/docs/registry/components/browser.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/browser")
    ),
  },
  // Analog Watch
  analogWatchDemo:{
    files: [
      {
        path: "src/docs/registry/demo/analog-watch.demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/analog-watch.demo")
    ),
  },
  // Analog Watch
  analogWatch:{
    files: [
      {
        path: "src/docs/registry/components/analog-watch.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/analog-watch")
    ),
  },

  //Boucy button
  bouncyButtonDemo:{
    files: [
      {
        path: "src/docs/registry/demo/button/bouncy-button.demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/button/bouncy-button")
    ),
  },
  bouncyButton:{
    files: [
      {
        path: "src/docs/registry/components/button/bouncy-button.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/button/bouncy-button")
    ),
  },
  // dashed button
  dashedButtonDemo:{
    files: [
      {
        path: "src/docs/registry/demo/button/dashed-button-demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/button/dashed-button")
    ),
  },
  dashedButton:{
    files: [
      {
        path: "src/docs/registry/components/button/dashed-button.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/button/dashed-button")
    ),
  },

  // LeetCode Graph
  leetcodeGraphDemo:{
    files: [
      {
        path: "src/docs/registry/demo/leetcode-graph-demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/leetcode-graph-demo")
    ),
  },
  leetcodeGraph:{
    files: [
      {
        path: "src/docs/registry/components/leetcode-graph.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/leetcode-graph")
    ),
  },

  //meteor card

  meteorCardDemo:{
    files: [
      {
        path: "src/docs/registry/demo/meteor-card-demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/meteor-card-demo")
    ),
  },
  meteorCard:{
    files: [
      {
        path: "src/docs/registry/components/meteor-card.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/components/meteor-card")
    ),
  },
};


