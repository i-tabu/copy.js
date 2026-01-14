//courtesy :)
//https://github.com/i-tabu/copy.js

(function () {
  function initCopyTags() {
    document.querySelectorAll('copy').forEach(function (el) {
      if (el.dataset.copyInit) return;
      el.dataset.copyInit = '1';

      // Cache original text ONLY
      var originalText = el.textContent.trim();

      el.style.position = 'relative';
      el.style.display = 'inline-block';
      el.style.overflow = 'visible';

      var btn = document.createElement('span');
      btn.textContent = 'copy';
      btn.style.cssText = `
        position:absolute;
        left:100%;
        margin-left:6px;
        top:0;
        font-size:12px;
        color:#007bff;
        cursor:pointer;
        display:none;
        user-select:none;
        white-space:nowrap;
      `;

      function show() {
        btn.style.display = 'inline';
      }

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
          setTimeout(function () {
            btn.textContent = 'copy';
          }, 1000);
        });
      });

      el.appendChild(btn);
    });
  }

  document.addEventListener('DOMContentLoaded', initCopyTags);
})();
