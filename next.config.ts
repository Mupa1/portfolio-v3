import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 50, 25],
  },
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntl(nextConfig);
