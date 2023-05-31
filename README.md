# Wijmo FlexGridバグ報告用レポジトリ

## 発生環境

| Name | Version |
|---|---|
| Wijmo | 2022v2, 2023v1（2021v3, 2022v1では発生しない） |
| Browser | Chrome 114 |
| Node.js | 18.16.0 |
| npm | 9.5.1 |


## 発生現象

`DataType=Number` の列を持つ FlexGrid に `getError` を定義した `CollectionView` を設定した際に、表示行が2行以上存在する場合、フォーカスが `DataType=Number` の列内で高速異動し続け、 FlexGrid の操作ができなくなる。


## サンプルの実行

```
npm install
npm run serve
```
