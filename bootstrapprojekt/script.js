$(function (){
    $("#mainText").text("Volkswagen Golf - samochód osobowy klasy kompaktowej produkowany pod niemiecką marką Volkswagen od 1974 roku. Od 2019 roku produkowana jest ósma generacja modelu.");
})
var images = ["1.png","2.png","3.png"];
$.each(images, function(index, name){
    if(index == 0){
        $(".carousel-inner").append("<div class='carousel-item active'><img src="+name+" class='d-block w-100' alt="+name+"><div class='carousel-caption d-none d-md-block'></div></div>")
    }else{
        $(".carousel-inner").append("<div class='carousel-item '><img src="+name+" class='d-block w-100' alt="+name+"><div class='carousel-caption d-none d-md-block'></div></div>")
    }
})
$("#btnAuthor").click(function(){
    $("#mainText").html("Autor: Tomasz Stępień <br> Email:tomaszstepien04@gmail.com;");

})
$("#btnMain").click(function(){
    $("#mainText").text("Volkswagen Golf - samochód osobowy klasy kompaktowej produkowany pod niemiecką marką Volkswagen od 1974 roku. Od 2019 roku produkowana jest ósma generacja modelu.");
})







