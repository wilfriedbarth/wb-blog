---
title: "Shallow Clone JS Array with Slice"
description: "TIL how to use slice to shallow clone a JS Array"
keywords: ["JS", "Javascript", "Array", "Shallow", "Clone", "Slice"]
date: "2019-02-07"
---

Today I ran into a bug where I was unintentionally mutating an array
because I was passing it by reference in multiple places in my code.
I realized that I was looking for a way to clone an array and pass it
off to another function to avoid this mutation.

To my delight, I discovered a nifty way to clone an array. Use `slice`!

#### Using slice to clone an array
```javascript
const arr = [{ firstName: 'Willie', lastName: 'Barth' }];
const clonedArr = arr.slice(0);

clonedArr.push({ firstName: 'Napolean', lastName: 'Bonaparte' });

console.log(arr);
// returns [{ firstName: 'Willie', lastName: 'Barth' }]

console.log(clonedArr);
// returns [{ firstName: 'Willie', lastName: 'Barth'}, { firstName: 'Napolean', lastName: 'Bonaparte' }]
```

Cool! Mutation of the cloned array is independent from the original array.

But there is a caveat! This is only a shallow clone of the array. Thus if your array contains elements
that aren't primitives, the cloned array will only copy the references to those objects. Let's continue
with the prior example and see what happens if I modify one of the objects in the original array.

#### A sliced array is only a shallow clone

```javascript

arr[0].firstName = 'Genghis';
arr[0].lastName = 'Khan';

console.log(arr);
// returns [{ firstName: 'Genghis', lastName: 'Khan' }]

console.log(clonedArr);
// returns [{ firstName: 'Genghis', lastName: 'Khan' }, { firstName: 'Napolean', lastName: 'Bonaparte' }]
```

Bummer. Mutation of the first object occurred in both arrays.

But `slice` works for a lot of use cases where you are not modifying the items of an array
(sorting, filtering, pagination, etc). `slice` fit my use case perfectly!

### TLDR

Use `slice` to shallow clone an array. Reach for Lodash's `cloneDeep` when you need a deep clone of an array.
