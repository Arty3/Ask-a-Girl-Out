'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import AskHerOut from '@/components/AskHerOut';
import FinalPage from '@/components/FinalPage';

export default function Home() {
	const [currentPage, setCurrentPage] = useState('askout');
	const [askValue, setAskValue] = useState<string>('');

	const appStyle = {
		backgroundImage: "url('/background.svg')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		overflow: 'hidden',
		minHeight: '100vh',
		maxHeight: '100vh',
		minWidth: '100vw',
		maxWidth: '100vw',
		width: '100vw',
		height: '100vh',
		opacity: 1,
		margin: 0
	};

	const handleAskChange = (newValue: string) => {
		setAskValue(newValue.trim().toLowerCase());
	}

	useEffect(() => {
		if (askValue === 'yes') {
			setCurrentPage('final');
			setAskValue('');
		}
	})

	return (
		<div style={appStyle}>
		<AnimatePresence>
			{currentPage === 'askout' && (
				<AskHerOut onValueChange={handleAskChange}/>
			)}
			{currentPage === 'final' && (
				<motion.div
					key="final"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					exit={{ opacity: 0, scale: 0.5 }}
				>
					<FinalPage />
				</motion.div>
			)}
		</AnimatePresence>
		</div>
	);
};
