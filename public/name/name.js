// function butotnClick() {
//     msg.innerText = 'お名前は' + nameText.value + 'さんですね';
// }

// let nameText = document.getElementById('nameText');
// let msg = document.getElementById('msg');

// let checkButton = document.getElementById('checkButton');
// checkButton.addEventListener('click', butotnClick);

function buttonClick() {
    const name = nameText.value.trim(); // 前後の空白を除去

    if (name === '') {
        errorMessage.style.display = 'block';  // エラーメッセージ表示
        msg.innerText = '';                    // 挨拶メッセージはクリア
    } else {
        errorMessage.style.display = 'none';   // エラー非表示
        msg.innerText = 'こんにちは、' + name + 'さん😊！';
    }
}

let nameText = document.getElementById('nameText');
let msg = document.getElementById('msg');
let checkButton = document.getElementById('checkButton');
let errorMessage = document.getElementById('errorMessage'); // エラーメッセージ取得

checkButton.addEventListener('click', buttonClick);

