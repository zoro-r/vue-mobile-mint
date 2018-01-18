# n22-vue

![neleme](https://github.com/jdfdcc/vue-mobile-mint/blob/master/static/img/show.gif)
> A Vue.js project 仿饿了么

> 框架 mint-ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


框架增加插件地址

导航插件 https://github.com/zack24q/vue-navigation

地址插件 https://github.com/jcc/v-distpicker


```
解决弹出相册后页面白屏方案
在MainViewController.m中添加如下代码：

-(void)viewWillDisappear:(BOOL)animated
{
    if([[[UIDevice currentDevice]systemVersion ] floatValue]>=7)
    {
        CGRect viewBounds=[self.webView  bounds];
        viewBounds.origin.y=20;
        viewBounds.size.height=viewBounds.size.height+20;
        self.webView.frame=viewBounds;
    }
    [super viewWillDisappear:animated];
}

解决-webkit-overflow-scrolling引起的bug
添加插件
cordova plugin add https://github.com/ionic-team/cordova-plugin-wkwebview-engine.git --save
github地址 https://github.com/ionic-team/cordova-plugin-wkwebview-engine
npm run build --report
```
### -webkit-overflow-scrolling 
-webkit-overflow-scrolling ：touch 当为局部滚动（如给某个指定的div设置滚动）时候才需要设置，全局滚动无需设置（body滚动）

github地址 https://github.com/ionic-team/cordova-plugin-wkwebview-engine

IOSApp下载地址：https://www.pgyer.com/FmvM

突然好想重写一遍咋办......

欢迎inssues 欢迎star
