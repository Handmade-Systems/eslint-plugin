# eslint-plugin-handmade

Shared eslint config for [Handmade Systems](https://handmade-systems.de/)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@handmade-systems/eslint-plugin`:

```sh
npm install @handmade-systems/eslint-plugin --save-dev
```

## Usage

Add `@handmade-systems` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@handmade-systems"
    ]
}
```

For a nextjs app use following config:

```json
{
    "extends": [
      "plugin:@handmade-systems/base",
      "plugin:@handmade-systems/react",
      "plugin:@handmade-systems/next"
    ]
}
```

For a react app use following config:

```json
{
    "extends": [
      "plugin:@handmade-systems/base",
      "plugin:@handmade-systems/react"
    ]
}
```

For a node app use following config:

```json
{
    "extends": [
      "plugin:@handmade-systems/base"
    ]
}
```

If you use tailwind use additional config:

```json
{
    "extends": [
      "plugin:@handmade-systems/tailwind"
    ]
}
```

If you use storybook use additional config:

```json
{
    "extends": [
      "plugin:@handmade-systems/storybook"
    ]
}
```

If you playwright use additional config:

```json
{
    "extends": [
      "plugin:@handmade-systems/playwright"
    ]
}
```