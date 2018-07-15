import { createPortal } from 'react-dom'

const Modal = ({ children }) =>
	createPortal(children, document.getElementById('modal'))

export default Modal
