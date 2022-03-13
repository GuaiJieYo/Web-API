<?php
error_reporting(0);
$file= __DIR__ . '/..'.$_SERVER["PHP_SELF"];
if(file_exists($file)){
    if (strstr($_SERVER['SCRIPT_NAME'],"/api/")) {
        require_once __DIR__ . '/../404.html';
    }else {
        return false;
    }
}else {
    require_once __DIR__ . '/../404.html';
}
?>