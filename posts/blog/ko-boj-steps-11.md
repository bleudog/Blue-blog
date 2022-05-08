---
title: 'BOJ 11: 정렬 (Sorting)'
date: "2022-03-25"
tags: sort
lang: ko
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 11번째 단계 [정렬](https://www.acmicpc.net/step/9)의 풀이입니다.

## [1181. 단어 정렬](https://www.acmicpc.net/problem/1181)

```cpp
#include <bits/stdc++.h>
using namespace std;

#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int mycmp(const string &a, const string &b) {
  const int A = a.length();
  const int B = b.length();
  return ((A == B && (a < b)) || (A < B));
}

int main() {
  vector<string> v;
  set<string> myset;
  int t;
  cin >> t;

  while(t--) {
    string s; cin >> s;
    myset.insert(s);
  }

  auto it = myset.begin();
  while(it != myset.end()) {
    v.push_back(*it);
    ++it;
  }
  
  sort(v.begin(), v.end(), mycmp);

  const int SIZE = v.size();
  for(int i=0; i<SIZE; ++i) {
    cout << v[i] << endl;
  }

  return 0;
}
```

## [1427. 소트인사이드](https://www.acmicpc.net/problem/1427)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    const int SIZE = s.size();
    for(int i=0; i<SIZE; ++i) {
        for(int j=0; j<SIZE;++j) {
            if(s[i] > s[j]) {
                char t = s[i];
                s[i] = s[j];
                s[j] = t;
            }
        }
    }

    for(int i=0; i<SIZE; ++i)
        cout << s[i];
    cout << endl;

    return 0;
}
```

## [2108. 통계학](https://www.acmicpc.net/problem/2108)

```cpp
#include <bits/stdc++.h> 
using namespace std; 
#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int main() {
  int n;
  double sum = 0.0f;
  map<int,int> mymap;
  vector<int> v;

  cin >> n;
  for(int i=0; i<n; ++i) {
    int t; scanf("%d", &t);
    sum += (double)t;
    v.push_back(t);
    (mymap[t])++;
  }

  sort(v.begin(), v.end());

  auto it = mymap.begin();
  map<int, vector<int> > mode;
  while(it != mymap.end()) {
    auto m = mode.find(it->second);
    if(m == mode.end()) {
      vector<int> temp;
      temp.push_back(it->first);
      mode.insert(make_pair(it->second, temp));
    } else {
      (m->second).push_back(it->first);
    }
    ++it;
  }

  auto modev = (mode.rbegin())->second;
  int mode2 = (modev.size() > 1) ? modev[1] : modev[0];

  sum = (sum/n);
  sum = sum + ((sum > 0) ? 0.5 : -0.5); 
  printf("%d\n", (int)(sum));
  printf("%d\n%d\n%d\n", v[v.size()/2], mode2, v[v.size()-1]-v[0]);

  return 0;
}
```

## [2750. 수 정렬하기](https://www.acmicpc.net/problem/2750)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for(int i=0; i<n; ++i) {
        cin >> arr[i];
    }

    for(int i=0; i<n; ++i) {
        bool swapped = false;
        for(int j=0; j<n-i-1; ++j) {
            if(arr[j] > arr[j+1]) {
                swapped = true;
                int t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }

        if(!swapped) break;
    }

    for(int i=0; i<n; ++i) {
        cout << arr[i] << endl;
    }

    return 0;
}
```

