# 使用官方 Node.js 18 版本的 Alpine Linux 鏡像作為基礎鏡像
FROM node:18-alpine

# 在容器內創建一個目錄 /website 並將其設為工作目錄
WORKDIR /website

# 將當前目錄下的 package.json 複製到容器中的 /website 目錄
COPY package.json ./

# 在容器中運行 npm install 命令來安裝依賴項
RUN npm install

# 如果你在為生產環境構建代碼，可以使用 npm ci --only=production
# 這會根據 package-lock.json 安裝依賴，保證依賴版本的一致性
# RUN npm ci --only=production

# 將當前目錄下的所有文件和目錄複製到容器中的 /website 目錄
COPY . .

# 在容器中運行 npm run build 命令來構建應用
RUN npm run build

# 讓容器對外暴露 3333 端口
EXPOSE 3333

# 設置一個環境變量 PORT，值為 3333
ENV PORT=3333

# 容器啟動時運行 node 命令來啟動位於 .output/server/index.mjs 的應用程序
CMD ["node", ".output/server/index.mjs"]
