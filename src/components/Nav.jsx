import React, { useState } from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import NavItems from './navItems';

export default function Nav() {
	const [active, setActive] = useState(false);
	const handleClick = () => setActive(!active);
	return (
		<nav className="navBar">
				<button type="button " className="nav" onClick={handleClick}>
					<div className={!active ? 'navIcon' : 'close'}></div>
				</button>
				<div className={!active ? 'navContent' : 'navContentActive'}>
					{NavItems.map((items) => {
						return (
							<>
								<Link className="linkItem" onClick={handleClick} to={items.url} key={index.id}>
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
		</nav>
	);
};