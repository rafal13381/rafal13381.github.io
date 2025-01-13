function pokazCzas() { 
    var teraz = new Date(); 
    var godzina = teraz.getHours(); 
    var minuta = teraz.getMinutes(); 
    var sekunda = teraz.getSeconds(); 
    var data = teraz.toLocaleDateString(); 
    var czasElement = document.getElementById("czas"); 
    czasElement.innerHTML = "Hour: " + godzina + ":" + (minuta < 10 ? "0" + minuta : minuta) + ":" + (sekunda < 10 ? "0" + sekunda : sekunda) + "<br>Date: " + data;
} 
setInterval(pokazCzas, 1000);