import Controls from "./Controls";
import React from 'react'
import { render, fireEvent } from 'react-testing-library'


// Test away!
describe('<Control />', () => {
    it('runs the tests', () => {
      expect(true).toBe(true);
    });
  
    // 2. write this test
    describe('toggleClose()', () => {
        it('closes the gate and locks it', () => {
            const { getByText } = render(<Controls />)
            let closeButton = getByText(/Close Gate/i)
            fireEvent.click(closeButton)
            getByText(/Open Gate/i)
    
            let lockButton = getByText(/Lock Gate/i)
            fireEvent.click(lockButton)
    
            getByText(/Unlock Gate/i)
    
        });
      })
    
    describe('toggleLocked()', () => {
        it('locks the gate when the gate is closed', () => {
            const { getByText } = render(<Controls />)
            const button = getByText(/Lock Gate/i)
            fireEvent.click(button)
            getByText(/Lock Gate/i)

        });
    })
});