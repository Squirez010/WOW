(function () {
  'use strict';

  var grid = document.getElementById('sponsors-grid');
  if (!grid) return;

  var cards = grid.querySelectorAll('[data-sponsor]');
  var duration = 350; // ms, match CSS transition

  function closeAllExcept(openCard) {
    cards.forEach(function (card) {
      if (card === openCard) return;
      var body = card.querySelector('.sponsor-card-body');
      var header = card.querySelector('.sponsor-card-header');
      var toggle = card.querySelector('.sponsor-card-toggle');
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        if (body) body.style.maxHeight = '0';
        if (header) header.setAttribute('aria-expanded', 'false');
        if (toggle) toggle.setAttribute('aria-label', 'Expand details');
      }
    });
  }

  function setExpanded(card, expanded) {
    var body = card.querySelector('.sponsor-card-body');
    var header = card.querySelector('.sponsor-card-header');
    var toggle = card.querySelector('.sponsor-card-toggle');
    if (!body || !header) return;

    if (expanded) {
      closeAllExcept(card);
      card.classList.add('expanded');
      // Measure content for smooth height transition
      body.style.maxHeight = 'none';
      var height = body.scrollHeight;
      body.style.maxHeight = '0';
      requestAnimationFrame(function () {
        body.style.maxHeight = height + 'px';
      });
      header.setAttribute('aria-expanded', 'true');
      if (toggle) toggle.setAttribute('aria-label', 'Collapse details');
    } else {
      card.classList.remove('expanded');
      body.style.maxHeight = '0';
      header.setAttribute('aria-expanded', 'false');
      if (toggle) toggle.setAttribute('aria-label', 'Expand details');
    }
  }

  function toggleCard(card) {
    var isExpanded = card.classList.contains('expanded');
    setExpanded(card, !isExpanded);
  }

  cards.forEach(function (card) {
    var header = card.querySelector('.sponsor-card-header');
    var toggle = card.querySelector('.sponsor-card-toggle');
    var body = card.querySelector('.sponsor-card-body');

    if (body) body.style.maxHeight = '0';

    function handleOpen() {
      toggleCard(card);
    }

    if (header) {
      header.addEventListener('click', function (e) {
        if (e.target === toggle) return;
        handleOpen();
      });
    }
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        handleOpen();
      });
    }
  });

  // Optional: allow keyboard (Enter/Space) on header and toggle
  grid.addEventListener('keydown', function (e) {
    var card = e.target.closest('[data-sponsor]');
    if (!card) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var header = card.querySelector('.sponsor-card-header');
    var toggle = card.querySelector('.sponsor-card-toggle');
    if (e.target === header || e.target === toggle) {
      e.preventDefault();
      toggleCard(card);
    }
  });
})();
