let count = 0;

const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateCount(change) {
  count += change;
  countElement.textContent = count;
  showFloatingText(change, event.target);
}

// ここでカウント処理を行う関数を用意
function showFloatingText(change, buttonElement) {
  const floating = document.createElement('div');
  floating.className = 'floating';
  floating.textContent = change > 0 ? '+1' : '-1';

  // ボタンの位置を元に配置（相対位置）
  const rect = buttonElement.getBoundingClientRect();
  floating.style.left = `${rect.left + rect.width / 2}px`;
  floating.style.top = `${rect.top - 10 + window.scrollY}px`;

  document.body.appendChild(floating);

  // アニメーション後に削除
  setTimeout(() => {
    floating.remove();
  }, 1000);
}

// ボタンのクリック時に処理
incrementButton.addEventListener('click', (event) => updateCount(1, event));
decrementButton.addEventListener('click', (event) => updateCount(-1, event));
