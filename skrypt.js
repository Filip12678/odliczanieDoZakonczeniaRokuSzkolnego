function odliczanieDoZakonczeniaRokuSzkolnego() {
	var d = new Date();
    var n = d.getTime();
	
	
	var dzien = d.getDate();
	var miesiac = d.getMonth();
	miesiac = miesiac + 1;
	var rok = d.getUTCFullYear();
	
	
	var iloscMilisekundDoZakonczeniaRokuSzkolnego = 1656054058824 - n;
	
	var iloscDni = Math.floor(iloscMilisekundDoZakonczeniaRokuSzkolnego / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60)) / 1000);
	
	var pelnaIloscSekund = iloscMilisekundDoZakonczeniaRokuSzkolnego * 0.001;
	pelnaIloscSekund = parseInt(pelnaIloscSekund);
	
	var iloscDniDoZakonczeniaRokuSzkolnegoBezWeekendow = obliczanieDniRoboczychMiedzyDatami(dzien, miesiac, rok, 24, 6, 2022);
	
	document.getElementById("czasDoZakonczeniaRokuSzkolnego").innerHTML = `Do zakończenia roku szkolnego pozostało: ${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	document.getElementById("czasDoZakonczeniaRokuSzkolnego_W_Sekundach").innerHTML = `Inczej mówiąc do zakończenia roku szkolnego pozostało ${pelnaIloscSekund} sekund`;
	document.getElementById("iloscDniDoZakonczeniaRokuSzkolnegoBezWeekendow").innerHTML = `Do zakończenia roku szkolego bez weekendów pozostało: ${iloscDniDoZakonczeniaRokuSzkolnegoBezWeekendow} dni`;
	
	setTimeout("odliczanieDoZakonczeniaRokuSzkolnego()",1000);
	
}




function obliczanieDniRoboczychMiedzyDatami(dzien1, miesiac1, rok1, dzien2, miesiac2, rok2){
	
	var oneDay = 86400000;
	var firstDate = new Date(`${rok1}-${miesiac1}-${dzien1}`);
	var secondDate = new Date(`${rok2}-${miesiac2}-${dzien2}`);
	var diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	
	
	//console.log(firstDate.getDay());
	var dniRobocze = 0;
	
	for (i = 0; i <= diffDays; i++) {
		
		var aktualnyDzienTygodnia = firstDate.getDay();
		
		if (aktualnyDzienTygodnia == 1 || aktualnyDzienTygodnia == 2 || aktualnyDzienTygodnia == 3 || aktualnyDzienTygodnia == 4 || aktualnyDzienTygodnia == 5) {
			
			dniRobocze = dniRobocze + 1;
			
		}
		
		firstDate.setDate(firstDate.getDate() + 1);
		
		
	}
	
	return dniRobocze;

}