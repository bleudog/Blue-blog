---
title: "Find all divisors of a natural number"
date: "2022-08-01 07:00:00"
tags: 
  - divisor
  - math
lang: en
about: algo
---

## Naive approach
Time complexity: O(N)

Iterate from `1` to `N` and check if `N` is divisible by that number. If it is, increment the counter.

```rb
def divisor(x)
    cnt = 0
    1.upto(x) do |i|
        cnt += 1 if x%i==0
    end
    
    cnt
end
```

## Optimized algorithm
Time complexity: O(sqrt(N))

Iterate from `1` to square root of `N`. If `N` is divisible by that number, check if `n/i == i` to avoid counting same number twice (e.g. `N=100` and `100/10==10`).

```rb
def divisor(n)
    arr = []
    i = 1
    while (i*i) <= n
        if n%i==0
            arr.push(i)
            arr.push(n/i) if n/i != i
        end
        i += 1
    end
    
    arr.size
end
```