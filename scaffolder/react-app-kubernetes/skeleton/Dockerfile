FROM nginx

# Copying built assets from builder
COPY ./build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
