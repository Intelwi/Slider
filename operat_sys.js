var numer = Math.floor(Math.random()*5)+1;
			
var timer1 = 0;
var timer2 = 0;
			
function ustawslajd(nrslajdu)
{
	clearTimeout(timer1);//zerowanie timera
	clearTimeout(timer2);

	var old_num = numer;//zapamietanie poprzedniego slajdu
	numer = nrslajdu - 1;
	
	schowaj();
	setTimeout(function(){zmienslajd(old_num);}, 1000);//zmiana slajdu
				
}
			
function schowaj()
{
	$("#slider").fadeOut(1000);//znikanie
}
		
function zmienslajd(num_sl)
{	
	var rozkaz = "#"+"ust"+(numer);//zapamietanie rozkazu dla starego slajdu by zmienic kolor na bialy
	numer++; if (numer>4) numer=1;//zmiana slajdu
	
	if(num_sl == undefined)	$(rozkaz).css('color', 'white');//wymuszone przez uzytkownika

	else//automatyczne
	{
		var rozkaz = "#"+"ust"+(num_sl);//zapamietanie rozkazu dla poprzedniego slajdu by zmienic kolor na bialy	
		$(rozkaz).css('color', 'white');//zastosowanie rozkazu
	}

	var rozkaz = "#"+"ust"+numer;//zapamietanie rozkazu dla nowego slajdu by zmienic kolor na pomaranczowy
	$(rozkaz).css('color', '#ff944d');//zastosowanie rozkazu	
	
	var plik = "<img src=\"slajdy/slajd" + numer + ".jpeg\" />";//zapisanie adresu do nowego slajdu
				
	document.getElementById("slider").innerHTML = plik;//zmiana na nowy slajd (graficznie)
	$("#slider").fadeIn(1000);//pojawienie sie
				
	timer1 = setTimeout("zmienslajd()", 8000);//wykonanie funkcji z opoznieniem 8000
	timer2 = setTimeout("schowaj()", 7000);//wykonanie funkcji z opoznieniem 7000 (8000 - czas na pojawienie sie nowego slajdu (graficznie))
			
}
