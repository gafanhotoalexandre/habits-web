import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react';

import logoImage from '../assets/logo.svg';

import { NewHabitForm } from './NewHabitForm';

export function Header() {

	return (
		<header className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img src={logoImage} alt="Habits" />

			<Dialog.Root>
				<Dialog.Trigger
					type="button"
					className="border border-sky-500 rounded-lg font-semibold px-6 py-4 flex items-center gap-3 hover:border-sky-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-background"
				>
					<Plus size={20} className="text-sky-500" />
					Novo hábito
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

					<Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
							<X size={24} aria-label="Fechar" />
						</Dialog.Close>

						<Dialog.Title className="text-3xl leading-tight text-white font-extrabold">
							Criar hábito
						</Dialog.Title>

						<NewHabitForm />
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>

		</header>
	);
}
