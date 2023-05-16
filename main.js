var dbRef = firebase.database();

dbRef.ref('/allnews/top/top_title').once('value', e => {
    $("#title1").html(e.val())
 });
 dbRef.ref('/allnews/top/top_index').once('value', e => {
    $("#txt1").html(e.val())
 });