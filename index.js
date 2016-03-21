$(document).load(function() {
    
});

$(document).ready(function() {

if (localStorage.getItem('l') === null) {
   
    }
    else{
        $login = localStorage.getItem('l');
        $password = localStorage.getItem('p');
        enter();
    }

$("#enter").submit(function( event ) {
    $password =$('#password').val();
    $login =$('#login').val();
    
    enter();
});

$('body').on('click', '#dostups', function  () {
        dostups();
    });

function enter(){
        

            $.ajax({
                type: "POST",
                url: "start.php?enter",
                dataType: 'html',
                    
                data: {
                    password: $password,
                    login:    $login,
                },
                
                //beforesend: ,
                
                success: function(data, code){
                    if(data == '"error"'){
                        $('.error').append('Неверный Логин и/или Пароль');
                    }
                    else{
                        localStorage.setItem('l', $login);
                        localStorage.setItem('p', $password);
                        $('head').empty();
                        $('body').empty();
                        $('head').append(data); 
                    }
                },
                
                error:  function(xhr, str){
                     alert('2');
                },
                
                complete:  function(){ 
                    
                }
            
            });
    }

function dostups(){

            $.ajax({
                type: "POST",
                url: "start.php?enter",
                dataType: 'html',
                    
                data: {
                    password: $password,
                    login:    $login,
                },
                
                //beforesend: ,
                
                success: function(data, code){
                   $('body').html("");
                   $('body').append(data);
                },
                
                error:  function(xhr, str){
                     alert('2');
                },
                
                complete:  function(){ 
                    
                }
            
            });
    }
});