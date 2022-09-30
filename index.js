// Note that just `localStore.method = something` won't rewrite the method,
// `prototype` access is needed and in ES6 you access it through `constructor`

// Note that just `= (args) => {}` won't work due to `TypeError`:
// `$method called on an object that does not implement interface Storage`

const setItem = localStorage.setItem;
localStorage.constructor.prototype.setItem = (key, value) => setItem.apply(localStorage, [location.pathname + ':' + key, value])

const getItem = localStorage.getItem;
localStorage.constructor.prototype.getItem = (key) => getItem.apply(localStorage, [location.pathname + ':' + key]);

const removeItem = localStorage.removeItem;
localStorage.constructor.prototype.removeItem = (key) => removeItem.apply(localStorage, [location.pathname + ':' + key]);
