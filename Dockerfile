# Build Stage
FROM node:20-alpine AS build
 
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install -g pnpm@latest-10
RUN pnpm install
 
# Copy the rest of your application files
COPY . .

ENV NODE_ENV=production

RUN pnpm run build

FROM nginx:1.27.4-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/out /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]