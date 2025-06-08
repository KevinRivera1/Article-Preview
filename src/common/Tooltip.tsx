import { FacebookIcon } from '../assets/icons/FacebookIcon';
import { PinterestIcon } from '../assets/icons/PinterestIcon';
import { TwitterIcon } from '../assets/icons/TwitterIcon';
import { ButtonShared } from './ButtonShared';

interface TooltipProps {
	className?: string;
}
export const Tooltip = ({ className }: TooltipProps) => {
	return (
		<div
			className={`absolute lg:bottom-[96px] lg:left-73 lg:tooltip lg:w-max px-6 py-2 bg-slate-700 lg:rounded-xl text-white flex gap-2 items-center justify-around bottom-0 right-0 left-0 h-20 lg:h-auto ${className}`}
		>
			<small className="font-bold">SHARE</small>

			<div className="relative social-media flex justify-center items-center w-full gap-x-6 lg:gap-x-2">
				<FacebookIcon className="size-6 hover:text-blue-600 active:text-blue-600 cursor-pointer" />
				<TwitterIcon className="size-6 hover:text-blue-400 active:text-blue-400  cursor-pointer" />
				<PinterestIcon className="size-6 hover:text-red-500 active:text-red-500  cursor-pointer" />
			</div>

			<div className="lg:absolute lg:bottom-[-8px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:size-0 lg:border-l-8 lg:border-r-8 lg:border-t-8 lg:border-t-slate-700 lg:border-l-transparent lg:border-r-transparent" />

			<ButtonShared className="block lg:hidden" />
		</div>
	);
};
