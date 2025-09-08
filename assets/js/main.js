
// Theme toggle and state
(function() {
  function handleSubmit(event) {
    console.log('ytest')
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    // Show success message
    document.getElementById("formSuccess").classList.remove("d-none");
    form.reset();
    form.classList.remove('was-validated');
  }
  // lazy image reveal
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    imgs.forEach(img=>{ if(img.complete) img.classList.add('loaded'); else img.onload=()=>img.classList.add('loaded'); });
    // nav active
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(a=>{ if(a.getAttribute('href') && a.getAttribute('href').endsWith(path)) a.classList.add('active'); });
})();
