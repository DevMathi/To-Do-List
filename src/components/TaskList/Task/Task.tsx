import { useState } from 'react';
import { TaskStyle } from './style';
import { Check, Trash } from 'phosphor-react';

interface TaskProps {
	content: string;
}

export function Task({ content }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);

	function setCheckBox() {
		setIsChecked(!isChecked);
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
				<div className='delete-button'>
					<button>
						<Trash size={24} color='var(--gray-300)' className='trash-icon' />
					</button>
				</div>
			</div>
		</TaskStyle>
	);
}
