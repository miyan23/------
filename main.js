// main.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 处理登录页面的请求
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));  // 确保 HTML 文件在 `public` 文件夹中
});

// 监听服务器端口
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});