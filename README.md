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


Then configure the rules you want to use under the extends section.
if you have a react app, use both: base and react

```json
{
    "extends": [
      "plugin:@handmade-systems/base",
      "plugin:@handmade-systems/react",
      "plugin:@handmade-systems/next"
    ]
}
```
