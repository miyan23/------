# 使用官方 Node.js 镜像作为基础镜像
FROM node:16

# 设置工作目录为 /app
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果存在）到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 暴露应用端口
EXPOSE 3000

# 启动应用
CMD ["node", "main.js"]