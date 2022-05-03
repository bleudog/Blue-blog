---
title: git-filter-repo
subtitle: "git history에서 author 정보를 바꾸기 위해 상당히 번거로운 과정들이 필요하다 ([커밋의 author 수정하기] ..."
date: "2022-05-03"
tags: 
  - git
  - git-filter-repo
lang: ko
---

git history에서 author 정보를 바꾸기 위해 상당히 번거로운 과정들이 필요하다 ([커밋의 author 수정하기](/ko-change-author-of-commit-in-git-history/))

뿐만 아니라 `git filter-branch`를 사용해서 커밋을 수정하는데 속도가 굉장히 느리다.

하지만 `git-filter-repo`를 사용하면 정말 간단히 그리고 빠르게 수정이 가능하다.

## git-filter-repo 설치

우선 [newren/git-filter-repo](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md)로 이동해서 `git-filter-repo`를 설치한다.

## mailmap 만들기

`wrong-name`을 `correct-name`으로 바꾸기 위해 mailmap을 만들어서 `git-filter-repo`에 넘겨줘야 한다. 

구성은 간단하다. 빈 파일(`mymailmap.dat`)을 만들고 아래의 형식으로 정보를 저장한다:
`new_name <new_email> wrong_name <wrong_email>`

```text
Mido Eu <mido.eu@proton.me> Mid oEu <mido.eu@pm.me>
Mido Eu <mido.eu@proton.me> wrongname1 <wrongname1@pm.me>
Mido Eu <mido.eu@proton.me> wrongname2 <wrongname2@pm.me>
```

여러개의 정보를 넘겨줘도 된다. 오른쪽 세 author가 모두 왼쪽의 author로 수정된다.

## git-filter-repo 

위에서 만든 mailmap을 가지고 아래처럼 명령어를 실행해준다.

```sh
$ git-filter-repo --mailmap ./mymailmap
```

`git log`로 확인해주면 author가 수정된 것을 확인할 수 있다.


## remote 추가
`git-filter-repo`의 경우 작업 완료 후 remote가 없어지게 되므로 다시 추가해야 한다.

```sh
$ git remote add origin REPOSITORY_주소
$ git push -f
```

---

- [signed commit](./signing-commits/)을 사용하는 경우 해당 작업 종료 후 커밋이 unverified 될 수 있다. 예전 커밋에 서명하는 방법에 대해서는 '[Signing Previous Commits](https://medium.com/@midotype/signing-previous-commits-787a077bdb62)'을 참고하자.