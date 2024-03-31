# 使用 Node 作为基础镜像
FROM node:alpine as build-stage

# 设置工作目录
WORKDIR /app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将项目文件复制到工作目录
COPY . .

# 构建 Vue 项目
RUN npm run build

# 使用 Nginx 作为另一个基础镜像
FROM nginx:alpine

# 复制构建好的 Vue 项目到 Nginx 的默认站点目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY static-files/ /app/static-files

COPY nginx.conf /etc/nginx/conf.d/default.conf
# 暴露 Nginx 默认端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
