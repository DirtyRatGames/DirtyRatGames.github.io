This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment on GitHub Pages

This project was set up using [this Next.js/GitHub Pages tutorial](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/).
GitHub Actions handles deployment through two actions:

### Publish

1. This action is executed when code is pushed or merged into the main branch.
2. It uses the setup-node action to set up the environment.
3. The action has two stages: in the first stage, the Next.js app is bundled. In the second stage, we upload the artifacts from the first stage to GitHub Pages.

### Setup-node

1. It declares a composite action. The composite action allows you to bundle multiple workflow steps into a single action, combining multiple run commands into a single reusable action.
2. It creates a new build environment and sets up Node.js 20 there.
3. It installs npm dependencies and uses a caching mechanism to speed up this process.

The workflow runs automatically when changes are pushed to the main branch. You can see the deployment status and workflow details in the "Actions" tab of the repository.
