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

interface IResponseBody {
    code?: 0 | 1,
    data?: any,
    content?: String;
    headers?: any,
}
interface IOptions {
    url: string;
    body: any;
}
const defaultResponse = {
    code: 0,
    content: '',
    data: null,
}
export const builder = (response: IResponseBody = {
    code: 0,
}) => {
    return {
        ...defaultResponse,
        ...response,
    }
}
export const getQueryParameters = (options: IOptions) => {
    const { url } = options
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}')
}
export const getBody = (options: IOptions) => options.body && JSON.parse(options.body)
