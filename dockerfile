# Aşama 1: Build
FROM node:18 AS builder

# Çalışma dizinini ayarla
WORKDIR /app
COPY . .

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY . .

# Uygulamayı build et
RUN npm run build

# Aşama 2: Serve
FROM nginx:1.25

# Build edilen dosyaları nginx'e kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

# 80 portunu expose et
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]