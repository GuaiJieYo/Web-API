# 本站介绍
GuaiJie·API建于2022年03月12日  

> 一个简单的API网站。

- 简单、轻便
- 基于Vercel网站稳定不易暴毙
- 访问速度快
- NodeJS编写

首页地址：[https://api.guaijie.top](https://api.guaijie.top)

## 响应参数
200 请求/解析成功

201 未输入请求参数

202 请求/解析失败

# Bing每日壁纸获取

## 请求地址
```
https://api.guaijie.top/api/bing
```

## 请求示例 [GET]
```
https://api.guaijie.top/api/bing/?uhd=true
```

## 请求参数

| 参数名称      | 类型 | 参数值 | 描述 |
| :-----------: | :-----------: | :-----------: | :-----------: |
| uhd   | 布朗值        | true   | 填写true则可以返回4K画质的图片        |

## 返回效果

<img src="https://api.guaijie.top/api/bing/?uhd=true" >

# Gravatar头像获取

## 请求地址
```
https://api.guaijie.top/api/gravatar
```

## 请求示例 [GET]
```
https://api.guaijie.top/api/gravatar/?email=xxx@gmail.com&proxy=true
```

## 请求参数

| 参数名称      | 类型 | 参数值 | 描述 |
| :-----------: | :-----------: | :-----------: | :-----------: |
| email   | 字符串     | 邮箱地址 | 必填!!! 填写你在Gravatar注册时的地址 |
| proxy   | 布朗值     | true   | 填写true即可使用国内加速节点        |

## 返回效果

<img src="https://api.guaijie.top/api/gravatar/?email=xxx@gmail.com&proxy=true" >
