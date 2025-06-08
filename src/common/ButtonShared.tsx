import { SharedIcon } from '../assets/icons/SharedIcon';

interface ButtonSharedProps {
	className?: string;
}
export const ButtonShared = ({ className }: ButtonSharedProps) => {
	return (
		<button
			type="button"
			className={`rounded-full aspect-square bg-slate-100/60 text-slate-700 hover:text-white active:text-white hover:bg-slate-800 active:bg-slate-800 size-8 cursor-pointer flex items-center justify-center ${className}`}
		>
			<SharedIcon className="size-5" />
		</button>
	);
};
