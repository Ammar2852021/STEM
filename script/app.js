function setLanguage(lang) {
   var button = document.getElementById('languageButton');
   if (lang === 'ar') {
       // document.body.style.direction = 'rtl';
       button.innerHTML = 'العربية';
   } else if (lang === 'en') {
       // document.body.style.direction = 'ltr';
       button.innerHTML = 'English';
   }
}