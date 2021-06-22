import React from 'react';
import Tables from './Tables';

const TableHolder = (props) => {
  const prop = props.props;
  return (
    <div>
      <div class='ui one stackable cards'>
        {Object.keys(prop.wordFreqData).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables
                props={prop.wordFreqData}
                title={'Word Frequency Table'}
                label={'Word'}
              />
            </div>
          </div>
        )}
        {Object.keys(prop.bigramData).length >= 1 && (
          <div class='card'>
            <div class='content'>
              <Tables
                props={prop.bigramData}
                title={'Bigram Frequency Table'}
                label={'Bigram'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableHolder;
