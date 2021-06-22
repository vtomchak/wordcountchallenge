import React from 'react';
import Tables from './Tables';

const TextInput = (props) => {
  // console.log('PROPS in text input', props.props);
  const prop = props.props;
  return (
    <div>
      <div class='ui one stackable cards'>
        {Object.keys(prop.wordFreq).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables props={prop.wordFreq} title={'Word Frequency Table'} />
            </div>
          </div>
        )}
        {Object.keys(prop.bigramData).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables
                props={prop.bigramData}
                title={'Bigram Frequency Table'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
