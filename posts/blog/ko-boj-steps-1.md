---
title: 'BOJ 01: 입출력과 사칙연산 (STDIO & Arithmetic)'
date: "2022-03-21"
tags: 
  - implementation
lang: ko
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 첫 번째 단계 [입출력과 사칙연산](https://www.acmicpc.net/step/1)의 풀이입니다.

## [2557. Hello World](https://www.acmicpc.net/problem/2557)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(void) {
  cout << "Hello World!";
  return 0;
}
```

## [10718. We love Krii](https://www.acmicpc.net/problem/10718)

```rb
puts "강한친구 대한육군"
puts "강한친구 대한육군"
```

## [10171. Cat](https://www.acmicpc.net/problem/10171)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(void){
  cout << "\\    /\\\n";
  cout << " )  ( ')\n";
  cout << "(  /  )\n";
  cout << " \\(__)|";
  return 0;
}
```

## [10172. Dog](https://www.acmicpc.net/problem/10172)

```cpp
#include <iostream> 
using namespace std;
int main(void) {
  cout << "|\\_/|" << endl;
  cout << "|q p|   /}" << endl;
  cout << "( 0 )\"\"\"\\" << endl;
  cout << "|\"^\"`    |" << endl;
  cout << "||_/=\\\\__|" << endl;
  return 0;
}
```

## [1000. A+B](https://www.acmicpc.net/problem/1000)

```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b;
    cin >> a >> b;
    cout << a+b << endl;
    return 0;
}
```

## [1001. A-B](https://www.acmicpc.net/problem/1001)

```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b;
    cin >> a >> b;
    cout << a-b << endl;
    return 0;
}
```

## [10998. AxB](https://www.acmicpc.net/problem/10998)

```cpp
#include <iostream>
using namespace std;
int main() {
    int a,b;
    cin >> a >> b;
    cout << a*b << endl;
    return 0;
}
```

## [1008. A/B](https://www.acmicpc.net/problem/1008)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  cin >> a >> b;
  printf("%.10lf\n", double(a)/b);

  return 0;
}
```

## [10869. 사칙연산](https://www.acmicpc.net/problem/10869)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(void) {
  int a, b;
  cin >> a >> b;
  cout << a+b << '\n';
  cout << a-b << '\n';
  cout << a*b << '\n';
  cout << a/b << '\n' << a%b;
  return 0;
}
```

## [10926. ??!](https://www.acmicpc.net/problem/10926)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main() {
    string s;
    cin >> s;
    cout << s << "??!\n";
    return 0;
}
```

## [18108. 1998년생인 내가 태국에서는 2541년생?! ](https://www.acmicpc.net/problem/18108)

```cpp
#include <iostream>
using namespace std;
int main() {
    int n; cin >> n;
    cout << n - 543 << endl;
    return 0;
}
```

## [10430. Remainder](https://www.acmicpc.net/problem/10430)

```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b, c;
  cin >> a >> b >> c;
  cout << (a+b)%c << endl;
  cout << ((a%c) + (b%c))%c << endl;
  cout << (a*b)%c << endl;
  cout << ((a%c) * (b%c))%c << endl;

  return 0;
}
```

## [2588. 곱셈](https://www.acmicpc.net/problem/2588)

### 방법 1
```cpp
#include <bits/stdc++.h> 
using namespace std;
int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  cin >> a >> b;
  int x = b / 100; 
  int y = (b % 100) / 10;
  int z = b % 10;

  cout << a*z << endl;
  cout << a*y << endl;
  cout << a*x << endl;
  cout << a*b << endl;
  return 0;
}
```

### 방법 2
```cpp
#include <iostream>
using namespace std;

int main() {
	int a, b, sum = 0;
	cin >> a >> b;

	int temp = b%10;
	b/=10;
	cout << a*temp << endl;
	sum += (a*temp);

	temp = b%10;
	b/=10;
	cout << a*temp << endl;
	sum += (a*temp*10);

	temp = b;
	cout << a*temp << endl;
	sum += (a*temp*100);

	cout << sum << endl;
	return 0;
}
```
