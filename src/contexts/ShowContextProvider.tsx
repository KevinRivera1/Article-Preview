import { type ReactNode, useState } from 'react';
import { ShowContext } from './ShowContext';

interface ShowContextProviderProps {
	children: ReactNode;
}

export const ShowContextProvider = ({ children }: ShowContextProviderProps) => {
	const [show, setShow] = useState(false);

	return <ShowContext.Provider value={{ show, setShow }}>{children}</ShowContext.Provider>;
};
