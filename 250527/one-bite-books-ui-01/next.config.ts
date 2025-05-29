import type { NextConfig } from "next";
import { tree } from "next/dist/build/templates/app-page";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

//  cache값 console.log() 에서 확인하기 위해서 여기서 한다
