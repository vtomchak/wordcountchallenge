import React from 'react';

const WordCountDisplay = (props) => {
  return (
    <div class='ui relaxed divided list'>
      {console.log('Props', props.props.checkboxValues['Word Count:'])}

      {props.props.checkboxValues['Word Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Word Count: {props.props.counts.wordCount}</a>
            <div class='description'>Updated 10 mins ago</div>
          </div>
        </div>
      )}
      {props.props.checkboxValues['Character Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>
              Character Count: {props.props.counts.charCount}
            </a>
            <div class='description'>Updated 22 mins ago</div>
          </div>
        </div>
      )}
      {props.props.checkboxValues['Sentence Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Sentence Count: {props.props.counts.sentCount}</a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
      {props.props.checkboxValues['Paragraph Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Paragraph Count: {props.props.counts.parCount}</a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
      {props.props.checkboxValues['Bigram Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>Bigram Count: {props.props.counts.bigramCount}</a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
      {props.props.checkboxValues['Unique Bigram Count:'] && (
        <div class='item'>
          <i class='large github middle aligned icon'></i>
          <div class='content'>
            <a class='header'>
              Unique Bigram Count: {props.props.counts.uniqueBigramCount}
            </a>
            <div class='description'>Updated 34 mins ago</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCountDisplay;
