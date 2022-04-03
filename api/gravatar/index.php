<?php
    error_reporting(0);
    $proxy = $_REQUEST['proxy'];
    $email = $_REQUEST['email'];
    if (!empty($email)) {
    $emailmd5 = md5($email);
    $proxyurl = "https://seccdn.libravatar.org/avatar/".$emailmd5;
    $url = "https://gravatar.com/avatar".$emailmd5;
        if (!empty($proxy)) {
            if ($proxy == true) {
                header("Location: {$proxyurl}");
            } else {
                header("Location: {$url}");
            }
        }else {
            header("Location: {$url}");
        }
        
    }else if ($proxy == true) {
    $proxyurl = "https://seccdn.libravatar.org/avatar/".$emailmd5;
        header("Location: {$proxyurl}");
    }else {
        header("Location: https://gravatar.com/avatar");
    }
?>