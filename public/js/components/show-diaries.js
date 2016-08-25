import React from 'react';
import Nav from '../containers/Nav';

export default class GrowthPage extends React.Component {
  componentWillMount() {
    this.props.onShow();
  }

  render() {
    return <div className="diaryGrowth" style={{"backgroundImage": "url(../images/diaries.jpg)"}}>
      <div>
        <Nav />
      </div>
      <div >
        <div className={this.props.diaries.length === 0 ? "" : "hidden"}>
          <EmptyDiary />
        </div>
        <div className={this.props.diaries.length === 0 ? "hidden" : "topProcess" }>
          <div className="leftFixed">
            <DateLists date={this.props.dates}/>
          </div>
          <div className="col-md-offset-5 col-md-6 diaryList">
            <DiaryList diarys={this.props.diaries}/>
          </div>
        </div>
      </div>
    </div>;
  }
}

class DateLists extends React.Component {

  render() {
    return <div>
      <ul className="nav nav-pills nav-stacked">
        {this.props.date.map((d, index) => {
          return <div key={index}>
            <YearDate date={d} diaries={this.props.diaries}/>
          </div>;
        })}
      </ul>
    </div>;
  }
}

class YearDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  show() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
    return <div>
      <li className="list-group-item listLi"><a
        href={`#${this.props.date.year}-${this.props.date.monthDay[0].month}-${this.props.date.monthDay[0].day[0]}`}>
        <h3 onClick={this.show.bind(this)} className="pcolor">{this.props.date.year}年</h3></a>
        <ul className={this.state.isShow ? "nav nav-pills nav-stacked" : "hidden"}>
          {this.props.date.monthDay.map((m, i) => {
            return <div key={i}>
              <MonthDay date={m} year={this.props.date.year}/>
            </div>;
          })}
        </ul>
      </li>
    </div>;
  }
}

class MonthDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  show() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
    return <div>
      <li className="list-group-item listLi"><a
        href={`#${this.props.year}-${this.props.date.month}-${this.props.date.day[0]}`}><h4
        onClick={this.show.bind(this)} className="pcolor"> {this.props.date.month}月</h4></a>
        <ul className={this.state.isShow ? "nav nav-pills nav-stacked" : "hidden"}>
          {this.props.date.day.map((d, i) => {
            return <div key={i}>
              <li className="list-group-item listLi"><a
                href={`#${this.props.year}-${this.props.date.month}-${this.props.date.day[i]}`}><h5
                className="pcolor">{d}日</h5></a></li>
            </div>;
          })}
        </ul>
      </li>
    </div>;
  }
}

class DiaryList extends React.Component {

  render() {
    return <div>
      {this.props.diarys.map((diary, index) => {
        return <div key={index} id={diary.date} className="processBackground">
          <p className="titleColor">{diary.title}</p>
          <p className="timeColor threeInline">{diary.date}</p>
          <span className="glyphicon glyphicon-heart heartColor threeInline" aria-hidden="true"></span>
          <p className="likeColor threeInline">{diary.likeNumber}</p>
          <hr className="hrHeight"/>
          <p className="contentColor">{diary.content}</p>
          <hr className="hrHeight"/>
          <div className="babyParent">
            <p className="timeColor threeInline">宝宝表现：</p>
            {[0, 0, 0, 0, 0].map((star, index) => {
              if (index < diary.babyScore) {
                return <div key={index} className="threeInline">
                  <span className="glyphicon glyphicon-star starColor"></span>
                </div>;
              } else {
                return <div key={index} className="threeInline">
                  <span className="glyphicon glyphicon-star-empty starColor"></span>
                </div>;
              }
            })}
            <p className="timeColor threeInline">父母表现：</p>
            {[0, 0, 0, 0, 0].map((star, index) => {
              if (index < diary.parentScore) {
                return <div key={index} className="threeInline">
                  <span className="glyphicon glyphicon-star starColor"></span>
                </div>;
              } else {
                return <div key={index} className="threeInline">
                  <span className="glyphicon glyphicon-star-empty starColor"></span>
                </div>;
              }
            })}
          </div>
        </div>;
      })}
    </div>;
  }
}

class EmptyDiary extends React.Component {

  render() {
    return <div className="row">
      <div className="diaryNo">
        <img src="../images/dingdang.png" alt="tupian" />
        <div className="kong">
          <h1 >~空空如也</h1>
        </div>
      </div>
    </div>;
  }
}