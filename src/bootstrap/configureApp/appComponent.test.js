import addAppComponent from './appComponent'

describe('bootstrap/addAppComponent', () => {
	const component = jest.fn()

	it('should pass the component through', () => {
		const result = addAppComponent({}, component)

		expect(result).toBe(component)
	})

	describe('when an appComponent has already been defined', () => {
		it('should throw an error', () => {
			expect(() =>
				addAppComponent({ appComponent: true }, component)
			).toThrow()
		})
	})

	describe('when the provided `appComponent` is not a function', () => {
		it('should throw an error', () => {
			expect(() => addAppComponent({}, null)).toThrow()
			expect(() => addAppComponent({}, undefined)).toThrow()
			expect(() => addAppComponent({}, false)).toThrow()
			expect(() => addAppComponent({}, true)).toThrow()
			expect(() => addAppComponent({}, 'str')).toThrow()
			expect(() => addAppComponent({}, {})).toThrow()
			expect(() => addAppComponent({}, [])).toThrow()
		})
	})
})
