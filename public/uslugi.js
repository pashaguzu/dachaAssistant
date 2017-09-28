/**
 * Created by Pavel on 01.09.2017.
 */
$(document).ready(function() {
    getServ();


});



function getServ() {
    $.get('/api/service/get', function (data) {

        windserv(data);
    });
}
function br(){
     return '<div class="col-md-12"><br></div>'
}
function windserv(data){
      // '{{#.}}<div class=" col-md-6"><div class="col-md-12 "><br></div><img class="imagesz col-md-7 " src="{{photo}}">'+
    // '<div class="zakazopis col-md-5 "><center><label class="labelname">{{title}}</label></center><hr>' +
    // '<div><label class="labelopis">{{describe}}</label></div><br><br>'+
    // '<center><a data-toggle="modal" data-target="#myModal3" onclick="addTitle({{id}})"   class="buttonzakaz page-scroll btn btn-primary">ЗАКАЗАТЬ</a></center> <br></div></div>{{/.}}';

    var tmp =

        '{{#.}}<div class=" zakaz col-md-6 col-sm-12"><div class="col-md-12 "><br></div><img class="imagesz col-md-7 col-sm-12" src="{{photo}}">'+
        '<div class="zakazopis col-md-5 col-sm-12"><center><label class="labelname">{{title}}</label></center><hr>' +
        '<div><label class="labelopis">{{describe}}</label></div><br><br>'+
        '<center><a data-toggle="modal" data-target="#myModal3" onclick="addTitle({{id}})"   class="buttonzakaz page-scroll btn btn-primary">ЗАКАЗАТЬ</a></center></div></div>{{/.}}';


    var output = Mustache.render(tmp, data);
    document.getElementById('baner2next').innerHTML = output;
}
function addTitle(data) {

    $.get('/api/user/checkauth/', function (qw) {
        if(qw=='logout') {
            alert("Зарегайся плиз");
            location.href = ("/index.html");
        }
        if(qw=='login') {
            $("#numberService").html(data);
            $.get('/api/service/title/' + data, function (data) {
                $("#titleContent").html(data.title);
            })
        }
})
}