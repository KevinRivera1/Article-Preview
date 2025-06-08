import { createContext } from 'react';
interface ShowContextType {
	show: boolean;
	setShow: (value: boolean) => void;
}
export const ShowContext = createContext<ShowContextType | undefined>(undefined);
