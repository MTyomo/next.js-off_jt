document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // ページリロードを防ぐ

    // 各要素取得
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const job = document.getElementById('job').value;
    const bio = document.getElementById('bio').value.trim();

    // エラーメッセージ初期化
    document.getElementById('nameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('jobError').textContent = '';

    // バリデーション
    let isValid = true;

    if (!name) {
        document.getElementById('nameError').textContent = '名前は必須です';
        isValid = false;
    }

    if (isNaN(age) || age < 18) {
        document.getElementById('ageError').textContent = '年齢は18歳以上の数値を入力してください';
        isValid = false;
    }

    if (!job) {
        document.getElementById('jobError').textContent = '職業を選択してください';
        isValid = false;
    }

    if (!isValid) return;

    // JSONに変換してコンソール出力
    const formData = {
        name,
        age,
        job,
        bio
    };

    console.log('送信データ:', JSON.stringify(formData, null, 2));

    // モーダルにデータ表示
  let displayData = `名前: ${formData.name}\n年齢: ${formData.age}\n職業: ${formData.job}\n自己紹介: ${formData.bio}`;
document.getElementById('modalData').textContent = displayData;
    document.getElementById('modal').style.display = 'block';
});

// モーダルの閉じ方
document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

// モーダルの外側クリックで閉じる
window.addEventListener('click', function (e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
