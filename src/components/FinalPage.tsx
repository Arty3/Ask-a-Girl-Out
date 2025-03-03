import React from 'react';

const FinalPage: React.FC = () => {

	return (
		<div className="flex items-center justify-center h-screen cursor-pointer">
			<div className="flex flex-col items-center justify-center space-y-14">
				<div className="relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-12">
					<img 
						src='/cute_cat.png' 
						alt='cat' 
						className='mb-6 p-4 max-w-full' 
					/>
					<div className="transition-transform duration-300 p-5 rounded-3xl relative inline-block w-full text-center">
						<p
							className='break-words text-4xl font-bold text-shadow text-center'
							style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
							yayayayayayayay
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinalPage;
