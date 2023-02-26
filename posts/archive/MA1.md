---
title: 'gpg: signing failed: No pinentry'
posttitle: 'gpg: signing failed: No pinentry'
date: '2023-02-05 12:00:00'
uid: 'MA1'
---

I've installed `pinentry` to setup gpg on my mac before and it worked fine.

Today I was trying to make a commit to my blog and this error popped up.

```sh
❯ git commit -m "<commit message>"
error: gpg failed to sign the data
fatal: failed to write commit object
```

I ran this command and it says pinentry is not installed.

```sh
❯ echo "test" | gpg --clearsign
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

test
gpg: signing failed: No pinentry
  1 pinentry-program /usr/local/bin/pinentry-mac
gpg: [stdin]: clear-sign failed: No pinentry
```

But funny thing is pinentry is installed and it even displays the path for the pinentry-mac below `: No Pinentry`.

I still made sure the path is added in `~/.gnupg/gpg-agent.conf` and it was there.

After bit of research, this command saved me :)

```sh
>  gpgconf --kill gpg-agent
```

---

ref: https://superuser.com/questions/1628782/gpg-signing-failed-no-pinentry
