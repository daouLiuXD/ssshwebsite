
//var title=$("#title").val();
//var content=$("#content").val();
//var dbRef = firebase.database();
var title=document.getElementById("title");
var content=document.getElementById("content");
var btn=document.getElementById("postbtn");
var list=document.getElementById("list");

postbtn.addEventListener("click",function(){
    list.innerHTML=list.innerHTML+ `
    <div class="article">
        <h3>${title.value}</h3>
        <p>${content.value}</p>
    </div>`;
    title.value="";
    content.value="";
    db.ref('top_title').set(title);
    db.ref('top_index').set(content);
})