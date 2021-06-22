import React from 'react';

export const Header = () => {
  return (
    <h2 class='ui header'>
      <i class='book icon'></i>
      <div class='content'>
        Word Counter
        <div class='sub header'>Text Statistic Generator</div>
      </div>
    </h2>
  );
};

export const SubHeader = () => {
  return (
    <div class='ui medium header'>
      Select Statistics and Data you want to Display:
    </div>
  );
};

export const SubmitButton = () => {
  return (
    <button class='ui right button' type='submit'>
      Submit
    </button>
  );
};

export const PlaceHolder = () => {
  return (
    <div className='ui placeholder segment'>
      <div class='ui icon header'>
        <i class='chart bar outline icon'></i>

        <div class='ui compact message'>
          <div class='header'>
            This is where your frequency charts will appear
          </div>
          <p>if you select the "Show Tables" checkbox</p>
        </div>
      </div>
    </div>
  );
};
