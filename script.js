const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();

const form=document.querySelector('#brief-form');
const dialog=document.querySelector('#brief-dialog');
const output=document.querySelector('#brief-output');
const emailLink=document.querySelector('#send-email');
const whatsappLink=document.querySelector('#send-whatsapp');
let briefText='';

form.addEventListener('submit',event=>{
  event.preventDefault();
  const service=document.querySelector('#service').value;
  const duration=document.querySelector('#location').value.trim()||'يُحدّد لاحقًا';
  const stage=document.querySelector('#stage').value;
  const challenge=document.querySelector('#challenge').value.trim();
  briefText=`ملخص طلب خدمة — م. حمادة\n\nالخدمة: ${service}\nالمدة المتوقعة: ${duration}\nالمرحلة: ${stage}\n\nتفاصيل الطلب:\n${challenge}`;
  output.textContent=briefText;
  emailLink.href=`mailto:hamada.r.aburjela@gmail.com?subject=${encodeURIComponent('طلب خدمة من الموقع')}&body=${encodeURIComponent(briefText)}`;
  whatsappLink.href=`https://wa.me/972569210941?text=${encodeURIComponent(briefText)}`;
  dialog.showModal();
});

document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const status=document.querySelector('#copy-status');
document.querySelector('#copy-brief').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(briefText);status.textContent='تم نسخ ملخص الطلب.'}catch{status.textContent='حدّد النص أعلاه وانسخه يدويًا.'}});
