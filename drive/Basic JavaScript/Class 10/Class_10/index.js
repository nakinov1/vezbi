$(document).ready(function(){
    
    let div = $("div");
    let newP = document.createElement("p");
    newP.textContent = "neshto";
    newP.setAttribute("class", "notcool");
    document.getElementById("main").appendChild(newP);

    $("<p>").text("Jquery is cool")
            .addClass("cool")
            .appendTo("#main").css("font-size");
    

    let p = $("<p>").text("Jquery is cool").addClass("cool");
    p.appendTo("#main");    
    p.css({"color": "green"})    
    console.log(div);
    $("#myTitle").on("click",function(){
        debugger;
        $(this).toggleClass("pink");
    });
    $("#myTitle").off("click");

});



