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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textSubmit: '',
      countSelected: true,
      charSelected: false,
      sentSelected: false,
      parSelected: false,
      bigramSelected: false,
      uniqueBigramSelected: false,
      wordCount: 0,
      charCount: 0,
      sentCount: 0,
      parCount: 0,
      bigramCount: 0,
      uniqueBigramCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
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
        wordCount: words.length,
        charCount: characters.length,
        sentCount: sentences.length,
        parCount: paragraphs.length,
        bigramCount: Object.keys(bigrams).length,
        uniqueBigramCount: Object.keys(uniqueBigrams).length,
      });
  }
  handleClear(event) {
    event.preventDefault();
    this.setState({
      textSubmit: '',
      wordCount: 0,
      charCount: 0,
      sentCount: 0,
      parCount: 0,
      bigramCount: 0,
      uniqueBigramCount: 0,
    });
  }
  render() {
    console.log('State', this.state);
    return (
      <div class='ui raised very padded text container segment'>
        <form class='ui form' onSubmit={this.handleSubmit}>
          <TextInput />
          <div class='ui huge header'>Word Counter</div>
          <div class='field'>
            <textarea
              value={this.state.textSubmit}
              name='textSubmit'
              onChange={this.handleChange}
              placeholder='Write or copy your text here...'
            ></textarea>
          </div>
          <div class='field'>
            <div>
              <label>
                Word Count:
                <input
                  type='checkbox'
                  name='countSelected'
                  checked={this.state.countSelected}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Character Count:
                <input
                  type='checkbox'
                  name='charSelected'
                  checked={this.state.charSelected}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Sentence Count:
                <input
                  type='checkbox'
                  name='sentSelected'
                  checked={this.state.sentSelected}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Paragraph Count:
                <input
                  type='checkbox'
                  name='parSelected'
                  checked={this.state.parSelected}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Bigram Count:
                <input
                  type='checkbox'
                  name='bigramSelected'
                  checked={this.state.bigramSelected}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Unique Bigram Count:
                <input
                  type='checkbox'
                  name='uniqueBigramSelected'
                  checked={this.state.uniqueBigramSelected}
                  onChange={this.handleChange}
                />
              </label>
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
          {this.state.wordCount > 0 && <WordCountDisplay props={this.state} />}
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
