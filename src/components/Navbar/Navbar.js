import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaGitlab } from "react-icons/fa";
import s from "./navbar.module.css";

export default function Navbar() {
	const [isNavActive, setIsNavActive] = useState(false);

	const onBurgerToggle = () => {
		setIsNavActive((prev) => !prev);
	};

	return (
		<nav className={s.navbar}>
			<div className={s.navbarBrand}>
				<Link to="/">
					<FaGitlab
						className={s.logo}
						size={"3rem"}
						color="rgb(236, 145, 59)"
					/>
				</Link>
			</div>

			<div className={s.hamburger}>
				<span className={s.toggleButton} onClick={onBurgerToggle}>
					<span className={s.bar}></span>
					<span className={s.bar}></span>
					<span className={s.bar}></span>
				</span>
			</div>

			<div
				className={
					isNavActive
						? `${s.navbarLinks} ${s.active}`
						: `${s.navbarLinks}`
				}
			>
				<ul>
					<li>
						<Link className={s.navbarLink} to="/">
							Home Form
						</Link>
					</li>
					<li>
						<Link className={s.navbarLink} to="/details">
							Other Forms
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
