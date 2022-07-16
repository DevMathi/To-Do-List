import { MainStyle } from './style';
import plusIcon from '../../assets/plus.svg';
import { TaskList } from '../TaskList/TaskList';
import { FormEvent, useState, ChangeEvent } from 'react';

export function Main() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTaskContent, setNewTaskContent] = useState('');
	const [value, setValue] = useState('');

	function createNewTask(event: FormEvent) {
		event.preventDefault();
		setTasks([...tasks, newTaskContent]);
		setValue('');
	}

	function newTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTaskContent(event.target.value);
		setValue(event.target.value);
	}

	function newTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório');
	}

	return (
		<MainStyle>
			<form onSubmit={createNewTask}>
				<input
					type='text'
					placeholder='Adicione uma nova tarefa'
					name='task'
					onChange={newTaskChange}
					onInvalid={newTaskInvalid}
					value={value}
					required
				/>
				<button type='submit'>
					Criar
					<img src={plusIcon} alt='' />
				</button>
			</form>
			<TaskList tasks={tasks} setTasks={setTasks} />
		</MainStyle>
	);
}
