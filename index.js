var num = Math.floor(Math.random() * 100) + 1;

function chek() {
    var data = document.getElementById("inputdata").value;
    data = Number(data);

    if (data === num) {
        document.getElementById("result").innerText = "🎉 Well done! Correct guess.";
    } else {
        document.getElementById("result").innerText = "❌ Try again...";
    }
}
