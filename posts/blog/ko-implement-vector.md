---
title: "[C언어] Vector 구현하기"
date: "2022-05-05 14:58:00"
tags: 
  - vector
  - dynamic array
lang: ko
about: ds
---

## TL;DR
vector 구현 소스코드: [gonexvii/vector](https://github.com/gonexvii/DataStructures-and-Algorithms/tree/main/01-arrays/vector)

---

[동적 배열(dynamic array)](../en/dynamic-array)은 크기가 고정되지 않은 배열이다. C++ 표준 템플릿 라이브러리(STL)는 [vector](https://www.cplusplus.com/reference/vector/vector/)라는 동적 배열을 지원하지만 C에서는 지원하지 않는다. 그래서 이를 직접 구현해보았다.

구현 한 함수들은 아래와 같다.

## Private 함수
- `resize(new_capacity)` 
  - 더 이상 data를 추가할 수 없을 때 -> vector의 크기를 두 배로 늘린다.
  - 원소의 개수가 vector 크기의 1/4일 때 -> vector의 크기를 반으로 줄인다.

## Public 함수
- `size()` - vector에 저장되어 있는 원소의 개수를 반환
- `capacity()` - vector의 크기를 반환
- `is_empty()` - vector가 비어있다면 true 그렇지 않다면 false를 반환
- `find(data)` - data와 일치하는 첫 번째 원소의 index를 반환. 존재하지 않는 경우 -`1`을 반환
- `at(index)` - index 위치의 원소를 반환
- `push(data)` - vector끝에 data를 삽입
- `prepend(data)` - 첫 번째 위치에 data를 삽입
- `insert(index, data)` - index 위치에 data를 삽입. index 이후의 모든 원소들은 오른쪽으로 한 칸씩 이동
- `pop()` - 마지막 원소를 제거
- `remove_all(data)` - data와 일치하는 모든 원소를 vector에서 제거
- `delete_at(index)` - index에 위치한 원소를 제거. index 이후의 모든 원소들을 한 칸씩 왼쪽으로 이동

## 복잡도
- 시간 복잡도
  - 원소의 접근 (access): **O(1)**
  - 원소의 값 갱신 (update): **O(1)**
  - 배열 끝에 data를 추가하거나 제거하는 경우: **O(1)**
  - 그 외 위치에 추가하거나 제거하는 경우: **O(N)**
- 공간 복잡도
  - 최대 N의 크기를 가지는 vector: **O(N)**

---

## vector 구조체

vector의 구조체는 아래와 같이 정의하였다.

```c
typedef struct vector {
  int *arr; // 동적 배열
  int size; // 원소의 개수
  int capacity;　// 배열의 크기
} vector;
```

매번 `struct vector`를 쓰고 싶지 않아서 `typedef`로 `vector`라는 타입을 정의해주었다.

---

## Public 함수 구현

설명하기에 앞서 모든 코드에서 코너 케이스 처리 부분은 코드에 포함시키지 않았다. 코너 케이스를 포함한 전체코드는 [깃허브](https://github.com/gonexvii/DataStructures-and-Algorithms/tree/main/01-arrays/vector)를 참조.

### size() 함수
vector에 저장되어있는 원소의 총 개수를 반환하는 함수.

```c
inline int size(vector *v) {
  return v->size;
}
```

### capacity() 함수
vector의 크기를 반환하는 함수.

```c
inline int capacity(vector *v) {
  return v->capacity;
}
```

### is_empty() 함수
vector가 비어있는지 확인하는 함수.

```c
_Bool is_empty(vector *v) {
  return !(v->size);
}
```

원소의 개수가 `0`이면 `!0`를 해서 참을 반환한다.
반대로 `0`이 아닐경우 `!size`을 하면 `0`이 되어 거짓을 반환한다.

간단히 `return v->size == 0`을 해도된다. 
논리 NOT(`!`) 연산이 빠르지 않을까해서 이렇게 구현했지만 어셈블리 코드를 보면 0과 비교하는게 항상 빠른듯하다. 

### find(data) 함수
vector에 `data`가 존재하는지 확인하는 함수.

```c
int find(vector *v, int item) {
  for(int i=0; i<v->size; ++i) {
    if((v->arr)[i] == item) 
      return i;
  }

  return -1;
}
```

반복문을 사용해서 인자로 받은 `item`과 일치하는 원소를 찾는다. 찾았을 경우 해당 원소의 색인을 반환하고 그렇지 않다면 `-1`을 반환한다.

### at(index) 함수
`index` 위치의 원소를 반환하는 함수.

```c
int at(vector *v, int index) {
  return (v->arr)[index];
}
```

### push(data) 함수
`data`를 vector의 마지막에 추가하는 함수.

```c
void push(vector *v, int data) {
  // 배열의 크기를 두 배로 늘린다
  if(v->size == v->capacity) {
    resize(v, (v->capacity) << 1);
  }
  (v->arr)[v->size] = data;
  ++(v->size);
}
```

데이터를 추가하기 전에 배열의 크기를 확인하고 필요하다면 배열의 크기를 두 배 늘린다. `v->capacity * 2`대신 bitwise shift (`<<`)를 사용해서 곱하기를 해주었다.

원소의 총 개수인 `v->size`가 배열의 마지막 원소의 위치를 가리키므로 해당 위치에 `data`를 삽입한다.

### insert(index, data) 함수
`index` 위치에 `data`를 삽입하는 함수. 

```c
void insert(vector *v, int index, int item) {
  // 배열의 크기를 두 배로 늘린다
	if(v->size == v->capacity) {
		resize(v, (v->capacity) << 1);
	}

  // 한 칸씩 오른쪽으로 밀어주기
	for(int i=(v->size); i>index; --i) {
		(v->arr)[i] = (v->arr)[i-1];
	}

	(v->arr)[index] = item;
	++(v->size);
}
```

삽입하고 싶은 위치를 포함해서 그 이후의 모든 원소들을 오른쪽으로 한 칸씩 이동시켜야 한다.

`size`에서 시작해서 인자로 받은 `index`까지 반복문으로 돌면서 한 칸씩 밀어주었다.
```c
for(int i=(v->size); i>index; --i) {
   (v->arr)[i] = (v->arr)[i-1];
 }
```

그리고나서 `index`에 `data`를 삽입하면 된다.
```c
(v->arr)[index] = item;
```

### prepend(data) 함수
첫 번째 위치에 `data`를 삽입하는 함수.

```c
void prepend(vector *v, int item) {
  insert(v, 0, item);
}
```

이미 구현되어있는 `insert` 함수를 사용해서 첫 번째 위치에 데이터를 추가했다.

### pop() 함수
마지막 원소를 제거하는 함수.

```c
int pop(vector *v) {
  //  마지막 원소 제거
  --(v->size);

  // 배열의 크기를 반으로 줄인다
  if(v->size == (v->capacity)/4) {
    resize(v, (v->capacity) >> 1);
  }
  return (v->arr)[v->size];
}
```

원소를 제거 할때는 정말로 지운다기 보다는 지운듯한 느낌이 들도록 구현을 한다. `size`가 배열의 원소 개수를 의미하기 때문에 `--size`를 해주면 프로그램은 해당 배열에 `n`개가 아닌 `n-1`개의 원소가 있다고 생각하게 된다.
```c
--(v->size);
```

원소를 추가하면서 배열의 크기가 늘어났을 때, 만약 원소를 모두 제거하면 어떻게될까? 

그대로 방치하면 메모리 낭비가 심해질수 있기 때문에 원소의 개수가 배열의 크기의 1/4일 때 배열의 크기를 반으로 줄여주는 작업을 했다. 
크기를 키울때와 마찬가지로 bitwise shift (`>>`)를 사용해서 2로 나누었다.

```c
if(v->size == (v->capacity)/4) {
  resize(v, (v->capacity) >> 1);
 }
```

### remove_all(data) 함수
`data`와 일치하는 모든 원소를 배열에서 제거하는 함수.

```c
void remove_all(vector *v, int item) {
  while(1) {
    // 해당 데이터가 존재하면 index가 반환된다
    int i = find(v, item);

    // 데이터가 존재하면 지우고,
    if(i != -1) {
      delete_at(v, i);
    } else {
    // 더 이상 없으면 반복문을 탈출.
      break;
    }
  }
}
```

이미 구현한 `find`와 아래에서 설명 할 `delete_at`함수를 사용해서 반복적으로 데이터를 지웠다.

### delete_at(index) 함수
`index`의 원소를 제거하는 함수.

```c
int delete_at(vector *v, int index) {
	int item = (v->arr)[index];

  // 원소들 오른쪽으로 한 칸씩 밀어주기
	for(int i=index; i<v->size-1; ++i) {
		(v->arr)[i] = (v->arr)[i+1];
	}

  // 원소의 개수가 배열의 크기 1/4과 같다면 크기를 반으로 줄인다
	--(v->size);
	if(v->size == (v->capacity)/4) {
		resize(v, (v->capacity) >> 1);
	}

	return item;
}
```

중간에 데이터를 제거하면 공백이 생기게 되므로 뒤에 있는 모든 원소들은 왼쪽으로 한 칸씩 이동시켜야 한다.
```c
for(int i=index; i<v->size-1; ++i) {
  (v->arr)[i] = (v->arr)[i+1];
}
```

원소가 하나 줄었기 때문에 `size`를 하나 줄여주고 필요하다면 배열의 크기를 반으로 줄인다.

---

## Private 함수 구현

### resize(new_capacity)
배열의 크기를 재정의하는 함수.

```c
static void resize(vector *v, int new_capacity) {
  // 새로운 배열을 만들고
	int *new_arr = (int *)malloc(sizeof(int) * new_capacity);

  // 새로운 배열로 원소들을 이동시킨다.
	for(int i=0; i<v->size; ++i) {
		new_arr[i] = (v->arr)[i];
	}

  // 예전 배열은 메모리에서 놓아주고
	free(v->arr);
  // 새로운 배열을 가리키도록 한다.
	v->arr = new_arr;
  // 배열의 크기를 업데이트 한다.
	v->capacity = new_capacity;
}
```

해당 함수에서 하는 작업은 딱 하나다.

인자로 받은 `new_capacity` 크기의 배열을 만들어서 현재 vector의 포인터와 교체하는 것.
```c
int *new_arr = (int *)malloc(sizeof(int) * new_capacity);
 ...
 arr = new_arr;
```

다만 교체하기 전에 현재 배열에 있는 모든 원소들을 새로운 배열로 옮겨주어야 한다.
```c
for(int i=0; i<v->size; ++i) {
   new_arr[i] = (v->arr)[i];
 }
```