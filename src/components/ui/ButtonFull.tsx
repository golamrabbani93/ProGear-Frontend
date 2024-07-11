import {Button} from 'antd';

const ButtonFull = ({text}: {text: string}) => {
	return (
		<div>
			<Button className="bg-primary border-0 hover:!bg-secondary !text-white font-bold w-full uppercase">
				{text}
			</Button>
		</div>
	);
};

export default ButtonFull;
