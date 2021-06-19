import React from 'react';

const WordCountDisplay = (props) => {
  return (
    <div class='ui relaxed divided list'>
      <div class='item'>
        <i class='large github middle aligned icon'></i>
        <div class='content'>
          <a class='header'>Word Count</a>
          <div class='description'>Updated 10 mins ago</div>
        </div>
      </div>
      <div class='item'>
        <i class='large github middle aligned icon'></i>
        <div class='content'>
          <a class='header'>Character Count</a>
          <div class='description'>Updated 22 mins ago</div>
        </div>
      </div>
      <div class='item'>
        <i class='large github middle aligned icon'></i>
        <div class='content'>
          <a class='header'>Sentence Count</a>
          <div class='description'>Updated 34 mins ago</div>
        </div>
      </div>
      <div class='item'>
        <i class='large github middle aligned icon'></i>
        <div class='content'>
          <a class='header'>Sentence Count</a>
          <div class='description'>Updated 34 mins ago</div>
        </div>
      </div>
    </div>
  );
};

export default WordCountDisplay;
