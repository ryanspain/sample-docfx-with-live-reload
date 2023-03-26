# Sample docfx with live reload

A sample `docfx` static site with live reload. The live reload works by using `nodemon` to monitor the `/docs` directory for changes, building the site to the `/dist` directory as needed. The `/dist` directory is continuously served locally using `browser-sync`.

- All `nodemon` and `browser-sync` configuration is handled in the `package.json` file.
- The `npm-run-all` module is used to run `nodemon` and `browser-sync` simultaneously.
- The `docfx-companion-tools` by [Ellerbach](https://github.com/Ellerbach) were used to generate the table of contents file(s).

## Pre-requisites

- .NET SDK (6.x+)
- NodeJS (16.x.x+)

## Getting started

| Task     | Using the terminal | Using VS Code       |
| ---------| ------------------ | ------------------- |
| Setup    | `npm run setup`    | Run Task: `Setup`   |
| Preview  | `npm run preview`  | Run Task: `Preview` |
| Build    | `npm run build`    | Run Task: `Build`   |

## Credits

- [`nodemon`](https://github.com/remy/nodemon) by [remy](https://github.com/remy).
- [`browser-sync`](https://github.com/BrowserSync/browser-sync) by [Browsersync](https://github.com/BrowserSync).
- [`npm-run-all`](https://github.com/mysticatea/npm-run-all) by [mysticatea](https://github.com/mysticatea).
- [`docfx`](https://github.com/dotnet/docfx) by [Microsoft](https://github.com/microsoft).
