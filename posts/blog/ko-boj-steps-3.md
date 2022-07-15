---
title: 'BOJ 03: 반복문 (Loops)'
date: "2022-03-21"
tags: 
  - implementation
  - math
  - arithmetic
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 세 번째 단계 [반복문](https://www.acmicpc.net/step/3)의 풀이입니다.

## [1110. 더하기 사이클](https://www.acmicpc.net/problem/1110)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main(void) {
  int n, cnt = 1;
  cin >> n;

  int temp = (n%10)*10 + ((n/10 + n%10))%10;
  while(n != temp) {
    temp = (temp%10)*10 + ((temp/10 + temp%10))%10;
    ++cnt;
  }
  cout << cnt << endl;

  return 0;
}
```

## [2438. 별 찍기 - 1](https://www.acmicpc.net/problem/2438)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    for(int i=0; i<n; ++i) {
        for(int j=0; j<=i; ++j) {
            cout << '*';
        }
        cout << endl;
    }
return 0;
}
```

## [2439. 별 찍기 - 2](https://www.acmicpc.net/problem/2439)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; cin >> n;
    for(int i=0; i<n; ++i) {
        for(int j=i+1; j<n; ++j) {
            cout << ' ';
        }
        for(int k=0; k<=i; ++k) {
            cout << '*';
        }
        cout << endl;
    }
    return 0;
}
```

## [2739. 구구단](https://www.acmicpc.net/problem/2739)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main() {
  int a; 
  scanf("%d", &a);

  for(int i=1; i<10; ++i) 
    printf("%d * %d = %d\n", a, i, a*i);
  return 0;
}
```

## [2741. N 찍기](https://www.acmicpc.net/problem/2741)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main() {
  int a;
  cin >> a;

  for(int i=1; i<=a; ++i) 
	  printf("%d\n", i);

  return 0;
}
```

## [2742. 기찍 N](https://www.acmicpc.net/problem/2742)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
    ios::sync_with_stdio(0);
    cin.tie(0);

    int a;
    cin >> a;
    for(int i=a; i>=1; --i) 
        printf("%d\n", i);

    return 0;
}
```

## [8393. 합](https://www.acmicpc.net/problem/8393)

### C++ 풀이
```cpp
#include <bits/stdc++.h>
using namespace std;

int main(void) {
    int n; cin >> n;
    cout << n*(n+1)/2;
    return 0;
}
```

### Ruby 풀이
```rb
a = gets.to_i
puts (a*(a+1))/2
```

## [10871. X보다 작은 수](https://www.acmicpc.net/problem/10871)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;

    for(int i=0; i<n; ++i) {
        int t; cin >> t;
        if(t<x) cout << t << ' ';
    }

    return 0;
}
```

## [10950. A+B - 3](https://www.acmicpc.net/problem/10950)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main() {
    int t, a, b;
    cin >> t;

    for(int i=0; i<t; ++i) {
        cin >> a >> b;
        cout << a + b << endl;
    }

    return 0;
}
```

## [10951. A+B - 4](https://www.acmicpc.net/problem/10951)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main(void) {
    int a,b;
    while(cin >> a >> b)
        cout << a+b << endl;

    return 0;
}
```

## [10952. A+B - 5](https://www.acmicpc.net/problem/10952)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main(void) {
    int a,b;
    while(true) {
        cin >> a >> b;
        if(!a && !b) break;
        cout << a+b << endl;
    }

    return 0;
}
```

## [11021. A+B - 7](https://www.acmicpc.net/problem/11021)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
    int t, a, b;
    scanf("%d", &t);

    for(int i=1; i<=t; ++i) {
        scanf("%d %d", &a, &b);
        printf("Case #%d: %d\n", i, a+b);
    }

    return 0;
}
```

## [11022. A+B - 8](https://www.acmicpc.net/problem/11022)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
    int t, a, b;
    scanf("%d", &t);

    for(int i=1; i<=t; ++i) {
        scanf("%d %d", &a, &b);
        printf("Case #%d: %d + %d = %d\n", i, a, b, a+b);
    }

    return 0;
}
```

## [15552. 빠른 A+B](https://www.acmicpc.net/problem/15552)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main() {
    int t, a, b;
    scanf("%d", &t);

    for(int i=0; i<t; ++i) {
        scanf("%d %d", &a, &b);
        printf("%d\n", a+b);
    }

    return 0;
}
```