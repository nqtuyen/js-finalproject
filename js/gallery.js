/*Name this external file gallery.js*/

function upDate(previewPic){
/* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
*/
    console.log('enter upDate')
    console.log(previewPic.alt)
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log(previewPic.src)
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    console.log('end upDate')
}

function unDo(){
/* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
*/
    console.log('enter unDo')
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
    document.getElementById('image').style.backgroundImage = '';
    console.log('end upDo')
}


function focus(){
    /* In this function you should 
        1) change the url for the background image of the div with the id = "image" 
        to the source file of the preview image
        
        2) Change the text  of the div with the id = "image" 
        to the alt text of the preview image 
    */
        previewPic = this;
        console.log('enter upDate')
        console.log(previewPic.alt)
        document.getElementById('image').innerHTML = previewPic.alt;
        console.log(previewPic.src)
        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
        console.log('end upDate')
    }
    
function loaded() {
    // get all images
    var imgs =document.getElementsByTagName('img');

    /* loop */
    for(var i = 0; i < imgs.length; i++){
        imgs[i].tabIndex = i;

        imgs[i].addEventListener("focus", focus);
        
        imgs[i].addEventListener("blur", unDo);
    }
    console.log('loaded')
}