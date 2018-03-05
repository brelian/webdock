<?php
/**
 * 本例用于发送天气预报短信
 */

require_once 'lib/getLocation.php';
require_once 'lib/getWeatherInfo.php';
require_once 'php/api_demo/SmsDemo.php';

// 获取经纬度
$location = getLocation('上海','浦东新区');

// 获取天气信息
$weatherInfo = getWeatherInfo($location);
$cityInfo = $weatherInfo['location']; // 城市信息，一维关联数组
$weather = $weatherInfo['daily'][0]; // 天气信息，一维关联数组


// 获取生活指数
$lifeInfo = getLifeInfo($location);


$demo = new SmsDemo(
    "id",
    "key"
);

echo "SmsDemo::sendSms\n";
$response = $demo->sendSms(
    "签名", // 短信签名
    "SMS_8429508", // 短信模板编号
    "111111111111111", // 短信接收者手机号码
    Array(  // 短信模板中字段的值
        "name"=>"贵宾",
        "city"=>$cityInfo['name'],
        "day"=>$weather['text_day'],
        "night"=>$weather['text_night'],
        "low"=>$weather['low'],
        "high"=>$weather['high']
    ),
    "123"
);

?>