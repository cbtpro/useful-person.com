import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography } from 'antd'
const { Title, Paragraph, Text } = Typography

export default () => {
  return <Card bordered={false}>
    <Typography>
      <Title>OKRM介绍</Title>
      <Paragraph>
        OKRM是一个简单、易用的目标管理工具，拥有丰富的可复用日常目标列表。通过抽象通用的学习目标，帮助大学生学习具有竞争力的技能。
      </Paragraph>
      <Paragraph>
        目标是一个个拆分成难度适中的微小目标，易于完成、跟踪。是带有社交活动的共享目标，它可是已一段语法，一篇文章、一本书、一个单词、一个大工程等。
      </Paragraph>
      <Paragraph>
        <ul>
          <li>纳什均衡理论</li>
          <li>基于树莓派的室温监控系统</li>
          <li><Text code>{`let result = {...result, { name: 'peter' }}`}</Text></li>
          <li>webpack插件介绍</li>
          <li>Typescript</li>
          <li>Java线程应用和实践</li>
          <li>SpringSecurity使用Oauth2链接QQ互联</li>
          <li>……</li>
          <li>……</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <Link to="/portal/signin">登陆</Link> 或 <Link to="/portal/signup">注册</Link> 账户，创建自己的目标列表和朋友一起共同进步。
      </Paragraph>
    </Typography>
  </Card>
}
