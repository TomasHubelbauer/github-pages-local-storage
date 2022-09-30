# GitHub Pages `localStorage`

This repository hosts a ES module library which patches the `localStorage`
window object in the browser and prefixes all keys used with `setItem`,
`getItem` and `removeItem` with the value of `location.pathname`.

This makes it possible to use `localStorage` in apps hosted on GitHub Pages and
coming from the same account without worrying about these apps all sharing the
same origin and thus the same storage.

See more on https://tomashubelbauer.github.io/github-pages-local-storage.

## Usage

```javascript
import 'https://tomashubelbauer.github.io/github-pages-local-storage/index.js';

// Use `localStorage` as you normally would now
```

Note that the `index.js` cannot be referenced directly based on the GitHub URLs
you see in the browser for normal or even raw mode, because those pages are not
served with the `text/javascript` MIME type required for ESM.

## To-Do

### Patch `key`, `length`, `clear` etc.

I have not patched these because I don't need them now, but I might do it later.
