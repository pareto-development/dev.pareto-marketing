<?php 

    include "../bd.php" ;
    
if(isset($_GET['getpage'])){
        $login = $_POST['login'];
        $password = $_POST['password'];
        $page = $_POST['page'];
        $url = "../".$page."/start.html";


        $result = mysql_query("SELECT * FROM users WHERE `user_login`='$login' AND `user_password`='$password'");

        $USER = mysql_fetch_array($result,1); //Генерирует удобный массив из результата запроса

        if(!empty($USER)) { //Если массив не пустой (это значит, что пара имя/пароль верная)
            echo file_get_contents($url);
        }
        else{
        echo json_encode('error');
        }

        
}