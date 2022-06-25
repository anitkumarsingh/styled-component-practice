import { createGlobalStyle } from 'styled-components';
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

const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
