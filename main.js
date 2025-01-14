function defaultLoad() {
    themeAuto();
}

function darkModeDropdown() {
    document.getElementById('darkModeNavbarDropdown').classList.add('active');
    document.getElementById('lightModeNavbarDropdown').classList.remove('active');
    document.getElementById('html').setAttribute('data-bs-theme', 'dark')
    console.log('theme changed to dark')
    document.cookie = "theme=dark; path=/";
 }

function lightModeDropdown() {
    document.getElementById('lightModeNavbarDropdown').classList.add('active');
    document.getElementById('darkModeNavbarDropdown').classList.remove('active');
    document.getElementById('html').setAttribute('data-bs-theme', 'light')
    console.log('theme changed to light')
    document.cookie = "theme=light; path=/";
}

function themeModeSwitch() {
   if(light = document.getElementById('html').getAttribute('data-bs-theme')) {
      document.getElementById('html').setAttribute('data-bs-theme', 'dark')
   }
   else if (dark = document.getElementById('html').getAttribute('data-bs-theme')) {
      document.getElementById('html').setAttribute('data-bs-theme', 'light')
   }
}                

function getCookie(name) {
   var dc = document.cookie;
   var prefix = name + '=';
   var begin = dc.indexOf(';'+ prefix);
   if (begin == -1) {
   begin = dc.indexOf(prefix);
   if (begin != 0) return null;
   }
   else
   {
   begin += 2;
   var end = document.cookie.indexOf(";", begin);
   if (end == -1) {
   end = dc.length;
}
   }
   return decodeURI(dc.substring(begin + prefix.length, end));
}

function themeAuto() {
var tc = getCookie('theme');
if (tc == 'dark') {
    document.getElementById('darkModeNavbarDropdown').classList.add('active');
    document.getElementById('lightModeNavbarDropdown').classList.remove('active');
    document.getElementById('html').setAttribute('data-bs-theme', 'dark')
    console.log('theme changed to dark')
    document.cookie = "theme=dark; path=/";
}
else if (tc == 'light') {
    document.getElementById('lightModeNavbarDropdown').classList.add('active');
    document.getElementById('darkModeNavbarDropdown').classList.remove('active');
    document.getElementById('html').setAttribute('data-bs-theme', 'light')
    console.log('theme changed to light')
    document.cookie = "theme=light; path=/";
}

}

function AbsenRandom() {
   document.getElementById('h2randomized').innerHTML(Math.floor(Math.random() * 36) + 1);
}

let mybutton = document.getElementById("btn-back-to-top")

window.onscroll = function () {
   scrollFunction();
 };

function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 mybutton.addEventListener("click", backToTop);

function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }