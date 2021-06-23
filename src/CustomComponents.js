import React from 'react';

export const Header = () => {
  return (
    <h2 className='ui header'>
      <i className='book icon'></i>
      <div className='content'>
        Word Counter
        <div className='sub header'>Text Statistic Generator</div>
      </div>
    </h2>
  );
};

export const SubHeader = () => {
  return (
    <div className='ui medium header'>
      Select the statistics and data you want to display:
    </div>
  );
};

export const SubmitButton = () => {
  return (
    <button className='ui right button' type='submit'>
      Submit
    </button>
  );
};

export const PlaceHolder = () => {
  return (
    <div className='ui placeholder segment'>
      <div className='ui icon header'>
        <i className='chart bar outline icon'></i>

        <div className='ui compact message'>
          <div className='header'>
            This is where your frequency charts will appear
          </div>
          <p>if you select the "Show Tables" checkbox</p>
        </div>
      </div>
    </div>
  );
};
