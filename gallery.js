/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    console.log("upDate event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);
    let current_image = "url(" + previewPic.src + ")"
    document.querySelector("#image").innerHTML = previewPic.alt;
    document.querySelector("#image").style.backgroundImage = current_image;
	}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    console.log("unDo event triggered");
    document.querySelector("#image").style.backgroundImage = '';
    document.querySelector("#image").innerHTML = "Hover over an image below to display here.";
		
	}