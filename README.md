# Krishna Chaitanya Portfolio — V2

## Open it
Open `index.html` in VS Code with Live Server.

## Add a NEW PROJECT
You do NOT need to edit `index.html` or `style.css`.

1. Add your project screenshot to the `projects` folder.
2. Open `script.js`.
3. Find `const projects = [`.
4. Add:
```js
{
  title: "My New Project",
  category: "DATA SCIENCE",
  description: "Short explanation of what I built.",
  technologies: ["Python", "Pandas", "SQL"],
  image: "projects/my-project.png",
  github: "https://github.com/yourusername/project",
  demo: "https://your-demo-link.com"
}
```
5. Save and refresh.

If you do not have GitHub/demo links yet, use `"#"`.

## Add a NEW CERTIFICATE
1. Put the certificate image in `certificates/`.
2. Open `script.js`.
3. Find `const certificates = [`.
4. Add:
```js
{
  title: "Certificate Name",
  issuer: "Organization",
  date: "2026",
  image: "certificates/my-certificate.png",
  link: "https://credential-link.com"
}
```

## Add your resume
Put your PDF here:
`assets/resume.pdf`

## Add LinkedIn and LeetCode
At the top of `script.js`, replace:
```js
linkedin: "#",
leetcode: "#"
```
with your real profile URLs.

## Deploy
This is a static website. It can be deployed on Netlify or Vercel without a backend.


## Important
The ZIP includes temporary SVG previews so the project and certificate cards work immediately.
Replace them with your real screenshots/certificate images whenever you have them, then update the filename in `script.js`.
