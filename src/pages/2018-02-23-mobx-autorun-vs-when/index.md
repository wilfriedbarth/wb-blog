---
title: "MobX: Autorun Vs. When"
description: "Learn the differences between autorun
  and when. Learn to use each the right way."
date: "2018-02-23"
---

In MobX, `autorun` is the defacto standard for initiating effects.
`Autorun` is a reactive function that will immediately fire once
and then again any time data it observes changes. `Autorun` also
returns a `disposer` function that be used to dispose `autorun`,
thereby cancelling all future reactions to the data that was being
observed. A good example use case would be for logging (see below).

But if you want to initiate one-time effects, `autorun` is the
wrong choice. For example, a typical one-time effect is initializing
some temporary view state in a React component (a form for example).
`Autorun` is ill suited for this use case because it could reinitialize
the view state multiple times. This could lead to bugs and is not
performant.

Its lesser known cousin `when` is perfect for this role. Unlike `autorun`,
`when` takes two functions, a `predicate` function and an `effect` function.
`When` waits for the `predicate` function to return true. Once that happens,
the `effect` function is run, and unlike `autorun`, `when` is immediately
disposed after the `effect` function runs once. See below for an example of
how when is used to initialize some view state in a React component.

To summarize, use `autorun` for **recurring** effects and `when` for
**one-time** effects.

