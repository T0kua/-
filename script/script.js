$(function() {
});

 thema = "normal";
function yeah(){
    if (thema == "yeah"){
        thema = "normal";
        $("body, button").css("background-image","None");
        $("#avatar").attr("src","cashe/image/avatar.png")
    }
    else if (thema == "normal"){
        thema = "yeah";
        $("body, button").css("background-image","url(./cashe/image/funny-homer.gif)")
        $("body, button").css("background-size","auto");
        $("#avatar").attr("src","cashe/image/avatar2.png")
    }
}

let tokens = 400;
let localytokens = 0;
function money(x){
    if (x == 1){
        $("#site_type_con").attr("src","cashe/image/vaselin.png");
        $("#a1").prop('checked', true);
        tokens = 400;
    }
    else if (x == 2){
        $("#site_type_con").attr("src","cashe/image/mono.png")
        $("#a2").prop('checked', true);
        tokens = 500;
    }
    else if (x == 3){
        $("#site_type_con").attr("src","cashe/image/mega.png")
        $("#a3").prop('checked', true);
        tokens = 1400;

    }
    get();
    //$("#TABLO").text(localytokens + tokens + "P");
}
function get(){
    //event.preventDefault()
    let future = [
        document.getElementById("b1").checked,
        document.getElementById("b2").checked,
        document.getElementById("b3").checked,
        document.getElementById("b4").checked,
        document.getElementById("b5").checked,
        document.getElementById("b6").checked,
        document.getElementById("b7").checked,
    ];
    let future_prise= [
        5000,
        450,
        200,
        800,
        1400,
        5500,
        300
    ]

    let localytokens = 0;
    for(x = 0; x <= future.length - 1;x++){
        if (future[x]){
            $("#b" + (x + 1) + "_con").css("display", "block");
            localytokens += future_prise[x];
        }
        else{
            $("#b" + (x + 1) + "_con").css("display", "none");
        }
    }
    $("#TABLO").text(localytokens + tokens + "P");
    $("#TABLO").css("visibility","visible");
}
function echo(nn){
    if ($("#b" + nn).prop('checked')){
        $("#b" + nn).prop('checked', true);
    }
    else{
        $("#b" + nn).prop('checked', false);
    }
    get();
}