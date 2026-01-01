akc

Deployment
 - **Option A (GitHub Actions)**: Push to `main` and the included workflow will build and publish `dist/` to the `gh-pages` branch.
 - **Option B (npm + gh-pages)**: Run `npm run deploy` (adds `gh-pages` devDependency). This runs `npm run build` then publishes `dist/` to the `gh-pages` branch.

Vite base configuration
 - The Vite config sets a `base` automatically: in CI it defaults to relative paths (`./`) so assets load correctly on GitHub Pages. If you prefer an absolute path, set the `GH_PAGES_BASE` environment variable to `/<your-repo-name>/`.

Notes
 - If your GitHub default branch is not `main`, update `.github/workflows/gh-pages.yml` accordingly.
 - For a user/organization site (`username.github.io`) you can set `GH_PAGES_BASE` to `/` or leave it unset and the action will work with relative assets.
