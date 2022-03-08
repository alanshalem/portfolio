import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../public/images/profile_pic.jpg';

const Header = () => {
	return (
		<nav className="bg-transparent py-5 border-b border-solid border-neutral-700 sticky top-0 z-50">
			<div className="flex items-center justify-between px-6 mx-auto max-w-none">
				<Link to="/">
					<span className="flex items-center text-3xl font-bold font-display text-white hover:text-sky-300">
						{'</> alanshalem.dev'}
					</span>
				</Link>

				<ul className="text-xl md:flex sm-down:space-y-6 md:space-x-8 text-white ">
					<li className="md:mr-4 hover:text-sky-300">
						<Link to="/">Skills</Link>
					</li>
					<li className="md:mr-4 hover:text-sky-300">
						<Link to="/">About</Link>
					</li>
					<li className="md:mr-4 hover:text-sky-300">
						<Link to="/">Resume</Link>
					</li>
					<li>
						<img
							src={ProfilePic}
							alt="Profile Pic"
							className="rounded-full h-12 w-12"
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
