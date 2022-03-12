<?php
error_reporting(0);
$data = json_decode(file_get_contents('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN'), true);
$url = 'https://cn.bing.com'.$data['images'][0]['url'];
header("Location: {$url}"); 
?>