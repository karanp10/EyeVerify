var url = "https://source.unsplash.com/random/100x100/"
var dragged;
var omit;
let valid_drag = false;
let count = 0;
let seen = [];
let stats = {
    "start" : null,
    "end" : null,
    "startX" : null,
    "startY" : null,
    "endX" : null,
    "endY" : null
}

let velocities = [];

function computeVelocity() {
    let time =  stats.end - stats.start;
    let xdist = stats.endX - stats.startX;
    let ydist = stats.endY - stats.startY;
    
    let distance = Math.sqrt((xdist * xdist) + (ydist * ydist));
    
    
    velocities.push(distance / time);
}


function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragged = this.dataset.item
    
    stats.startX = e.x;
    stats.startY = e.y;
    stats.start = e.timeStamp;

}
  
function handleDragEnd(e) {
    this.style.opacity = '1';
    stats.endX = e.x;
    stats.endY = e.y;
    stats.end = e.timeStamp;

    if(valid_drag){
        if(omit == dragged) count++;
        computeVelocity();
        console.log(velocities);

        if(count == 3){
            window.location = "./success.html"
        }

        // Reset Images
        getImages();
        valid_drag = false;
    }

}

async function getImages(){
    var items = document.getElementsByClassName("item");
    omit = Math.floor(Math.random() * (16));
    let j = Math.floor(Math.random() * (3));
    while(seen.length < 3 && seen.includes(j)){
        j = Math.floor(Math.random() * (3));
    }
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
    seen.push(j);
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

function draggedOn(){
    valid_drag = true;
}

function draggedOff(){
    valid_drag = false;
}

let dropbox = document.getElementById("dragbox");
dropbox.addEventListener("dragenter", draggedOn);
// dropbox.addEventListener("dragleave", draggedOff);