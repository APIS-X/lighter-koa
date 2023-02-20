## 项目说明

由 Koa 构建的 Node 项目，暂时只集成了 Puppeteer 生成 PDF 的功能，后续可作为 Node 工具集成其它功能

## 项目构建

1.运行：

```
    npm install # 安装依赖包
    npm run dev # 启动Server
```

2. 虚拟机安装包打包

- mac 本地打包得到程序离线安装包
  - 初次安装打包
    ```
        zip -r kirin-node.zip ./ -x '*.git' -x '.git/*'  -x '.*'  -x '*.DS_Store' -x '__MACOSX' -x 'packages/chrome-mac/*' -x 'README.md'
    ```
  - 后续安装打包
    ```
        zip -r kirin-node.zip ./ -x '*.git' -x '.git/*'  -x '.*'  -x '*.DS_Store' -x '__MACOSX' -x 'packages/chrome-mac/*' -x 'packages/node/*' -x 'packages/chrome-relys' -x 'README.md'
    ```

## 项目结构

```
    .
    ├── bin                                                 操作脚本相关
    │   ├── deploy.sh                                       虚拟机离线安装脚本
    │   ├── yum-install.sh                                  虚拟机公网安装脚本
    │   ├── start.sh
    │   └── stop.sh
    ├── config                                              项目环境配置相关
    │   ├── default.json                                    默认配置
    │   ├── development.json                                开发环境配置
    │   └── production.json                                 生产环境配置
    ├── output                                              日志输出相关目录
    │   └── logs
    ├── doc                                                 文档相关
    │   ├── 虚拟机离线部署.md
    ├── packages                                            第三方包相关目录
    │   ├── chrome-linux                                    离线PDF生成相关-linux(服务器部署需要)
    │   ├── chrome-mac                                      离线PDF生成相关-mac(本地开发需要)
    │   ├── chrome-relys                                    离线PDF生成相关-linux(虚拟机离线安装需要)
    │   └──node                                             离线PDF生成相关-linux(虚拟机离线安装需要)
    ├── server
    │   ├── constants                                       常量
    │   ├── controllers                                     具体接口控制器
    │   ├── main.js                                         程序主入口
    │   ├── public                                          静态公共目录
    │   ├── routes                                          路由
    │   └── utils                                           公共方法
    ├── favicon.ico
    ├── jsconfig.json
    ├── package.json
    ├── Dockerfile                                          容器环境部署Dockerfile文件
    ├── build.sh                                            容器环境部署文件
    ├── pm2.json                                            pm2启动配置文件(开发环境)
    ├── pm2-deploy.json                                     pm2启动配置文件(离线安装)
    ├── README.md
    └── tree.txt
```

## 目录生成

```
    tree -I "node_modules" -L 2  > tree.txt
```

## PDF 下载相关

- 大文件 PDF 的下载可以采用 mode:'mode',slice:true 模式，然后再合并的方式，采用该方式时候，需注意以下几点：
  - 页面分片下载的模块需配置唯一的 ID;
  - Dom 渲染时需根据访问路由中 type === 'preludeInfo' type === 模块 ID 去控制模块是否显示;
  - 'ReportCover'组件的 dataMenus 参数为该 ID 集合的字符串；

## 关于

- 离线部署依赖包制作：
  虚拟机离线安装的时候，需要先通过有公网的虚拟机下载 chrome-linux 运行相关的系统依赖包到项目制定目录
  ```
      yumdownloader --resolve --destdir=./ pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc atk at-spi2-atk libxkbcommon-x11-devel libXcomposite gtk3
  ```

## 相关文档

- https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
- https://npm.taobao.org/mirrors/chromium-browser-snapshots/Mac/
- https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-printToPDF
- https://www.cnblogs.com/ilizhu/p/14504049.html
