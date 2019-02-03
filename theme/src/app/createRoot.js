export default function createRoot(target, className) {
	const root = document.createElement('div')
	root.classList.add('contentful-root', className)

	target.appendChild(root)

	return root
}
