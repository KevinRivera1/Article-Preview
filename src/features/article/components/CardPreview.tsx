import { useContext } from 'react';
import { ButtonShared } from '../../../common/ButtonShared';
import { Tooltip } from '../../../common/Tooltip';
import { ShowContext } from '../../../contexts/ShowContext';

export const CardPreview = () => {
	const context = useContext(ShowContext);

	if (!context) {
		throw new Error('CardPreview must be used within a ShowContextProvider');
	}

	const { show } = context;

	return (
		<article className="w-[21rem] h-max bg-white overflow-hidden rounded-xl md:overflow-visible md:flex md:w-full md:h-max lg:w-[45rem] md:pb-0 shadow-2xl">
			<img
				src="./image.png"
				alt="Imagen de redes sociales"
				className="aspect-square object-cover object-center h-60 md:h-max md:w-[18rem] w-full"
			/>
			<div className="relative flex flex-col justify-center gap-10 px-8 py-2 mt-4 md:mt-0">
				<div className="content flex flex-col gap-y-4">
					<h1 className="font-bold text-Very-Grayish-Blue text-pretty">
						Shift the overall look and feel by adding these wonderful touches to forniture in your home
					</h1>

					<p className="text-pretty font-medium text-Grayish-Blue text-sm">
						Ever been in a room and felt like something was missing? Perhaps it feit slightly bare and uninviting. I've
						got some simple tips to help you make any room feel complete.
					</p>
				</div>
				<footer className="flex justify-between items-center py-2">
					<img src="./perfil.webp" alt="imagen perfil de usuario" className="aspect-square rounded-full size-10" />
					<div className="content-footer">
						<span className="font-bold text-Very-Grayish-Blue block">Michelle Appleton</span>
						<span className="text-Grayish-Blue font-medium">28 jun 2025</span>
					</div>
					<ButtonShared />
				</footer>
				{show && <Tooltip />}
			</div>
		</article>
	);
};
