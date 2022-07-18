import { MainStyle } from './style'
import plusIcon from '../../assets/plus.svg'
import { TaskList } from '../TaskList/TaskList'
import { FormEvent, useState, ChangeEvent } from 'react'

export interface Tasks {
	id: number
	task: string
	isChecked: boolean
}

export function Main() {
	const [tasks, setTasks] = useState<Tasks[]>([])
	const [newTaskContent, setNewTaskContent] = useState<Tasks>({} as Tasks)
	const [value, setValue] = useState('')

	function createNewTask(event: FormEvent) {
		event.preventDefault()
		const taskAlreadyCreated = tasks.some(
			(task) => task.task.trim() === newTaskContent.task.trim()
		)
		if (taskAlreadyCreated) return
		setTasks([...tasks, newTaskContent])
		setValue('')
	}

	function newTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('')
		setNewTaskContent({
			id: Math.floor(Math.random() * 100),
			task: event.target.value,
			isChecked: false,
		})
		setValue(event.target.value)
	}

	function newTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório')
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
	)
}
