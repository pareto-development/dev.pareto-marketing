$(document).ready(function() {

    $('body').on('click', '.esc', function  () {
        localStorage.clear();
        window.location.replace("/");
    });

    $('body').load('main/start.html');

    $('body').on('click', 'nav button', function  () {

       $page = $(this).attr('id');
       localStorage.setItem('page', $page);
       $page = localStorage.getItem('page');
       //setLocation($page);

       $l = localStorage.getItem('l');
    $p = localStorage.getItem('p');

       if ($page == "main") {
        $('#content').empty();
       } else {
        getPage();
       }
    });


    function setLocation(curLoc){
        try {
            history.pushState(null, null, curLoc);
            return;
        } catch(e) {}
        location.hash = '/' + curLoc;
    }
    

    function getPage(){

        $.ajax({
                type: "POST",
                url: "main/index.php?getpage",
                dataType: 'html',

                data: {
                    login:    $l,
                    password: $p,
                    page:     $page
                },
                
                success: function(data){
                    if(data == '"error"'){
                        window.location.replace("/");
                    }
                    else{
                        $('#content').empty();
                        $('#content').append(data); 
                    }
                },
                
                error:  function(xhr, str){

                },
                
                complete:  function(){ 
                    
                }
            
            });

        

    }


});

