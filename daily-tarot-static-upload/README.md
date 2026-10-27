# Daily Tarot｜每日塔罗（静态版）

22张大阿尔卡那、单张与三张牌抽取、深入象征解读、主题建议、PNG保存及最近100条本地记录。记录可隐藏、显示、删除，不跨设备或浏览器共享。不限抽取次数。无AI调用、无API Key、无后端。

## 运行

在项目目录执行 node serve.cjs，然后访问 http://127.0.0.1:4173 。

## 上传

将此文件夹内的 public 文件夹、README.md、.gitignore 和维护脚本上传到 GitHub 仓库根目录 main 分支，不上传外层 daily-tarot-static 文件夹或ZIP。

## Cloudflare Pages 部署

Production branch: main；Framework preset: None；Build command: exit 0；Build output directory: public；Root directory: 留空。

GitHub仓库用于存放代码；上传本身不会生成网站访问地址。GitHub Pages也是静态托管方案，但不能直接把public选作分支发布目录；本项目沿用Cloudflare Pages的public目录配置。

## 检查

node test-v2.cjs 验证牌组、历史记录、删除、隐藏与解读逻辑。浏览器视觉及PNG实际下载尚需人工验收。

资料只保存在当前浏览器localStorage。隐藏不是密码保护，同一浏览器使用者仍可展开记录。仅供娱乐和自我反思。
