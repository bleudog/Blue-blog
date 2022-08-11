---
title: 'BOJ 10: 브루트포스 (Bruteforce) -- [4/5]'
date: "2022-03-24"
tags: 
 - bruteforce
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 열 번째 단계 [브루트포스](https://www.acmicpc.net/step/22)의 풀이입니다.

## [1018. 체스판 다시 칠하기](https://www.acmicpc.net/problem/1018)

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> s;
vector<string> ans1;
vector<string> ans2;

int chess(int x, int y) {
    int diff1 = 0;
    int diff2 = 0;
    for(int i=0; i<8; ++i) {
        for(int j=0; j<8; ++j) {
            if(ans1[i][j] != s[i+x][j+y]) ++diff1;
            if(ans2[i][j] != s[i+x][j+y]) ++diff2;
        }
    }

    return (diff1 < diff2) ? diff1 : diff2;
}
int main() {
    int x,y;
    cin >> x >> y;

    for(int i=0; i<8; ++i) {
        bool dark = true & i;
        string t = "";
        string t2 = "";
        for(int j=0; j<8; ++j) {
            t += (dark ? "B" : "W");
            t2 += (dark ? "W" : "B");
            dark = !dark;
        }
        ans1.push_back(t);
        ans2.push_back(t2);
    }

    for(int i=0; i<x; ++i) {
        string temp;
        cin >> temp;
        s.push_back(temp);
    }
    
    int min = 99999999;
    for(int i=0; i<=x-8; ++i) {
        for(int j=0; j<=y-8; ++j) {
            int t = chess(i, j);
            min = t < min ? t : min;
        }
    }

    cout << min << endl;
    return 0;
}
```

## [2231. 분해합](https://www.acmicpc.net/problem/2231)

```cpp
#include <iostream>
#include <vector>
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
    int n;
    cin >> n;

    int i = 1;
    while(true) {
        if(i > n) {
            cout << 0 << endl;
            break;
        }
        if(d(i) == n) {
            cout << i << endl;
            break;
        }
        ++i;
    }

    return 0;
}
```

## [2798. blacjack](https://www.acmicpc.net/problem/2798)

```cpp
#include <iostream>
using namespace std;

int main() {
    int n, m, sum=0;
    cin >> n >> m;

    int arr[n];
    for(int i=0; i<n; ++i) {
        cin >> arr[i];
    }

    for(int i=0; i<n; ++i) {
        for(int j=i+1; j<n; ++j) {
            for(int k=j+1; k<n; ++k) {
                int t = arr[i] + arr[j] + arr[k];
                if(t <= m && t > sum) {
                    sum = t;
                }
            }
        }
    }

    cout << sum << endl;

    return 0;
}
```

## [7568. 덩치](https://www.acmicpc.net/problem/7568)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    int t;
    cin >> t;
    int w[t];
    int h[t];

    for(int i=0; i<t; ++i) {
        cin >> w[i] >> h[i];
    }

    for(int i=0; i<t; ++i) {
        int cnt = 1;
        for(int j=0; j<t; ++j) {
            if(w[i] < w[j] && h[i] < h[j]) ++cnt;
        }
        cout << cnt << ' ';
    }
    cout << endl;

    return 0;
}
```

# [1435. 영화감독 숌](https://www.acmicpc.net/problem/1436)

도전 중