const api = "https://api.thecatapi.com/v1/breeds";
async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    printData(data);
}
function printData(data) {
    const header = document.querySelector("#header");
    const content = document.querySelector("#content");
    header.innerHTML += `
    <select class="form-control" onchange="getCh(this.value)" >
    <option >Please Select</option>
    ${data.map(ids => `<option value="${ids.id}" >${ids.name}</option>`)}
    </select>
    `
}
async function getCh(e) {
    if (e !== "Please Select") {
        const responseImg = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + e);
        const dataImg = await responseImg.json();
        const id=dataImg[0].id;
        console.log(dataImg)
        content.innerHTML = `
        <h2>  this is The Cats ID : ${id} </h2>
        <img src="${dataImg[0].url}" alt=" photo of cat's id ${id} width="250" height="500">
        `;
        const response = await fetch("https://api.thecatapi.com/v1/images/"+id );
        const data = await response.json();
        console.log(data);
            content.innerHTML +=`
        <h2> this Cat's origin is from : ${data.breeds[0].origin} </h2>
        <p> Description: ${data.breeds[0].description} </p>
        <h3>Life Span :  ${data.breeds[0].life_span} </h3>
        <caption> <a class="link-primary" href="${data.breeds[0].wikipedia_url}">For more information click here!</a> </caption>
        `
    }

}
getData();