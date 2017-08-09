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
// print_r($cityInfo);
// print_r($weather);

// 获取生活指数
$lifeInfo = getLifeInfo($location);
// print_r($lifeInfo);

// 组织信息
// $content = '亲爱的芳芳，今天'.$cityInfo['name'].'的天气白天'.$weather['text_day'].'，';
// $content .= '晚上'.$weather['text_night'].'，最低气温 '.$weather['low'].'℃ ，最高气温 ';
// $content .= $weather['high'].'℃ 。一个人在外面要注意身体，照顾好自己，宾宾爱你！';
// echo $content;

// $content = "{
// 	'name':'芳芳',
// 	'city': '$cityInfo[name]',
// 	'day': '$weather[text_day]',
// 	'night': '$weather[text_night]',
// 	'low': ' $weather[low] ℃',
// 	'high': ' $weather[high] ℃',
// 	'lifeInfo':'一个人在外面要注意身体，照顾好自己，宾宾爱你！'
// }";

// $content = "{'city':'$cityInfo[name]','weather':'白天$weather[text_day]，晚上$weather[text_night]，最低气温 $weather[low] ℃，最高气温 $weather[high] ℃ 。'}";

// echo $content;
// print_r( json_decode($content,true) );
// 亲爱的${name}，今天${city}的天气白天${day}，晚上${night}，最低气温 ${low} ℃ ，最高气温 ${high} ℃ ，${lifeInfo}
/*
亲爱的芳芳，今天${city}的天气${weather}，一个人要注意身体，爱你哦！
 */

// 调用示例：


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
    	"name"=>"芳芳",
        "city"=>"$cityInfo[name]",
        "day"=>"$weather[text_day]",
        "night"=>"$weather[text_night]",
        "low"=>"$weather[low]",
        "high"=>"$weather[high]"
        // "weather"=>"白天$weather[text_day]，晚上$weather[text_night]，最低气温 $weather[low] ℃，最高气温 $weather[high] ℃ 。"
    ),
    "123"
);

print_r($response);

// $response = $demo->sendSms(
//     "宾宾", // 短信签名
//     "SMS_83800015", // 短信模板编号
//     "18042670878", // 短信接收者
//     Array(  // 短信模板中字段的值
//         "city"=>"$cityInfo[name]",
//         "weather"=>"白天$weather[text_day]，晚上$weather[text_night]，最低气温 $weather[low] ℃，最高气温 $weather[high] ℃ 。"
//     ),
//     "123"
// );


// echo "SmsDemo::queryDetails\n";
// $response = $demo->queryDetails(
//     "12345678901",  // phoneNumbers 电话号码
//     "20170718", // sendDate 发送时间
//     10, // pageSize 分页大小
//     1 // currentPage 当前页码
//     // "abcd" // bizId 短信发送流水号，选填
// );

// print_r($response);


// // 发送信息
// $status = sendMsg($content, '18042670878');
// echo $status;

 // 亲爱的${name}，今天${city}的天气白天${day}，晚上${night}，最低气温 ${low} ℃ ，最高气温 ${high} ℃ ，${lifeInfo}。

?>