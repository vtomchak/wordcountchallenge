import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from './TextInput';
import WordCountDisplay from './WordCountDisplay';
import {
  makeParagraph,
  removeEmptyElements,
  wordFunc,
  charFunc,
  sentFunc,
  bigram,
  bigramWord,
  uniqueBigram,
  uniqueBigramWord,
  wordFreq,
  wordUnique,
} from './helpers';
import { counts, checkboxValues } from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textSubmit: '',
      checkboxValues,
      counts,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    target.type === 'checkbox'
      ? this.setState({
          checkboxValues: { ...this.state.checkboxValues, [name]: value },
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    event.preventDefault();
    const str = this.state.textSubmit;
    const paragraphs = makeParagraph(str);
    const words = wordFunc(str);
    const characters = charFunc(str);
    const sentences = sentFunc(str);
    const bigrams = bigramWord(words);
    const uniqueBigrams = uniqueBigramWord(words);

    const emp = removeEmptyElements(paragraphs);

    console.log('par comparison', paragraphs);

    this.state.textSubmit &&
      this.setState({
        counts: {
          wordCount: words.length,
          charCount: characters.length,
          sentCount: sentences.length,
          parCount: paragraphs.length,
          bigramCount: Object.keys(bigrams).length,
          uniqueBigramCount: Object.keys(uniqueBigrams).length,
        },
      });
  }
  handleClear(event) {
    event.preventDefault();
    this.setState({
      textSubmit: '',
      counts,
    });
  }
  render() {
    console.log('State', this.state);

    return (
      <div className='ui two stackable cards'>
        <div className='fluid raised  card'>
          <div class='content'>
            <form class='ui form' onSubmit={this.handleSubmit}>
              <div class='ui huge header'>Word Counter</div>
              <div class='field'>
                <textarea
                  type='text'
                  value={this.state.textSubmit}
                  name='textSubmit'
                  onChange={this.handleChange}
                  placeholder='Write or copy your text here...'
                ></textarea>
              </div>
              <div class='field'>
                <div>
                  {Object.keys(checkboxValues).map((check) => (
                    <label key={check}>
                      {check}
                      <input
                        key={check}
                        type='checkbox'
                        name={check}
                        checked={this.state.checkboxValues.check}
                        onChange={this.handleChange}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <button class='ui right button' type='submit'>
                Submit
              </button>
              <button
                class='ui left button'
                onClick={this.handleClear}
                type='reset'
                value='Reset'
              >
                Clear Text
              </button>
              {this.state.counts.wordCount > 0 && (
                <WordCountDisplay props={this.state} />
              )}
            </form>
          </div>
        </div>
        {this.state.counts.wordCount > 0 && (
          <div className=' raised card'>
            <div className='content'>
              <TextInput />
            </div>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
