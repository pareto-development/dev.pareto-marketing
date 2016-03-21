$(document).ready(function() {


	load();

    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
    $('#type').change(function () {
        if ($('#type  :selected').attr("name") == 2) {
            $('#nclient').show();
        } else {
            $('#nclient').hide();
        }
    })
    

	$( "#add" ).submit(function( event ) {
        $('#addform').css("top","-537px");
        $('#body').css("top","0px");
		add();
        load();
	});

    $( "#addcl" ).submit(function( event ) {

        addcl();
        load();
    });

	$('#addcans').click(function  () {
		$('#addform').css("top","-537px");
        $('#body').css("top","0px");
	});

	$('#addsh').click(function  () {
		$('#addform').css("top","0px");
        $('#body').css("top","537px");
	});

	$('#refresh').click(function  () {
		load();
	});

    $('body').on('click', '.option', function  () {
        $(this).parent().children(".options").toggle();
    });

    $('body').on('click', '#del', function  () {
        $id = $(this).attr("name");
        if ($(this).hasClass("main")) {$type = 1;} else{$type = 2;};
        del();
    });

    $('body').on('click', '#home #upd', function  () {
        $(this).parent().children('#updY').show();
        $(this).parent().parent().children().children('#updN').show();
        $(this).parent().parent().children().children('#del').hide();
        $(this).hide();

        $(this).parent().parent().children(".inf").each(function (i) {
            $a = $(this).text();
            $("#b"+i).html(""+$a+"");
            $(this).html("") ;
            $('<input  class="form-control" type="text" value="'+$a+'"/>').appendTo(this);
        });
        
        
    });

    $('body').on('click', '#upd', function  () {
        $(this).parent().children('#updY').show();
        $(this).parent().parent().children().children('#updN').show();
        $(this).parent().parent().children().children('#del').hide();
        $(this).hide();

        $(this).parent().parent().parent().children(".inf").each(function (i) {
            $a = $(this).text();
            $("#b"+i).html(""+$a+"");
            $(this).html("") ;
            $('<input  class="form-control" type="text" value="'+$a+'"/>').appendTo(this);
        });
        
        
    });

    $('body').on('click', '#home #updN', function  () {

        $(this).parent().parent().children(".inf").each(function (i) {
            $a = $("#b"+i).html();
            $(this).html("") ;
            $(this).html(""+$a+"") ;
        });

        $(this).parent().children('#del').show();
        $(this).parent().parent().children().children('#upd').show();
        $(this).parent().parent().children().children('#updY').hide();
        $(this).hide();
    });

    $('body').on('click', '#updN', function  () {

        $(this).parent().parent().parent().children(".inf").each(function (i) {
            $a = $("#b"+i).html();
            $(this).html("") ;
            $(this).html(""+$a+"") ;
        });

        $(this).parent().children('#del').show();
        $(this).parent().parent().children().children('#upd').show();
        $(this).parent().parent().children().children('#updY').hide();
        $(this).hide();
    });

    $('body').on('click', '#updY', function  () {

        

        $id = $(this).attr("name");
        $name =$('.inf.name input').val();
        $adress =$('.inf.adress input').val();
        $passwordup =$('.inf.password input').val();
        $loginup =$('.inf.login input').val();
        $info =$('.inf.infor input').val();
        if ($(this).hasClass("main")) {$type = 1;} else{$type = 2;};

        $(this).parent().parent().children(".inf").each(function (i) {
            $a = $(this).children("input").val().toString();
            $(this).html("") ;
            $(this).html(""+$a+"") ;
        });

        upd();

        $(this).parent().children('#del').show();
        $(this).parent().parent().children().children('#upd').show();
        $(this).parent().parent().children().children('#updY').hide();
        $(this).hide();
        load();
    });

	function add() {

    	$name =$('#name').val();
    	$adress =$('#adress').val();
        $addpassword =$('#password').val();
        $addlogin =$('#login').val();
        $info =$('#info').val();
        $type = $('#type  :selected').attr("name");
        $nclient = $('#nclient  :selected').attr("name");

            $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?add",
                dataType: 'JSON',
                    
                data: {
                    name:     $name,
                    adress:   $adress,
                    password: $addpassword,
                    login:    $addlogin,
                    info:     $info,
                    type:     $type,
                    nclient:  $nclient
                },
                
                success: function(data, code){
                   load();
                   $('#add')[0].reset();
                },
                
                error:  function(xhr, str){
                     
                },
                
                complete:  function(){ 
                    
                }
            
            });


    }

    function addcl() {

        $name =$('#nclientname').val();
        $phone =$('#nclientphone').val();
        $url =$('#nclienturl').val();
        $email =$('#nclientemail').val();

            $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?addcl",
                dataType: 'JSON',
                    
                data: {
                    name:  $name,
                    phone: $phone,
                    url:   $url,
                    email: $email

                },
                
                success: function(data, code){
                   $('#myModal').modal('hide'); 
                   load();
                   $('#add')[0].reset();
                   $('.alerts').append('<div class="alert alert-warning alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>Новый клиент <strong>'+$name+'</strong> добавлен!</div>')
                },
                
                error:  function(xhr, str){
                     
                },
                
                complete:  function(){ 
                    
                }
            
            });


    }

    function load(){

        $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?load",
                dataType: 'json',
                    
                data: {
                    p: $p,
                    l:    $l,
                },
                
                success: function(json){
                    $('#spisok').html('');
                    for (i = 0; i < json.users.length; i++) {
                        tpl = $('<tr id="'+ json.users[i].id +'"> <th scope="row">'+ json.users[i].id +'</th> <th class="inf name" >'+ json.users[i].name +'</th> <td class="inf adress" ><a href="'+ json.users[i].adress +'" target="_blank">'+ json.users[i].adress +'</a></td> <td class="inf login" >'+ json.users[i].login +'</td> <td class="inf password" >'+ json.users[i].password +'</td> <td class="inf infor" >'+ json.users[i].info +'</td><td><button  type="button"  class="btn btn-info" id="upd" name="'+ json.users[i].id +'">Редактировать</button><button  type="button"  class="btn btn-success main" style="display:none" id="updY" name="'+ json.users[i].id +'">Сохранить</button></td><td><button  type="button" class="btn btn-danger main" id="del" name="'+ json.users[i].id +'">Удалить</button><button  type="button" class="btn btn-danger" style="display:none" id="updN" name="'+ json.users[i].id +'">Отменить</button></td></tr>');
                        $('#spisok').append(tpl);
                    }
                },
                
                error:  function(xhr, str){

                },
                
                complete:  function(){ 
                    
                }
            
            });

        $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?loadc",
                dataType: 'json',
                    
                data: {
                    p: $p,
                    l:    $l,
                },
                
                success: function(json){
                    $('#nclient').html('');
                    for (i = 0; i < json.users.length; i++) {
                        tpl = $('<option name="'+ json.users[i].id +'">'+ json.users[i].name +'</option>');
                        $('#nclient').append(tpl);
                    }
                },
                
                error:  function(xhr, str){

                },
                
                complete:  function(){ 
                    
                }
            
            });

        $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?loadcl",
                dataType: 'json',
                    
                data: {
                    p: $p,
                    l:    $l,
                },
                
                success: function(json){
                    $('.panel-group').html('');
                    $a = 0;
                    for($key in json.users){
                        
                        $('.panel-group').append('<div class="panel panel-default cl'+$a+'"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cl'+$a+'" aria-expanded="true" aria-controls="cl'+$a+'"><div class="panel-heading btn-primary" role="tab" id="headingOne"><h4 class="panel-title">'+$key+'</h4></div></a><div id="cl'+$a+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="cl'+$a+'"><div class="panel-body"><table class="table  table-hover" id="pareto"><thead> <tr><th>Название</th><th>Адрес</th><th>Логин</th><th>Пароль</th><th>Доп. инфо</th><th></th><th></th></tr> </thead><tbody class="spisok"> </tbody></table></div></div></div>');
                        for (i = 0; i < json.users[$key].length; i++) {

                            tpl = $('<tr id="'+ json.users[$key][i].id +'"><th class="inf name" >'+ json.users[$key][i].name +'</th> <td class="inf adress" ><a href="'+ json.users[$key][i].adress +'" target="_blank">'+ json.users[$key][i].adress +'</a></td> <td class="inf login" >'+ json.users[$key][i].login +'</td> <td class="inf password" >'+ json.users[$key][i].password +'</td> <td class="inf infor" >'+ json.users[$key][i].info +'</td><td><button type="button" class="btn btn-default option" aria-label="Left Align"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></button><div class="options"><button  type="button"  class="btn btn-info" id="upd" name="'+ json.users[$key][i].id +'">Редактировать</button><button  type="button"  class="btn btn-success" style="display:none" id="updY" name="'+ json.users[$key][i].id +'">Сохранить</button><button  type="button" class="btn btn-danger" id="del" name="'+ json.users[$key][i].id +'">Удалить</button><button  type="button" class="btn btn-danger" style="display:none" id="updN" name="'+ json.users[$key][i].id +'">Отменить</button></div></td></tr>');

                            $(".panel-collapse#cl"+$a+" .panel-body .spisok").append(tpl);
                            
                        };
                        $a++;
                    };
                },
                
                error:  function(xhr, str){

                },
                
                complete:  function(){ 
                    
                }
            
            });

    }

    function del() {

        $deletes = prompt("Введите пароль на удаление");

        if ($deletes === "4242") {
            $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?del",
                dataType: 'JSON',
                    
                data: {
                    id:   $id,
                    type: $type
                },
                
                success: function(data, code){
                   load();
                },
                
                error:  function(xhr, str){
                     
                },
                
                complete:  function(){ 

                }
            
            });
            load();
    } else {
      alert('false');
    }
           
    }

    function upd() {

            $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?upd",
                dataType: 'JSON',
                    
                data: {
                    id:     $id,
                    name:     $name,
                    adress:   $adress,
                    password: $passwordup,
                    login:    $loginup,
                    info:     $info,
                    type: $type
                },
                
                success: function(data, code){
                   load();
                },
                
                error:  function(xhr, str){
                     
                },
                
                complete:  function(){

                }
            
            });
    }





})