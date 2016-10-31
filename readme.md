# implicit-submission-required-ctrl
* [honeo/implicit-submission-required-ctrl](https://github.com/honeo/implicit-submission-required-ctrl)  
* [implicit-submission-required-ctrl](https://www.npmjs.com/package/implicit-submission-required-ctrl)

## なにこれ
変換でEnterキーを多用する2byte文字圏で稀によくある、暗黙のサブミットによる誤爆を防ぐやつ。
```js
<form>
	<input type="text">
</form>
```
上記のようなフォームのテキスト入力欄でEnterを押しても、Ctrlを押していなければSubmitしないようにする。

## 使い方
```sh
$ npm i -S implicit-submission-required-ctrl
```
```js
import 'implicit-submission-required-ctrl';
```
