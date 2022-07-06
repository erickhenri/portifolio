import { useState } from "react";
import { Outlet } from "react-router-dom";
import { List, Moon, Sun } from "phosphor-react";

import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";

import Character from '../assets/character.png';

export function Home() {
	const [themeDarkOn, setThemeDarkOn] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	function changeTheme() {
		setThemeDarkOn(() => !themeDarkOn)
	}

	return (
		<div className={themeDarkOn?"dark":""}>
			<div className="text-blue-900 dark:text-white min-h-screen flex flex-col items-center md:flex-row md:justify-between bg-lightMain bg-cover bg-no-repeat dark:bg-darkMain dark:bg-center transition-all duration-[400ms]">
				<header className="fixed top-0 px-5 md:p-0 h-14 md:h-0 bg-blue-800 bg-opacity-30 dark:bg-opacity-80 w-full flex justify-between items-center">
					<List
						className="md:hidden" 
						size={32} 
						onClick={() => setMenuOpen(true)}
					/>
					
					{themeDarkOn
						? <Sun 
							className="md:cursor-pointer md:absolute md:top-8 md:right-8"
							size={32} 
							weight="fill" 
							onClick={changeTheme} 
						  />
						: <Moon 
							className="md:cursor-pointer md:absolute md:top-8 md:right-8"
							size={32} 
							weight="fill" 
							onClick={changeTheme} 
						  />
					}
				</header>
				
				<Menu 
					setMenuOpen={setMenuOpen}
					menuOpen={menuOpen}
					/>

				<img src={Character} alt="" className='pt-14 w-2/3 md:w-auto md:max-h-screen' />

				<div className="p-5 bg-gray-400 dark:bg-blue-900 dark:bg-opacity-50 md:bg-opacity-50 w-full md:w-96 md:h-screen flex-1 md:flex-none md:flex md:flex-col md:justify-center">
                    <Outlet />
				</div>

				<Footer /> 
			</div>
		</div>
	)
}