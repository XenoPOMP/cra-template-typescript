# Setup WebStorm project

## Table of contents
1. [Dev libraries]()
   * [Prettier]()
   * [ESLint]()

2. [YARN]()

3. [IDE]()
   * [WebStorm]()
   * [VS Code]()

<hr/>

### Developer libraries
These libraries are designed to improve the quality of your code, increase the comfort of development.

#### Prettier
``Prettier`` makes your code looks _prettier_. Setup ``Prettier`` by changing ``package.json`` file. \
Here`s my personal setup.

```json
{
   "prettier": {
      "trailingComma": "all",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "jsxSingleQuote": true
   }
}
```

* ``trailingComma`` - put trailing comma in all places where appropriate ("all", "es5" or "none").
* ``tabWidth`` - setup tab width.
* ``semi`` - put semicolon in end of each line or not (true / false);
* ``singleQuote`` - determines whether to use single quotes or not
* ``jsxSingleQuote`` - determines whether to use single quotes inside jsx components or not

#### ESLint
``ESLint`` is a library for code quality control. To configure it, change the following lines ``.eslintrc file.json``:

```json
{
   "rules": {
      "semi": "off",
      "quotes": ["error", "double"]
   }
}
```

<hr/>