import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

interface LifeBoxProps {
  name:string;
}

export default class LifeBox extends Component<LifeBoxProps> {

  state = {
    dateSel: new Date(),
    life:80,
    today:new Date(),
    array:[] as number[],
  }

  componentWillMount () { }

  componentDidMount () {
    console.log(this.props.name)
    for (let i = 0; i < 100; i++) {
      this.state.array.push(i)
    }
    console.log(this.state.array)
    this.setState({
      array:this.state.array
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className='life-box'>
        {this.state.array}
        {
          this.state.array.map((item:any)=>{
            console.log(item)
            return <p key={item}>{item}-{this.props.name}</p>
          })
        }
      </View>
    )
  }
}
