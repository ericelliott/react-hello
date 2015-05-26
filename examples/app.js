'use strict';

import express from 'express';
import path from 'path';

let app = express();

const staticPath = path.resolve('build/');

app.get('/', function (req, res) {
  let title = 'React!';
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="content"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.2/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
        <script src="/index.js"></script>
        <script type="text/jsx">
          var word = 'puppy';

          React.render (
            <Hello word={ word } />,
            document.getElementById('content')
          );
        </script>
      </body>
    </html>
  `);
});

app.use(express.static(staticPath));

export default app;
