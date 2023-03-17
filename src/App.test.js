import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// app.use(express.static(path.join(__dirname,"./client/build")));
// app.get("*",function(req,res){
//   res.sendFile(path.join(__dirname,"./client/build/index.html"));
// });