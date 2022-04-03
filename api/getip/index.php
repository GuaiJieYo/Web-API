<?php
    echo get_onlineip();
    function get_onlineip() {
        $ch = curl_init('http://www.ip138.com/ip2city.asp');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $a  = curl_exec($ch);
        preg_match('/[(.*)]/', $a, $ip);
        return $ip[1];
     }
    
?>