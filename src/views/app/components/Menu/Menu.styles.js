import styled from 'styled-components'
import { padding } from 'polished'

const activeMobileMenu = props =>
	props.visible &&
	`
	.secondary {
		height: calc(100vh - 48px);
	}

	:before {
		height: 100%;
	}
	`

const responsiveMenu = props =>
	!props.theme.isDesktop
		? `
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	:before {
		content: '';
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 48px;
		overflow: hidden;
		background: rgba(255,255,255,0.8);
		z-index: -1;
	}

	.secondary {
		position: absolute;
		bottom: 100%;
		left: 0;
		right: 0;
		height: 0;
		overflow: hidden;
	}

	${activeMobileMenu(props)}
` : `
	padding: ${ props.theme.columnSpacing }px ${ props.theme.columnSpacing / 2 }px 0;

	.main {
		flex-direction: row-reverse;
	}
`

export default styled.menu`
	.menu-item {
		${props =>
			padding(
				0,
				props.theme.isDesktop ? '2px' : '12px'
			)}

		align-items: center;
		display: flex;
		flex: 0 1 25%;
		justify-content: center;
		margin: 0;
	}

	:before,
	.secondary {
		transition: height 0.2s ease;
	}

	${responsiveMenu};
`
