---
title: "Change Author of Commit in Git History"
subtitle: "깃 리포지토리에서 아래의 명령어를 사용하여 이름과 이메일을 설정할 수 있다 ..."
date: "2022-05-03"
tags: 
  - git
  - filter-branch
lang: ko
---

깃 리포지토리에서 아래의 명령어를 사용하여 이름과 이메일을 설정할 수 있다.
```sh
$ git config user.name "Mido Eu"
$ git config user.email "mido.eu@proton.me"
```

이렇게 설정한 이름과 이메일은 커밋 로그에서 확인 할 수 있다.

![Git log](/images/posts/20220503-git-filter-repo1.png)

하지만 만약 설정하는 순간 오타가 났다거나 아니면 새로운 이메일로 업데이트 하는 걸 깜빡해서 예전의 정보를 사용했다면? 
```sh
$ git config user.name "Mid oEu"
$ git config user.email "mido.eu@proteon.me"
```

커밋 로그에는 일단 아래처럼 설정한 그대로 나타나게 된다.

![Git log](/images/posts/20220503-git-filter-repo2.png)

뿐만 아니라 깃허브에서도 커밋을 확인해보면 사용자를 확인 할 수가 없어서 잔디 기록도 남지 않게 된다.

![Github commit log](/images/posts/20220503-git-filter-repo3.png)

이를 해결하기 위해서는 author과 email을 재설정해주어야 한다.

---

## 커밋 checkout 하기


```sh
$ git log --abbrev-commit
```

우선 잘못된 정보를 가진 커밋의 주소를 찾는다.

```sh
commit ba5066c (HEAD -> main, origin/main, origin/HEAD)
Author: Mid oEu <mido.eu@proteon.me>
Date:   Tue May 3 13:08:41 2022 +0900

    hello.c added

commit c34fc66
Author: Mido Eu <mido.eu@proton.me>
Date:   Tue May 3 12:37:55 2022 +0900

    author and email fixed
```

두 번째 커밋 (`c34fc66`)가 올바른 정보를 가지고 있고, 첫 번째 커밋(`ba5066c`)의 정보를 바꿔야한다.

```sh
$ git checkout ba5066c

...
HEAD is now at ba5066c hello.c added
```

## author 재설정 하기

```sh
$ git commit --amend --author "Mido Eu <mido.eu@proton.me>"
```

해당 커밋이 완료되었다면 다시 메인 브랜치로 이동한다. 그러면 새로운 커밋의 브랜치(`81ef65b`)가 생성된 것을 확인 할 수 있다.

```sh
# git checkout master
$ git checkout main


Warning: you are leaving 1 commit behind, not connected to
any of your branches:

  81ef65b hello.c added
....
```

## 이전 커밋을 새로운 커밋으로 replace

`81ef65b`가 author의 정보를 고친 새로운 커밋이기 때문에 이를 예전에 잘못된 정보를 가지고 있던 커밋(`ba5066c`)과 교체한다

```sh
$ git replace ba5066c 81ef65b
```

그리고 `filter-branch`를 사용해서 고친 커밋 이후의 모든 커밋을 다시 커밋해준다.

```sh
$ git filter-branch -- --all

Proceeding with filter-branch...

Rewrite ba5066c5dacd001f3ce3b5e691b6c0d2f81df2ac (4/4) (0 seconds passed, remaining 0 predicted)    
Ref 'refs/heads/main' was rewritten
Ref 'refs/remotes/origin/main' was rewritten
WARNING: Ref 'refs/remotes/origin/main' is unchanged
Ref 'refs/replace/ba5066c5dacd001f3ce3b5e691b6c0d2f81df2ac' was rewritten
```

## replacement 지우기

```sh
$ git replace -d ba5066c

Deleted replace ref 'ba5066c5dacd001f3ce3b5e691b6c0d2f81df2ac'
```

https://gist.github.com/zapidan/69c175416261d9a13fd4


## 로그 확인 후 force push

```sh
$ git log

commit 63562c5 (HEAD -> main, origin/main, origin/HEAD)
Author: Mido Eu <mido.eu@proton.me>
Date:   Tue May 3 13:08:41 2022 +0900

    hello.c added

commit c34fc66
Author: Mido Eu <mido.eu@proton.me>
Date:   Tue May 3 12:37:55 2022 +0900

    author and email fixed
```

문제가 없다면 `-f` 태그를 사용해서 force push 한다.

```sh
$ git push -f
```

---

- [signed commit](/ko-signing-commits/)을 사용하는 경우 해당 작업 종료 후 커밋이 unverified 될 수 있다. 예전 커밋에 서명하는 방법에 대해서는 '[Signing Previous Commits](https://medium.com/@midotype/signing-previous-commits-787a077bdb62)'을 참고하자.
- `git filter-branch`가 상당히 느리기 때문에 [git-filter-repo](../ko/git-filter-repo/)