import React from "react";

type RegistryComponent =
  | React.ComponentType<any>
  | React.LazyExoticComponent<React.ComponentType<any>>;

export const TutorialRegistry: Record<
  string,
  { files: { path: string }[]; component?: RegistryComponent }
> = {
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
  browserDemo:{
    files: [
      {
        path: "src/docs/registry/demo/browser-demo.tsx",
      },
    ],
    component: React.lazy(
      () => import("@/docs/registry/demo/browser-demo")
    ),
  }
};


