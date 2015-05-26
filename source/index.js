'use strict';

let Hello = function (props) {

  return {

    props, // set props

    render () {

      // get `word` from props obj with
      // es6 destructuring:
      const { word } = props;

      return (
        // Fill in the { blanks }
        <p>Hello, { word }!</p>
      );
    }
  };

};

export default Hello;
