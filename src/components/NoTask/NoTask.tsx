import { NoTaskSyle } from './style';
import clipBoardImg from '../../assets/clipboard.svg';

export function NoTask() {
	return (
		<NoTaskSyle>
			<div className='to-do-list-container'>
				<div>
					<img src={clipBoardImg} alt='' />
				</div>
				<div>
					<p>Você ainda não tem tarefas cadastradas</p>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</div>
			</div>
		</NoTaskSyle>
	);
}
