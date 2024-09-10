import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`

  \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    print("Hello, world!")
    for i in range(10):
    print(i)
  \`\`\`

  - First item
  - Second item
  - Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `)

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(e) => setText(e.target.value)}
        value={text}
      >
      </textarea>
      <div
      id='preview'
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      />
    </div>
  );
}

export default App;
