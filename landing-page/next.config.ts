import type { NextConfig } from "next";
import { basePath } from "./lib/base-path";

const config: NextConfig = {
  basePath,
  output: "standalone",
  devIndicators: false,
};

export default config;
