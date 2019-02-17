---
title: "Neovim Tooling for Clojure"
description: "My current Neovim setup for editing Clojure"
keywords: ["Vim", "Neovim", "Clojure"]
date: "2019-02-03"
---

This past Saturday I devoted an afternoon to configuring my Neovim setup for Clojure. Here are the
tools that I selected:

### REPL Integration --> vim-fireplace

This plugin is a must. Besides adding [`vim-fireplace`](https://github.com/tpope/vim-fireplace) to
your `init.vim`, you'll also need to add [`cider-nrepl`](https://github.com/clojure-emacs/cider-nrepl)
to your `profiles.clj` in the `.lein` folder.

Fire up a repl in your project via `lein repl`. Open a file in that project with vim. Call a function
in that file within the REPL. Make a change to that function in the file and then call `:Require`. Call
that function again in the REPL.

If everything is working, calling `:Require` will hot reload the Clojure file you are editing into the
JVM. Any changes made to the function should then be reflected in the REPL.

Pretty cool :). This is by far the coolest feature of Clojure IMO. I love hot reloading when working
on client-side code (React). Having this feature server-side is a huge productivity boost. Can't wait
to experiment with it more.

I have experienced Neovim locking up with `vim-fireplace` sometimes b/c it doesn't make use of async
functionality. I may replace this with [`acid.nvim`](https://github.com/clojure-vim/acid.nvim) in the
future.

### Clojure Syntax Highlighting --> vim-clojure-static + vim-clojure-highlight

[`vim-clojure-static`](https://github.com/guns/vim-clojure-static) and
[`vim-clojure-highlight`](https://github.com/guns/vim-clojure-highlight) are pretty straightforward.
They add syntax highlighting for Clojure. You can tweak indentation and some other settings if you like.

### Clojure Editing --> vim-sexp + vim-sexp-mappings-for-regular-people

Editing Clojure code with so many parentheses is difficult without these plugins. Go grab them!

[`vim-sexp`](https://github.com/guns/vim-sexp) makes it easy to move parentheses around, thereby
pulling (slurping) or pushing (barfing) something out of an expression. It also allows one to select
and move expressions around more easily.

I also added [`vim-sexp-mappings-for-regular-people`](https://github.com/tpope/vim-sexp-mappings-for-regular-people),
which configures the hotkeys for `vim-sexp` to something more familar for vimmers.

### Clojure Formatting --> vim-cljfmt

[`vim-cljfmt`](https://github.com/venantius/vim-cljfmt) will format Clojure code whenever you save
the current file. This plugin also requires `vim-fireplace`, so don't forget to install that.

I've found this plugin extremely helpful, especially b/c formatting standards for clojure code are
way different from any other language I've coded in. Great way to start learning good formatting habits
from the get go.

### Clojure Linting --> ale + joker

I use [`ale`](https://github.com/w0rp/ale) for linting all my code in Neovim. `ale` provides linting
for Clojure by integrating with [`joker`](https://github.com/candid82/joker) (not a neovim plugin),
so be sure to install the appropriate version for your platform. You should see linting errors appear
in the gutter of your vim window.

---

Hope this was helpful for your Neovim configuration! I found this configuration great for just getting
up and running. Anticipate an update post on my perfected configuration in a couple months.
