// fetch("https://api.example.com/data")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//   console.error("通信エラー:", error);
//   alert("データの取得に失敗しました");
// });

//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user.name);
//     });
//   });

//   fetch("https://example.com/api", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Taro",
//     age: 25,
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log("送信成功:", result);
//   });

//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     const list = document.getElementById("userList");
//     list.innerHTML = "";
//     users.forEach((user) => {
//       const li = document.createElement("li");
//       li.innerText = user.name;
//       list.appendChild(li);
//     });
//   });


// document.addEventListener('DOMContentLoaded', () => {
//     const button1 = document.getElementById('button1')
//     button1.addEventListener('click', (event) => {
//         event.preventDefault()
//         console.log('OK clicked')
//     })
// })
// // ユーザー一覧を取得
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         const userList = document.getElementById('userList');
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.textContent = `${user.name}（${user.email}）`;
//             userList.appendChild(li);
//         });
//     })
//     .catch(error => {
//         console.error('ユーザーの取得に失敗しました:', error);
//     });

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