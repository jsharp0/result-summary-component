import React from 'react';
import '../App.scss';

export type ScoreAlertProps = {
  type: 'primary' | 'success' | 'warning' | 'danger';
  iconPath: string;
  category: string;
  score: number;
};

const ScoreAlert = (props: ScoreAlertProps) => {
  return (
    <div className={'score-alert ' + props.type}>
      <div className="category-container">
        <img className="icon" src={props.iconPath} alt="" />
        <span className="category">{props.category}</span>
      </div>
      <span className="score">
        <span className="percentage">{props.score} </span>
        <span>/ 100</span>
      </span>
    </div>
  );
};

export default ScoreAlert;
