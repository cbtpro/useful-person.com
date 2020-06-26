## 配置文件

配置文件模板

```
# .env.template
PORT=你的开发服务端口
REACT_APP_BASE_SERVICE_URL=你的后台服务接口地址
```

### 开发环境配置

```
# .env.development.local
PORT=10000
REACT_APP_BASE_SERVICE_URL=/api
```

### 生产环境配置

```
# .env.production
REACT_APP_BASE_SERVICE_URL=/api
```

### 构建发布

```
sh deploy.sh
```

