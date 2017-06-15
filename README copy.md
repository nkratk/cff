# Introduction

User Interface for Clean Fast Friendly (CFF) initiative.

# Setup

1. Install all dependencies`npm install`

2. To run in dev mode `npm run start-dev-server`. Access app via localhost:8080

    Note :

      1. In Dev mode, the bundles are virtual loaded into memory. (Physical files are not generated in the disk)

      2. Live reload is enabled using Webpack's hot reload module.

      3. Enabling source-map for debug

3. To run unit tests `npm test`. Code coverage and test cases report will be available in */test-reports*.

4. For production build `npm run build`. Prod build will be available in */dist*.

      Note : Minified bundles are created on disk with all optimizations.
5. To add precommit hook (it doesn't allow us to commit un linted files and it try to fix basic eslint errors using --fix option).
    1. copy the code in precommit.txt
    2. remove the file extension .git/hooks/pre-commit.sample (rename it to pre-commit or remove .sample)
    2. paste the copied code in .git/hooks/pre-commit
