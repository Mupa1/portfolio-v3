import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mupa M'mbetsa Nzaphila - Full Stack Engineer Portfolio",
    short_name: "Mupa Portfolio",
    description:
      "Professional portfolio of Mupa M'mbetsa Nzaphila, Full Stack Engineer specializing in React, Next.js, and Node.js",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
