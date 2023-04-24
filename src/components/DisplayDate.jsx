import React from 'react';
import style from './DisplayDate.module.css';

// class component

class DisplayDate extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.date}>
          <h1>21</h1>
          <div>
            <span>JAN</span>
            <span>2016</span>
          </div>
        </div>
        <div className="day">
          <h4>WEDNESDAY</h4>
        </div>
      </div>
    );
  }
}

export default DisplayDate;