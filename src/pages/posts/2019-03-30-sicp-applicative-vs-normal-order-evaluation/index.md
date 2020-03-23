---
title: 'SICP - Applicative vs Normal Order Evaluation'
description: 'Learn the differences between applicative and normal order evaluation'
keywords:
  [
    'SICP',
    'Structure',
    'Interpretation',
    'Computer',
    'Programs',
    'Applicative',
    'Normal',
    'Order',
    'Evaluation',
  ]
date: '2019-03-30'
---

Continuing with SICP (sections 1.1.4 - 1.1.5), let's investigate the differences between applicative
and normal order evaluation.

### Defining functions in Scheme

Before we jump into applicative vs normal order evaluation, let's learn how to define functions in
Scheme. Functions are defined using the following syntax.

```scheme
(define (<name> <parameters>)
  <body>)
```

Let's take the examples from the book for defining the functions `square`, `sum-of-squares`, and `f`.

```scheme
(define (square x) (* x x))

(define (sum-of-squares x y)
  (+ (square x) (square y)))

(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))
```

All very straightforward. Now let's evaluate `(f 5)`. There are two main ways we could evaluate
`(f 5)`, either _applicative order evaluation_ or _normal order evaluation_. We will explore
applicative order evaluation first.

### Applicative Order Evaluation

Applicative order evaluation is described in SICP as the _evaluate the arguments and then apply_
method. As I understand it, we begin evaluation by substituting arguments and then _eagerly_
evaluate arguments before applying functions.

```scheme
(f 5); Substitute

(sum-of-squares (+ a 1) (* a 2)); Substitute

(sum-of-squares (+ 5 1) (* 5 2)); Evaluate

(sum-of-squares 6 10); Apply

(+ (square 6) (square 10)); Apply

(+ (* 6 6) (* 10 10)) ; Evaluate

(+ 36 100) ; Evaluate

136
```

The Scheme interpreter uses applicative order evaluation. However, it should be noted that the
_subtitution model_ for applicative order evaluation (what we used above) is an approximation of
the complex model that the interpreter actually uses to execute applicative order evaluation.

### Normal Order Evaluation

Normal order evaluation is described in SICP as the _fully expand and then reduce_ method. As I
understand it, we begin evaluation by substituting arguments and then fully expand functions before
_lazily_ evaluating arguments / reducing the functions.

```scheme
(f 5); Substitute

(sum-of-squares (+ a 1) (* a 2)); Substitute

(sum-of-squares (+ 5 1) (* 5 2)); Expand

(+ (square (+ 5 1) (square (* 5 2))); Expand

(+ (* (+ 5 1) (+ 5 1)) + (* (* 5 2) (* 5 2))); Reduce

(+ (* 6 6) (* 10 10)); Reduce

(+ 36 100); Reduce

136
```

The interpreter does not use normal order evaluation for a couple reasons. One, normal order
evaluation as illustrated above results in repeated evaluations of `(+ 5 1)` and `(* 5 2)`. In
addition, normal order evaluation becomes more complicated once procedures can't be modeled by
normal substitution.

### When the type of evaluation matters

For most scenarios, applicative and normal order evaluation will give the same result. However,
SICP exercise 1.5 below gives an instance where each evaluation method will give a different result.

```scheme
(define (p) (p))
(define (test x y)
  (if (= x 0) 0 y))

; How will the following expression evaluate via applicative order? Normal order?
(test 0 (p))
```

If `(test 0 (p))` is evaluated via applicative order, `(p)` will be evaluated first.
Since `p` by definition is a recursive function that calls itself, `(test 0 (p))` will
be stuck in an infinite loop.

However, if `(test 0 (p))` is evaluated via normal order, `(test 0 (p))` will be expanded
to `(if (= 0 0) 0 (p))` first. This expanded expression reduces to `0` without evaluating `(p)`,
avoiding the infinite loop.
