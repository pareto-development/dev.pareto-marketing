<?php

$sdb_name = "localhost";
$user_name = "root";
$user_password = "";
$db_name = "u933_dev";

// соединение с сервером базы данных
if(!$link = mysql_connect($sdb_name, $user_name, $user_password))
{
  echo "<br>Не могу соединиться с сервером базы данных<br>";
  exit();
}

// выбираем базу данных
if(!mysql_select_db($db_name, $link))
{
  echo "<br>Не могу выбрать базу данных<br>";
  exit();
}

mysql_query('SET NAMES utf8');

?>
