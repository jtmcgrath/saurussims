import styled from 'styled-components'

export default styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: ${props => props.theme.columnSpacing * 5}px 0;
	overflow: visible;
	width: 100%;

	::before {
		animation: spin 0.7s linear infinite;
		border: 2px solid rgba(255, 255, 255, 0);
		border-bottom-color: rgba(145, 145, 145, 0.8);
		border-radius: 50%;
		content: '';
		display: block;
		height: 10vw;
		max-height: ${props => props.theme.columnSpacing * 6}px;
		max-width: ${props => props.theme.columnSpacing * 6}px;
		min-height: ${props => props.theme.columnSpacing}px;
		min-width: ${props => props.theme.columnSpacing}px;
		width: 10vw;
	}
`
