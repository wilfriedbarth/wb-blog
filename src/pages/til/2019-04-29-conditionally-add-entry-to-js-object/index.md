---
title: "Conditionally Add Entry To JS Object"
description: "TIL about some more spread operator goodness"
keywords: ["JS", "Javascript", "Spread", "Operator"]
date: "2019-04-29"
---

Today I ran into a problem I've come across several times: "How can I conditionally add an entry to
a Javascript object?". Normally, I've relied on an approach using conditional statements to decide
when to add an entry coupled with mutation of the original object to actually add the entry.

#### Using conditional statement + mutation
```javascript
const coordinates = { x: 1, y: 1 };
const type = '3d';

if (type === '3d') {
  coordinates.z = 1;
}

console.log(coordinates); // { x: 1, y: 1, z: 1 }
```

However, I find that quite yucky. But little did I know, there is a way to do
this cleanly with the spread operator!

#### Using && short-circuit evaluation + spread operator

```javascript
const type = '3d';

const coordinates = {
  x: 1,
  y: 1,
  ...(type === '3d' && { z: 1 }),
};

console.log(coordinates); // { x: 1, y: 1, z: 1 }
```

Nice!
