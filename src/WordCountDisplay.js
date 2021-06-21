import React from 'react';

const WordCountDisplay = (props) => {
  const prop = props.props;

  return (
    <div class='ui relaxed divided list'>
      {Object.entries(prop.counts).map((arr) => {
        return (
          prop.checkboxValues[arr[0]] && (
            <div className='item'>
              <i className='large github middle aligned icon'></i>
              <div className='content'>
                <a className='header'>
                  {arr[0]} {arr[1]}
                </a>
                <div className='description'>Updated 10 mins ago</div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default WordCountDisplay;
