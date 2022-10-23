var images = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"];
var gens = ["1","2","3","4","5","6","7","8"];
$.each(gens, function(index, name){
    $("#mainText").append("<p id='gen"+name+"'>Generacja"+name+"</p>")
    $("#gen"+name).click(function(){
        $("#genPicture").remove()
        $("#mainPictures").append("<img id='genPicture' src='generations/"+images[index]+"'></img>");
        $("#genPicture").css("height", "500px")
    })
})
