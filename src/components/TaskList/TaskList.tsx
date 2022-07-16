import { NoTask } from '../NoTask/NoTask';
import { TaskListStyle } from './style';
import { Task } from './Task/Task';

interface TaskListProps {
	tasks: string[];
	setTasks: (task: string[]) => void;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
	return (
		<TaskListStyle>
			<div className='counters-container'>
				<div className='to-do-created'>
					<p>Tarefas criadas</p>
					<span>{tasks.length}</span>
				</div>
				<div className='to-do-concluded'>
					<p>Concluidas</p>
					<span>0 de {tasks.length}</span>
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
	);
}