## [2751. 수 정렬하기 2](https://www.acmicpc.net/problem/2751)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int main() {
    ios;
    int n;
    cin >> n;
    vector<int> v(n,0);
    for(int i=0; i<n; ++i) {
        cin >> v[i];
    }

    sort(v.begin(), v.end());

    for(int i=0; i<n; ++i)
        cout << v[i] << endl;

    return 0;
}
```

## [10814. 나이순 정렬](https://www.acmicpc.net/problem/10814)
    
```cpp
#include <bits/stdc++.h>
using namespace std; 
#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int main() {
    ios;
    int t;
    cin >> t;

    map<int, list<string> > mymap;

    while(t--) {
        int age;
        string name;
        cin >> age;
        cin >> name;

        mymap[age].push_back(name);
    }

    auto it = mymap.begin();
    while(it != mymap.end()) {
        auto mylist = it->second;
        auto it2 = mylist.begin();
        while(it2 != mylist.end()) {
            cout << it->first << ' ' << *it2 << endl;
            ++it2;
        }
        ++it;
    }

    return 0;
}
```

## [10989. 수 정렬하기 3](https://www.acmicpc.net/problem/10989)

```cpp
#include <stdio.h>

int main() {
    int arr[10001] = {0};
    int n;
    scanf("%d", &n);
    for(int i=0; i<n; ++i) {
        int k;
        scanf("%d", &k);
        ++(arr[k]);
    }

    for(int i=0; i<10001; ++i) {
        for(int j=0; j<arr[i]; ++j) {
            printf("%d\n", i);
        }
    }

    return 0;
}
```

## [11650. 좌표 정렬하기](https://www.acmicpc.net/problem/11650)

```cpp
#include <bits/stdc++.h>
using namespace std;

#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int mycmp(const pair<int, int> &a, const pair<int, int> &b) {
    int x1 = a.first;
    int y1 = a.second;
    int x2 = b.first;
    int y2 = b.second;
    if(x1 == x2) return y1 < y2;
    else return x1 < x2;
}

int main() {
    ios;
    int t;
    vector<pair<int, int> > v;

    cin >> t;
    while(t--) {
        int x,y;
        cin >> x >> y;
        v.push_back(make_pair(x,y));
    }

    sort(v.begin(), v.end(), mycmp);

    for(int i=0; i<v.size(); ++i) {
        cout << v[i].first << ' ' << v[i].second << endl;
    }
    return 0;
}
```

## [11651. 좌표 정렬하기 2](https://www.acmicpc.net/problem/11651)

```cpp
#include <bits/stdc++.h>
using namespace std;

#define ios cin.tie(NULL), ios_base::sync_with_stdio(false)
#define endl '\n'

int mycmp(const pair<int, int> &a, const pair<int, int> &b) {
    int x1 = a.first;
    int y1 = a.second;
    int x2 = b.first;
    int y2 = b.second;
    if(y1 == y2) return x1 < x2;
    else return y1 < y2;
}

int main() {
    ios;
    int t;
    vector<pair<int, int> > v;

    cin >> t;
    while(t--) {
        int x,y;
        cin >> x >> y;
        v.push_back(make_pair(x,y));
    }

    sort(v.begin(), v.end(), mycmp);

    for(int i=0; i<v.size(); ++i) {
        cout << v[i].first << ' ' << v[i].second << endl;
    }
    return 0;
}
```

## [18870. 좌표 압축](https://www.acmicpc.net/problem/18870)

```cpp
#include <bits/stdc++.h>
using namespace std;

int binarysearch(int low, int high, int target, vector<int> &v) {
    while(low <= high) {
        int mid = low + (high - low)/2;
        if(v[mid] > target) high = mid-1;
        else if(v[mid] < target) low = mid + 1;
        else if(v[mid] == target) return mid;
    }

    return -1;
}

int main() {
    int n;
    scanf("%d", &n);
    vector<int> v1, v2;
    set<int> _set;

    for(int i=0; i<n; ++i) {
        int t;
        scanf("%d", &t);
        v1.push_back(t);
        _set.insert(t);
    }

    auto it = _set.begin();
    while(it != _set.end()) {
        v2.push_back(*it);
        ++it;
    }

    sort(v2.begin(), v2.end());

    for(int i=0; i<n; ++i) {
        printf("%d ", binarysearch(0, v2.size()-1, v1[i], v2));
    }

    printf("\n");
    return 0;
}
```