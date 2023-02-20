/**
 * @description 项目相关配置文件
 * @author APIS
 */

const { resolve } = require('path');
console.log('env', global.env);

// 路径相关
const pathRoot = resolve(__dirname, '../');
const serverPath = {
  pathRoot,
};

module.exports = {
  serverPath,
};
