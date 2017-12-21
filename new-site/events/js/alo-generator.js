var printPeople =[
    {
        "image": "01_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "02_TinyAtlas_Alohilani_DF.jpg",
        "name": "Daeja Fallas"
    },
    {
        "image": "03_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "04_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "05_TinyAtlas_Alohilani_DF.jpg",
        "name": "Daeja Fallas"
    },
    {
        "image": "06_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "07_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "08_TinyAtlas_Alohilani_DF.jpg",
        "name": "Daeja Fallas"
    },
    {
        "image": "09_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "10_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    },
    {
        "image": "11_TinyAtlas_Alohilani_DF.jpg",
        "name": "Daeja Fallas"
    },
    {
        "image": "12_TinyAtlas_Alohilani_EN.jpg",
        "name": "Emily Nathan"
    }
]
;

var newHTML1 = [];
var newHTML2 = [];
$(document).on("ready", function() {

    $.each(printPeople, function(i, value) {
        newHTML1.push('<div class="gram"><div class="insta-square lazy" data-src="images/' + value.image + '"></div></div>');
    });
    $("#print-grid").html(newHTML1.join("  "));
});
