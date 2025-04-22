function applyLanguage(data) {
  for (const key in data) {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = data[key];
    }
  }
  document.body.style.visibility = 'visible';
}

function loadLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('language', lang);

  if (lang === "pl") {
    location.reload();
    return;
  }

  fetch(`local/${lang}.json`)
    .then(res => res.json())
    .then(applyLanguage);
}

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('language');

    if (savedLang && savedLang !== 'pl') {
      document.documentElement.lang = savedLang;

      fetch(`local/${savedLang}.json`)
        .then(res => res.json())
        .then(applyLanguage);
    } else {
      document.body.style.visibility = 'visible';
    }
  });
})();