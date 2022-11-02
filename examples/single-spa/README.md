# Micro-frontends with: single-spa

## Description

This project is separated in 3 layers:

- 1 - Wrapper

  > Represents the entry application, used to wrap and run all micro-applications

- 2 - Navbar

  > This is a simple navbar

- 3 - Dashboard (TO-DO)

## Run

First you need run:

```bash
$ npm install # to install concurrently dependency
$ npm run install # this run "npm install" in all other projects
```

And to start:

```bash
$ npm start
```

Now, you can access:

- [localhost:9000 (wrapper)](http://localhost:9000)
- [localhost:9001 (navbar)](http://localhost:9001)
