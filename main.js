//https://teachablemachine.withgoogle.com/models/0cCY1UTsS/
Webcam.set({
    width: 340, height: 300, image_format: "png", png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function capturar() {
    Webcam.snap(function(data_uri){
        document.getElementById("foto").innerHTML = '<img id="img1" src="'+data_uri+'">'
    });
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0cCY1UTsS/model.json", modelLoad);
function modelLoad() {
    console.log("Modelo carregado");
}
function previsao() {
    img = document.getElementById("img1");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("resultado1").innerHTML = results[0].label;
        document.getElementById("resultado2").innerHTML = results[1].label;
    }
}