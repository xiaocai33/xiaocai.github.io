---
layout: post
title: "正则表达式总结整理”
date: 2017-12-18
description: “简单的正则表达式一直在用，有时遇到一些比较复杂的需求要再去查。在这里整理一下所有的正则表达式的内容”
tag: Linux
---   

## 前言

正则表达式是一种处理字符串的方法，它以行为单位来进行字符串的处理行为。
正则表达式通过一些特殊符号的辅助，可以让用户轻易达到查找、删除、替换某特定字符串的处理程序。

正则表达式是一种“表示方法”，只要工具程序支持这种表示法，那么该工具程序就可以作为正则表达式的字符串处理只用，例如vim, grep, awk, sed等工具。
因为他们支持正则表达式，所以这些工具就可以使用正则表达式的特殊字符来进行字符串的处理。

* [1.特殊符号](#1)

* [2.基础正则表达式字符](#2)

* [3.grep高级用法](#3)


****


<h2 id="1">1.特殊符号 </h2>

[:alnum:] 代表英文大小写字符及数字，即0-9, A-Z, a-z

[:alpha:] 代表任何英文大小写字符，即A-Z, a-z

[:blank:] 代表空格键和[tab]键

[:cntrl:] 代表控制键，包括CR, LF, Tab, Del等

[:digit:] 代表数字，即0-9

[:graph:] 除了空格符(空格和[tab])外的其他所有按键

[:lower:] 代表小写字符，即a-z

[:print:] 代表任何可以被打印出来的字符

[:punct:] 代表标点符号(punctuation symbol)，即" ' ? ! ; : # $

[:upper:] 代表大写字符，即A-Z

[:space:] 代表任何产生空白的字符，包括空格 [tab] CR等

[:xdigit:] 代表十六进制的数字类型，包括0-9, A-F, a-f


<h2 id="2">2.基础正则表达式字符 </h2>

**^word 以word开头**

例:查找包含the的行，但the必须出现在行首

    [root@localhost ~]# grep '^the' file


**[^w] 除w以外的字符**

例:查找包含'oo'的行，但oo前不能是字母g

    [root@localhost ~]# grep '[^g]oo' file


**word$ 以word结尾**

例: 查找行尾为x的行

    [root@localhost ~]# grep 'x$' file 


**. 代表一个任一字符**

**\ 转义字符，将特殊符号的特殊意义取出**

**\* 重复前一个字符零个到无穷多个**

**\+ 重复前一个字符至少1次**

**? 重复前一个字符零次或1次**

**\| 用或的方式找出数个字符串，即满足\|前后的任一条件均可**

例: 找出包含aaa或者bbb的字符串

    [root@localhost ~]# grep 'aaa|bbb' file

**() 找出“组”字符串，如:**

例:查找包含glad或good的行

    [root@localhost ~]# grep 'go(la|oo)d' file 

**()+ 多个重复组的判别**

例: 查找以A开头，以C结尾，中间是一个或多个xyz的行

    [root@localhost ~]# grep 'A(xyz)+C' file 


**[list] 字符集合中的任一字符**

例：查找包含test或tast这两个之一的行

    [root@localhost ~]# grep 't[ae]st' file


**[n1-n2] n1到n2范围中的任一字符**

**[^list] 不在字符集合中的任一字符**

例: 查找开头不是英文字符的行

    [root@localhost ~]# grep '^[^a-zA-Z]' file 

例: 查找包含'oo'的行，但oo前不能是任何小写字母

    [root@localhost ~]# grep '[^a-z]oo' file
    [root@localhost ~]# grep '[^[:lower:]]oo' file


**\\{n,m\\} 将前一个字符重复n到m个**

例: 查找包含g??d的行，其中g和d之间是任意2到5个字符

    [root@localhost ~]# grep ‘g.\{2,5\}d’ file 


***

