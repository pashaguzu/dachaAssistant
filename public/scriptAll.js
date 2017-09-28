/**
 * Created by Pavel on 03.09.2017.
 */
$(document).ready(function() {
    CheckAuth();
});

//<li><button id="login" data-toggle="modal" data-target="#myModal2"  class="btn btn-success page-scroll">Вход</button></li>

function CheckAuth() {
    $.get('/api/user/checkauth', function (data) {
 if(data=='logout') {
     var qw = ' <form class="navbar-form navbar-right"><div class="form-group"><a id="registration" data-toggle="modal" data-target="#myModal"  class="btn btn-primary page-scroll">Регистрация</a>' +
         '<a id="login" data-toggle="modal" data-target="#myModal2"  class="btn btn-success page-scroll">Вход</a></form> ';
     renderMeny(qw);
 } else {
     var qw1 = '<li><a id="logout" onclick="logout()" class="btn btn-primary page-scroll">Выход</a></li>';
         renderMeny(qw1);
 }
    });
}

function renderMeny(data){

    document.getElementById('rightpanel').innerHTML = data;

}