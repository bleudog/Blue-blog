---
title: 'BOJ 06: 문자열 (Strings)'
date: "2022-03-21"
tags: 
  - implementation
  - string
lang: ko
about: cp
---

백준 온라인저지 [단계별로 문제풀기](https://www.acmicpc.net/step)의 여섯 번째 단계 [문자열](https://www.acmicpc.net/step/7)의 풀이입니다.

## [1152. 단어의 개수](https://www.acmicpc.net/problem/1152)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a;
    int cnt = 0;
    while(cin >> a)
        ++cnt;
    cout << cnt << endl;
    return 0;
}
```

## [1157. 단어 공부](https://www.acmicpc.net/problem/1157)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int alpha[26] = {0};
    string s;
    cin >> s;

    int max = 0;
    int index = -1;
    for(int i=0; i<s.size(); ++i) {
        int pos = tolower(s[i])-'a';
        alpha[pos]++;
        if(alpha[pos] > max) {
            index = pos;
            max = alpha[pos];
        }
    }

    int cnt = 0;
    for(int i=0; i<26; ++i) {
        if(alpha[i] == max) ++cnt;
    }

    if(cnt > 1) cout << '?' << endl;
    else cout << (char)('A' + index) << endl;

    return 0;
}
```

## [1316. 그룹 단어 체커](https://www.acmicpc.net/problem/1316)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t, cnt = 0;
    cin >> t;

    while(t--) {
        vector<bool> alpha(26, false);
        bool isGood = true;
        string s;
        cin >> s;

        for(int i=0; i<s.size(); ++i) {
            if(s[i] != s[i+1]) {
                if(alpha[s[i]-'a'] == true) {
                    isGood = false;
                    break;
                }
                alpha[s[i]-'a'] = true;
            }
        }

        if(isGood) ++cnt;
    }

    cout << cnt << endl;

    return 0;
}
```

## [2675. 문자열 반복](https://www.acmicpc.net/problem/2675)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while(t--) {
        int n;
        string s;
        cin >> n >> s;
        for(int i=0; i<s.size(); ++i) {
            for(int j=0; j<n; ++j) {
                cout << s[i];
            }
        }
        cout << endl;
    }
    return 0;
}
```

## [2908. 상수](https://www.acmicpc.net/problem/2908)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define swap(a,b) {int i=(a); (a)=(b); (b) = i;} 

int main() {
    string a,b;
    cin >> a >> b;

    swap(a[0],a[2]);
    swap(b[0],b[2]);

    int v1 = (a[0]-'0')*100 + (a[1]-'0')*10 + (a[2]-'0');
    int v2 = (b[0]-'0')*100 + (b[1]-'0')*10 + (b[2]-'0');
    cout << ((v1 < v2) ? v2 : v1) << endl;
    
    return 0;
}
```

## [2941. 크로아티아 알파벳](https://www.acmicpc.net/problem/2941)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int cnt=0;
    const int SIZE = s.size();
    for(int i=0; i<SIZE; ++i) {
        if(s[i] == 'c') {
            if(i+1 < SIZE && (s[i+1] == '=' || s[i+1] == '-')) {
                ++i;
            }
        } else if(s[i] == 'd') {
            if(i+1 < SIZE) {
                if(s[i+1] == '-') {
                    ++i;
                }
                else if(s[i+1] == 'z' && s[i+2] == '=') {
                    i += 2;
                }
            }
        } else if(s[i] == 'l' && s[i+1] == 'j') {
            ++i;
        } else if(s[i] == 'n' && s[i+1] == 'j') {
            ++i;
        } else if(s[i] == 's' && s[i+1] == '=') {
            ++i;
        } else if(s[i] == 'z' && s[i+1] == '=') {
            ++i;
        }
        ++cnt;
    }

    cout << cnt << endl;
    return 0;
}
```

## [5622. 다이얼](https://www.acmicpc.net/problem/5622)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string arr = "22233344455566677778889999";
    string s;
    cin >> s;
    int sum = 0;
    for(int i=0; i<s.size(); ++i) {
        sum += arr[s[i]-'A']-'0'+1;
    }

    cout << sum << endl;
    return 0;
}
```

## [10809. 알파벳 찾기](https://www.acmicpc.net/problem/10809)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int alphabet[26];
    for(int i=0; i<26; ++i) alphabet[i] = -1;
    string s;
    cin >> s;

    for(int i=0; i<s.size(); ++i) {
        int pos = s[i]-'a';
        if(alphabet[pos] == -1) alphabet[pos] = i;
    }

    for(int i=0; i<26; ++i) {
        cout << alphabet[i] << ' ';
    }
    cout << endl;
    return 0;
}
```

## [11654. 아스키 코드](https://www.acmicpc.net/problem/11654)

```cpp
#include <bits/stdc++.h>

int main() {
    char ch;
    scanf("%c", &ch);
    printf("%d\n", ch);
    return 0;
}
```

## [11720. 숫자의 합](https://www.acmicpc.net/problem/11720)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    string s;
    cin >> n;
    cin >> s;
    int sum = 0;
    for(int i=0; i<s.size(); ++i) {
        sum += s[i]-'0';
    }
    cout << sum << endl;
    return 0;
}
```