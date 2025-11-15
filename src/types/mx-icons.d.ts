declare module "mx-icons" {
  import * as React from "react";
  export type IconComponent = React.FC<
    React.SVGProps<SVGSVGElement> & { size?: number | string; color?: string }
  >;
  const icons: Record<string, IconComponent>;
  export = icons;
}


