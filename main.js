var canvas = new fabric.Canvas('MYCANVAS');
 var x= document.getElementById("myAudio");
var ImageObject="";
function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        ImageObject=Img;
        ImageObject.scaleToWidth(700);
        ImageObject.scaleToHeight(510);
        ImageObject.set({
            top:0,
            left:0
        });
        canvas.add(ImageObject);
    });
	
}

function play_song(){
	x.play();
}
