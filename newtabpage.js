if(!localStorage.getItem("savedUrl")){
    localStorage.setItem('savedUrl', JSON.stringify({image:"https://source.unsplash.com/1600x900/?nature"}));
}

let currUrl= JSON.parse(localStorage.getItem("savedUrl"));
document.getElementById("mainDisplay").src=currUrl.image;