import styled from 'styled-components';

export const TaskStyle = styled.div`
	background-color: var(--gray-500);
	padding: 1rem;
	border: 1px solid var(--gray-500);
	border-radius: 0.5rem;
	.task-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.75rem;
		div {
			overflow-wrap: break-word;
			word-break: break-word;
		}
		p {
			font-weight: 400;
			font-size: 0.875rem;
			line-height: 1.225rem;
			color: var(--gray-100);
		}
		.check-button {
			button {
				border: 2px solid var(--blue);
				border-radius: 1rem;
				padding: 12px;
				position: relative;
				svg {
					position: absolute;
					top: 3px;
					left: 3px;
				}
				&:hover {
					background-color: var(--blue-dark);
				}
			}
			.checked {
				border: 2px solid var(--purple-dark);
				background-color: var(--purple-dark);
				border-radius: 1rem;
				padding: 12px;
				position: relative;
				&:hover {
					background-color: var(--purple);
					border: 2px solid var(--purple);
				}
			}
		}
		.check-icon {
			position: absolute;
		}
		.content-container {
			display: flex;
			align-items: center;
			flex: 1;
			.concluded {
				color: var(--gray-300);
				text-decoration-line: line-through;
			}
		}
		.delete-button {
			button {
				padding: 0.3125rem;
				&:hover {
					background-color: var(--gray-400);
					border-radius: 4px;
					.trash-icon {
						line,
						path {
							stroke: red;
						}
					}
				}
			}
		}
	}
`;
