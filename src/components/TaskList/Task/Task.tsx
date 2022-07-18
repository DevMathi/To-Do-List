import React, { useEffect, useState } from 'react'
import { TaskStyle } from './style'
import { Check, Trash } from 'phosphor-react'
import { Tasks } from '../../Main/Main'

interface TaskProps {
	content: Tasks
	tasks: Tasks[]
	setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
}

export function Task({ content, setTasks, tasks }: TaskProps) {
	function setCheckBox() {
		if (content) {
			const tasksFiltered = tasks.filter((task) => task.task != content.task)
			setTasks([
				...tasksFiltered,
				{ ...content, isChecked: !content.isChecked },
			])
		}
	}

	function deleteTasks() {
		setTasks((tasks) => tasks.filter((task) => task.task != content.task))
	}

	return (
		<TaskStyle>
			<div className='task-container'>
				<div className='check-button'>
					<button
						onClick={setCheckBox}
						className={content.isChecked ? 'checked' : ''}
					>
						{content.isChecked ? <Check size={18} color='white' /> : ''}
					</button>
				</div>
				<div className='content-container'>
					<p className={content.isChecked ? 'concluded' : ' '}>
						{content.task}
					</p>
				</div>
				<div className='delete-button' onClick={deleteTasks}>
					<button>
						<Trash size={24} color='var(--gray-300)' className='trash-icon' />
					</button>
				</div>
			</div>
		</TaskStyle>
	)
}
