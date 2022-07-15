import styled from 'styled-components';

export const TaskListStyle = styled.div`
	.tasks-container {
		display: flex;
		flex-flow: column;
		gap: 0.75rem;
	}
	.counters-container {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.5rem;
		div {
			display: flex;
			gap: 1rem;
			font-weight: 700;
			font-size: 0.875rem;
			line-height: 1.0588rem;
			span {
				font-size: 0.75rem;
				color: var(--gray-200);
				background-color: var(--gray-400);
				padding: 0.125rem 0.5rem 0.125rem 0.5rem;
				border-radius: 1rem;
			}
		}
		.to-do-created {
			p {
				color: var(--blue);
			}
		}
		.to-do-concluded {
			p {
				color: var(--purple);
			}
		}
	}
`;
