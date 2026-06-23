# Target Test Blog

A simple, dependency-free **static blog website** that can be deployed directly from GitHub.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Blog list / home page with a grid of dummy posts |
| `post.html` | Post details page (reads `?id=N` and renders content from `js/posts.js`) |
| `contact.html` | Contact Us page with a demo form |
| `new-post.html` | Editor page to draft a new blog post with live preview |
| `css/style.css` | All styling |
| `js/posts.js` | Dummy post data + post-page rendering |

## Run locally

It's plain HTML/CSS/JS — just open `index.html` in a browser, or serve it:

```bash
cd mahesh-target-test
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy from GitHub (GitHub Pages)

This repo includes a workflow at `.github/workflows/deploy.yml` that deploys automatically.

1. Create a new GitHub repository and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The site publishes to
   `https://<your-username>.github.io/<repo-name>/`.

> The `.nojekyll` file disables Jekyll processing so all files are served as-is.

### Alternative: deploy without the workflow
In **Settings → Pages**, pick **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.

## Notes
- The contact form and the new-post editor are front-end demos only — no data is sent or stored.
  Wire them to a service (Formspree, Netlify Forms, a serverless function, or a CMS) to make them live.
