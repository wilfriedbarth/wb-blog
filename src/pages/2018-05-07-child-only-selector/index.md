---
title: "CSS :only-child Selector"
description: "TIL how to use CSS :only-child selector"
date: "2018-05-07"
---

Today I learned how useful the `:only-child` selector is when applying
border radius to a list of items. Let's say you have a dynamic list of
items where you want to apply only a border radius to the top of the
first item and the bottom of the last item in the list. It would look
something like this:

#### HTML
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS
```css
li {
  background-color: purple;
  margin-bottom: 2px;
}

li:first-child {
  border-radius: 5px 5px 0 0;
}

li:last-child {
  border-radius: 0 0 5px 5px;
}
```

But what happens if there is only one item in the list? In
that case, we'd want there to be border-radius on every corner.
How are we going to do that? Use the `:only-child` selector!
As you might imagine, this selector only applies when there is a single
child. So in that scenario, we'd have:

#### HTML
```html
<ul>
  <li>Item 1</li>
</ul>
```

#### CSS
```css
li {
  background-color: purple;
  margin-bottom: 2px;
}

li:first-child {
  border-radius: 5px 5px 0 0;
}

li:last-child {
  border-radius: 0 0 5px 5px;
}

li:only-child {
  border-radius: 5px;
}
```

And that's it! With the `:first-child`, `:last-child`, and
`:only-child`, we can apply border radius to a dynamic list of items.
