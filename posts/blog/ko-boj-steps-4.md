---
title: 'BOJ 04: 1차원 배열 (1-D Array)'
date: "2022-03-21"
tags: 
  - implementation
  - math
  - string
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 네 번째 단계 [1차원 배열](https://www.acmicpc.net/step/6)의 풀이입니다.

## [1546. 평균](https://www.acmicpc.net/problem/1546)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main() {
    int n, m=-1;
    cin >> n;
    int arr[n];
    for(int i=0; i<n; ++i) {
        cin >> arr[i];
        m = arr[i] > m ? arr[i] : m;
    }

    double sum = 0.0;
    for(int i=0; i<n; ++i) {
        sum += arr[i]*100.0 / m;
    }

    cout << sum/n << endl;
    return 0;
}
```

## [2562. 최댓값](https://www.acmicpc.net/problem/2562)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int max = 0;
    int pos = 0;

    for(int i=0; i<9; ++i) {
        int t; 
        cin>>t;
        if(t > max) max = t, pos = i+1;
    }
    cout << max << endl << pos;

    return 0;
}
```

## [2577. 숫자의 개수](https://www.acmicpc.net/problem/2577)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  int a,b,c;
  cin >> a >> b >> c;

  int d = a*b*c;
  int arr[10] = {0};

  while(d) {
    arr[d%10]++;
    d /= 10;
  }

  for(int i=0; i<10; ++i)
    cout << arr[i] << endl;

  return 0;
}
```

## [3052. 나머지](https://www.acmicpc.net/problem/3052)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main() {
  bool arr[42]={false};
  for(int i=0;i<10;++i) {
    int t; 
    cin >> t;
    arr[t%42] = true;
  }

  int cnt = 0;
  for(int i=0; i<42; ++i)
    if(arr[i]) ++cnt;
  cout << cnt << endl;

  return 0;
}
```

## [4344. 평균은 넘겠지](https://www.acmicpc.net/problem/4344)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    scanf("%d", &t);
    for(int j=0; j<t; ++j) {
        int n;
        int sum = 0;
        double avg = 0.0;
        scanf("%d", &n);
        int arr[n];
        for(int i=0; i<n; ++i) {
            scanf("%d", &arr[i]);
            sum += arr[i];
        }
        avg = sum / (double)n;

        int cnt = 0;
        for(int i=0; i<n; ++i) {
            if(arr[i] > avg) ++cnt;
        }
        avg = cnt / (double)n;
        printf("%.3f%%\n", avg*100);
    }

    return 0;
}
```

## [8958. OX Quiz](https://www.acmicpc.net/problem/8958)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    for(int i=0; i<n; ++i) {
        string s;
        cin >> s;

        int sum = 0;
        int cnt = 1;
        for(int j=0; j<s.size(); ++j) {
            if(s[j] == 'O') {
                sum += cnt;
                ++cnt;
            } else {
                cnt = 1;
            }
        }
        cout << sum << endl;
    }
    return 0;
}
```

## [10818. 최소, 최대](https://www.acmicpc.net/problem/10818)

```cpp
#include <bits/stdc++.h> 
using namespace std;

int main(void) {
    int min = 1000001;
    int max = -1000001;
    int n; 
    cin >> n;

    for(int i=0; i<n; ++i) {
        int t; 
        cin >> t;
        min = (t < min) ? t : min;
        max = (t > max) ? t : max;
    }
    cout << min << ' ' << max << endl;
    return 0;
}
```