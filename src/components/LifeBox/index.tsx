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
    for (let i = 0; i < 10000; i++) {
      this.state.array.push(i)
    }
    this.setState({
      array:this.state.array
    })

    // 监听鼠标滚轮
    console.log( document.getElementById('life-box'))
    document.getElementById('life-box')!.addEventListener('wheel',(e)=>{
      e.preventDefault()
      let event = e as window.Event
      console.log(event.wheelDelta)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View >
        <div className='life-box' id='life-box'>
          {
            this.state.array.map((item:any)=>{
              return <div key={item} className="littleBox"></div>
            })
          }
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
        </div>
      </View>
    )
  }
}
