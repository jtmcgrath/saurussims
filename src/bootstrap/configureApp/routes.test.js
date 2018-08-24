import addRoutes from './routes'

describe('bootstrap/addRoutes', () => {
	let result
	const foo = { name: 'foo' }
	const bar = { name: 'bar' }
	const baz = { name: 'baz' }
	const qux = { name: 'qux' }

	it('should add the routes to the condig.routes object', () => {
		result = addRoutes({ routes: [] }, [foo])
		expect(result).toEqual([foo])

		result = addRoutes({ routes: [] }, [foo, bar])
		expect(result).toEqual([foo, bar])

		result = addRoutes({ routes: [foo] }, [bar])
		expect(result).toEqual([foo, bar])

		result = addRoutes({ routes: [foo, bar] }, [baz])
		expect(result).toEqual([foo, bar, baz])

		result = addRoutes({ routes: [foo] }, [bar, baz])
		expect(result).toEqual([foo, bar, baz])

		result = addRoutes({ routes: [foo, bar] }, [baz, qux])
		expect(result).toEqual([foo, bar, baz, qux])
	})

	describe('when a dependency has already been defined', () => {
		it('should throw an error', () => {
			expect(() => addRoutes({ routes: [foo] }, [foo])).toThrow()
		})
	})

	describe('when the provided `routes` is not an array', () => {
		it('should throw an error', () => {
			expect(() => addRoutes({}, null)).toThrow()
			expect(() => addRoutes({}, undefined)).toThrow()
			expect(() => addRoutes({}, false)).toThrow()
			expect(() => addRoutes({}, true)).toThrow()
			expect(() => addRoutes({}, 'string')).toThrow()
			expect(() => addRoutes({}, {})).toThrow()
			expect(() => addRoutes({}, () => {})).toThrow()
		})
	})
})
