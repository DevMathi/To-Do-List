import { useState } from 'react';
import { TaskStyle } from './style';
import { Check, Trash } from 'phosphor-react';

interface TaskProps {
	content: string;
	tasks: string[];
	setTasks: (task: string[]) => void;
}

export function Task({ content, tasks, setTasks }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);
	const [taskCompleteCounter, settaskCompleteCounter] = useState(0);

	function setCheckBox() {
		setIsChecked(!isChecked);
	}

	function deleteTasks() {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task !== content;
		});
		setTasks(tasksWithoutDeletedOne);
	}

	return (
		<TaskStyle>
			<div className='task-container'>
				<div className='check-button'>
					<button onClick={setCheckBox} className={isChecked ? 'checked' : ''}>
						{isChecked ? <Check size={18} color='white' /> : ''}
					</button>
				</div>
				<div className='content-container'>
					<p className={isChecked ? 'concluded' : ' '}>{content}</p>
				</div>
				<div className='delete-button' onClick={deleteTasks}>
					<button>
						<Trash size={24} color='var(--gray-300)' className='trash-icon' />
					</button>
				</div>
			</div>
		</TaskStyle>
	);
}
