import React from 'react'
import {render ,fireEvent, screen , getByRole, waitForElementToBeRemoved} from '@testing-library/react'

import '@testing-library/jest-dom'
import ShowData from '../ShowData'

// rendering the ShowData component 
test('renders a initial Loading', () => {
    render(<ShowData />) 
    expect(screen.getByText('Loading.....')).toBeInTheDocument()
    
    
})
// checking the elements after desappers the loading state and also checking the elements after clicking buttons
test('rendering after the loading content' , async()=>{
    render(<ShowData />) 
   
    await waitForElementToBeRemoved(()=>screen.getByText(/Loading...../i))
    
    expect(screen.getByText(/chelsey dietrich/i)).toBeInTheDocument();
    expect(screen.getByText(/roscoeview/i)).toBeInTheDocument();
    expect(screen.getByText(/skiles walks/i)).toBeInTheDocument();
    expect(screen.getByText(/33263/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', {  name: /click profile 2/i}))
    expect(screen.getByRole('heading', {  name: /albums : consequatur autem doloribus natus consectetur/i})).toBeInTheDocument()
   fireEvent.click(screen.getByRole('button', {  name: /view album12/i}))
 expect(screen.getByRole('button', {  name: /goto albumlist/i})).toBeInTheDocument()
   
    

})



