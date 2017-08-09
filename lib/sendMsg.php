<?php
/**
 * 本例用于发送天气预报短信
 */


// 短信宝
function sendMsg($content, $phone) {
    // 状态信息
    $statusStr = array(
        "0" => "短信发送成功",
        "-1" => "参数不全",
        "-2" => "服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！",
        "30" => "密码错误",
        "40" => "账号不存在",
        "41" => "余额不足",
        "42" => "帐户已过期",
        "43" => "IP地址限制",
        "50" => "内容含有敏感词"
    );

	$smsapi = "http://api.smsbao.com/";
	$user = "syncher"; //短信平台帐号
	$pass = md5("lzf520pgb"); //短信平台密码

	$sendurl = $smsapi."sms?u=".$user."&p=".$pass."&m=".$phone."&c=".urlencode($content);
	$result =file_get_contents($sendurl) ;
	return  $statusStr[$result];
}


?>
