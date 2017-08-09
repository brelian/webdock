<?php
/**
 * 本例用于获取城市的经纬度
 */

/**
 * 获取经纬度
 */
function getLocation($city,$addr) {
	$url = "http://api.map.baidu.com/geocoder/v2/?ak=dkAcrhaAYPg0cHhGt8vfAP5RNIxhC6lG&output=json&address=".$addr."&city=".$city;
	// echo $url;
	// 解析经纬度
	$cood = json_decode(file_get_contents($url),true);
	$lat = $cood['result']['location']['lat'];
	$lng = $cood['result']['location']['lng'];

	return $lat.':'.$lng;
}
 ?>