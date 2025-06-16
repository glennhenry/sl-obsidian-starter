// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeObsidian from "starlight-theme-obsidian";
import rehypeExternalLinks from "rehype-external-links";
import externalLinkIcon from "./src/assets/externalLinkIcon.js";
import { fontHeadTags } from "./src/assets/headlinks.js";

// https://astro.build/config
export default defineConfig({
  // REPLACE site: "",
  // REPLACE base: "",
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, externalLinkIcon]],
  },
  integrations: [
    starlight({
      head: [...fontHeadTags],
      plugins: [starlightThemeObsidian()],
      favicon: "favicon.svg",
      customCss: ["./src/assets/custom.css"],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 6 },
      credits: true,
      lastUpdated: true,
      title: "REPLACE",
      components: {
        Pagination: "./src/components/Pagination.astro",
        PageFrame: "./src/components/PageFrame.astro",
      },
      editLink: {
        // REPLACE
        baseUrl: "https://github.com/glennhenry/sl-obsidian-starter/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          // REPLACE
          href: "https://github.com/glennhenry/sl-obsidian-starter",
        },
      ],
      sidebar: [
        { label: "Intro", slug: "index" },
        {
          label: "Guides",
          items: [
            { label: "Example Guide 1", slug: "guides/example" },
            { label: "Example Guide 2", slug: "guides/example2" },
            { label: "Example Guide 3", slug: "guides/example3" },
          ],
        },
      ],
    }),
  ],
});
