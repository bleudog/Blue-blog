---
title: 'BOJ 05: 함수 (Functions)'
date: "2022-03-21"
tags: 
  - implementation
  - math
  - string
  - bruteforce
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 다섯 번째 단계 [함수](https://www.acmicpc.net/step/5)의 풀이입니다.

## [1065. 한수](https://www.acmicpc.net/problem/1065)

```cpp
#include <iostream>
using namespace std;

int hansoo(int n) {
    if(n < 100) return n;
    if(n <= 110) return 99;

    int cnt = 99;
    for(int i=111; i<=n; ++i) {
        int t = i;
        int c = t%10;
        t/=10;
        int b = t%10;
        int a = t/10;

        if(a-b == b-c)  ++cnt;
    }

    return cnt;
}

int main() {
    int n; 
    cin >> n;
    cout << hansoo(n) << endl;
    return 0;
}
```

## [4673. Self Number](https://www.acmicpc.net/problem/4673)

```cpp
#include <bits/stdc++.h>
using namespace std;

int d(int x) {
    int sum = x;
    while(x>0) {
        sum += x%10;
        x/=10;
    }

    return sum;
}

int main() {
    vector<bool> arr(10001, true);

    for(int i=1; i<10001; ++i) {
        if(!arr[i]) continue;

        int temp = i;
        while(true) {
            int t = d(temp);
            if(t > 10000) break;
            arr[t] = false;
            temp = t;
        }
    }

    for(int i=1; i<10001; ++i) {
        if(arr[i]) cout << i << endl;
    }
    return 0;
}
```

## [15596. 정수 N개의 합](https://www.acmicpc.net/problem/15596)

### C 풀이 
```c
#include <bits/stdc++.h>
using namespace std;

long long sum(int *a, int n) {
    long long res = 0;
    for(int i=0; i<n; ++i) {
        res += a[i];
    }

    return res;
}
```

### C++ 풀이
```cpp
#include <vector>
long long sum(std::vector<int> &a) {
    long long ans = 0;
    for(int i=0; i<a.size(); ++i) {
        ans += a[i];
    }
    return ans;
}
```