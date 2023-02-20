## 项目说明

## 项目构建

1.运行：

```
    npm install # 安装依赖包
    npm run dev # 启动Server
```

## 项目结构

```
   .
├── README.md
├── bin
├── config
│   ├── default.json
│   ├── development.json
│   ├── production.json
│   └── setting.js
├── doc
├── package-lock.json
├── package.json
├── server
│   ├── app.js
│   ├── constants
│   ├── controllers
│   ├── dbHelper
│   ├── logs
│   ├── models
│   ├── routers
│   ├── static
│   ├── utils
│   └── views
└── tree.txt
```

## 目录生成

```
    tree -I "node_modules" -L 2  > tree.txt
```
