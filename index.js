/*
	暗黙のSubmit対策
		text入力欄の送信をEnterからCtrl+Enterに置き換える
	要件
		上記のEnter誤爆防止
		type="text" 以外のInput要素のEnterによるsutmitイベントはそのまま
		他のJavaScriptによるForm要素へのsubmitイベント発火またイベント操作を邪魔しない
*/

// Var
let isCtrlKeyDown = false;

// ctrlキー状態メモ
function keyUpDownListener(e){
	isCtrlKeyDown = e.ctrlKey;
}
window.addEventListener('keyup', keyUpDownListener, true);
window.addEventListener('keydown', keyUpDownListener, true);

// input[type="text"] にCtrl+Enterでsubmit発火
window.addEventListener('keydown', (e)=>{
	const isCtrlEnter = e.keyCode===13 && e.ctrlKey;
	const input_text = e.target.matches('form input[type="text"]') && e.target;
	if( input_text && isCtrlEnter ){
		const form_parent = input_text.closest('form');
		form_parent.submit();
	}
}, true);

/*
	1. Form要素で発生したsubmitイベントで
	2. それがForm要素の子孫であるtype="text"なInput要素をフォーカス中に発生したイベントだった場合
	3. ctrlキーが押されていなければ打ち消す
*/
window.addEventListener('submit', (e)=>{

	const form = e.target.tagName==='FORM' && e.target;
	const input_text = document.activeElement.matches('input[type="text"]') && document.activeElement;

	form && input_text && !isCtrlKeyDown && e.preventDefault();

}, true);


export default true;
