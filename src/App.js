import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        inputValue:'hello world',
        list:[]
    }
    //改变this 的作用域
    this.handleChange = this.handleChange.bind(this);
    this.buttonChange = this.buttonChange.bind(this);

  }
  render() {
    return (
        <div>
            <div>
              <input type="text"
               value={this.state.inputValue}
               onChange={this.handleChange}
             />
              <button  onClick={this.buttonChange}>提交</button>
            </div>
            <ul>
               {
                  this.state.list.map((item,index)=>{
                      return (
                        <li
                          key={index}
                          onClick={this.buttonDelete.bind(this,index)}
                        >
                           {item}
                        </li>
                      )
                  })
               }
            </ul>
        </div>
    );
  }
  handleChange(e) {
    this.setState({
      inputValue:e.target.value
    })
  }
  buttonChange() {
    this.setState({
      //展开运算符...this.state.list，生成一个全新的数组
      // list:[...this.state.list,this.state.inputValue]
      //后面是新加入的数组，两个组成一个新的数组
      list:[...this.state.list,this.state.inputValue],
      inputValue:''

    })
  }
  buttonDelete(index) {
    const  list=[...this.state.list];
    //删除方法splice,两个参数，第一个是索引，第2个是删除几个
    list.splice(index,1);
    this.setState({
       list:list
    })
  }
}

export default App;
