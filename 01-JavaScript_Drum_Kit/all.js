// 使用者運用鍵盤事件觸發兩件事
// 1.開啟相對應的聲音檔
// 2.顯示相對應 DOM 的樣式

(function() {
  function playHandler(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const domKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    if (domKey) domKey.classList.add('playing');
  }
  function removeTransition(e) {
    if (e.propertyName === 'transform') {
      e.currentTarget.classList.remove('playing');
    }
  }
  window.addEventListener('keydown', playHandler);
  const domKeys = document.querySelectorAll('.key');
  domKeys.forEach(item =>
    item.addEventListener('transitionend', removeTransition)
  );
  // 自己練習的寫法：用 window 去監聽動畫結束事件，
  // 只要有 transform 被觸發 就把每個被觸發的對象移除 css
  //   window.addEventListener('transitionend', removeTransition);
  //   function removeTransition(e) {
  //     const domKeys = document.querySelectorAll('.key');
  //     if (e.propertyName === 'transform') {
  //       domKeys.forEach(function(key) {
  //         key.classList.remove('playing');
  //       });
  //     }
  //   }
})();

