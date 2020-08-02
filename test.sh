#!/bin/sh
ip=121.40.169.164
time=$(date "+%Y-%m-%d_%H:%M:%S")
echo -e "请输入用户名：\c"
read user
if [ -z $user ]; then
  echo -e "用户名不能为空！\c"
  exit 1
fi

logFile=deploy_${time}.log
file=useful-person.com
zipFile=${file}_${time}.zip
bakFile=${file}_${time}_bak
logFn() {
    echo "$(date "+%Y-%m-%d %H:%M:%S") $1" >> ${logFile}
}

logFn "删除build.zip..."
rm -rf build.zip
logFn "构建生产包..."
npm run build >> ${logFile}
logFn "压缩build..."
logFn `zip -r build.zip build`
logFn "上传build"
scp build.zip $user@$ip:/$remote_dir/$zipFile
echo $?
logFn "备份、发布"
ssh $user@$ip << EOF
cd /${remote_dir}
unzip ${zipFile}
mv ${file} ${bakFile}
mv build ${file}
exit
EOF
echo $?
echo done!