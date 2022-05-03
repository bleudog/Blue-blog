---
title: 'BOJ 02: 조건문 (Conditions)'
subtitle: "백준 온라인저지 단계별로 문제풀기의 두 번째 단계 조건문 풀이 ..."
date: "2022-03-21"
tags: [implementation, math, arithmetic]
lang: ko
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 두 번째 단계 [조건문](https://www.acmicpc.net/step/4)의 풀이입니다.

## [1330. 두 수 비교하기](https://www.acmicpc.net/problem/1330)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  cin >> a >> b;
  cout << ((a==b) ? "==" : (a>b) ? ">" : "<") << endl;

  return 0;
}
```

## [2480. 주사위 세개](https://www.acmicpc.net/problem/2480)

```cpp
#include <bits/stdc++.h>
using namespace std;
int max(int a, int b) {
  return a>b?a:b;
}
int main(void) {
  int a,b,c;
  cin>>a>>b>>c;
  if(a==b && b==c) cout<<10000+a*1000;
  else if(a==b || a==c || b==c) {
    if(a==b || a==c) cout<<1000+a*100;
    else cout<<1000+b*100;
  } else {
    cout<<max(a, max(b,c))*100;
  }
}
```

## [2525. 오븐 시계](https://www.acmicpc.net/problem/2525)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	int a, b, c;
	cin >> a >> b >> c;

	int mins = a*60 + b + c;
	int hour = (mins/60)%24;
	mins %= 60;

	hour = hour < 24 ? hour : 0;
	cout << hour << ' ' << mins << endl;

	return 0;
}
```

## [2753. Leap Year](https://www.acmicpc.net/problem/2753)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(void) {
  int y; cin>>y;
  cout<<((y%4==0 && y%100!=0) || y%400==0);
  return 0;
}
```

## [2884. 알람 시계](https://www.acmicpc.net/problem/2884)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  cin >> a >> b;

  int mins = (a*60 + b)-45;
  if(mins < 0) cout << 23 << ' ' << 60 + mins << endl;
  else cout << mins/60 << ' ' << mins%60 << endl;

  return 0;
}
```

## [9498. 시험 성적](https://www.acmicpc.net/problem/9498)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(void) {
  int s; cin>>s;
  if(s>=90) cout<<'A';
  else if(s>=80) cout<<'B';
  else if(s>=70) cout<<'C';
  else if(s>=60) cout<<'D';
  else cout<<'F';
  return 0;
}
```

## [14681. 사분면 고르기](https://www.acmicpc.net/problem/14681)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  cin >> a >> b;

  bool x = a>0;
  bool y = b>0;

  cout << ((x&&y) ? 1 : (!x&&y) ? 2 : (!x&&!y) ? 3 : 4) << endl;

  return 0;
}
```