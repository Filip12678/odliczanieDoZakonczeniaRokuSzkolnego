var vacationDate = new Date("June 23, 2023 00:00:00").getTime();
var daysElement = document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");
var progressBar = document.querySelector(".progress-bar");
var progressText = document.querySelector(".progress-text");
var intervalId;

















function countWorkdays(startDate, endDate, holidays = []) {
  let workdays = 0;
  const start = new Date(startDate);
  const end = new Date(endDate);

  for (let date = start; date < end; date.setDate(date.getDate() + 1)) {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isHoliday = holidays.some(holiday => {
      const h = new Date(holiday);
      return h.getDate() === date.getDate() && h.getMonth() === date.getMonth() && h.getFullYear() === date.getFullYear();
    });

    if (!isWeekend && !isHoliday){
      workdays++;
    }
  }

  return workdays;
 
}






function zaktualizujPasekPostepu(value) {

    progressBar.style.width = value + "%";
	progressText.textContent = value + "%";
	
}







function odliczanieDoZakonczeniaRokuSzkolnego() {
	
	
	var dataZakonczeniaRokuSzkolnego = new Date("June 23, 2023 00:00:00").getTime();
	
	var d = new Date();
    var n = d.getTime();
	
	
	var dzien = d.getDate();
	var miesiac = d.getMonth();
	miesiac = miesiac + 1;
	var rok = d.getUTCFullYear();
	
	
	var iloscMilisekundDoZakonczeniaRokuSzkolnego = dataZakonczeniaRokuSzkolnego - n;
	
	var iloscDni = Math.floor(iloscMilisekundDoZakonczeniaRokuSzkolnego / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60)) / 1000);
	
	var pelnaIloscSekund = iloscMilisekundDoZakonczeniaRokuSzkolnego * 0.001;
	pelnaIloscSekund = parseInt(pelnaIloscSekund);
	
	
	var dniWolne = ['2023-04-09', '2023-04-10', '2023-05-01', '2023-05-03', '2023-05-28', '2023-06-08'];
	var aktualnaData = Date.now();
	var aktualnyMiesiac = new Date().getMonth() + 1;
	
	var iloscDniDoZakonczeniaRokuSzkolnegoBezWeekendow = countWorkdays(aktualnaData, '2023-06-23', dniWolne) - 1;
	
	var pozostalyProcentRokuSzkolego = 100 - (aktualnaData/1000 - 1661983200) / (1687471200 - 1661983200) * 100;
	pozostalyProcentRokuSzkolego = pozostalyProcentRokuSzkolego.toFixed(4);
	
	var progressPercent = 3000;
	
	var iloscSekundDoWakacji = (dataZakonczeniaRokuSzkolnego - aktualnaData)/1000;
	
	iloscSekundDoWakacji = iloscSekundDoWakacji.toFixed(3);
	
	
	if (dataZakonczeniaRokuSzkolnego > aktualnaData && aktualnyMiesiac != 7 && aktualnyMiesiac != 8)
	{
		daysElement.textContent = iloscDni;
		hoursElement.textContent = iloscGodzin;
		minutesElement.textContent = iloscMinut;
		secondsElement.textContent = iloscSekund;
		
		document.getElementById("iloscDniDoWakacjiBezWeekendow").innerHTML = `Bez weekendów i dni wolnych to: ${iloscDniDoZakonczeniaRokuSzkolnegoBezWeekendow} dni`;
		
		document.getElementById("iloscSekundDoWakacji").innerHTML = `To ${iloscSekundDoWakacji} sekund`;
		
		document.getElementById("czyWakacje").innerHTML = `<h1>Do wakacji pozostało:</h1>`;
	}
	
	
	else
	{
		document.getElementById("czyWakacje").innerHTML = `<h1>Wakacje</h1>`;
		document.getElementById("iloscDniDoWakacjiBezWeekendow").innerHTML = ``;
		document.getElementById("iloscSekundDoWakacji").innerHTML = ``;
		
		daysElement.textContent = "0";
		hoursElement.textContent = "0";
		minutesElement.textContent = "0";
		secondsElement.textContent = "0";
	}
	
	zaktualizujPasekPostepu(parseInt(100 - pozostalyProcentRokuSzkolego));
	
	setTimeout("odliczanieDoZakonczeniaRokuSzkolnego()", 1);
}




/*function startCountdown() {
    intervalId = setInterval(updateCountdown, 1000);
}


function stopCountdown() {
    clearInterval(intervalId);
}*/


/*function updateCountdown() {
    var now = new Date();
    var timeDiff = vacationDate - now.getTime();
    if (timeDiff < 0) {
        stopCountdown();
        timeDiff = 0;
    }
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    var seconds = Math.floor((timeDiff / 1000) % 60);
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    var progressPercent = ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / (vacationDate.getTime() - new Date(now.getFullYear(), 0, 1).getTime())) * 100;
    progressBar.style.width = progressPercent + "%";
    progressText.textContent = Math.round(progressPercent) + "%";
}*/