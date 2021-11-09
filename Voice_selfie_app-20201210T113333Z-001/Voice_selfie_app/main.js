var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 recognition.onresult = function run (event) {

    console.log(event) 

        var Content = event.result[0][0].transcript;
        console.log(content);
        
        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
         speak();
 }

 function speak(){
     var synth = winddow.speechSynthesis;
     
     speak_data = "Taking your Selfie in 5 seconds";

     var utterThis = new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterThis);
     Webcam.attach(camera);

     setTimeout(function()
{
    take_snapshot();
    save();
}, 5000);
 }
camera = document.getElementById("camera");
 Webcam.set({
     width:360,
     height:250,
     image_formant : 'png',
     png_quality:90
 });
function take_snapshot()
{
    webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML ='<img id="selfie_image" src"'+data_url+'">';
    });
}

function save()
{
    link = document.getElementById("'link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}