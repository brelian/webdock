<meta charset="utf-8">
<?php
/**
 * 该页面用于获取城市天气信息
 */

############# 获取城市 id #############

$url = 'http://mobile.weather.com.cn/js/citylist.xml';
$XMLcity = file_get_contents($url);
$XML = simplexml_load_string($XMLcity);

// $city 自定义
$city = '大连';
$province = '辽宁';
// $reg = "//*[@d4='$city']";
$path = "//*[@d4='$province' and @d2='$city']";
// echo $reg;
// 查询到城市,返回一个 xml 对象
$city = $XML->xpath($path)[0];
// 获取 d1 属性
$cid = $city['d1'];


################ 获取天气信息 ###############
// $url = 'http://www.weather.com.cn/data/cityinfo/'.$cid.'.html';
// echo $url;
// $cityWeatherInfo = file_get_contents($url);  // 返回 json
// $cityWeatherInfo = json_decode($cityWeatherInfo,true);  // 解析为数组
// print_r($cityWeatherInfo["weatherinfo"]);
// $weatherinfo = $cityWeatherInfo["weatherinfo"];
// // 拼接天气信息
// $info = '今天'.$weatherinfo["city"].'的天气'.$weatherinfo["weather"].'，';
// $info .= '最低气温是 '.$weatherinfo["temp1"].'，最高气温是 '.$weatherinfo["temp2"];
// echo $info;


// $url = 'https://api.seniverse.com/v3/life/suggestion.json?key=9vcct57owl33u2t1&location=shanghai&language=zh-Hans';
$url = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101110101';
$test = file_get_contents($url);

?>