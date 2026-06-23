// Dummy blog post data shared by the post details page.
const POSTS = {
  1: {
    title: "Welcome to the Target Test Blog",
    tag: "Getting Started",
    author: "Jane Doe",
    date: "June 12, 2026",
    read: "4 min read",
    body: `
      <p>Welcome! This is the very first post on the Target Test Blog. The goal of this
      space is simple: share practical notes about building things for the web without
      overcomplicating the stack.</p>
      <h2>What to expect</h2>
      <p>Expect short, focused articles on HTML, CSS, deployment, performance, and the
      occasional opinion piece. Everything here is built as a plain static site — no heavy
      frameworks required.</p>
      <blockquote>Keep it simple. Ship it. Iterate.</blockquote>
      <p>Thanks for stopping by, and stay tuned for more.</p>
    `
  },
  2: {
    title: "Deploying a Static Site with GitHub Pages",
    tag: "Tutorial",
    author: "Sam Lee",
    date: "June 15, 2026",
    read: "7 min read",
    body: `
      <p>GitHub Pages is one of the easiest ways to host a static website for free,
      directly from a repository.</p>
      <h2>The basic steps</h2>
      <p>Push your HTML/CSS/JS to a repository, open the repository settings, enable Pages,
      and choose the branch to deploy from. Within a minute your site is live at a
      <code>github.io</code> URL.</p>
      <blockquote>No build server, no config files — just commit and push.</blockquote>
      <p>You can also wire up a GitHub Action to deploy automatically on every push, which
      is exactly what this project includes.</p>
    `
  },
  3: {
    title: "Designing Clean Card Layouts with CSS Grid",
    tag: "Design",
    author: "Priya N.",
    date: "June 18, 2026",
    read: "5 min read",
    body: `
      <p>CSS Grid makes responsive card layouts almost trivial. A single declaration handles
      wrapping, sizing, and spacing.</p>
      <h2>The one-liner</h2>
      <p>Using <code>grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))</code>
      lets cards flow into as many columns as fit, then wrap automatically on smaller screens.</p>
      <blockquote>Let the browser do the math.</blockquote>
      <p>Pair it with a consistent card component and you get a polished grid with almost no code.</p>
    `
  },
  4: {
    title: "Why Static Sites Are Making a Comeback",
    tag: "Opinion",
    author: "Alex Park",
    date: "June 20, 2026",
    read: "6 min read",
    body: `
      <p>For years the trend was toward heavier, more dynamic web apps. Lately the pendulum
      has swung back toward static.</p>
      <h2>The appeal</h2>
      <p>Static sites are fast, cheap to host, secure by default, and easy to reason about.
      For blogs, docs, and marketing pages, they are often the right tool.</p>
      <blockquote>The fastest server is the one you do not have to run.</blockquote>
      <p>Modern tooling makes static sites more capable than ever without sacrificing simplicity.</p>
    `
  },
  5: {
    title: "10 Tips to Make Your Website Load Faster",
    tag: "Performance",
    author: "Jane Doe",
    date: "June 22, 2026",
    read: "8 min read",
    body: `
      <p>Performance is a feature. Here are practical ways to make pages load quickly.</p>
      <h2>Quick wins</h2>
      <p>Compress images, minimize CSS and JS, use caching headers, defer non-critical
      scripts, and avoid unnecessary third-party requests.</p>
      <blockquote>Every kilobyte and every request has a cost.</blockquote>
      <p>Measure with the browser's built-in tools, fix the biggest offender, and repeat.</p>
    `
  },
  6: {
    title: "An Introduction to Accessible Web Forms",
    tag: "Accessibility",
    author: "Sam Lee",
    date: "June 23, 2026",
    read: "5 min read",
    body: `
      <p>Accessible forms are usable by everyone, including people relying on assistive
      technology.</p>
      <h2>The essentials</h2>
      <p>Always associate a <code>&lt;label&gt;</code> with its input, provide visible focus
      states, group related fields, and use clear error messages.</p>
      <blockquote>If it works with a keyboard and a screen reader, it works for more people.</blockquote>
      <p>Good accessibility usually improves the experience for everyone, not just some users.</p>
    `
  }
};

function getQueryId() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  return POSTS[id] ? id : 1;
}

document.addEventListener("DOMContentLoaded", function () {
  const id = getQueryId();
  const post = POSTS[id];
  document.title = post.title + " — Target Test Blog";
  document.getElementById("post-tag").textContent = post.tag;
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-meta").textContent =
    post.author + " · " + post.date + " · " + post.read;
  document.getElementById("post-body").innerHTML = post.body;
});
