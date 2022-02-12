function hoverImg(){
    let img = document.querySelector(".nft-img");
    let imgView = document.querySelector(".img-view");
    let cardTitle = document.querySelector(".nft-card-title");
    let authorName = document.querySelector(".nft-author span > a");
    
    img.classList.add("toggle-img");
    imgView.hidden = false;
    imgView.classList.add("toggle-imgView");
    cardTitle.classList.add("toggle-card-title-color");
    authorName.classList.add("toggle-card-title-color");
}

function removeHoverImg(){
    let img = document.querySelector(".nft-img");
    let imgView = document.querySelector(".img-view");
    let cardTitle = document.querySelector(".nft-card-title");

    img.classList.remove("toggle-img");
    imgView.hidden = true;
    imgView.classList.remove("toggle-imgView");
    cardTitle.classList.remove("toggle-card-title-color")
}