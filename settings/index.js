$(document).ready(function() {


	load();

    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('body').on('click', '#update', function  () {
        $name = $('input[name="name"]').val();
        $name2 = $('input[name="name2"]').val();
        $name3 = $('input[name="name3"]').val();
        upd();
    });

});

    function load(){

        $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?loadcl",
                dataType: 'json',
                    
                data: {
                    p: $p,
                    l: $l,
                },
                
                success: function(json){
                    $('input[name="name"]').val(json['name']);
                    $('input[name="name2"]').val(json['name2']);
                    $('input[name="name3"]').val(json['name3']);
                },
                
                error:  function(xhr, str){

                },
                
                complete:  function(){ 
                    
                }
            
            });

    }


    function upd() {

            $.ajax({
                type: "POST",
                url: ""+$page+"/index.php?upd",
                dataType: 'JSON',
                    
                data: {
                    name:     $name,
                    name2:    $name2,
                    name3:    $name3,
                    p: $p,
                    l: $l,
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
