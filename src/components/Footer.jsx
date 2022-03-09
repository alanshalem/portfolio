import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	return (
		<div className="absolute w-full left-0">
			<div className="px-6 md:px-24 lg:px-36 xl:px-64 2xl:px-96 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center text-white">
						Made with ❤️ in Argentina
					</div>
					<div className="flex items-center">
						<Link to={'/'} className="p-3">
							<FaLinkedin color="white" size={25} />
						</Link>
						<Link to={'/'} className="p-3">
							<FaGithub color="white" size={25} />
						</Link>
						<Link to={'/'} className="p-3">
							<FiMail color="white" size={25} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
