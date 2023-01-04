var ids = ["1","2","3","4","5","6","7","8"];
$.each(ids, function(index, name){
    $("#btn"+name).click(function(){
        $("#info").remove()
		$("#info2").remove()
		switch(name){
			case "1":
				 $("#mainText").append("<p id='info'>Nazwy konstruktorów są zawsze takie same, jak nazwa klasy, w której się znajdują – dla przykładu,<br> konstruktor klasy Produkt będzie nazywał się <br> Produkt,konstruktory nie zwracają żadnej wartości (nie stosujemy nawet void!)<br> podczas definiowania konstruktora po prostu omijamy zwracany typ.</p>")
				  $("#mainPictures").append("<p id='info2'><img src='1.png'></p>")
			break;
			case "2":
				 $("#mainText").append("<p id='info'>Modyfikator private najbardziej ograniczna widoczność pól i metod. Oznacza to, że użycie private <br> wiąże się z tym, że pole lub metoda będzie <br>widoczna tylko w klasie. Nie będzie widoczna nawet w tym samym pakiecie<br> lub klasie dziedziczącej.<br> Tak jak w pierwszej i drugiej linijce.</p>")
				  $("#mainPictures").append("<p id='info2'><img src='1.png'></p>")
			break;
			case "3":
				  $("#mainText").append("<p id='info'>Słowo kluczowe public jest modyfikatorem dostępu, który pozwala na najbardziej swobodny dostęp do  <br>elementu, który poprzedza.  Public może być używane przed definicjami klas, pól w klasach, metod <br>czy typów wewnętrznych.</p>")
				  $("#mainPictures").append("<p id='info2'><img src='1.png'></p>")
			break;
			case "4":
				 $("#mainText").append("<p id='info'>Słowo kluczowe private jest najbardziej restrykcyjnym modyfikatorem dostępu. Może być stosowane <br>wyłącznie przed elementami klasy, w tym przed klasami wewnętrznymi. Oznacza on <br>tyle, że dany element (klasa, metoda, czy pole) widoczny jest tylko i <br>wyłącznie wewnątrz klasy.</p>")
				  $("#mainPictures").append("<p id='info2'><img src='2.png'></p>")
			break;
		}
		
    })
})
