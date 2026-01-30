(function(){
  const panel = document.getElementById('mobilePanel');
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');

  function open(){
    panel.style.display = 'block';
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded','true');
  }
  function close(){
    panel.style.display = 'none';
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded','false');
  }

  openBtn?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);

  panel?.addEventListener('click', (e)=>{
    if(e.target === panel) close();
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && panel && panel.style.display === 'block') close();
  });

  // Close drawer after clicking a nav link
  document.querySelectorAll('.mobile-nav a').forEach(a=>{
    a.addEventListener('click', ()=> close());
  });

  // Optional: basic client-side form UX (disable submit until required fields present)
  const form = document.querySelector('form[data-validate="1"]');
  if(form){
    const submit = form.querySelector('button[type="submit"]');
    const required = form.querySelectorAll('[required]');
    const check = ()=>{
      let ok = true;
      required.forEach(el=>{
        if(!el.value || !el.value.trim()) ok = false;
      });
      if(submit) submit.disabled = !ok;
      if(submit) submit.style.opacity = ok ? '1' : '.6';
    };
    required.forEach(el=> el.addEventListener('input', check));
    check();
  }

  // Update footer year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
