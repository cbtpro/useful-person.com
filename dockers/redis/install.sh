#!/bash/bin
# 拉取redis
docker pull redis
# 第一次启动redis
docker run -d -p 6379:6379 --name="my-redis" redis