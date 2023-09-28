/* 
OLD METHOD OF FETCH
fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
.then(function(response){
    return response.json()
})
.then(function(data){ 
    console.log(data);
})*/
/*NOW WE USE PROMISES*/
async function get() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");
    const data = await response.json();
    data.map(function (ids) {
        console.log(ids.id)
    })
    console.log(data);
    document.querySelector("#content h1").innerHTML = "<h1 style='color:purple'> This cat id is " + data[0].id + "</h1>"
    document.querySelector("#content img").src = data[0].url;
    document.querySelector("#ids").innerHTML =
        `
        <select  id="selec" onchange="getImg(this.value)" >
            ${data.map(ids => `<option id="opt"  >${ids.id}</option>`)}
         </select>
    `
    /*
     HERE IM TRYING THE addEventListener (DIDNT WORK )!!!!!!!!!!!!!!!!!
    document.getElementById("selec").addEventListener("change", myFunction);
    function myFunction() {
        var x = document.getElementById("opt");
        var i=0;
        while(data[i]!==x.value){
            alert(data[i].id);
            alert(i);
            i++;
        }
        document.querySelector("#content img").src = data[i].url;   
        } */
}
/*
 HERE IM TRYING onchange method (didnt work because 1 cannot find data because its get's local after that u tried to fetch data again in the getImg only to find out that this API generate random arrays : ) )
function getImg(e) {
    var i = 0;
    while (data[i] != e) {
        alert(data[i].id);
        alert(i);
        i++;
    document.querySelector("#content img").src = data[i].url; } 
}*/

        
get();