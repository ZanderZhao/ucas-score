## 中国科学院大学成绩查询及格式转换

> 仅作学习交流 | 在线网页：<https://zanderzhao.github.io/ucas-score>




### Step 1: 登陆sep

+ 打开sep并登陆  <https://sep.ucas.ac.cn>



### Step 2: 获得json数据

+ 依次打开**sep**>**选课系统**>**查询成绩**>**所有成绩**

+ **在网页末尾加上**`.json`，如<https://jwxk.ucas.ac.cn/score/yjs/all.json>（如果**后期教务系统更新了**上面加json链接可能打不开）

+ **复制里面全部数据** 



### Step 3: 转化为易读数据

将上面复制的数据粘贴在下方，就会显示结果，（若下方无法粘贴或粘贴后无反应，请尝试[点此打开在线网页](https://zanderzhao.github.io/ucas-score)）

<form>
粘贴上面复制的数据:<input name="jwjson" type="password" oninput="OnInput (event)"
onpropertychange="OnPropChanged (event)" />
</form>
<hr/><p id="show"></p><hr/>
<script type="text/javascript" src="score.js" ></script>



> 注意：
>
> + 1.如果**复制的数据有问题**或者**后期教务更新为新系统**上方**可能无法展示**，
> + 2.这是一个**纯前端**的网页**不收集任何数据**，本质就是个js处理json的东西

> 仅作学习交流 | 在线教程：[混沌于宙@bilibili](https://www.bilibili.com/)   |   源码：[ZanderZhao@github](https://github.com/ZanderZhao/ucas-score) 



