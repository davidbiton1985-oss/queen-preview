// תפריט מובייל משותף לשלושת המוקאפים: נבנה מהקישורים של התפריט הראשי, נפתח/נסגר, Esc, נעילת גלילה.
// בתוך תצוגה מוקטנת (iframe בדף הבחירה) מסתירים את סרגל המעבר בין הכיוונים
if (self !== top) document.documentElement.classList.add('embedded');
(() => {
  const burger = document.querySelector('.burger');
  const links = [...document.querySelectorAll('nav.nav a')];
  if (!burger || !links.length) return;
  const sheet = document.createElement('div');
  sheet.className = 'sheet'; sheet.id = 'sheet';
  sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true'); sheet.setAttribute('aria-label', 'תפריט');
  sheet.innerHTML = '<div class="sheet-top"><img src="assets/logo-queen.png" alt="Queen Real Estate" width="301" height="137"><button class="sheet-close" type="button" aria-label="סגירת התפריט"></button></div>'
    + '<nav class="sheet-nav" aria-label="ניווט ראשי"></nav>'
    + '<div class="sheet-foot"><a class="sheet-cta" href="#about">מוכרים דירה? לשיחת היכרות</a>'
    + '<div class="sheet-contact"><a href="tel:+972500000000" dir="ltr">050-000-0000</a><a href="#about">וואטסאפ</a><a href="#" lang="en" dir="ltr">English</a></div></div>';
  const nav = sheet.querySelector('.sheet-nav');
  links.forEach((a, i) => { const c = document.createElement('a'); c.href = a.getAttribute('href'); const t = document.createElement('span'); t.innerHTML = a.innerHTML; c.appendChild(t); c.style.setProperty('--i', i); nav.appendChild(c); }); // span עוטף — כדי ש-space-between לא יפצל "הכירו את Queen"
  document.body.appendChild(sheet);
  const set = (open) => {
    sheet.classList.toggle('open', open); document.documentElement.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    (open ? sheet.querySelector('.sheet-close') : burger).focus({ preventScroll: true });
  };
  burger.addEventListener('click', () => set(true));
  sheet.addEventListener('click', (e) => { if (e.target.closest('.sheet-close, a')) set(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && sheet.classList.contains('open')) set(false); });
  matchMedia('(min-width: 1141px)').addEventListener('change', (e) => { if (e.matches && sheet.classList.contains('open')) set(false); });
})();
