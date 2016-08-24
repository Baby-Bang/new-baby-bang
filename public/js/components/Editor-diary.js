import React from 'react';

export default class EditorDiary extends React.Component {
  componentDidMount() {
    this.props.onGet();
  }

  addDiary() {
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const babyScore = this.refs.babyScore.value;
    const parentScore = this.refs.parentScore.value;
    const publicDiary = $("input[name=public]:checked").val();
    console.log({title, content, babyScore, parentScore, publicDiary});
    this.props.onAdd({title,content, babyScore, parentScore, publicDiary});
  }

  render() {
    return <div>
      {this.props.today}<br/>
      {this.props.age}
      <br/><br/>
      标题：<input type="text" ref="title"/>
      内容：<input type="text" ref="content"/>
      babyScore<input type="text" ref="babyScore"/>
      parentScore<input type="text" ref="parentScore"/>
      <input type="radio" name="public" value="false"/>私有
      <input type="radio" name="public" value="true"/>公开
      <button onClick={this.addDiary.bind(this)}>保存</button>
    </div>
  }
}
