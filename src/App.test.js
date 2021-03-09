import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import SamuraiJsApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('renders without crashing', () => {
//   render(<SamuraiJsApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
