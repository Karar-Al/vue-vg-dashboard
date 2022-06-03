# Vue VG Dashboard

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Min deploy till GH Pages [via tutorial](https://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html)

```sh
npm run build
cd dist
git add --all
git commit -m "Deploy updates"
git push origin gh-pages
```

#### Optional städning (Behövs ej köras)

```sh
git worktree remove dist
```
