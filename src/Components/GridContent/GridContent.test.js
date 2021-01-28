import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import GridContentComponent from './GridContentComponent'

//it('should not call addTodo if length of text is 0', () => {
//  const mockfunc = jest.fn()
//  render(<GridContentComponent test={mockfunc} />)
//
//  fireEvent.change(screen.getByPlaceholderText(/saed/i), {
//    target: { value: '' }
//  })
//
//  expect(mockfunc).toHaveBeenCalledTimes(1)
//})