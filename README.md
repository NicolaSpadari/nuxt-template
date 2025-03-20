<h1 align="center">Personal Nuxt 3 template</h1>
<hr />

## Usage

Clone to local:
```sh
$ npx degit NicolaSpadari/nuxt-template my-nuxt-app
```

Install dependencies:
```sh
$ ni # or pnpm install
```

Run project:
```sh
$ nr dev # or pnpm run dev
```

## Usage with Docker

Build container:
```sh
docker build -t my-nuxt-app .
```

Run static generated project:
```
docker run -it -p 3000:80 --name my-nuxt-app --rm --init my-nuxt-app
```