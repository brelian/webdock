<?php
/**
 * 本例用于发送天气预报短信
 */

require_once 'lib/getLocation.php';
require_once 'lib/getWeatherInfo.php';
require_once 'lib/sendMsg.php';

// 获取经纬度
$location = getLocation('大连','甘井子区');

// 获取天气信息
$weatherInfo = getWeatherInfo($location);
$cityInfo = $res['location']; // 城市信息，一维关联数组
$weather = $res['daily'][0]; // 天气信息，一维关联数组

// 获取生活指数
$lifeInfo = getLifeInfo($location);

// 组织信息

// 发送信息
$status = sendMsg($content, $phone);
echo $status;
?>
