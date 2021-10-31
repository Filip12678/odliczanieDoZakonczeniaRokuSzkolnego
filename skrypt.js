function odliczanieDoZakonczeniaRokuSzkolnego() {
	var d = new Date();
    var n = d.getTime();
	
	var iloscMilisekundDoZakonczeniaRokuSzkolnego = 1656054058824 - n;
	
	
	var iloscDni = Math.floor(iloscMilisekundDoZakonczeniaRokuSzkolnego / (1000 * 60 * 60 * 24));
	var iloscGodzin = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var iloscMinut = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60 * 60)) / (1000 * 60));
	var iloscSekund = Math.floor((iloscMilisekundDoZakonczeniaRokuSzkolnego % (1000 * 60)) / 1000);
	
	var pelnaIloscSekund = iloscMilisekundDoZakonczeniaRokuSzkolnego * 0.001;
	pelnaIloscSekund = parseInt(pelnaIloscSekund);
	
	
	document.getElementById("czasDoZakonczeniaRokuSzkolnego").innerHTML = `Do zakończenia roku szkolnego pozostało: ${iloscDni} dni ${iloscGodzin} godzin ${iloscMinut} minut ${iloscSekund} sekund`;
	document.getElementById("czasDoZakonczeniaRokuSzkolnego_W_Sekundach").innerHTML = `Inczej mówiąc do zakończenia roku szkolnego pozostało ${pelnaIloscSekund} sekund`;
	setTimeout("odliczanieDoZakonczeniaRokuSzkolnego()",1000);
	
}