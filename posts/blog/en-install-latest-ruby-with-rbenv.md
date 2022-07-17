---
title: "Installing latest Ruby with rbenv"
date: "2022-07-07 07:00:00"
tags: 
  - ruby
  - rbenv
lang: en
about: ruby
---

The latest stable version of Ruby is `3.1.2`, but the pre-installed version of Ruby in M1 Mac is `2.6.8p205`.

I'll be using `rbenv` to install and manage latest version of Ruby.

## Check how Ruby was installed
```shell
> which -a ruby
/usr/bin/ruby
```

`/user/bin/ruby` is the system ruby that is pre-installed on macOS to support scripting. **Do not** try to delete this. We'll use a version manager (`rbenv`) to install the latest Ruby.

## Install rbenv
```shell
> brew install rbenv
```

## Initialize rbenv
```shell
> rbenv init
```

## Verify rbenv
```shell
> curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash

Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: not found
  The directory `/Users/gonexvii/.rbenv/shims' must be present in PATH for rbenv to work.
  Please run `rbenv init' and follow the instructions.

Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20220630)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `/Users/gonexvii/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 3.1.2
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

When I first verified it, it couldn't find `rbenv shims` in `PATH` and it's telling you to run `rbenv init` command again. 

This was solved by running the last `eval` expression given from `rbenv init`.
```shell
> rbenv init

# Load rbenv automatically by appending
# the following to ~/.zshrc:
  
  eval "$(rbenv init - zsh)"
```

Run the command

```shell
> eval "$(rbenv init - zsh)"
> source ~/.zshrc
```

and re-verify it.

```shell
> curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash

Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: OK
Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20220630)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `/Users/gonexvii/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 3.1.2
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

## Install Ruby
Check latest stable versions of Ruby:
```shell
> rbenv install -l

2.6.10
2.7.6
3.0.4
3.1.2
jruby-9.3.6.0
mruby-3.1.0
..
..
```

As of July 2022, `3.1.2` is the latest version of Ruby. 

```shell
> rbenv install 3.1.2

Downloading openssl-1.1.1n.tar.gz...
-> https://dqw8nmjcqpjn7.cloudfront.net/40dceb51a4f6a5275bde0e6bf20ef4b91bfc32ed57c0552e2e8e15463372b17a
Installing openssl-1.1.1n...
Installed openssl-1.1.1n to /Users/gonexvii/.rbenv/versions/3.1.2

Downloading ruby-3.1.2.tar.gz...
-> https://cache.ruby-lang.org/pub/ruby/3.1/ruby-3.1.2.tar.gz
Installing ruby-3.1.2...
ruby-build: using readline from homebrew
Installed ruby-3.1.2 to /Users/gonexvii/.rbenv/versions/3.1.2
```

## Set Global Version
```shell
> rbenv global 3.1.2
```

Verify the version:
```shell
> ruby -v

ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]
```

---

Reference:
- [https://antran.app/2021/m1_mac_part2/](https://antran.app/2021/m1_mac_part2/)
- [https://mac.install.guide/ruby/9.html](https://mac.install.guide/ruby/9.html)