
    fetch('components/footer.html')
     .then(res => res.text())
     .then(data => {
       document.getElementById('footer-container').innerHTML = data;
     });

    fetch('components/language-switcher.html')
      .then(response => response.text())
      .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
      });