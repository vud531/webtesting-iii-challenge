// Test away!
import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import Display from './Display'

describe('<Display />', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Display />); // generates a DOM tree
    
    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

// axios.get(url).then( // so something on success ).catch( // do on failure )
