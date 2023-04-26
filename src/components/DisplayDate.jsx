import React from 'react';
import style from './DisplayDate.module.css';

// class component

class DisplayDate extends React.Component {

  constructor(){
    super();
    this.date = new Date();
    this.Today = {
      date:this.date.getDate(),
      day:this.date.toLocaleString('en-US', { weekday: 'long' }),
      month:this.date.toLocaleString('en-US', { month: 'short' }),
      year:this.date.getFullYear()
    }
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.date}>
          <h1>{this.Today.date}</h1>
          <div>
            <span>{this.Today.month.toUpperCase()}</span>
            <span>{this.Today.year}</span>
          </div>
        </div>
        <div className="day">
          <h4>{this.Today.day.toUpperCase()}</h4>
        </div>
      </div>
    );
  }
}

export default DisplayDate;