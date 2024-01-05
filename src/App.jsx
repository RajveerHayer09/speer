import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import BodyNew from './BodyNew.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <BodyNew/>
        </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
