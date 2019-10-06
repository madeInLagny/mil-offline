# \<mil-offline\>

'mil-offline' is javascript mixin that handles offline states.
It exposes a \_offline boolean property that provides offline state.

## Usage

### Install from npm

```sh
npm install --save mil-offline
```

### Import to your webcomponent

```js
import "mil-offline";
```

### Extend your class

```js
class yourClass extends offlineMixin(LitElement) {}
```

### Observe \_offline values.

```js
updated(changedProperties) {
    if (changedProperties.has("_offline")) {
     /* do something */
    }
  }
```
