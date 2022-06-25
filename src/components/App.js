import { Button } from 'components/common';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  font-family: 'Kaushan Script';
  min-height: 100vh;
  color: black;
  margin: 0;
}
`;

const App = () => {
	return (
		<>
			<GlobalStyle />
			<h1>App</h1>
			<Button>Test</Button>
		</>
	);
};

export default App;
