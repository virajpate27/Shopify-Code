 // Quick View Code
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quick-view-btn').forEach(function (btn) {
      btn.addEventListener('click', function (event) {
        event.preventDefault(); // 🚫 Prevent default link navigation
        const handle = btn.dataset.handle;

        fetch(`/products/${handle}?view=quick-view`)
          .then(res => res.text())
          .then(html => {
           const modal = document.getElementById('quick-view-modal');
      const box = document.getElementById('quick-view-box');

      document.getElementById('quick-view-content').innerHTML = html;

      modal.classList.remove('opacity-0', 'pointer-events-none');
      box.classList.remove('scale-95', 'opacity-0');

      document.body.classList.add('overflow-hidden');
          });
      });
    });
  });

 function closeQuickView() {
 const modal = document.getElementById('quick-view-modal');
  const box = document.getElementById('quick-view-box');

  modal.classList.add('opacity-0', 'pointer-events-none');
  box.classList.add('scale-95', 'opacity-0');

  document.body.classList.remove('overflow-hidden');
}
