import React from 'react';

const StatDisplay = (props) => {
  const prop = props.props;

  return (
    <div className='ui relaxed divided list'>
      {Object.entries(prop.counts).map((arr) => {
        return (
          prop.checkboxValues[arr[0]] && (
            <div className='item' key={arr[0]}>
              <i className='large check middle aligned icon'></i>
              <div className='content'>
                <p className='medium header'>
                  {arr[0]} : {arr[1]}
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default StatDisplay;
