---
title: GPG key 생성하기
date: "2022-04-05"
tags: 
  - github 
  - gpg
lang: ko
---

gpg (GnuPG) 2.3.3

## GPG key 페어 생성

터미널을 열고 아래의 명령어를 입력.
```sh
$ gpg --full-generate-key
```

원하는 종류의 번호를 입력하고 엔터.

```sh
Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 1
```

그 다음으로 keysize를 입력해야 된다. 1024 ~ 4096 비트 사이의 수를 입력하면 된다.

```sh
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
```

다음으로는 key의 유효기간을 설정한다.

```sh
Please specify how long the key should be valid.
    0 = key does not expire
    <n>  = key expires in n days
    <n>w = key expires in n weeks
    <n>m = key expires in n months
    <n>y = key expires in n years
Key is valid for? (0) 1y
```

그 다음 이름, 이메일, 그리고 비밀번호를 차례대로 입력한다 -- 여기서 입력한 정보들은 ([GPG Keychain](https://gpgtools.org/)) 혹은 그 외의 GPG key 관리툴 에서 확인이 가능하다.
![gpg key](/images/posts/05042022-gpg-1.png)

입력한 정보들을 확인하고 동의를 하면 GPG key의 생성이 완료된다.

## GitHub: GPG Key 추가 

우선 사용할 GPG key의 ID를 알아야한다.

터미널을 열고 아래의 명령어를 입력.
```sh
$ gpg --list-secret-keys --keyid-format=long
```

그러면 아래와 같은 값이 출력된다. 
여기서 GPG Key ID는 `SAMPLE4371567BD2`이다. 이 부분을 복사한다.

```sh
------------------------------------
sec   4096R/SAMPLE4371567BD2 2016-03-10 [expires: 2023-04-05]
uid                          Blue Eu <eu.blue@pm.me> 
ssb   4096R/42B317FD4BA89E7A 2016-03-10 [expires: 2023-04-05]
------------------------------------
```

위에서 복사한 값을 가지고 아래의 명령어를 입력한다.
```sh
$ gpg --armor --export SAMPLE4371567BD2
```

해당 명령어는 GPG key ID를 ASCII armor 형태의 문자로 변환해준다. 

```text
-----BEGIN PGP PUBLIC KEY BLOCK-----
        
        <ASCII armor text>

-----END PGP PUBLIC KEY BLOCK-----
```

`BEGIN`과 `END`열을 포함, 그 사이에 값들을 전부 복사한다. 
이 값을 사용하여 GitHub에 새로운 GPG key를 추가하는 것이 가능하다. 

---

GitHub로 이동하여 Settings -> SSH and GPG keys로 이동한다.

GPG keys 항목에서 `New GPG key`를 클릭, 아래처럼 Key를 입력하는 화면이 나온다.

![gpg key](/images/posts/05042022-gpg-2.png)

위에서 복사한 값을 붙여넣고, 아래의 `Add GPG key`를 클릭하면 새로운 GPG Key가 추가된다.