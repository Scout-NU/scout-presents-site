# Scout Presents

This site was created using [Gatsby](https://www.gatsbyjs.org/docs/), a React-based static-site generator and the [Prismic CMS](https://prismic.io/). To see other project dependencies, check out the project's `package.json` file.

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:Scout-NU/scout-presents-site.git
```

2. Change directories:

```bash
cd scout-presents-site
```

3. Set up environment variables

In the project directory is a file called `.env.sample`. This holds all of the necessary environment variables to create this project, including the Prismic access token.

Copy the file and add the values to the variables.

```bash
cp .env.sample .env.development
```

```sh
# In .env
GATSBY_PRISMIC_REPO_NAME=XXXXXXXXXXXXXX
PRISMIC_ACCESS_TOKEN=XXXXXXXXXXXXXX
PRISMIC_CUSTOM_TYPES_API_TOKEN=XXXXXXXXXXXXXX
```

4. Install the npm modules

```bash
# Inside the project directory
npm install
```

Run the server

```bash
npm start
```

It will likely start on http://localhost:8000. When you make changes, the site will auto-refresh and display your changes.

### Updating the CMS

Thanks to Gatsby's intense caching, when updating any data in the Prismic CMS interface, you must do two things for the updated content to show up in your GraphQL queries:

1. **Publish the document on Prismic!** This won't affect any current builds of the marketing site, as all of the data is queried and cached on build of the site.

2. **Restart the development server!** Gatsby only grabs data from Prismic on build, so the server must be restarted to grab the new data.

### Deploying to Netlify

To update the site, it needs to be deployed to Netlify. This can happen in a number of ways:

**Manual Deploy** The Tech Director goes into Netlify and manually creates a new deploy.

**Create a release in Prismic** Using the magic of webhooks, the site will automatically be deployed in Netlify whenever a new release is published in Prismic.

**Merging a Pull Request** Whenever a PR is merged into the master branch, Netlify will automatically deploy to keep the site up-to-date. Note: Upon creating and updating any PR, a `deploy preview` can be accessed from the bottom of the page - this doesn't affect the live site, but is very helpful to view and share code changes in production.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .env.sample
    ├── gatsby-config.js
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.env.sample`**: This file holds all of the necessary environment variables to create this project.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how yarn knows which packages to install for your project.

7.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

## Developers

This repository was built by the Scout Presents Studio team at [Scout](https://scout.camd.northeastern.edu/).

**MacKenzie Kerwin**<br />
Tech Lead<br />
kerwin.m@northeastern.edu

**Gabrielle Bruck**<br />
Developer<br />
bruck.g@northeastern.edu
