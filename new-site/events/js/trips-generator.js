var tofinoPeople = [{
        "image": "tofino-01.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-02.jpg",
        "name": "Ja Soon Kim",
        "handle": "omjsk"
    },
    {
        "image": "tofino-03.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-04.jpg",
        "name": "Nicole Franzen",
        "handle": "nicole_franzen"
    },
    {
        "image": "tofino-05.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-06.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-07.jpg",
        "name": "Ryan Struck",
        "handle": "ryanstruck"
    },
    {
        "image": "tofino-08.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-09.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-10.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-11.jpg",
        "name": "Ryan Struck",
        "handle": "ryanstruck"
    },
    {
        "image": "tofino-12.jpg",
        "name": "Nicole Franzen",
        "handle": "nicole_franzen"
    },
    {
        "image": "tofino-13.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-14.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-15.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-16.jpg",
        "name": "Nicole Franzen",
        "handle": "nicole_franzen"
    },
    {
        "image": "tofino-17.jpg",
        "name": "Ryan Struck",
        "handle": "ryanstruck"
    },
    {
        "image": "tofino-18.jpg",
        "name": "Nicole Franzen",
        "handle": "nicole_franzen"
    },
    {
        "image": "tofino-19.jpg",
        "name": "Ryan Struck",
        "handle": "ryanstruck"
    },
    {
        "image": "tofino-20.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tofino-21.jpg",
        "name": "Ryan Struck",
        "handle": "ryanstruck"
    }
]

var tahitiPeople = [{
        "image": "tahiti-01.jpg",
        "name": "Salty Wings",
        "handle": "saltywings"
    },
    {
        "image": "tahiti-02.jpg",
        "name": "Salty Wings",
        "handle": "saltywings"
    },
    {
        "image": "tahiti-03.jpg",
        "name": "Salty Wings",
        "handle": "saltywings"
    },
    {
        "image": "tahiti-04.jpg",
        "name": "Ja Soon Kim",
        "handle": "omjsk"
    },
    {
        "image": "tahiti-05.jpg",
        "name": "Tyson Wheatley",
        "handle": "twheat"
    },
    {
        "image": "tahiti-06.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tahiti-07.jpg",
        "name": "Dan Tom",
        "handle": "dantom"
    },
    {
        "image": "tahiti-08.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tahiti-09.jpg",
        "name": "Ja Soon Kim",
        "handle": "omjsk"
    },
    {
        "image": "tahiti-10.jpg",
        "name": "Tyson Wheatley",
        "handle": "twheat"
    },
    {
        "image": "tahiti-11.jpg",
        "name": "Dan Tom",
        "handle": "dantom"
    },
    {
        "image": "tahiti-12.jpg",
        "name": "Tyson Wheatley",
        "handle": "twheat"
    },
    {
        "image": "tahiti-13.jpg",
        "name": "Tasha van Zandt",
        "handle": "tashavanzandt"
    },
    {
        "image": "tahiti-14.jpg",
        "name": "Shelly Strazis",
        "handle": "shellystrazis"
    },
    {
        "image": "tahiti-15.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tahiti-16.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tahiti-17.jpg",
        "name": "Tyson Wheatley",
        "handle": "twheat"
    },
    {
        "image": "tahiti-18.jpg",
        "name": "Shelly Strazis",
        "handle": "shellystrazis"
    },
    {
        "image": "tahiti-19.jpg",
        "name": "Dan Tom",
        "handle": "dantom"
    },
    {
        "image": "tahiti-20.jpg",
        "name": "Emily Nathan",
        "handle": "ernathan"
    },
    {
        "image": "tahiti-21.jpg",
        "name": "Salty Wings",
        "handle": "saltywings"
    }
]


var newHTML1 = [];
var newHTML2 = [];

$.each(tahitiPeople, function(i, value) {
    newHTML1.push('<div class="gram"><a href="http://instagram.com/' + value.handle + '" target="_blank"><img class="lazy" src="images/' + value.image + '" alt="' + value.name + '" /> <p>' + value.name + '</p></a></div>');
});
$("#tahiti-grid").html(newHTML1.join("  "));

$.each(tofinoPeople, function(i, value) {
    newHTML2.push('<div class="gram"><a href="http://instagram.com/' + value.handle + '" target="_blank"><img class="lazy" src="images/' + value.image + '" alt="' + value.name + '" /> <p>' + value.name + '</p></a></div>');
});
$("#tofino-grid").html(newHTML2.join("  "));
