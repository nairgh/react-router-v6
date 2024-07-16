import { generateSitemap } from "react-sitemap-generator";
import Routes from "../App";

generateSitemap({
  url: "https://example.org",
  routes: [Routes],
  output: "./public",
  options: {
    "/dashboard": { ignore: true }, // Remote path from sitemap
    "/video/:id": {
      slugs: { id: ["value1", "value2"] }, // Creates multiple routes
      priority: 1,
      changefreq: "never",
    },
  },
});
