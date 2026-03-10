(function() {
  if (typeof window.PROJECTS_DATA === 'undefined' || !Array.isArray(window.PROJECTS_DATA)) return;
  var projects = window.PROJECTS_DATA;

  // Projects page: render full list (oldest at top = array order)
  var listEl = document.getElementById('project-list');
  if (listEl) {
    listEl.innerHTML = projects.map(function(p) {
      return '<li class="project-card">' +
        '<h3 class="project-place">' + escapeHtml(p.place) + '</h3>' +
        '<p class="project-why">' + escapeHtml(p.why) + '</p>' +
        '<div class="project-testimonial">' +
          '<blockquote>' + escapeHtml(p.testimonial) + '</blockquote>' +
          '<cite>' + escapeHtml(p.cite) + '</cite>' +
          '<p class="role">' + escapeHtml(p.role) + '</p>' +
        '</div>' +
        '</li>';
    }).join('');
  }

  // Homepage: latest project = last in list (most recent), all from projects.js
  var latest = projects[projects.length - 1];
  if (latest) {
    var placeEl = document.getElementById('latest-project-place');
    if (placeEl) placeEl.textContent = latest.place;

    var imgEl = document.getElementById('latest-project-image');
    if (imgEl) {
      if (latest.image) {
        imgEl.src = latest.image;
      }
      imgEl.alt = 'Latest project: ' + latest.place;
    }

    var descEl = document.getElementById('latest-project-desc');
    if (descEl && (latest.shortDesc || latest.why)) descEl.textContent = latest.shortDesc || latest.why;
  }

  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
