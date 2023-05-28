import { Component, PropsWithChildren } from 'react'
import Taro, { Config } from '@tarojs/taro'

import './app.less'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
    Taro.loadFontFace({
      global: true,
      family: 'Alibaba Puhui',
      source: 'url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi/Alibaba-PuHuiTi-Regular/Alibaba-PuHuiTi-Regular.otf)'
    })
  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
