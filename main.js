var dbRef = firebase.database();

dbRef.ref('/allnews/top/top_title').once('value', e => {
    $("#title1").html(e.val())
 });
dbRef.ref('/allnews/top/top_index').once('value', e => {
   $("#txt1").html(e.val())
});

var div = document.getElementById("mainbox");
var section = div.getElementsByTagName("ul");
for(let h = 0, len0 = section.length; h < len0; ++h){
   var ul = document.getElementById("box"+h);
   var li = ul.getElementsByTagName("li");
   for(let i = 0, len1 = li.length; i < len1; ++i){
      li[i].onclick = function () {
         console.log(i)
         window.location.href='post.html';
      }
   }
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
//以下為標題隱藏動畫
let mytitle = document.getElementById("center");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction2()};
}
function scrollFunction2() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mytitle.style.display = "block";
  } else {
    mytitle.style.display = "none";
  }
}