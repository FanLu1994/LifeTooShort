import { Component } from 'react'
import { View } from '@tarojs/components'
import * as dayjs from 'dayjs'

import './index.scss'

interface LifeBoxProps {
  name:string;
  dateSel:Date;
  life:number;
}

export default class LifeBox extends Component<LifeBoxProps> {

  state = {
    array:[] as number[],
    currentDiffIndex:0,
    diffList:[0],
  }

  componentWillMount () {
    let startDate = dayjs(this.props.dateSel)
    let endDate = startDate.add(this.props.life,'year')
    let diffDays = endDate.diff(startDate,'days')
    let diffMonth = endDate.diff(startDate,'month')
    let diffYears = endDate.diff(startDate,'year')
    let temp = [diffDays,diffMonth,diffYears]

    this.setState({
      diffList:temp,
      currentDiffIndex:0,
    })
  }

  componentDidMount () {
    for (let i = 0; i < 100; i++) {
      this.state.array.push(i)
    }
    this.setState({
      array:this.state.array
    })

    // 监听鼠标滚轮 内容超过高度才能出发滚动事件
    console.log(document.getElementById('life-box'))
    document.getElementById('life-box')!.addEventListener('wheel',(e)=>{
      e.preventDefault()
      let event = e as window.Event
      if(event.wheelDelta>0){
        if(this.state.currentDiffIndex<(this.state.diffList.length-1)){
          this.setState({
            currentDiffIndex:this.state.currentDiffIndex+1
          })
        }
      }else{
        if(this.state.currentDiffIndex>0) {
          this.setState({
            currentDiffIndex: this.state.currentDiffIndex - 1
          })
        }
      }
      console.log(this.state.currentDiffIndex)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentDidUpdate(prevProps: Readonly<LifeBoxProps>, prevState: Readonly<{}>, snapshot?: any) {
    if(prevProps===this.props){
      return false
    }
    let startDate = dayjs(this.props.dateSel)
    let endDate = startDate.add(this.props.life,'year')
    console.log(startDate)
    console.log(endDate)
    let diffDays = endDate.diff(startDate,'days')
    let diffMonth = endDate.diff(startDate,'month')
    let diffYears = endDate.diff(startDate,'year')
    let temp = [diffDays,diffMonth,diffYears]

    this.setState({
      diffList:temp,
      currentDiffIndex:0,
    })
  }


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
