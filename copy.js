//courtesy :)
//https://github.com/i-tabu/copy.js
(function () {
  function initCopyTags() {
    document.querySelectorAll('copy').forEach(function (el) {
      if (el.dataset.copyInit) return;
      el.dataset.copyInit = '1';

      var originalText = el.textContent.trim();

      el.style.position = 'relative';
      el.style.display = 'inline-block';

      var btn = document.createElement('span');
      btn.textContent = 'copy';
      btn.style.cssText = `
        position:absolute;
        top:-20px;
        right:-8px;
        font-size:11px;
        padding:2px 6px;
        border-radius:4px;
        background:#111;
        color:#fff;
        cursor:pointer;
        display:none;
        user-select:none;
        white-space:nowrap;
        z-index:10;
      `;

      function show() { btn.style.display = 'inline-block'; }
      function hide() {
        btn.style.display = 'none';
        btn.textContent = 'copy';
      }

      el.addEventListener('mouseenter', show);
      el.addEventListener('mouseleave', hide);
      btn.addEventListener('mouseenter', show);
      btn.addEventListener('mouseleave', hide);

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        navigator.clipboard.writeText(originalText).then(function () {
          btn.textContent = 'copied';
        });
      });

      el.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', initCopyTags);
})();
