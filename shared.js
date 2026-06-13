(function () {
  // Nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('header nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // Scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  // Reveal elements already in the viewport on load
  window.addEventListener('load', function () {
    var vh = window.innerHeight;
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh) {
        el.classList.add('revealed');
      }
    });
  });
})();
