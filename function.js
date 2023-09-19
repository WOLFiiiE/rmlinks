// FOOTER STUFF

function updateYear() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("year").innerHTML = year;
}

const RAINCODES= ["rain rain rain", "雨 雨 雨", "lluvia lluvia lluvia","مطر مطر مطر","ਮੀਂਹ ਮੀਂਹ ਮੀਂਹ","дождь дождь дождь","mvura mvura mvura","pluie pluie pluie","hujan hujan hujan","бороо бороо бороо","ฝน ฝน ฝน","વરસાદ વરસાદ વરસાદ"];

function updateRRR() {
    document.getElementById("RRR").innerHTML = RAINCODES[Math.floor(Math.random() * (RAINCODES.length))];
}



//SPINNER
const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

// ONLOAD
function startupLoad() {
    updateYear();
    setInterval(updateRRR, 1000);
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 1000);
}