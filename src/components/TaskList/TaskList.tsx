import { NoTask } from '../NoTask/NoTask';
import { TaskListStyle } from './style';
import { Task } from './Task/Task';

interface TaskListProps {
	tasks: string[];
}

export function TaskList({ tasks }: TaskListProps) {
	return (
		<TaskListStyle>
			<div className='counters-container'>
				<div className='to-do-created'>
					<p>Tarefas criadas</p>
					<span>{tasks.length}</span>
				</div>
				<div className='to-do-concluded'>
					<p>Concluidas</p>
					<span>0</span>
				</div>
			</div>
			{tasks.length === 0 ? (
				<NoTask />
			) : (
				<div className='tasks-container'>
					{tasks.map((task) => (
						<Task content={task} />
					))}
				</div>
			)}
		</TaskListStyle>
	);
}
