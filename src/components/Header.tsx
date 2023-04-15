import { Plus } from 'phosphor-react'

import logoImage from '../assets/logo.svg';

export function Header() {
	return (
		<header className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img src={logoImage} alt="Habits" />

			<button
				type="button"
				className="border border-sky-500 rounded-lg font-semibold px-6 py-4 flex items-center gap-3 hover:border-sky-300 transition duration-200"
			>
				<Plus size={20} className="text-sky-500" />
				Novo hábito
			</button>
		</header>
	);
}
