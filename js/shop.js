document.querySelectorAll('.filter-btn').forEach(function (b) {
  b.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(function (x) { x.classList.remove('active'); });
    b.classList.add('active');
    var filter = b.dataset.filter || 'all';
    document.querySelectorAll('.product-card').forEach(function (card) {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        var cat = (card.dataset.category || '').toLowerCase();
        card.style.display = cat.includes(filter) ? '' : 'none';
      }
    });
  });
});