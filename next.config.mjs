import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoSlug = "VBI-Revamp";
const repoName = "VBI Revamp";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoSlug}` : "";

const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_REPO_NAME: repoName,
    NEXT_PUBLIC_REPO_SLUG: repoSlug,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
