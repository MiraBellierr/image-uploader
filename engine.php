<?php 
$host=$_SERVER["SERVER_NAME"];
$query=$_SERVER["QUERY_STRING"];
$link="https://".$host."/up/".$query; 
$file_headers = @get_headers($link);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
    header("Location: https://miraiscute.com/404");
}
else {
    return $link;
}

?>
