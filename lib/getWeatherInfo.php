<?php
/**
 * 本例用于获取城市今天的天气预报
 */

################### 天气基本信息 #####################
function getWeatherInfo($location) {

	// 如：start=-2 代表前天、start=-1 代表昨天、start=0 代表今天、start=1 代表明天
	$url = 'https://api.seniverse.com/v3/weather/daily.json?key=9vcct57owl33u2t1&location='.$location.'&language=zh-Hans&unit=c&start=0&days=1';

	$weatherInfo = json_decode(file_get_contents($url),true);
	$res = $weatherInfo['results'][0];

	return $res;
}

######################### 生活指数  #####################
function getLifeInfo($localtion) {

	$url = 'https://api.seniverse.com/v3/life/suggestion.json?key=9vcct57owl33u2t1&location='.$location.'&language=zh-Hans';
	$lifeInfo = json_decode(file_get_contents($url),true);

	// 生活建议，二维数组，包括 6 项
	return $lifeInfo['results'][0]['suggestion'];
}

 ?>