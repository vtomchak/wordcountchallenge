import React from 'react';
import Tables from './Tables';

const TextInput = (props) => {
  console.log('PROPS in text input', props.props);
  const prop = props.props;
  return (
    <div>
      <div class='ui one stackable cards'>
        {Object.keys(prop.bigramData).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables props={prop.bigramData} />
            </div>
          </div>
        )}
        {Object.keys(prop.uniqueBigramData).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables props={prop.uniqueBigramData} />
            </div>
          </div>
        )}
        {Object.keys(prop.wordFreq).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables props={prop.wordFreq} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
