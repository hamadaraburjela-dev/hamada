const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();

const english={
  '.brand>span:last-child':'Eng. Hamada <b>Engineering • Learning • Freelance</b>',
  '#site-nav a:nth-child(1)':'Services','#site-nav a:nth-child(2)':'Approach','#site-nav a:nth-child(3)':'Process','#site-nav a:nth-child(4)':'Contact me <span>↗</span>',
  '.hero .eyebrow':'<span></span> Engineering expertise, practical knowledge, reliable delivery',
  '#hero-title':'Expertise turned<br><em>into value.</em>',
  '.hero-copy':'I am an electrical engineer providing consulting, remote teaching and training, and freelance services for clients and students who need clear thinking and practical results.',
  '.hero-actions .button':'Work with me <span>↗</span>','.hero-actions .text-link':'Explore services <span>↓</span>','.hero-note p':'Consulting • Learning<br>Training • Freelance','.scroll-cue span':'Explore',
  '#services .section-kicker':'<span>02</span> Services','#services-title':'Specialist knowledge.<br>Practical solutions.','.intro-heading p':'Flexible services combining engineering expertise, clear communication, and dependable remote delivery.',
  '.service-card:nth-child(1) h3':'Electrical consulting','.service-card:nth-child(1) p':'Technical review, problem analysis, and clear engineering guidance to support sound decisions.',
  '.service-card:nth-child(2) h3':'Remote teaching','.service-card:nth-child(2) p':'Structured, accessible electrical engineering lessons tailored to each student’s level and goals.',
  '.service-card:nth-child(3) h3':'Remote training','.service-card:nth-child(3) p':'Focused, practical sessions that turn professional and digital knowledge into stronger performance.',
  '.service-card:nth-child(4) h3':'Freelance services','.service-card:nth-child(4) p':'Professional support across research, analysis, technical tasks, and content development.',
  '#approach .section-kicker':'<span>03</span> Approach','#approach .eyebrow':'<span></span> Committed to clarity and quality','#approach-title':'The goal is not simply to finish the task, but to <em>deliver it well.</em>','.approach-lead':'I begin by understanding the real need, define the scope clearly, and deliver organized, usable work with direct communication throughout.',
  '.principles article:nth-child(1) h3':'Understand first','.principles article:nth-child(1) p':'The right questions at the start reduce waste and keep the solution aligned with the real objective.',
  '.principles article:nth-child(2) h3':'Explain clearly','.principles article:nth-child(2) p':'Straightforward language, structured steps, and accessible explanations without losing precision.',
  '.principles article:nth-child(3) h3':'Commit and adapt','.principles article:nth-child(3) p':'Clear timelines and practical responses when project conditions or requirements change.',
  '#process .section-kicker':'<span>04</span> How we work','#process-title':'From an idea to<br>a clear result.','.process-head p':'A simple, direct experience—whether you need a focused consultation, lessons, training, or freelance support.',
  '.process-list li:nth-child(1) h3':'Send your request','.process-list li:nth-child(1) p':'Describe the need, objective, and expected timeline.',
  '.process-list li:nth-child(2) h3':'Define the scope','.process-list li:nth-child(2) p':'We agree on deliverables, timing, and cost before work begins.',
  '.process-list li:nth-child(3) h3':'Begin the work','.process-list li:nth-child(3) p':'Organized execution with clear updates when needed.',
  '.process-list li:nth-child(4) h3':'Receive the result','.process-list li:nth-child(4) p':'Final review and delivery in a ready-to-use format.',
  '#contact .section-kicker':'<span>05</span> Get started','#contact-title':'Have an idea or challenge?<br><em>Let’s turn it into a plan.</em>','#contact .brief-copy>p':'Contact me directly by WhatsApp or email. Secure online payment will be available soon.',
  '.contact-panel>a:nth-child(1)':'Contact via WhatsApp <span>↗</span>','#email-link':'Contact by email <span>↗</span>','.payment-button':'Pay now <span>Secure</span>','.contact-hint':'Secure card payment is processed through Togo.','.brief-link':'Or prepare your request first ↓',
  '#brief .section-kicker':'<span>06</span> Project brief','#brief-title':'Organize your idea<br>in one minute.','#brief-form .button':'Create request summary <span>↗</span>','#brief-form .form-note':'Your details remain in your browser and are not uploaded.',
  '#service option:nth-child(1)':'Select a service','#service option:nth-child(2)':'Electrical consulting','#service option:nth-child(3)':'Remote teaching','#service option:nth-child(4)':'Remote training','#service option:nth-child(5)':'Freelance service','#service option:nth-child(6)':'Not sure yet',
  '#stage option:nth-child(1)':'Exploring the idea','#stage option:nth-child(2)':'Ready to begin','#stage option:nth-child(3)':'Existing work needs support','#stage option:nth-child(4)':'Urgent task',
  '#policies .section-kicker':'<span>07</span> Business information and policies','#policies-title':'Professional service.<br>Clear terms.','.policy-head>p':'This website presents independent professional services delivered remotely. Scope, price, and delivery date are agreed before each engagement begins.',
  '.policy-grid article:nth-child(1) h3':'Pricing and payment','.policy-grid article:nth-child(1) p':'A clear proposal sets out the service, cost, and timeline. Online payment is not active yet, and no payment will be requested through this website until a secure approved gateway is available.',
  '.policy-grid article:nth-child(2) h3':'Delivery','.policy-grid article:nth-child(2) p':'Work starts after scope approval. Deliverables are provided electronically or through live sessions as agreed.',
  '.policy-grid article:nth-child(3) h3':'Cancellation and refunds','.policy-grid article:nth-child(3) p':'A request may be cancelled before work starts. After commencement, any refund is handled fairly based on completed work and the agreed terms.',
  '.policy-grid article:nth-child(4) h3':'Privacy','.policy-grid article:nth-child(4) p':'The website does not store visitor data. Information sent by email or WhatsApp is used only to review and respond to the request.',
  '.business-strip>div:nth-child(1) small':'Business activity','.business-strip>div:nth-child(1) strong':'Engineering, teaching, training, and independent remote services','.business-strip>div:nth-child(2) small':'Official email','.business-strip>div:nth-child(3) small':'Contact number',
  'footer .brand>span:last-child':'Eng. Hamada <b>Engineering • Learning • Freelance</b>','footer>p':'Engineering expertise and digital services with practical outcomes.','.footer-links a:nth-child(1)':'Policies','.footer-links a:nth-child(2)':'Contact','.footer-links a:nth-child(3)':'Back to top ↑','footer small':'© <span id="year"></span> All rights reserved',
  '#brief-dialog .eyebrow':'<span></span> Your request is ready','#brief-dialog h2':'Start the conversation clearly.','#copy-brief':'Copy summary','#send-email':'Send by email','#send-whatsapp':'Send by WhatsApp'
};

