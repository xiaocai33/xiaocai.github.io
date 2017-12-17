---
layout: post
title: linux常用命令
date: 2017-11-17
description: “经常用的一些命令，整理下以方便查找”
tag: technology
---   

linux常用命令

#### 压缩和解压

.tar.gz压缩：tar -zcvf file.tar.gz dir
.tar.gz解压：tar -zxvf file.tar.gz

.tar.bz2压缩 tar -jcvf file.tar.bz2 dir
.tar.bz2解压 tar -jxvf file.tar.bz2

-j表示使用bzip2, -z表示使用gzip,-c压缩,-x解压,-v显示,-f文件

.gz压缩:gzip file 
.gz解压:gzip -d file.gz
.bz2压缩: bzip2 file
.bz2解压: bzip2 -d file.bz2

gzip和bzip2压缩及解压会删除原文件,需保留加-c参数并重定向到新文件

.zip压缩: zip -r file.zip files
.zip解压 unzip file.zip (至指定目录加-d参数)

***

#### awk


使用awk抽样:
while read line;do echo -e "$RANDOM\t$line";done < filename | (LC_ALL=C sort -k1,1n) | awk -F '\t' 'NR<=100 {printf("%s", $2); for(i=3;i<=NF;i++) printf("\t%s", $i); printf("\n");}' > samplefile


***

#### 监控：

建立软连接：ln -s file link

查看硬盘使用情况： df -lh

查看内存使用情况：free -m

查看dir文件夹的大小：du -ch dir

实时监控进程：top

显示所有进程: ps -ef


#### hadoop常用设置


hadoop streaming设置:

    -jobconf mapred.job.priority=VERY_HIGH \ 优先级
    -jobconf mapred.job.map.capacity=1000 \ job capacity
    -jobconf mapred.job.reduce.capacity=1000 \ reduce capacity
    -jobconf mapred.reduce.tasks=1000 \ reduce tasks
    -jobconf mapred.map.memory.limit=10000 \ 内存限制
    -jobconf mapred.map.over.capacity.allowed=ture \ 允许超capacity
    -jobconf mapred.job.queue.name = job_name \ job名
    -jobconf stream.num.map.output.key.fields=2 \ 指定map输出记录中key所占的域数目
    -jobconf num.key.fields.for.partition=1\ 分桶时key占的列数
    

hadoop job参数设置命令

    hadoop job -set-priority job_id VERY_HIGH
    hadoop job -set-map.capacity job_id 1000









