function myFunction(){
			 var x = document.getElementById("myInput").value;
 document.getElementById("myP").innerHTML = ("Değerimiz:" + " " + x );
		 }
// window.open("pages/cem.html");
var pencere = window.open("","MakroPort Kullanıcı Giriş Paneli", "width=400,height=400");
pencere.document.write("<span style='font-weight:bold; font-size:25px;'>"+pencere.name+"</span>"); //pencerenin icerigine yaz