const labelEnglish={'#brief-form>label':'Service needed','#brief-form .form-row label:nth-child(1)':'Expected duration','#brief-form .form-row label:nth-child(2)':'Current stage','#brief-form>label:nth-of-type(2)':'Tell me what you need'};
const placeholders={'#location':'Session, week, month…','#challenge':'The objective, requested outcome, and any important deadline…'};
const arabicHtml=new Map();
Object.keys(english).forEach(selector=>{const element=document.querySelector(selector);if(element)arabicHtml.set(selector,element.innerHTML)});
const arabicLabels=new Map();
Object.keys(labelEnglish).forEach(selector=>{const element=document.querySelector(selector);if(element)arabicLabels.set(selector,element.firstChild.nodeValue)});
const arabicPlaceholders=new Map();
Object.keys(placeholders).forEach(selector=>{const element=document.querySelector(selector);if(element)arabicPlaceholders.set(selector,element.placeholder)});

let currentLang='ar';
function applyLanguage(lang){
  currentLang=lang==='en'?'en':'ar';
  const isEnglish=currentLang==='en';
  document.documentElement.lang=currentLang;
  document.documentElement.dir=isEnglish?'ltr':'rtl';
  document.title=isEnglish?'Eng. Hamada | Engineering Consulting & Training':'م. حمادة | استشارات هندسية وتدريب';
  document.querySelector('meta[name="description"]').content=isEnglish?'Electrical engineering consulting, remote teaching and training, and professional freelance services.':'خدمات هندسية واستشارية في مجال الكهرباء، تدريس وتدريب عن بُعد، وخدمات فريلانس باحترافية ووضوح.';
  Object.keys(english).forEach(selector=>{const element=document.querySelector(selector);if(element)element.innerHTML=isEnglish?english[selector]:arabicHtml.get(selector)});
  Object.keys(labelEnglish).forEach(selector=>{const element=document.querySelector(selector);if(element)element.firstChild.nodeValue=isEnglish?labelEnglish[selector]:arabicLabels.get(selector)});
  Object.keys(placeholders).forEach(selector=>{const element=document.querySelector(selector);if(element)element.placeholder=isEnglish?placeholders[selector]:arabicPlaceholders.get(selector)});
  document.querySelectorAll('.language-switch button').forEach(button=>{const active=button.dataset.lang===currentLang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  menuButton.querySelector('.sr-only').textContent=isEnglish?'Open menu':'فتح القائمة';
  document.querySelector('.skip-link').textContent=isEnglish?'Skip to content':'تخطَّ إلى المحتوى';
  document.querySelector('header .brand').setAttribute('aria-label',isEnglish?'Home':'الصفحة الرئيسية');
  nav.setAttribute('aria-label',isEnglish?'Primary navigation':'التنقل الرئيسي');
  document.querySelector('.language-switch').setAttribute('aria-label',isEnglish?'Choose language':'اختيار اللغة');
  document.querySelector('.hero-image').alt=isEnglish?'Engineer reviewing plans at a major construction site at dusk':'مهندس يراجع المخططات في موقع مشروع إنشائي عند الغروب';
  document.querySelector('.dialog-close').setAttribute('aria-label',isEnglish?'Close':'إغلاق');
  document.querySelector('#email-link').href=`mailto:hamada.r.aburjela@gmail.com?subject=${encodeURIComponent(isEnglish?'Service request from Eng. Hamada website':'طلب خدمة من موقع م. حمادة')}`;
  document.querySelectorAll('.process-list li b').forEach((arrow,index)=>{if(index<3)arrow.textContent=isEnglish?'↘':'↙'});
  document.querySelector('#year').textContent=new Date().getFullYear();
  localStorage.setItem('hamada-language',currentLang);
}
document.querySelectorAll('.language-switch button').forEach(button=>button.addEventListener('click',()=>applyLanguage(button.dataset.lang)));
applyLanguage(localStorage.getItem('hamada-language')||'en');

const form=document.querySelector('#brief-form');
const dialog=document.querySelector('#brief-dialog');
const output=document.querySelector('#brief-output');
const emailLink=document.querySelector('#send-email');
const whatsappLink=document.querySelector('#send-whatsapp');
let briefText='';
form.addEventListener('submit',event=>{
  event.preventDefault();
  const service=document.querySelector('#service').value;
  const duration=document.querySelector('#location').value.trim()||(currentLang==='en'?'To be confirmed':'يُحدّد لاحقًا');
  const stage=document.querySelector('#stage').value;
  const challenge=document.querySelector('#challenge').value.trim();
  briefText=currentLang==='en'?`SERVICE REQUEST — ENG. HAMADA\n\nService: ${service}\nExpected duration: ${duration}\nStage: ${stage}\n\nRequest details:\n${challenge}`:`ملخص طلب خدمة — م. حمادة\n\nالخدمة: ${service}\nالمدة المتوقعة: ${duration}\nالمرحلة: ${stage}\n\nتفاصيل الطلب:\n${challenge}`;
  output.textContent=briefText;
  emailLink.href=`mailto:hamada.r.aburjela@gmail.com?subject=${encodeURIComponent(currentLang==='en'?'Service request from website':'طلب خدمة من الموقع')}&body=${encodeURIComponent(briefText)}`;
  whatsappLink.href=`https://wa.me/972569210941?text=${encodeURIComponent(briefText)}`;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const status=document.querySelector('#copy-status');
document.querySelector('#copy-brief').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(briefText);status.textContent=currentLang==='en'?'Request summary copied.':'تم نسخ ملخص الطلب.'}catch{status.textContent=currentLang==='en'?'Select the text above and copy it manually.':'حدّد النص أعلاه وانسخه يدويًا.'}});

// Secure Togo payment flow
const paymentDialog=document.querySelector('#payment-dialog');
const openPayment=document.querySelector('#open-payment');
const paymentClose=document.querySelector('.payment-close');
const paymentForm=document.querySelector('#payment-form');
const paymentService=document.querySelector('#payment-service');
const customAmountWrap=document.querySelector('#custom-amount-wrap');
const paymentAmount=document.querySelector('#payment-amount');
const paymentStatus=document.querySelector('#payment-status');
const paymentSubmit=document.querySelector('#payment-submit');

if(openPayment&&paymentDialog){
  openPayment.addEventListener('click',()=>paymentDialog.showModal());
}
if(paymentClose&&paymentDialog){
  paymentClose.addEventListener('click',()=>paymentDialog.close());
  paymentDialog.addEventListener('click',event=>{if(event.target===paymentDialog)paymentDialog.close()});
}
if(paymentService){
  paymentService.addEventListener('change',()=>{
    const option=paymentService.selectedOptions[0];
    const isCustom=option?.value==='custom';
    customAmountWrap.hidden=!isCustom;
    paymentAmount.required=isCustom;
    if(!isCustom) paymentAmount.value='';
  });
}
if(paymentForm){
  paymentForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const option=paymentService.selectedOptions[0];
    const preset=Number(option?.dataset.amount||0);
    const amount=option?.value==='custom'?Number(paymentAmount.value):preset;
    const [countryCode,countryName]=document.querySelector('#payment-country').value.split('|');

    if(!Number.isFinite(amount)||amount<=0){
      paymentStatus.textContent='Enter a valid payment amount.';
      return;
    }

    paymentSubmit.disabled=true;
    paymentStatus.textContent='Creating your secure payment…';

    try{
      const response=await fetch('/api/create-payment',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          service:option?.textContent?.trim()||'',
          name:document.querySelector('#payment-name').value.trim(),
          email:document.querySelector('#payment-email').value.trim(),
          phone:document.querySelector('#payment-phone').value.trim(),
          city:document.querySelector('#payment-city').value.trim(),
          countryCode,
          countryName,
          phoneConnectedToWhats:document.querySelector('#payment-whatsapp').checked,
          amount,
          currency:document.querySelector('#payment-currency').value
        })
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.paymentUrl) throw new Error(data.error||'Payment could not be created.');
      window.location.assign(data.paymentUrl);
    }catch(error){
      paymentStatus.textContent=error.message||'Payment could not be created. Please try again.';
      paymentSubmit.disabled=false;
    }
  });
}
