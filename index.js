var num = Math.floor(Math.random() * 100) + 1;
var chans = 5;
 document.getElementById("chnes").innerText = "your attampt ::"+" " +(chans);
function chek() {
       if(chans==0){
        var over = document.getElementById("hide")
          over.style.display ="none"
         document.getElementById("result").innerText = "Game over......!";  
       }else{
    var data = document.getElementById("inputdata").value;
    data = Number(data);

    if (data === num) {
        document.getElementById("result").innerText = "🎉 Well done! Correct guess.";
    } else {
        document.getElementById("result").innerText = "❌ Try again...";
        chans--;
    }}
     document.getElementById("chnes").innerText = "your attampt"+" " +(chans+1);
}
