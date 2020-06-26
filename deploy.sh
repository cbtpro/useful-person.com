#!/bin/sh
username=okrm
remote_id=121.40.244.200
remote_dir=/home/okrm/www
time=$(date "+%Y-%m-%d_%H:%M:%S")
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
scp build.zip ${username}@${remote_id}:/${remote_dir}/${zipFile}
logFn "备份、发布"
ssh ${username}@${remote_id} > /dev/null 2>&1 << EOF
cd /${remote_dir}
unzip ${zipFile}
mv ${file} ${bakFile}
mv build ${file}
exit
EOF
echo done!