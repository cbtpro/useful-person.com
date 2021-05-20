import React from 'react'
import { IUserInfo } from '@/interfaces/UserInfo'
import { Descriptions, Tag, PageHeader, Row, Button } from 'antd'
import moment from 'moment'

interface IProps {
    userInfo: IUserInfo
}
const Content = (content: { children: JSX.Element, extraContent: JSX.Element }) => {
    return (
      <Row>
        <div style={{ flex: 1 }}>{content.children}</div>
        <div className="avatar-image">{content.extraContent}</div>
      </Row>
    )
  }
export default (props: IProps) => {
    const { userInfo } = props
    const { uuid, username, nickname, mobile, birthday, identityCardNo, longitude, latitude, updateTime, createTime } = userInfo
    return <>
        <PageHeader
            title={userInfo?.nickname}
            className="site-page-header"
            tags={<Tag color="blue">注册用户</Tag>}
            extra={[
                <Button key="1"
                  type="primary"
                  onClick={() => { }}>跟随</Button>
            ]}
            avatar={{ src: userInfo?.avatar }}
        >
            <Content
                extraContent={
                    <img
                        src={userInfo?.avatar}
                        alt="content"
                        width="50%"
                    />
                }
            >
                <Descriptions size="small" column={1}>
                    <Descriptions.Item label="ID">{uuid}</Descriptions.Item>
                    <Descriptions.Item label="用户名">{username}</Descriptions.Item>
                    <Descriptions.Item label="昵称">{nickname}</Descriptions.Item>
                    <Descriptions.Item label="手机号">{mobile}</Descriptions.Item>
                    <Descriptions.Item label="生日">{moment(birthday).format('YYYY-MM')}</Descriptions.Item>
                    <Descriptions.Item label="实名制">{identityCardNo ? <Tag color="blue">已实名</Tag> : <Tag color="red">未实名</Tag>}</Descriptions.Item>
                    <Descriptions.Item label="位置信息">{longitude}, {latitude}</Descriptions.Item>
                    <Descriptions.Item label="最后登陆时间">{moment(updateTime).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
                    <Descriptions.Item label="注册时间">{moment(createTime).format('YYYY-MM-DD HH:mm')}</Descriptions.Item>
                </Descriptions>
            </Content>
        </PageHeader>
    </>
}