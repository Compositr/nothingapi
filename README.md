# Nothing API Wrapper
JavaScript Wrapper for the [Nothing API](https://nothingapi.crypticcode.org/docs#/)

# Requirements
- NodeJS **17.5.0** or higher

# Features
- ⬇️ Tiny: Only 24 TypeScript lines (Less than 8kb unzipped)
- 📦 Dependency Free: Using only `fetch()`, which is built into NodeJS (since v17.5)
- 🎖️ Free License: MIT licensed

# Quick Start
This library only exports a single function as a default: `getUser`. You may name this import anything you wish.

## ESM:
```js
import getNothingUser from "nothingapi"

(async () => {
  const user = await getNothingUser("863298292804485141")
  console.log(user)
  /**
   * Object:
   * {
   *   userId: "863298292804485141"
   *   balance: 101
   * }
   */
})()
```

## CJS:
```js
const getNothingUser = require("nothingapi")

(async () => {
  const user = await getNothingUser("863298292804485141")
  console.log(user)
  /**
   * Object:
   * {
   *   userId: "863298292804485141"
   *   balance: 101
   * }
   */
})()
```

