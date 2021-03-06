## Misk CLI

![](https://raw.githubusercontent.com/cashapp/misk/master/misk.png)
This package provides the Misk CLI tool that generates build files for Misk Tabs.

## Getting Started

```bash
$ npm install -g @misk/cli
```

## Commands

```Bash
Misk Web CLI Usage: $ miskweb <command> <required arg> [optional arg] [options]

Commands:
  miskweb auto-pin [filename]         auto-pin searches upstream for a
                                      [filename] (default:
                                      master-dependencies.json) and uses the
                                      pinned version in key `miskWebNPM` for all
                                      tab Misk Web dependencies

  miskweb build                       run a fast Webpack development build

  miskweb ci-build                    npm install, then Webpack production
                                      build, tests

  miskweb clean                       remove lib directory and other temporary
                                      files

  miskweb install                     install node_modules dependencies

  miskweb lint                        use prettier to lint all files

  miskweb misk                        generate multibindings to configure tab
                                      with a Misk service

  miskweb new <titleCase> <slugCase>  create a new tab in the current directory
                                      <titleCase> title space case name of new
                                      tab, surround with quotes (ex. "Alpha
                                      Bravo")
                                      <slugCase> slug case name of new tab,
                                      surround with quotes (ex. "alpha-bravo")

  miskweb path <URLpath>              set relative URL path where tab will be
                                      served in browser. Provides support for a
                                      non-Misk Admin Dashboard tab that is a
                                      dedicated Misk Web front end

  miskweb pin <pinnedVersion>         pin version for all tab Misk Web
                                      dependencies
                                      <pinnedVersion> a Misk Web release
                                      version. All Misk-Web dependencies in your
                                      tab will use this version in package.json

  miskweb prebuild                    use miskTab.json to generate build files

  miskweb start                       start Webpack Dev Server for live editing

  miskweb tabs                        prints path of all downstream tabs

  miskweb test-coverage               generate test coverage report

  miskweb test-update                 update test snapshots

  miskweb test                        run tests

  miskweb update                      update Misk Web CLI

  miskweb zip                         zip source code for tab


Options:
  -e, --each  run command in all subdirectories that have miskTab.json [boolean]
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
```

## [Releasing](https://github.com/cashapp/misk-web/blob/master/RELEASING.md)

## [Changelog (and Breaking Changes)](https://github.com/cashapp/misk-web/blob/master/CHANGELOG.md)
