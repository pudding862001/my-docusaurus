FROM node:24-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html

RUN sed -i 's/listen[[:space:]]*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

ENV PORT 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]