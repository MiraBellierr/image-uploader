<?php
header("Content-Type: application/json");

$file = 'quotes.json';
$data = file_get_contents($file);
$obj = json_decode($data);
$random = $obj[rand(0, count($obj) - 1)];

print('
{
        "type":"link",
        "version":"1.0",
        "title":"view original",
        "author_name":"'.$random.' <3"
}
');
?>