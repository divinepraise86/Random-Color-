function getRandomValue(){
    return Math.floor(Math.random() * 256);
}

function generateColor(){
    let format = document.getElementById("format").value;
    let colorBox = document.getElementById("color-box");
    let colorCode = "";
if (format == "hex") {
    colorCode = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
} else{
    colorCode = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
}
colorBox.style.background = colorCode;
colorBox.textContent = colorCode;
}

function copyCode(){
    let text = document.getElementById("color-box").textContent;
    navigator.clipboard.writeText(text).then(() => {alert("Copied: " + text);

    });
}

