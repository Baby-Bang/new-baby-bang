import React from 'react';
import Nav from '../containers/Nav';

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
    console.log({
      date: this.props.today,
      babyDays: this.props.age,
      title,
      content,
      babyScore,
      parentScore,
      publicDiary
    });
    this.props.onAdd({
      date: this.props.today,
      babyDays: this.props.age,
      title,
      content,
      babyScore,
      parentScore,
      publicDiary
    });
  }

  render() {
    return <div>
      <div className="diaryNav">
        <Nav/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 diaryContent">
            <span className="editor">编辑日记</span>
            <div className="diaryDate">
              <span className="today">日期：{this.props.today}</span>
              <span className="babyDay">宝宝今天{this.props.age}了</span>
            </div>
            <div className="diary">
              <span>标题：</span><input className="diaryTitle" type="text" ref="title"/>
            </div>
            <div className="diary">
              <p>内容：</p>
              <input className="diaryContext" type="text" ref="content"/>
            </div>
            <div className="diary">
              <div className="score">
                <span>babyScore:</span><input type="text" ref="babyScore"/>
              </div>
              <div className="score">
                <span>parentScore:</span><input type="text" ref="parentScore"/>
              </div>
            </div>
            <div className="diaryPublic">
              <div className="public">
                <input type="radio" name="public" value="false"/>私有
              </div>
              <div className="public">
                <input type="radio" name="public" value="true"/>公开
              </div>
              <button className="submit btn btn-primary" onClick={this.addDiary.bind(this)}>保存</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
