import React from 'react';

const Hero = () => {
	return (
		<>
			<div className="flex flex-col text-center md:w-2/3 mx-auto my-10">
				<span className="font-bold text-xl text-slate-300">Hello,</span>
				<h1 className="font-black text-white text-5xl">
					{' '}
					I'm Alan, a software developer from{' '}
					<span className="text-sky-300 text-opacity-80">
						Arg
						<span className="text-white text-opacity-80">ent</span>
						ina
					</span>
				</h1>
			</div>
		</>
	);
};

export default Hero;
