import addDependencies from './dependencies'

describe('bootstrap/addDependencies', () => {
	let result
	const foo = 'foo'
	const bar = 'bar'
	const baz = 'baz'
	const qux = 'qux'

	it('should add the dependencies to the condig.dependencies object', () => {
		result = addDependencies({ dependencies: {} }, { foo })
		expect(result).toEqual({ foo })

		result = addDependencies({ dependencies: {} }, { foo, bar })
		expect(result).toEqual({ foo, bar })

		result = addDependencies({ dependencies: { foo } }, { bar })
		expect(result).toEqual({ foo, bar })

		result = addDependencies({ dependencies: { foo, bar } }, { baz })
		expect(result).toEqual({ foo, bar, baz })

		result = addDependencies({ dependencies: { foo } }, { bar, baz })
		expect(result).toEqual({ foo, bar, baz })

		result = addDependencies({ dependencies: { foo, bar } }, { baz, qux })
		expect(result).toEqual({ foo, bar, baz, qux })
	})

	describe('when a dependency has already been defined', () => {
	    it('should throw an error', () => {
	        expect(() =>
	            addDependencies({ dependencies: { foo } }, { foo })
	        ).toThrow()
	    })
	})

	describe('when the provided `dependencies` are not an object', () => {
	    it('should throw an error', () => {
	        expect(() => addDependencies({}, null)).toThrow()
	        expect(() => addDependencies({}, undefined)).toThrow()
	        expect(() => addDependencies({}, false)).toThrow()
	        expect(() => addDependencies({}, true)).toThrow()
	        expect(() => addDependencies({}, 'string')).toThrow()
	        expect(() => addDependencies({}, [])).toThrow()
	        expect(() => addDependencies({}, () => { })).toThrow()
	    })
	})
})
