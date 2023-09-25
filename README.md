# eslint-plugin-handmade

Shared eslint config for [Handmade Systems](https://handmade-systems.de/)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-handmade`:

```sh
npm install eslint-plugin-handmade --save-dev
```

## Usage

Add `handmade` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "handmade"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "handmade/rule-name": 2
    }
}
```
