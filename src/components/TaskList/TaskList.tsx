import { useState } from 'react'
import { Tasks } from '../Main/Main'
import { NoTask } from '../NoTask/NoTask'
import { TaskListStyle } from './style'
import { Task } from './Task/Task'

interface TaskListProps {
	tasks: Tasks[]
	setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
	const completedTasks = tasks.reduce((acc, current) => {
		if (current.isChecked) {
			return acc + 1
		} else {
			return acc
		}
	}, 0)

	return (
		<TaskListStyle>
			<div className='counters-container'>
				<div className='to-do-created'>
					<p>Tarefas criadas</p>
					<span>{tasks.length}</span>
				</div>
				<div className='to-do-concluded'>
					<p>Concluidas</p>
					<span>
						{completedTasks} de {tasks.length}
					</span>
				</div>
			</div>
			{tasks.length === 0 ? (
				<NoTask />
			) : (
				<div className='tasks-container'>
					{tasks.map((task) => (
						<Task
							content={task}
							tasks={tasks}
							setTasks={setTasks}
							key={Math.floor(Math.random() * 100)}
						/>
					))}
				</div>
			)}
		</TaskListStyle>
	)
}
