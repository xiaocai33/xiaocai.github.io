---
layout: post
title: python汉字转拼音
date: 2018-02-26
description: python汉字转拼音
tag: technology
---   

#### 场景说明

把中文汉字、转成汉语拼音，包括：

  1.纯汉字转拼音

  2.汉字里面加有字母转拼音

  3.转加声调的拼音

  4.转用数字表示声调的拼音

#### install

pip install pinyin

[GitHub-pinyin](https://link.jianshu.com/?t=https://github.com/lxyu/pinyin)
[python汉字转拼音](https://www.jianshu.com/p/5ec83ad2276b)


#### 用法

输入需要是unicode编码，用python的decode函数解码后即获得unicode编码。

Import pinyin


得到拼音:

    pinyin.get('你好', “-”, format="strip")

输出: nihao


    pinyin.get(‘你好’, “-”, format=“numerical”)

输出： ni3-hao3

    pinyin.get(‘你好’, “-”, format=“diacritical”)

输出: nǐ-hǎo

**注: 除汉字串本身外，其余均为可选参数, 分隔符默认为空，format默认为diacritical**


***