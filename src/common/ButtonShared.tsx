interface ButtonSharedProps {
	className?: string;
}
export const ButtonShared = ({ className }: ButtonSharedProps) => {
	return (
		<button
			type="button"
			className={`rounded-full aspect-square bg-slate-300 hover:bg-slate-400/60 active:bg-slate-400/60 size-8 cursor-pointer flex items-center justify-center ${className}`}
		>
			<svg
				className="size-5 text-slate-500 fill-slate-500"
				xmlns="http://www.w3.org/2000/svg"
				role="img"
				aria-label="icon shared"
				aria-labelledby="icon shared"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
			</svg>
		</button>
	);
};
