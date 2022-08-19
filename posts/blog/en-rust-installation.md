---
title: "Installing Rust"
date: "2022-08-12 17:42:00"
tags: 
  - rust
lang: en
about: programming
---

Recommended using `rustup` to install or update current Rust in your machine.

If rust was installed without `rustup`, run the following to uninstall rust from your machine:
```shell
$ /usr/local/lib/rustlib/uninstall.sh
install: uninstalling component 'rustc'
install: uninstalling component 'rust-std-x86_64-apple-darwin'
install: uninstalling component 'cargo'
install: uninstalling component 'rust-docs'

    Rust Documentation is uninstalled.
```

Now install `rustup` using the following command:
```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

...
 stable-x86_64-apple-darwin installed - rustc 1.63.0 (4b91a6ea7 2022-08-08)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).
```

Now check the version:
```shell 
$ rustc --version
rustc 1.63.0 (4b91a6ea7 2022-08-08)
```

---

Reference:
- [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)