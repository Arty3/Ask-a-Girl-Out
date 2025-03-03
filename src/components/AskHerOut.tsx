import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

interface InputComponentProps {
	onValueChange: (value: string) => void;
}

const AskHerOut: React.FC<InputComponentProps> = ({ onValueChange }) => {
	const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
	const [yesButtonScale, setYesButtonScale] = useState(1);
	const [noButtonScale, setNoButtonScale] = useState(1);
	const [noButtonIndex, setNoButtonIndex] = useState(0);
	const [lastTop, setLastTop] = useState(50);

	const controls = useAnimation();

	const noTexts = [
		"No..",
		"No",
		"Stop",
		"Bro...",
		"STOP",
		"Accept Cookies",
		"Man...",
		"Woman...",
		"Ignore",
		":(",
		"ERROR",
		"k",
		"yes"
	]

	const handleNoClick = async () => {

		let newTopValue;
		do {
			newTopValue = Math.floor(Math.random() * 90);
		} while (Math.abs(lastTop - newTopValue) < 20);

		const newTop = `${newTopValue}%`;
		const newLeft = `${Math.floor(Math.random() * 58)}%`;

		setNoButtonIndex((prevIndex) => {
			const nextIndex = (prevIndex + 1) % noTexts.length;
			if (noTexts[prevIndex] === "yes") 
			{
				onValueChange("yes");
			}
			return nextIndex;
		});

		setYesButtonScale((prevScale) => prevScale + 0.1);
		setNoButtonScale((prevScale) => prevScale - 0.05);
	
		controls.start({
			top: newTop,
			left: newLeft,
			scale: noButtonScale
		});

		setLastTop(newTopValue);
		setIsNoButtonMoved(true);
	};

	const handleYesClick = () => {
		onValueChange("yes");
	};

	return (
		<div className="flex items-center justify-center cursor-pointer h-screen w-screen overflow-hidden relative">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="z-50"
			>
				<div className="transition-transform duration-300 py-3 my-6 rounded-3xl z-50">
					<p
						className="break-words text-4xl font-bold text-shadow text-center"
						style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
						Do you wanna go out with me?
					</p>
				</div>
				<div className="space-x-10 flex justify-center items-center z-50">
					<motion.button
						onClick={handleYesClick}
						className="text-white font-bold py-4 px-6 text-3xl rounded-xl shadow-xl bg-gradient-to-br from-blue-500 to-blue-800"
						animate={{ scale: yesButtonScale }}
						transition={{ type: 'spring', stiffness: 400, damping: 100 }}
					>
						YES
					</motion.button>
					<motion.button 
						onClick={handleNoClick} 
						className="text-white font-bold py-4 px-6 text-3xl rounded-xl shadow-xl whitespace-nowrap overflow-hidden bg-gradient-to-br from-red-500 to-red-800"
						style={isNoButtonMoved ? { position: 'absolute', zIndex: 1 } : {}}
						animate={controls}
						transition={{ type: 'spring', stiffness: 400, damping: 100 }}
					>
						{noTexts[noButtonIndex]}
					</motion.button>
				</div>
			</motion.div>
		</div>
	);
};

export default AskHerOut;
