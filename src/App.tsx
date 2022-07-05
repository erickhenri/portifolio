import { List, Moon, Sun } from 'phosphor-react';
import { useState } from 'react';
import { Menu } from './components/Menu';

import Character from './assets/character.png'
import { About } from './components/Infos/About';
import { Repositories } from './components/Infos/Repositories';
import { Contact } from './components/Infos/Contact';
import { Footer } from './components/Footer';

export function App() {
	const [themeDarkOn, setThemeDarkOn] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	let option = "contact"

	function changeTheme() {
		setThemeDarkOn(() => !themeDarkOn)
	}
	function openMenu() {
		setMenuOpen(true)
	}

	return (
		<div className={`${themeDarkOn?"dark":""} text-blue-900 min-h-screen flex flex-col items-center bg-lightMain bg-cover bg-no-repeat`}>
			<header className='bg-blue-800 bg-opacity-30 w-full px-5 py-3 flex justify-between'>
				<List size={24} onClick={() => setMenuOpen(true)}/>
				
				{themeDarkOn
					? <Sun size={24} weight="fill" onClick={changeTheme} className="cursor-pointer"/>
					: <Moon size={24} weight="fill" onClick={changeTheme} className="cursor-pointer"/>
				}
			</header>
			
			<Menu 
				openMenu={openMenu}
				menuOpen={menuOpen}
			/>

			<img src={Character} alt="" className='w-2/3' />

			<div className="p-5 bg-gray-400 w-full flex-1">
				{option === "about" &&
					<About />
				}
				{option === "repositories" &&
					<Repositories />
				}
				{option === "contact" &&
					<Contact />
				}
			</div>

			<Footer />
		</div>
	)
}