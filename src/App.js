import React from 'react';
import './App.css';
import marked from 'marked';
import Container from 'react-bootstrap/Container';

marked.setOptions({
  gfm: true,
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      markedUp: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.markdownParse = this.markdownParse.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      //markedUp: marked(event.target.value),
    });
  }

  markdownParse() {
    let text = marked(this.state.input);
    return { __html: text };
  }

  render() {
    return (
      <div id="wrapper">
        <Container fluid>
          <h1 id="title">Markdown Previewer</h1>
          
          <div id="text-displays">
            <textarea id="editor" class="text-window" value={this.state.input} onChange={this.handleChange}/>
            <div id="preview" class="text-window" dangerouslySetInnerHTML={this.markdownParse()}></div>
          </div>
        </Container>
      </div>
    );
  }
};

const placeholder = 
  `# Hi! Welcome to my markdown previewer! This is a heading.


   ## This is a sub-heading.


   Here is a link, [TalkBass](http://www.talkbass.com)


   This is some inline code \`const sundae = iceCream.concat(whippedCream, hotFudge);\`


   Here is a code block
   \`\`\`
   function eatIt(food) {
     if (food === 'good') {
       return 'yummy!';
     } else {
       return 'yucky!';
     }
   };
   \`\`\`


   Here's a list:
   * Precision
   * Jazz
   * Stingray
   
   Here is a block quote from Abraham Lincoln:
   
    > The best way
    > to predict the future
    > is to 
    > create it.


    Here is an image.
   ![An Image](https://jazzineurope.mfmmedia.nl/wp-content/uploads/2017/07/Jacco-Feat.jpg)


   __This is some strong text.__
   







  `

export default App;
