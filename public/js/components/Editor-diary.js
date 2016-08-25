import React from 'react';
import Nav from '../containers/Nav';

export default class EditorDiary extends React.Component {
  componentDidMount() {
    this.props.onGet();
  }

  addDiary() {
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const babyScore = this.props.babyScore + 1;
    const parentScore = this.props.parentScore + 1;
    const publicDiary = $("input[name=public]:checked").val();
    if (!publicDiary || !title || !content) {
      alert('日记内容不完整，请添加完整');
    } else {
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
  }

  changeScore(type, score) {
    this.props.onChangeScore(type, score);
  }

  render() {
    return <div className="editorShow" style={{"backgroundImage": "url(../../images/diaryContentBG.jpg)"}}>
      <div>
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
              <textarea className="diaryContext" ref="content" cols="30" rows="10"></textarea>
            </div>
            <div className="diary">
              <div className="score">
                <span className="scoreRight">babyScore:</span>
                {[0, 0, 0, 0, 0].map((d, i) => {
                  if (i <= this.props.babyScore) {
                    return <span key={i} className="glyphicon glyphicon-star starColor"
                                 onClick={this.changeScore.bind(this, 'CHANGE_BABYSCORE', i)}/>
                  }
                  return <span key={i} className="glyphicon glyphicon-star-empty starColor"
                               onClick={this.changeScore.bind(this, 'CHANGE_BABYSCORE', i)}/>
                })}
              </div>
              <div className="score">
                <span className="scoreRight">parentScore:</span>
                {[0, 0, 0, 0, 0].map((d, i) => {
                  if (i <= this.props.parentScore) {
                    return <span key={i} className="glyphicon glyphicon-star starColor"
                                 onClick={this.changeScore.bind(this, 'CHANGE_PARENTSCORE', i)}/>
                  }
                  return <span key={i} className="glyphicon glyphicon-star-empty starColor"
                               onClick={this.changeScore.bind(this, 'CHANGE_PARENTSCORE', i)}/>
                })}
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
