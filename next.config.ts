import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects(){
    return[
      {
        source:"/hey",
        destination:"https://turf-contri.notion.site/hello-27632a5724a8803092d4dc01881772a8?source=copy_link",
        permanent:true,
      },
      {
        source:"/motion",
        destination:"/hey",
        permanent:true,
      },
    ]
  }
};

export default nextConfig;
