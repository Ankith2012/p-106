var dog= 0
var cat=0
var bird=0
var background_noise=document.getElementById('pngtree-noise-abstract-texture-dark-gray-noise-background-image_879896.jpg')
function Record() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier('Note for teacher:the link in teachable machine isnot loading', modelReady )
}

function modelReady() {
    classifier.classify(gotResults)
}

function gotResults(error,results) {
    if (error) {
        console.error(error)
    }
    else{
        console.log(results)
        randomnumber_r = Math.floor(Math.random*255) + 1
        randomnumber_g = Math.floor(Math.random*255) + 1
        randomnumber_b = Math.floor(Math.random*255) + 1

      document.getElementById('Result').innerHTML= results[0].label 
      document.getElementById('Confidence').innerHTML= (results[0].confidence*100).toFixed(2) + '%';
      document.getElementById('Result').style.color='rgb(' + randomnumber_r + ',' +randomnumber_g + ',' +randomnumber_b +')';
      document.getElementById('Confidence').style.color='rgb(' + randomnumber_r + ','+randomnumber_g + ',' +randomnumber_b +')';
    }}