import createRoot from './createRoot'

describe('createRoot', () => {
	it('should create a div with classNames and append it to the target', () => {
		document.body.innerHTML = `
            <div id="wrapper">
                <div id="target">
                    <span>Existing child</span>
                </div>
            </div>
`
		const target = document.getElementById('target')

		expect(target.children.length).toBe(1)

		const root = createRoot(target, 'root-class-name')

		expect(target.children.length).toBe(2)
		expect(target.children[target.children.length - 1]).toBe(root)

		expect(root).toBeInstanceOf(HTMLDivElement)
		expect(root.classList.contains('contentful-root')).toBe(true)
		expect(root.classList.contains('root-class-name')).toBe(true)
	})
})
