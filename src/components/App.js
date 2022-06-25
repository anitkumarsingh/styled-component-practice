import { createGlobalStyle,ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Buttons from './pages/Buttons';

const GlobalStyle = createGlobalStyle`
body{
  background: white;
  font-family: 'Kaushan Script';
  min-height: 100vh;
  color: black;
  margin: 0;
}
`;

const theme ={
	primaryColor:'#f8049c',
	secondaryColor:'#fdd54f'
}
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/button'>
						<Buttons />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
