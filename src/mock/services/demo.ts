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
import { builder } from '../util'

const demo = () => {
    return builder({
        "code": 0,
        "data": [
            {
            "id": 0,
            "key": 0,
            "name": "王祖贤",
            "sex": "女",
            "description": "90后美女"
            },
            {
            "id": 1,
            "key": 1,
            "name": "彭于晏",
            "sex": "男",
            "description": "自律"
            },
            {
            "id": 2,
            "key": 2,
            "name": "江疏影",
            "sex": "女",
            "description": "上海美女"
            },
            {
            "id": 3,
            "key": 3,
            "name": "刘亦菲",
            "sex": "女",
            "description": "神仙姐姐"
            }
        ],
        "content": "OK"
    })
}

Mock.mock(/\/api\/demo/, 'get', demo)
