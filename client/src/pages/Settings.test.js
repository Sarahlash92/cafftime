import { render, screen, fireEvent } from '@testing-library/react';
// import { render, screen } from '../test-utils';
import Setting from './Setting.tsx';

test('renders learn react link', () => {
  render(<Setting />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Setting', ()=>{
//   it('settings displays ...',()=> {
//     const {}= render(<Setting/>)
//   })
// })

// <button>Submit</button>
fireEvent(
  getByText(container, 'Submit'),
  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }),
);
