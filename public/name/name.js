const nameText = document.getElementById('nameText');
const msg = document.getElementById('msg');
const checkButton = document.getElementById('checkButton');
const errorMessage = document.getElementById('errorMessage'); // エラーメッセージ取得

checkButton.addEventListener('click', buttonClick);

function buttonClick() {
    const name = nameText.value.trim(); // 前後の空白を除去

    if (name === '') {
        errorMessage.style.display = 'block';  // エラーメッセージ表示
        msg.innerText = '';                    // 挨拶メッセージはクリア
    } else {
        errorMessage.style.display = 'none';   // エラー非表示
        msg.innerText = `こんにちは、${name}さん😊！`;
    }
}

