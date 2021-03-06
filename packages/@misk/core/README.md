## Misk Core

![](https://raw.githubusercontent.com/cashapp/misk/master/misk.png)
This package provides shared, styled React components, Redux helper functions, and Typescript utilities across Misk tab repos. The top of each component/container file contains a usage example.

## Getting Started

```bash
$ yarn add @misk/core
```

## Builders

- `createApp(routes)`: builder function to create an `<App history={history}/>` component
- `createIndex(tabSlug, App, Ducks)`: builder function to create bootstrapping objects necessary for `index.tsx`

## Components

- `ErrorCalloutComponent`: Processes a Redux / Axios error and dumps raw JSON for debugging
- `OfflineComponent`: NonIdealState component for Offline or Loading tab state
- `PathDebugComponent`: outputs values passed in by props for `hash`, `pathname`, and `search` in React-Router instance
- `SidebarComponent`: dashboard styled sidebar

## Containers

- `CodePreContainer`: Word wrap enabled BlueprintJS `<Pre>` block for displaying formatted content (ie. JSON, logs...)
- `ColumnContainer`: Column container for use inside of a `<FlexContainer>`
- `DesktopWideOnlyContainer`: Only shows container when window width >1200px
- `FlexContainer`: Container using CSS FlexBox to have enclosed items flow responsively to screen width
- `MobileNeverContainer`: Never show container when window width <768px
- `MobileOnlyContainer`: Only show container when window width <768px
- `ResponsiveContainer`: Responsive container that all tabs and Nav Navbar use to ensure consistent view width
- `ResponsiveContainer`: Extension of `ResponsiveContainer` that moves the App view below the Navbar
- `WrapTextContainer`: Word wrap enabled `<span>` block

## Features

- `Navbar`: Related and themeable components to a dashboard styled Navbar
- `Table`: Basic table that parses heading keys from the array of objects passed in as data props

## Utilities

- `environment`: various utilities helpful in environment (color, default visibilities...)
- `network`: wrapped functions around Axios requests to allow simplified syntax that with `async await` returns an object of `{ data, error }`.
- `theme`: definition and default theme used to style Navbar.

## [Releasing](https://github.com/cashapp/misk-web/blob/master/RELEASING.md)

## [Changelog (and Breaking Changes)](https://github.com/cashapp/misk-web/blob/master/CHANGELOG.md)
