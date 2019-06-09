import { getClosestTarget } from './dom'

describe('getClosestTarget', () => {
	afterEach(() => {
		document.body.innerHTML = ''
	})

	describe('when the element is inside an anchor tag', () => {
		it('should return the anchor', () => {
			const html = `
                <div>
                    <a id="target">
                        <div>
                            <div>
                                <div id="element">
                                </div>
                            </div>
                        </div>
                    </a>
                    <a id="other">
                    </a>
                </div>
`

			document.body.innerHTML = html
			const element = document.getElementById('element')
			const target = getClosestTarget(element)

			expect(target).toBeInstanceOf(HTMLAnchorElement)
			expect(target.id).toBe('target')
		})
	})

	describe('when the element is not inside an anchor tag', () => {
		it('should return null', () => {
			const html = `
                <div>
                    <div id="target">
                        <div>
                            <div>
                                <div id="element">
                                </div>
                            </div>
                        </div>
                    </div>
                    <a id="other">
                    </a>
                </div>
`

			document.body.innerHTML = html
			const element = document.getElementById('element')
			const target = getClosestTarget(element)

			expect(target).toBe(null)
		})
	})
})
