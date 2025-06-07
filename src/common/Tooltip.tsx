import { ButtonShared } from './ButtonShared';

interface TooltipProps {
	className?: string;
}
export const Tooltip = ({ className }: TooltipProps) => {
	return (
		<div
			className={`absolute lg:bottom-[96px] lg:left-73 lg:tooltip lg:w-max px-6 py-2 bg-slate-700 lg:rounded-2xl text-white flex gap-2 items-center justify-around bottom-0 right-0 left-0 h-20 lg:h-auto ${className}`}
		>
			<small className="font-bold">SHARE</small>

			<div className="relative social-media flex justify-center items-center w-full gap-x-6 lg:gap-x-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-label="icon facebook"
					aria-labelledby="icon-facebook"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-label="icon twitter"
					aria-labelledby="icon-twitter"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					aria-label="icon Pinterest"
					aria-labelledby="icon-pinterest"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M17 3.34a10 10 0 0 1 -8.512 18.023l2.364 -5.315a3.5 3.5 0 0 0 2.398 .952c2.708 0 4.75 -2.089 4.75 -5a6 6 0 1 0 -11.64 2.041a1 1 0 1 0 1.88 -.682a4 4 0 1 1 7.76 -1.36c0 1.818 -1.156 3.001 -2.75 3.001c-.609 0 -1.153 -.361 -1.478 -1.022l1.142 -2.572a1 1 0 0 0 -1.828 -.812l-4.392 9.882a10 10 0 0 1 -4.694 -8.476l.005 -.324a10 10 0 0 1 14.995 -8.336" />
				</svg>
			</div>

			<div className="lg:absolute lg:bottom-[-8px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:size-0 lg:border-l-8 lg:border-r-8 lg:border-t-8 lg:border-t-slate-700 lg:border-l-transparent lg:border-r-transparent" />

			<ButtonShared className="block lg:hidden" />
		</div>
	);
};
