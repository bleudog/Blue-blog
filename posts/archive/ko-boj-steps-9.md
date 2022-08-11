---
title: 'BOJ 09: 재귀 (Recursion) -- [3/4]'
date: "2022-03-23"
tags: 
  - recursion
  - divide and conquer
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 아홉 번째 단계 [재귀](https://www.acmicpc.net/step/19)의 풀이입니다.

## [2447. 별 찍기 - 10](https://www.acmicpc.net/problem/2447)

```cpp
// referenced: https://cryptosalamander.tistory.com/38

#include <bits/stdc++.h>
using namespace std;

void star(int x,int y,int n)
{
	if((x/n)%3==1 && (y/n)%3==1)
		cout << ' ';
	else {
		if(n/3==0) cout << '*';
		else star(x, y, n/3);
	}
}

int main() {
	int n;
	cin >> n;
	for(int i=0; i<n; ++i) {
		for(int j=0; j<n; ++j)
			star(i, j, n);
		cout << endl;
	}

	return 0;
}
```


## [10870. 피보나치 수 5](https://www.acmicpc.net/problem/10870)

```cpp
#include <bits/stdc++.h>
using namespace std;

int fibo(int n) {
	if(n<=1) return n;
	return fibo(n-2) + fibo(n-1);
}
int main() {
	int n;
	cin >> n;
	cout << fibo(n) << endl;
	return 0;
}
```

## [10872. Factorial](https://www.acmicpc.net/problem/10872)

```cpp
#include <bits/stdc++.h>
using namespace std;
int fact(int n) {
	if(n<=1) return 1;
	return n * fact(n-1);
}
int main() {
	int n;
	cin >> n;
	cout << fact(n) << endl;
	return 0;
}
```

## [11729. 하노이 탑 이동 순서](https://www.acmicpc.net/problem/11729) 

도전 중
