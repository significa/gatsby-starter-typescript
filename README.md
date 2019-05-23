<p align="center">
  <a href="https://significa.pt">
    <img alt="{{= appName }}" src="https://avatars2.githubusercontent.com/u/21216358?s=200&v=4" width="60" />
  </a>
</p>
<h1 align="center">
{{= appName }}
</h1>

## Features

### Architecture

- [x] Typescript supports;
- [x] One config file for site-wide settings (`/content/site-config.js`);
- [x] React Context for global UI state, with SSR;
- [x] UI Folder with common components;
- [x] No index files: `Header/Header.tsx` and `Header/Header.css.ts`
- [x] Support alias and absolutes imports: `@` to access `./src`;

### SEO

- [x] SEO component: Social / meta tags;'
- [x] Generate sitemap automatically;
- [x] Generates all favicons for Web, Android, iOS,

### Style

- [x] [`styled-components`](https://www.styled-components.com/) v4
- [x] Reset.css;
- [x] Generated media queries for easy use;

### Quality code and others

- [x] Fomat Prettier by Lint stage (only update what is in HEAD);
- [x] [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [x] commitlint: Lint commit messages;
- [x] Eslint;
- [x] Run develop mode from Local LAN (0.0.0.0:8000);
- [x] Test support

## Run development mode

Start up the project

```sh
npm run develop
```

## Build

Make a new build to `/public` folder

```sh
npm run build
```

---

Built with [Gatsby](https://www.gatsbyjs.org/).

---

Based on [gatsby-universal](https://github.com/fabe/gatsby-universal) and [gatsby-starter-strict](https://github.com/kripod/gatsby-starter-strict)
