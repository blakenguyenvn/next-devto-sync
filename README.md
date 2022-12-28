This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Build Project Under Production mode

First, run build under production mode:

```bash
yarn build
```

All JavaScript code inside .next has been compiled and browser bundles have been minified to help achieve the best performance and support all modern browsers.

Then, we can start a server with the built codes by command:
```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment
The full documentation: https://nextjs.org/docs/deployment

Summary, we can deploy by many ways: 
- Self-Hosting: https://nextjs.org/docs/deployment#self-hosting

- Vercel: https://nextjs.org/docs/deployment#managed-nextjs-with-vercel

- Managed Server (AWS Copilot, Heroku, ...):
https://nextjs.org/docs/deployment#managed-server

- Static Only:
https://nextjs.org/docs/deployment#static-only

- Serverless (AWS Serverless, Azure Static Web Apps):
https://nextjs.org/docs/deployment#static-only