import { MainStyle } from './style';
import plusIcon from '../../assets/plus.svg';
import { TaskList } from '../TaskList/TaskList';
import { FormEvent, useState } from 'react';

export function Main() {
	const [tasks, setTasks] = useState(['']);
	const [newTaskContent, setNewTaskContent] = useState('');
	function createNewTask(event: FormEvent) {
		event.preventDefault();
		setTasks([...tasks, event.target.task.value]);
	}

	return (
		<MainStyle>
			<form onSubmit={createNewTask}>
				<input type='text' placeholder='Adicione uma nova tarefa' name='task' />
				<button type='submit'>
					Criar
					<img src={plusIcon} alt='' />
				</button>
			</form>
			<TaskList tasks={tasks} />
		</MainStyle>
	);
}
