import { Button } from 'components/common';
import Header from 'components/common/Header';

const Buttons = () => {
	return (
		<>
			<Header />
			<h1>App</h1>
			<Button>Primary Button</Button>
			<Button secondary>Secondary Button</Button>
			<Button disabled>Disabled Button</Button>
			<Button large secondary>
				Large Button
			</Button>
		</>
	);
};

export default Buttons;
