import styled from 'styled-components';

export const MainStyle = styled.main`
	@media (max-width: 763px) {
		padding: 0 2rem;
	}
	padding: 0 22rem;
	margin: 0 auto;
	form {
		margin-top: -30px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rem;
		gap: 0.5rem;
		input {
			width: 100%;
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.4rem;
			font-family: 'Inter', sans-serif;
			color: var(--gray-100);
			line-height: 1.4rem;
			&::placeholder {
				color: var(--gray-300);
			}
			display: flex;
			padding: 1rem;
			border-radius: 8px;
			background-color: var(--gray-500);
			border: 1px solid var(--gray-700);
			outline: 0;
			&:focus {
				outline: 1px solid var(--purple-dark);
				&::placeholder {
					color: var(--gray-100);
				}
			}
		}
		button {
			background-color: var(--blue-dark);
			border: none;
			padding: 1rem;
			border-radius: 0.5rem;
			color: var(--gray-100);
			gap: 8px;
			display: flex;
			align-items: center;
			font-size: 14px;
			font-family: 'Inter', sans-serif;
			font-weight: 700;
			line-height: 1.225rem;
			transition: background-color 0.3s;
			&:hover {
				background-color: var(--blue);
			}
		}
	}
`;
