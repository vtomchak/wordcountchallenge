import React from 'react';
import ReactDOM from 'react-dom';
import TableHolder from './TableHolder';
import StatDisplay from './StatDisplay';

import {
  Header,
  SubHeader,
  SubmitButton,
  PlaceHolder,
} from './CustomComponents';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  makeParagraph,
  removeEmptyElements,
  wordFunc,
  charFunc,
  sentFunc,
  bigramWord,
  uniqueBigramWord,
  wordFreq,
  wordUnique,
  validPal,
} from './helpers';
import { counts, checkboxValues } from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textSubmit: '',
      checkboxValues,
      counts,
      bigramData: {},
      wordFreqData: {},
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
    const { textSubmit, checkboxValues } = this.state;
    const str = textSubmit;
    const paragraphs = makeParagraph(str);
    const words = wordFunc(str);
    const characters = charFunc(str);
    const sentences = sentFunc(str);
    const bigrams = bigramWord(words);
    const uniqueBigrams = uniqueBigramWord(words);
    const wordFreqs = wordFreq(words);
    const uniqueWords = wordUnique(words);
    const palindrome = validPal(str);
    const emp = removeEmptyElements(paragraphs);

    textSubmit &&
      this.setState({
        counts: {
          'Word Count': words.length,
          'Unique Word Count': Object.keys(uniqueWords).length,
          'Character Count': characters.length,
          'Sentence Count': sentences.length,
          'Paragraph Count': paragraphs.length,
          'Bigram Count': Object.keys(bigrams).length,
          'Unique Bigram Count': Object.keys(uniqueBigrams).length,
          'Is Palindrome?': palindrome,
        },
      });

    checkboxValues['Show Word & Bigram Frequency Tables'] &&
      this.setState({
        wordFreqData: wordFreqs,
        bigramData: bigrams,
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
    const { textSubmit, counts, checkboxValues } = this.state;

    return (
      <div className='ui two stackable cards'>
        <div className='fluid raised  card'>
          <div className='content'>
            <form className='ui form' onSubmit={this.handleSubmit}>
              <Header />
              <div className='field'>
                <textarea
                  type='text'
                  value={textSubmit}
                  name='textSubmit'
                  onChange={this.handleChange}
                  placeholder='Write or copy your text here...'
                ></textarea>
              </div>
              <SubHeader />
              <div className='ui stackable two column grid'>
                <div className='column'>
                  <div className='field'>
                    {Object.keys(checkboxValues).map((check) => (
                      <FormGroup key={check}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={this.handleChange}
                              name={check}
                            />
                          }
                          label={check}
                          type='checkbox'
                          checked={checkboxValues.check}
                        />
                      </FormGroup>
                    ))}
                  </div>
                </div>
                <div className='column'>
                  <div className='field'>
                    {counts['Word Count'] > 0 && (
                      <StatDisplay props={this.state} />
                    )}
                  </div>
                </div>
              </div>
              <SubmitButton />
              <button
                className='ui left button'
                onClick={this.handleClear}
                type='reset'
                value='Reset'
              >
                Clear Text
              </button>
            </form>
          </div>
        </div>
        {counts['Word Count'] > 0 ? (
          <div className=' raised card'>
            <div className='content'>
              <TableHolder props={this.state} />
            </div>
          </div>
        ) : (
          <PlaceHolder />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
