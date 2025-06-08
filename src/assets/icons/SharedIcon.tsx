import type { SVGProps } from 'react';

export const SharedIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="icon shared"
		aria-labelledby="icon shared"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		stroke="currentColor"
		{...props}
	>
		<path fill="currentColor" d="M12 6V2l7 7l-7 7v-4c-5 0-8.5 1.5-11 5l.8-3l.2-.4A12 12 0 0 1 12 6" />
	</svg>
);
