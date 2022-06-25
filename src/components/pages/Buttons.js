import { Button } from 'components/common';

const Buttons = () => {
	return (
		<>
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
