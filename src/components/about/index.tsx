import React from 'react'
import { Typography } from 'antd'
const { Title, Paragraph } = Typography

const paragraphStyle = {
  textIndent: '36px'
}

export default () => {
  return <>
    <Typography>
      <Title style={{ textAlign: 'center' }}>关于我们</Title>
      <Paragraph style={paragraphStyle}>
        深圳市生而不庸软件技术有限责任公司于2019年9月成立于深圳软件产业基地。我们主要产品是“生而不庸”APP，目标是帮助用户明确个人目标，保证集中精力提升个人能力和价值，在未来的工作和学习中更有竞争力。
      </Paragraph>
      <Title style={{ textAlign: 'center' }}>愿景和使命</Title>
      <Paragraph style={paragraphStyle}>
        帮助用户提升价值，共同创建美好生活是我们的终身奋斗的目标。
      </Paragraph>
    </Typography>
  </>
}
