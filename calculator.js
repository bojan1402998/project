function pick(id){
	/*
	Kako je id string , konvertujem ga u int.
	Ostatak pri djeljenju sa 10 je drugi faktor.
	Uvecavam i drugi i prvi faktor za 1 jer sam tablicu napravio od 0-9.
	Rezultat pri cjelobrojnom djeljenju ID-a sa 10 je prvi faktor.
	*/

	var broj=parseInt(id);
	var factor2=broj%10+1;
	var factor1=(broj-factor2+1)/10+1;
	var rezultat=factor1*factor2;
	document.getElementById(id).innerHTML=""+factor1+"x"+factor2+"="+rezultat;
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","write2db.php?factor1="+factor1+"&factor2="+factor2, true);
	xmlhttp.send();

}