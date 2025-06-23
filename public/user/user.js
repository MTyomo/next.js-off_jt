const loading = document.getElementById('loading');
const userList = document.getElementById('userList');
// const li = document.createElement("li");ここで定義すると一人しかもってこれない（なぜ）

// ユーザー一覧を取得
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        // 「読み込み中...」を非表示にする
        loading.style.display = 'none';

        const list = document.getElementById("userList");
        list.innerHTML = "";
        users.forEach((user) => {
            const li = document.createElement('li');
            li.textContent = `${user.name}（${user.email}）`;
            userList.appendChild(li);
        });
    })

    .catch(error => {
        loading.textContent = 'ユーザーの取得に失敗しました';
        console.error('ユーザーの取得に失敗しました:', error);
    });