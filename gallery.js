function upDate(previewPic){
    console.log("upDate event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);
    let current_image = "url(" + previewPic.src + ")"
    document.querySelector("#image").innerHTML = previewPic.alt;
    document.querySelector("#image").style.backgroundImage = current_image;
	}

function unDo(){
    console.log("unDo event triggered");
    document.querySelector("#image").style.backgroundImage = '';
    document.querySelector("#image").innerHTML = "Hover over an image below to display here.";
		
	}

/* Changes style when images preview windows are in focus */

function isColored(current) {
    console.log("isColored event triggered");
    current.style.filter = "grayscale(0%)";
    current.style.borderColor = "red";
    upDate(current);
}

function resetColor(current) {
    console.log("resetColor event triggered");
    current.style.filter = "grayscale(100%)";
    current.style.borderColor = "black";
    unDo(current);
}

/* Adds a tabindex to each fo the preview images */

function addTab() {
    console.log("addTab function triggered")
    previewImages = document.querySelectorAll(".preview img");
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute("tabindex", i + 1);
    }
}
