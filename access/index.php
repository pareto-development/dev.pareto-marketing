<?php 
    include "../bd.php" ;
    //Доступы
$l = $_POST['l'];
$p = $_POST['p'];

$result = mysql_query("SELECT * FROM users WHERE `user_login`='$l' AND `user_password`='$p'");

$USER = mysql_fetch_array($result,1);

if(!empty($USER)) {

    

    if(isset($_GET['load'])){

        $result = mysql_query("SELECT * FROM dostup");
        
        if(mysql_num_rows($result)>0){
            while ($mar = mysql_fetch_array($result)){
                $json =  array(id=>$mar['id'], name=>$mar['name'], adress=>$mar['adress'], login=>$mar['login'], password=>$mar['password'], info=>$mar['info']);
                $users[] = $json;
            }
        }
        
        $points = array(users=>$users);
 
        echo json_encode($points);
        
    }

    if(isset($_GET['loadc'])){       

        $result = mysql_query("SELECT * FROM client");
        
        if(mysql_num_rows($result)>0){
            while ($mar = mysql_fetch_array($result)){
                $json =  array(id=>$mar['id'], name=>$mar['name']);
                $users[] = $json;
            }
        }
        
        $points = array(users=>$users);
 
        echo json_encode($points);
        
    }

    if(isset($_GET['loadcl'])){        

        $result = mysql_query("SELECT *, client.name AS cname, clients.name AS pname, clients.id AS nid FROM clients, client WHERE client.id = clients.client ORDER BY client.name ASC");
        
        $clname = 'zaraza';

        if(mysql_num_rows($result)>0){
            while ($mar = mysql_fetch_array($result)){
                
                $json =  array(id=>$mar['nid'], name=>$mar['pname'], adress=>$mar['adress'], login=>$mar['login'], password=>$mar['password'], info=>$mar['info'], cname=>$mar['cname']);

                if ($clname == $mar['cname']) {
                    ${$cln}[] = $json;
                } else {
                    if ($clname == 'zaraza') {
                        $clname = $mar['cname'];
                        $cln = $mar['cname'];
                        ${$cln}[] = $json;
                    } else {
                        $users[$cln] = ${$cln};
                        $clname = $mar['cname'];
                        $cln = $mar['cname'];                        
                        ${$cln}[] = $json;
                    }
                    
                    
                } 
            }
            $users[$cln] = ${$cln};
        }
        
        $points = array(users=>$users);
 
        echo json_encode($points);
        
    }



}
else{
    echo json_encode('error');
}

    
    if(isset($_GET['add'])){
        $name = $_POST['name'];
        $adress = $_POST['adress'];
        $login = $_POST['login'];
        $password = $_POST['password'];
        $info = $_POST['info'];
        $type = $_POST['type'];
        $client = $_POST['nclient'];

        if ($type === '1') {
            $sql = "INSERT INTO `dostup` (`id`, `name`, `adress`, `login`, `password`, `info`) VALUES (NULL, '$name', '$adress', '$login', '$password', '$info');";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok');
        } else {
            $sql = "INSERT INTO `clients` (`id`, `name`, `adress`, `login`, `password`, `info`, `client`) VALUES (NULL, '$name', '$adress', '$login', '$password', '$info', '$client');";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok');
        }
    }

    if(isset($_GET['addcl'])){
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $url = $_POST['url'];
        $email = $_POST['email'];
        $sql = "INSERT INTO `client` (`id`, `name`, `phone`, `url`, `email`) VALUES (NULL, '$name', '$phone', '$url', '$email');";
        $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
        echo json_encode('ok');
    }

    if(isset($_GET['del'])){
        $id = $_POST['id'];
        $type = $_POST['type'];

        if ($type === '1') {
            $sql = "DELETE FROM `dostup` WHERE id=$id";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok1');
        } else {
            $sql = "DELETE FROM `clients` WHERE id=$id";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok2');
        }
    }

    if(isset($_GET['upd'])){
        $id = $_POST['id'];
        $name = $_POST['name'];
        $adress = $_POST['adress'];
        $login = $_POST['login'];
        $password = $_POST['password'];
        $info = $_POST['info'];
        $type = $_POST['type'];

        if ($type === '1') {
            $sql = "UPDATE `dostup` SET `name`='$name',`adress`='$adress',`login`='$login',`password`='$password',`info`='$info' WHERE id=$id";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok1');
        } else {
            $sql = "UPDATE `clients` SET `name`='$name',`adress`='$adress',`login`='$login',`password`='$password',`info`='$info' WHERE id=$id";
            $result = mysql_query($sql) or die("Ошибочный запрос: " . mysql_error());
            echo json_encode('ok2');
        }
        
        
    }