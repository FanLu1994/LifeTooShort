import { Component, PropsWithChildren } from 'react'
import { View, Text,Picker } from '@tarojs/components'
import { AtSlider } from 'taro-ui'
import LifeBox from "../../components/LifeBox";

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/slider.scss";
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  state = {
    dateSel: new Date(),
    life:80,
    today:new Date()
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onDateChange = e => {
    console.log(e.detail.value)
    this.setState({
      dateSel: new Date(e.detail.value)
    })
  }

  onLifeChange = e => {
    console.log(e)
    this.setState({
      life: e
    })
  }

  dateFormat = date=>{
    return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"
  }

  render () {
    return (
      <View className='index'>
        <View className='title'>
          <Text>人生苦短，及时行乐</Text>
        </View>
        <View className='date-select'>
          <View>
            <Picker mode='date' onChange={this.onDateChange} value={this.state.today.toString()}>
              <View>
                <Text>请选择您的生日：</Text>
                <Text>{this.dateFormat(this.state.dateSel)}</Text>
              </View>
            </Picker>
          </View>
        </View>
        <View className='life-select'>
          <Text>请选择你希望的生命长度：{this.state.life}</Text>
          <View>
            <AtSlider step={1} value={this.state.life}
                      onChange={this.onLifeChange}
                      max={125}
                      activeColor='#4285F4'
                      backgroundColor='#BDBDBD'
                      blockColor='#4285F4'
                      blockSize={24}></AtSlider>
          </View>
        </View>
        <LifeBox name="测试数据"
                 life={this.state.life}
                 dateSel={this.state.dateSel}></LifeBox>
      </View>
    )
  }
}
