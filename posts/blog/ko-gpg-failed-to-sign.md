---
title: "error: gpg failed to sign"
subtitle: "GPG key를 사용해서 [커밋에 서명](./ko-gpg-failed-to-sign.md)을 하는데 아래와 같은 오류가 ..."
date: "2022-04-05"
tags: [git, gpg, error]
categories: [Git]
lang: ko
---

GPG key를 사용해서 [커밋에 서명](./ko-gpg-failed-to-sign.md)을 하는데 아래와 같은 오류가 발생했다.
```sh
$ git commit -S 
error: gpg failed to sign the data
fatal: failed to write commit object
```

`gpg --list-secret-keys --keyid-format=long`를 사용해서 GPG를 확인하고, 
`git config user.signingkey <GPG key ID>`로 다시 추가를 해도 모두지 해결이 되지 않았다.

검색을 하다가 비슷한 증상의 [issue](https://github.com/keybase/keybase-issues/issues/2798#issuecomment-498171379)를 찾아서 해결할 수 있었다.

간단하게 말하면 아래의 명령어로 해결이 가능했다.

```sh
export GPG_TTY=$(tty)
```

해당 명령어를 실행 후 커밋을 살행하면, GPG를 만들었을 때의 passphrase를 입력하는 화면이 나온다.
passphrase가 일치하면 커밋이 진행된다.

---

다만 위 과정의 경우는 매번 passphrase를 입력해야 한다. 예전처럼 자동으로 가능할텐데 찾아봐야겠다.