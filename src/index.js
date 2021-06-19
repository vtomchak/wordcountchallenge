import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';

const App = function () {
  return (
    <div class='ui raised very padded text container segment'>
      <form class='ui form'>
        <div class='ui huge header'>Word Counter</div>
        <TextInput />
        <div class='field'>
          <textarea placeholder='Write or copy your text here...'></textarea>
        </div>
        <div class='field'>
          <div class='ui checkbox'>
            <input type='checkbox' tabindex='0' />
            <label>Option 1</label>
          </div>
        </div>
        <button class='ui right button' type='submit'>
          Submit
        </button>
        <button class='ui left button' type='submit'>
          Clear Text
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
