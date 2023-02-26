---
title: 'How to generate a GPG key on Mac'
posttitle: 'How to generate a GPG key on Mac'
date: '2022-12-28 05:29:00'
uid: 'MA'
---

You can install GPG tools from [here](https://www.gnupg.org/download/) or simply install `gnupg` from a terminal:

```sh
$ brew install gnupg
```

Check the version of `gpg`:

```sh
$ gpg --version

gpg (GnuPG) 2.3.8
```

If the version is 2.1.17 or above, use the below command to generate a key pair:

```sh
$ gpg --full-generate-key
```

If below 2.1.17, the above command wont work. Use the following:

```sh
$ gpg --default-new-key-algo rsa4096 --gen-key
```

At the prompt, you can press `Enter` to keep everything as default or choose as you wish. At the end type in your information and a secure passphrase and you're done.

Use `gpg --list-secret-keys --keyid-format=long` to check generated GPG key.

```sh
$ gpg --list-secret-keys --keyid-format=long

/Users/madelen/.gnupg/pubring.kbx
------------------------------------
sec   4096R/3AA5C34371567BD2 2022-12-27 [SC]
uid                      Madelen (macbook-air) <madelen@example.com>
ssb   4096R/4BB6D45482678BE3 2022-12-27
```

In this case `3AA5C34371567BD2` is going to be your GPG ID.

Later when you want to add your GPG key to your account (e.g. GitHub), you can create a public key using this ID:

```sh
$ gpg --armor --export 3AA5C34371567BD2
```
