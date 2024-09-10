# Stage 1: Build React app
FROM node:20 AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# Stage 2: Serve app with nginx server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html  
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Uncomment this if you have certs, otherwise you can remove this line
COPY ./certs/* /etc/nginx/ssl/

EXPOSE 80
EXPOSE 443

# Optional Health Check
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
