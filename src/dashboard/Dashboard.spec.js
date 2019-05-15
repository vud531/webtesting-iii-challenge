import React from 'react'

import Dashboard from "./Dashboard";
import { render, fireEvent } from 'react-testing-library'
// Test away

describe('<Dashboard />', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  // 2. write this test
  describe('toggleLocked()', () => {
    it('locks the gate when the gate is closed', () => {
        const { getByText } = render(<Dashboard />)
        const button = getByText(/Lock Gate/i)
        fireEvent.click(button)
        getByText(/Lock Gate/i)

    });
  })

  describe('toggleClose()', () => {
    it('closes the gate and locks it', () => {
        const { getByText } = render(<Dashboard />)
        const closeButton = getByText(/Close Gate/i)
        fireEvent.click(closeButton)
        getByText(/Open Gate/i)

        const lockButton = getByText(/Lock Gate/i)
        fireEvent.click(lockButton)

        getByText(/Unlock Gate/i)

    });
  })
});

// axios.get(url).then( // so something on success ).catch( // do on failure )
