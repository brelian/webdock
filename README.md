# sendMsg
---
> Description: 一个给母亲，给女朋友定时发送天气预报的程序

> Author: Gbin

> Date: 2017年8月8日19:35:13

---

## 整理一下思路
1. 获取到地址

	- 通过MAC 地址获取失败

	- 通过 IMEI 获取失败

	- 通过 IP 无法得到 IP 失败

	目前无法追踪到，手动配置

2. [发送短信接口](https://www.smsbao.com/openapi/)

	- 使用阿里大于：申请复杂，模板固定

	- 使用 139 或 189 邮箱，开通结尾太丑

	继续尝试其他方案

	- 短信宝，终于找到一个注册后就可以使用的

3. [天气接口](https://www.seniverse.com/doc)

	- 最终选择心知天气，选择经纬度定位确保获取成功

	- 生活指数


4. [百度经纬度 API](http://lbsyun.baidu.com/index.php?title=%E9%A6%96%E9%A1%B5)

5. 部署到线上环境定时执行


## 参考
- [http://apizza.cc/console/project/8e0342415ad3df5643409045ec8a5e75/browse?api=adde793df46746cdb0641b014a12ea18](http://apizza.cc/console/project/8e0342415ad3df5643409045ec8a5e75/browse?api=adde793df46746cdb0641b014a12ea18)