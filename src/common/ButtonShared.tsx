import { useContext } from 'react';
import { SharedIcon } from '../assets/icons/SharedIcon';
import { ShowContext } from '../contexts/ShowContext';

interface ButtonSharedProps {
	className?: string;
}
export const ButtonShared = ({ className }: ButtonSharedProps) => {
	const context = useContext(ShowContext);

	if (!context) {
		throw new Error('ButtonShared must be used within a ShowContextProvider');
	}
	const { show, setShow } = context;

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<button
			onClick={handleClick}
			type="button"
			className={`rounded-full aspect-square bg-slate-100/60 text-slate-700 hover:text-white active:text-white hover:bg-slate-800 active:bg-slate-800 size-8 cursor-pointer flex items-center justify-center ${className}`}
		>
			<SharedIcon className="size-5" />
		</button>
	);
};
