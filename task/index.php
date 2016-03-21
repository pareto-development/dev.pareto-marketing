<?php 
    include "../bd.php" ;
    //Доступы
$l = $_POST['l'];
$p = $_POST['p'];

$result = mysql_query("SELECT * FROM users WHERE `user_login`='$l' AND `user_password`='$p'");

$USER = mysql_fetch_array($result,1);

if(!empty($USER)) {

    if(isset($_GET['loadcl'])){        

        $result = mysql_query("SELECT * FROM users WHERE `user_login`='$l' AND `user_password`='$p'");

        if(mysql_num_rows($result)>0){
            while ($mar = mysql_fetch_array($result)){
                $user =  array(id=>$mar['user_id'], name=>$mar['name'], name2=>$mar['name2'], name3=>$mar['name3']);
            }
        }

        echo json_encode($user);
        
    }

    if(isset($_GET['upd'])){
        $name = $_POST['name'];
        $name2 = $_POST['name2'];
        $name3 = $_POST['name3'];

            $sql = "UPDATE `users` SET `name`='$name', `name2`='$name2', `name3`='$name3' WHERE  `user_login`='$l' AND `user_password`='$p'";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok');       
        
    }

}
else{
    echo json_encode('error');
}