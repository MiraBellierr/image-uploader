<?php 
$host=$_SERVER["SERVER_NAME"];
$query=$_SERVER["QUERY_STRING"];
$link="https://".$host."/up/".$query; 

return $link;
?>
