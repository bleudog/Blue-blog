---
title: 'Asymptotic Analysis: Big-O, Omega, and Theta'
posttitle: 'Asymptotic Analysis: Big-O, Omega, and Theta'
date: '2022-07-06 07:00:00'
uid: '2'
---

Asymptotic analysis "is the study of change in performance of the algorithm with the change in the order of the input size". In other words, it is a method to compute and measure the running-time of an algorithm.

Asymptotic notations are used to describe the computed running-time or complexity of an algorithm.

## Asymptotic Notations

Asymptotic notations are mathematical notations used to describe the complexity of an algorithm.

There are mainly three different notations to describe three different states of complexity:

- Theta (Θ) Notation (_a_)
- Big-O Notation (_b_)
- Omega (Ω) Notation (_c_)

## Big-O Notation

Big-O notation describes the upper-bound or **worst-time** complexity of an algorithm.

Mathematically, Big-O is defined as:

```text
O(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n_0 }
```

## Omega Notation

Omega notation describes the lower-bound or **best-time** complexity of an algorithm.
Mathematically, Omega notation is defined as:

```text
Ω(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n_0 }
```

## Theta Notation

Theta notation describes both the lower and upper-bound of an algorithm. It represents the **average-time** complexity of the algorithm.

For a function `g(n)` and `Θ(g(n))` is given by the relation:

```text
Θ(g(n)) = { f(n): there exist positive constants c1, c2 and n_0
            such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n_0 }
```

---

# Reference

- [https://www.programiz.com/dsa/asymptotic-notations](https://www.programiz.com/dsa/asymptotic-notations)
- image: [big-o graph](https://danielmiessler.com/study/big-o-notation/)
- image: [asymptotic notations graph](https://www.dotnetlovers.com/images/coolnikhilj2256c883d1-b9fc-46e9-b225-588ac5063c3d.png)
