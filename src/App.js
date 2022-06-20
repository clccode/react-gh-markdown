import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Welcome to my simple markdown previewer!
  ## You can do a lot of things, including headings like this.
  [Here's a link to my GitHub page](https://github.com/clccode)
  \`<p>You can also insert code like this</p>\`
  Here's an example of a larger code block:
  \`\`\`
  {
  "firstName": "Clark",
  "lastName": "Kent",
  "age": ??
  }
  \`\`\`

  You can make lists too:
  - Wake up
  - Feed the cat
  - Code

  You might want to add blockquotes like this one:

  > I have a dream!
  
  You can also add images:

  ![code image](https://live.staticflickr.com/822/40238552784_c48d2029a2_n.jpg)
  
  **It's easy to add bold text...**

  *...and text in italics too.*

  Need to make an edit? Use ~~strikethrough~~!
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="mdown-preview">
        <h1>Markdown Previewer</h1>
        <textarea 
        id="editor"
        onChange={(event) => {
          setText(event.target.value)
        }}
        value={text}
        ></textarea>
      </div>
        <div className='preview-pane'>
        <div 
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
