let isim = prompt("isim giriniz:");
let ad = document.getElementById("myName");
ad.innerHTML = isim;

function showTime(){ 
    let time = new Date();
    let saat = time.getHours();
    let dakika = time.getMinutes();
    let saniye = time.getSeconds();
    let day = time.getDay();
   
    if (saat < 10) {
        saat = `0${saat}`;
    }

    if (dakika < 10) {
        dakika = `0${dakika}`;
    }

    if (saniye < 10) {
        saniye = `0${saniye}`;
    }

    let gun;
    switch (day) {
        case 0:
            gun = "Pazar";
            break
        case 1:
            gun = "Pazartesi";
            break
        case 2:
            gun = "Salı" ;
            break
        case 3:
            gun = "Çarşamba";
            break
        case 4:
            gun = "Perşembe";
            break
        case 5:
            gun = "Cuma";
            break
        case 6:
            gun = "Cumartesi";
            break
    }



  myClock.innerHTML = (`${saat} : ${dakika} : ${saniye} ${gun}`)
  setTimeout(showTime, 1000);
}
 




