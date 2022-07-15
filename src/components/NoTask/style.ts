import styled from 'styled-components';

export const NoTaskSyle = styled.div`
	display: flex;
	flex-flow: column;
	.to-do-list-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		text-align: center;
		padding: 4rem 1.5rem;
		border-top: 1px solid var(--gray-400);
		border-radius: 0.5rem;
		gap: 1rem;
		div {
			p {
				line-height: 1.4rem;
				font-weight: 400;
				color: var(--gray-300);
			}
		}
	}
`;
