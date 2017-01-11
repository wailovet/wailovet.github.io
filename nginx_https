wget http://nginx.org/download/nginx-1.9.9.tar.gz
tar -zxvf nginx-1.9.9.tar.gz
yum install pcre*
yum install openssl*
./configure --with-http_ssl_module  --with-http_stub_status_module --with-pcre
make
make install
/usr/local/nginx/sbin/nginx
echo `vi /usr/local/nginx/conf/nginx.conf`;
echo 'resolver 114.114.114.114;
    server {
        listen       443 ssl;
        server_name  localhost;

        ssl_certificate      cert/certificate.crt;
        ssl_certificate_key  cert/private.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;

        location / {
            root   html;
            index  index.html index.htm;
            proxy_pass http://$host;
        }        
        location /websocket/ {  
            proxy_pass http://localhost:88;  
            proxy_http_version 1.1;  
            proxy_set_header Upgrade $http_upgrade;  
            proxy_set_header Connection "upgrade";  
        }  
    } '
