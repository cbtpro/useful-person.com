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
import React from 'react'
import { Card } from 'antd'
import { isProd, RELEASE_INFO } from '@/constants/App'

const { Meta } = Card

interface IProps {}

const ReleaseInfo = (props: IProps) => {
    const {
        ENV,
    } = RELEASE_INFO
    return <>
        {
            !isProd ? 
            <Card bordered={false}>
                <Meta title="环境" description={ENV} />
            </Card> : ''
        }
    </>
}
export default ReleaseInfo
