---
title: "線形と非線形データ構造の違い"
date: "2022-07-12 04:20:00"
tags: 
  - 線形データ構造
  - 非線形データ構造
lang: ja
---

# 線形データ構造
- データ項目は、順次、順番に並んでいる。
- 項目は1つのレイヤーに存在する。
- 一回の実行ですべての項目を走査し、アクセスすることができる。
- メモリブロックを事前に確保する必要があるため、メモリ利用効率が悪い。

![線形データ構造](/images/posts/linear-vs-non-linear/ilnear.svg)

# 非線形データ構造
- データ項目は非連続的に配置される。
- 項目は階層的に異なる層に存在する。
- 一回の実行ですべての項目をアクセスすることはできない。全階層を通過するためには複数回の実行が必要である。
- 構造によって、メモリの利用効率が異なる。

![非線形データ構造](/images/posts/linear-vs-non-linear/nonlinear.svg)

---

# 参考
- [https://www.programiz.com/dsa/data-structure-types](https://www.programiz.com/dsa/data-structure-types)
