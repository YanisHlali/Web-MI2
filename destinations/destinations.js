function test() {
    let paysTD = document.querySelectorAll("#pays");
    let circuitTD = document.querySelectorAll("#circuit");
    let tarifTD = document.querySelectorAll("#tarif");
    let reservationTD = document.querySelectorAll("#reservation");

    download("test.json", "TEST");

    $.getJSON('http://localhost:5500/destinations/destinations.json', function(data) {
        let i = 0;
        var blob = new Blob([data], {type:'octet/stream'});
        for (const property in data) {
            paysTD[i].textContent = data[property].pays;
            circuitTD[i].innerHTML = 
            `<img src="images/${data[property].pays.toLowerCase().replace("é","e")}.jpg"/>`;
            tarifTD[i].textContent = data[property].tarif;
            reservationTD[i].textContent = data[property].reservation;
            i++;
        }
    });


    
}


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }