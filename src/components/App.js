import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

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
	const [theme, setTheme] = useState(lightTheme);
	return (
		<ThemeProvider
			theme={{
				...theme,
				setTheme: () => setTheme((s) => (s.id === 'light' ? darkTheme : lightTheme))
			}}>
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
