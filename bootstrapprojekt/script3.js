var engines = ["1.9 TDI"];
$.each(engines, function(index, name){
    $("#mainText").append("<p id='eng"+index+"'>"+name+"</p>")
    $("#eng"+index).click(function(){
        $("#engPicture").remove()
        $("#mainPictures").append("<img id='engPicture' src='engines/"+index+".png'></img>");
        $("#engPicture").css("height", "500px")
    })
})