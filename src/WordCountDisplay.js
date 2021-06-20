import React from 'react';

const WordCountDisplay = (props) => {
  return (
    <div class='ui relaxed divided list'>
      {console.log('Props', props.props.countSelected)}
      {props.props.countSelected && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Word Count: {props.props.wordCount}</a>
            <div class='description'>Updated 10 mins ago</div>
          </div>
        </div>
      )}
      {props.props.charSelected && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Character Count: {props.props.charCount}</a>
            <div class='description'>Updated 22 mins ago</div>
          </div>
        </div>
      )}
      {props.props.sentSelected && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Sentence Count: {props.props.sentCount}</a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
      {props.props.parSelected && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Paragraph Count: {props.props.parCount}</a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCountDisplay;
