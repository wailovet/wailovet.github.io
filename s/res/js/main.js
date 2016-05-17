window.suggest_so = function (data) {


    if (data.result.length < 1) {
        return ;
    }
    console.log(data);
    var y = 5 + e_input.offset().top + e_input.height() + parseInt(e_input.css("padding-top")) + parseInt(e_input.css("padding-bottom"));
    var x = e_input.offset().left;
    var width = e_input.width() + parseInt(e_input.css("padding-left")) + parseInt(e_input.css("padding-right"));


    if (!$("#__suggest_").length || $("#__suggest_").length < 1) {
        var div = document.createElement("div");
        div.id = "__suggest_";
        document.body.appendChild(div);

        //e_input.blur(function(){
        //    $("#__suggest_").hide();
        //})
    }
    $("#__suggest_").css({
        "padding": "10px",
        "background": "#fff",
        "border": "1px solid #eee",
        "position": "absolute",
        "left": x + 'px',
        "top": y + 'px',
        "width": width + 'px'
    });


    $("#__suggest_").html("");
    for (var i in data.result) {
        $("#__suggest_").append("<p class='__suggest_word'>" + data.result[i]['word'] + "</p>");
    }

    $(".__suggest_word").click(function () {
        e_input.val($(this).text());
        $("#__suggest_").hide();
    });




    $("#__suggest_").show()
};
function suggest(e_input) {

    window.e_input = e_input;
    var str = e_input.val();
    $.ajax({
        url: 'https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word,obdata&word=' + str,
        dataType: "jsonp",
        jsonp: "suggest_so"
    });
}