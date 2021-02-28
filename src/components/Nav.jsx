import React, { useState } from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import NavItems from './navItems';

export default function Nav() {
	const [active, setActive] = useState(false);
	const handleClick = () => setActive(!active);
	return (
		<nav className="navBar">
			<div className="">
				<button type="button " className="nav" onClick={handleClick}>
					<div className={!active ? 'navIcon' : 'close'}></div>
				</button>
				<div className={!active ? 'navContent' : 'navContentActive'}>
					{NavItems.map((items, index) => {
						return (
							<>
								<Link className="linkItem" to={items.url} key={index}>
									{items.item}
								</Link>
								<div className="underline"></div>
							</>
						);
					})}
					<button type="button " className="nav" onClick={handleClick}>
						<div className={!active ? 'navIcon' : 'close'}></div>
					</button>
				</div>
			</div>
		</nav>
	);
};
