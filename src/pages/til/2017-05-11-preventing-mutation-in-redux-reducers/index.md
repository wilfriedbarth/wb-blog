---
title: "Preventing Mutation in Redux Reducers"
description: "TIL how to prevent state mutations in redux reducers"
date: "2017-05-11"
---

The other day I was working on a React/Redux project when I discovered that
one of my reducers was mutating the previous state (BAD). Turns out it was
due to my usage of `Object.assign()`, which only performs a shallow
clone of an object, not a deep clone. In this post, I will present the
problem I discovered with `Object.assign()` and some solutions to the problem.

### Why Object.assign() Is Cool

ES6 added a really nice method `Object.assign()` that will enumerate over all
properties of the given source objects, copy them all to the target object,
and return the target object.

#### object-assign-succeeds.js
```javascript
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { c: 4, d: 5, e: 6 };

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 2, c: 4, d: 5, e: 6 };
```

Here, all properties from `obj1` and `obj2` are copied to the target empty object.
In addition, since `obj1` and `obj2` both share property `c`, `c` will take the value
of the last object with that given property (`obj2`). In other words, in the
case of property collisions between objects, objects that are enumerated later
rather than earlier are the source of truth for the final target object.

In the context of a Redux reducer, I often find myself applying `Object.assign()`
to create the new state that the reducer will return.

#### reducer-succeeds.js
```javascript
import { ACTION1 } from '../actions/action-types.js';

let initialState = { a: 1, b: 2, c: 3 };

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION1:
      // action.payload is { c: 4 }
      return Object.assign({}, state, action.payload); // { a: 1, b: 2, c: 4 }
      break;
    default
      return state;
  }
}
```

In this example, assuming the state is `initialState`, in the case of `ACTION1`,
the new state will be returned by copying the properties over from the old
state (`a`, `b`, `c`) and changing the property `c`.

### When Object.assign() Fails

However, there is a gotcha with `Object.assign()`. Let's say your object or state
is more complex and you have a couple properties referencing other objects.
(This example is lifted from the `Object.assign()` reference page on
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
I found it very helpful in understanding Object.assign() better).

#### object-assign-fails.js
```javascript
let obj1 = { a: 0, b: { c: 0 }};
let obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 }}

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 }};
console.log(obj2); // { a: 0, b: { c: 0 }};
obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 }};
console.log(obj2); // { a: 2, b: { c: 0 }};

// Nothing surprising...

obj1.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 }};
console.log(obj2); // { a: 2, b: { c: 3 }};

// Oh snap! Property c changed on both objects.
```

The problem here is that when `Object.assign()` creates `obj2`, only
a reference to the object assigned to `b` is copied. Therefore,
regardless of whether I make changes to the property `c` from `obj1` or `obj2`,
both these changes affect the same object in memory.

#### reducer-fails.js
```javascript
import { ACTION1 } from '../actions/action-types.js';

let initialState = { a: 1, b: 2, c: [1, 2, 3] };

export default function(state = initialState, action) {
  switch(action.type) {
    case ACTION1:
      // action.payload is 4
      let newState = Object.assign({}, state);
      newState.c[2] = action.payload;
      return newState; // { a: 1, b: 2, c: [1, 2, 4] }
      break;
    default
      return state;
  }
  // But did it mutate the state (specifically the array)? YEP...
  console.log(state) // { a: 1, b: 2, c: [1, 2, 4] }
}
```

However, when I encountered this problem with `Object.assign()`,
it was a little subtle. In Javascript, arrays are a special type of
object. So likewise, in this example, property `c` is referencing an
array.

I erroneously thought that by using `Object.assign()` I had created a deep
clone of the object, which I could then mold into the new
state without affecting the prior state. However, in changing an element
in the array, I also changed the same element in the array of prior state.

Notice that had I provided a new array with the change already implemented
to `Object.assign()` (e.g. `action.payload` equaled `{ c: [1, 2, 4] }` and I returned
`Object.assign({}, state, action.payload)`), I would not run into this problem
because I had overwritten property `c` with a new array in the creation of
my new object.

As a rule, if the payload of my action will alter
certain properties of the state and the state is not too complex,
I will use `Object.assign()` to return a new object with those properties
overwritten with the payload of my action. I refer to this as *front-loading*
changes before the new object is created.

### Alternative Solutions to Object.assign()

However, in cases where `Object.assign()` fails (deeply nested objects), we need
to either (1) flatten our object so `Object.assign()` can be used or (2) deeply
clone the object. Assuming we choose option 2, I will offer two possible
solutions.

One naive solution is to use `JSON.parse` and `JSON.stringify` to deeply clone the object.
Note this only works if your objects do not have any functions.

#### json-deep-clone.js
```javascript
let obj1 = { a: 0, b: { c: 0 }};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.a = 1
obj2.b.c = 1;
console.log(obj1); // { a: 0, b: { c: 0 }};
console.log(obj2); // { a: 1, b: { c: 1 }};
```

Or one could use a utility library like lodash to deeply clone the object. This
is the method I prefer.

#### lodash-deep-clone.js
```javascript
let obj1 = { a: 0, b: { c: 0 }};
let obj2 = _.cloneDeep(obj1);
obj2.a = 1
obj2.b.c = 1;
console.log(obj1); // { a: 0, b: { c: 0 }};
console.log(obj2); // { a: 1, b: { c: 1 }};
```

Regardless of which method you choose (JSON or lodash), the object is cloned
first before changes are implemented. I refer to this as *back-loading*
changes after the new object is created.

### Summary

To summarize, with Redux reducers, make sure you decouple your new state from
your old state. To avoid mutations, there should not be any references between
your new state and old state.

Whether you choose to *front-load* state changes via Object.assign() or *back-load*
state changes via deep cloning is a personal choice. I usually choose the method
most appropriate to the situation (`Object.assign()` for simple objects, deep
cloning for nested objects).

When in doubt, test your reducers for mutation! Make sure you don't misuse
`Object.assign()`!
