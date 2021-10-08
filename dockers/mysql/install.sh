#!/bash/bin
docker pull mysql:8.0.17

docker run --name="useful-person-mysql" \
-e MYSQL_DATABASE=okrm \
-e MYSQL_USER=okrm \
-e MYSQL_PASSWORD=okrm_password \
-e MYSQL_ROOT_PASSWORD=okrm_password \
-v /Users/peter/Developer/mysql:/var/lib/mysql \
-d mysql:8.0.17

docker run -d --name="useful-person-mysql" -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=123456 \
-v /Users/peter/Developer/mysql:/var/lib/mysql \
-d mysql:8.0.17

docker exec -it useful-person-mysql /bin/bash

mysql -uroot -p

use mysql
select host,user,authentication_string from user;
grant all on *.* to 'root'@'%';
create database if not exists `okrm` default character set utf8mb4 collate utf8mb4_unicode_ci;
create user 'okrm'@'%' identified by  'okrm_password';
grant all privileges on okrm.* to 'okrm'@'%' with grant option;
flush privileges;