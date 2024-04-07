import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LinkList from './components/LinkList';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LinkList} />
      </div>
    </Router>
  );
};

export default App;
