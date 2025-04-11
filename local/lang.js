function loadLanguage(lang) {
  if (lang === "pl") {
    location.reload();
    return;
  }

  fetch(`local/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.getElementById(key);
        if (el) el.textContent = data[key];
      }
    });
}