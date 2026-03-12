import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const isGitHubPages = env.GITHUB_ACTIONS === "true";
  const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1];
  const isUserSite = Boolean(
    repositoryName &&
    repositoryName.slice(repositoryName.length - ".github.io".length) === ".github.io"
  );
  const base = isGitHubPages
    ? isUserSite || !repositoryName
      ? "/"
      : `/${repositoryName}/`
    : "/";

  return {
    plugins: [react()],
    base,
    server: {
      host: "0.0.0.0",
      port: 4322
    }
  };
});
