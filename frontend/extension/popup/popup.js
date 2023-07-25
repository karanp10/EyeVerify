var url = "https://source.unsplash.com/random/100x100/"

let j = 0;
// document.getElementById("myButton").addEventListener("click", myFunction);

function handleDragStart(e) {
    this.style.opacity = '0.4';
    console.log(e.detail);
}
  
function handleDragEnd(e) {
    this.style.opacity = '1';
}

async function getImages(){
    var items = document.getElementsByClassName("item");
    let omit = Math.floor(Math.random() * (16));
    j = Math.floor(Math.random() * (3));
    for(let i = 0; i < 16; i++){
        if(omit != i) fetchImage(items[i]);
        else{
            if(j == 0) items[i].src = "./../images/violin.jpg"
            if(j == 1) items[i].src = "./../images/mountain.jpg"
            if(j == 2) items[i].src = "./../images/hands.jpg"
        }
        items[i].addEventListener('dragstart', handleDragStart);
        items[i].addEventListener('dragend', handleDragEnd);
    }
    j = (j+1) % 3;
}


async function fetchImage(image) {
    try {
      const response = await fetch("https://source.unsplash.com/random/600x600/");
      
      if (!response.ok) throw new Error("Failed to fetch the image.");

      image.src = response.url;
    } catch (error) {
      console.error(error);
      image.src = "";
    }
  }

getImages()