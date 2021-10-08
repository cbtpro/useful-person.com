// Copyright 2021 peter
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Mock from 'mockjs'
import { builder } from '../../util'

const me = () => {
    return builder({
        "code": 0,
        "content": "",
        "data": {
            "uuid": "0f228cd2-c69a-4859-a128-84a2b81edf6d",
            "username": "mock user cbtpro",
            "nickname": "大反派",
            "avatar": "https://resources.useful-person.com/avatar/03637356-da20-451a-8824-f41f34311e20.jpg",
            "mobile": "189******49",
            "birthday": 653760000000,
            "identityCardName": "**滔",
            "identityCardNo": "430****405X",
            "email": "pete******@useful-person.com",
            "province": "440000",
            "city": "440300",
            "county": "440309",
            "longitude": null,
            "latitude": null,
            "hourlyWage": "CNY 122.22",
            "roles": [
                {
                    "uuid": "71bab2c9-d585-48e3-b47a-bbedd5373cc3",
                    "rolename": "ADMIN",
                    "description": "超级管理员用户",
                    "updateTime": 1593157201457,
                    "createTime": 1593157201457
                },
                {
                    "uuid": "2af6ba16-5cdf-42cd-8491-832d17970d3a",
                    "rolename": "NORMAL",
                    "description": "普通用户",
                    "updateTime": 1593159330133,
                    "createTime": 1593159330133
                }
            ],
            "enabled": true,
            "updateTime": 1593158972149,
            "createTime": 1593158972149
        }
    })
}

Mock.mock(/\/api\/user\/me/, 'get', me)
