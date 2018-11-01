---
title: "Learning Clojure in 2019"
description: "Why I think learning Clojure is worth my time (and maybe yours too!)."
date: "2018-12-23"
---

In 2019, for fun I've decided to learn Clojure as my first functional programming language.
"Why Clojure?" you may ask.

### Reason #1: History of Lisp

Part of why I'm interested in Clojure is the history of Lisp. Clojure
is a Lisp dialect. For those who don't know, Lisp is the second oldest programming language, imagined
by John McCarthy and implemented by Steve Russell in the 1950s and 1960s. It was the first to implement
a lot of the modern foundations of computer science (recursion, conditionals, higher-order functions,
the read-eval-print loop (REPL), and much more). It was also closely connected to birth of the artificial
intelligence movement of the 1950s and 1960s. Alas, Lisp died commercially along with the onset of the
"AI winter" of the 1970s and 1980s. But it has survived in the background in various forms (Scheme,
Common Lisp, Racket, and now Clojure).[^1]

With Clojure, Lisp has enjoyed a bit of a resurgence. Clojure preserves many of Lisp's strengths (Lisp
code-as-data + macro philosophy), while adding new ones (greater emphasis on immutability / laziness /
functional programming, multi-platform support (Java/JVM interop with Clojure, JavaScript interop with
ClojureScript)). Clojure as a result is powerful, while being practical and pragmatic.[^2]

### Reason #2: I'm not a huge fan of Scala

I'm currently programming in Scala at work. Although there are some idioms I do like (pattern matching,
futures, and options), there are some things I do not like:

1) Too much syntax sugar. There are like 10 different ways to write a line of code that are all
functionally equivalent.
2) Flexibility. I can write object-oriented code in Scala. I can write functional code in
Scala. I can mix the two, with potentially disastrous results. While some may appreciate flexibility,
I believe it is a double-edged sword. With flexibility, software developers have so many opinions on
what "idiomatic" Scala code is. Not a fan. I prefer opinionated languages where there is set of
conventions that the community adopts.
3) Slow compile times. I hate waiting a minute for the project to compile after I have made a code
change.

With Clojure, the community strives for simplicity, consistency, and clarity. With the Clojure REPL
and the ability to interact with live programs, experimentation is encouraged. I think I will grow
to appreciate these aspects of Clojure.

### Reason #3: I've heard good things about it

I have several programmer friends who use Clojure and love it. Why not give it a shot! Clojure seems
like a fun language for hobby / side projects. I'm also contemplating learning some machine learning.
Clojure + machine learning? Could be fun!

### TLDR

Want to learn Clojure with me? I will be posting more about Clojure in the coming year, so stay tuned!


[^1]: If you'd like to learn more about Lisp, I highly suggest reading Paul Graham's essays and
  books on Lisp (["Beating The Averages"](http://paulgraham.com/avg.html),
  ["What Made Lisp Different"](http://www.paulgraham.com/diff.html), and
  ["On Lisp"](http://www.paulgraham.com/onlisptext.html)).

[^2]: If you'd like to learn more about Clojure, I highly recommend listening to
  [Rich Hickey's talks](https://www.youtube.com/results?search_query=rich+hickey+talks).
