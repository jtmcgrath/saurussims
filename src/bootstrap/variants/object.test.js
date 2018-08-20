import object from './object'

describe('bootstrap/builders/object', () => {
	let result, acc
	const getResult = object({ name: 'content'})
	const foo = 'foo'
	const bar = 'bar'
	const baz = 'baz'
	const qux = 'qux'

	describe('when the config contains the specified name', () => {
		it('should merge the value into the accumulator', () => {
			result = getResult({ content: { foo } })({})
			expect(result).toEqual({ content: { foo } })

			result = getResult({ content: { foo, bar } })({})
			expect(result).toEqual({ content: { foo, bar } })

			result = getResult({ content: { foo } })({ content: { bar } })
			expect(result).toEqual({ content: { foo, bar } })

			result = getResult({ content: { foo, bar } })({ content: { baz } })
			expect(result).toEqual({ content: { foo, bar, baz } })

			result = getResult({ content: { foo } })({ content: { bar, baz } })
			expect(result).toEqual({ content: { foo, bar, baz } })

			result = getResult({ content: { foo, bar } })({
				content: { baz, qux },
			})
			expect(result).toEqual({ content: { foo, bar, baz, qux } })
		})

		describe('when the config is not an object', () => {
			it('should throw an error', () => {
				expect(() => getResult({ content: 1 })({})).toThrow()
				expect(() => getResult({ content: 'string' })({})).toThrow()
				expect(() => getResult({ content: [] })({})).toThrow()
				expect(() => getResult({ content: () => {} })({})).toThrow()
			})
		})

		describe('when a duplicate value is being merged into the object', () => {
			it('should throw an error', () => {
				expect(() =>
					getResult({ content: { foo } })({ content: { foo } })
				).toThrow()
			})
		})
	})

	describe('when the config does not contain the specified name', () => {
		it('should return the accumulator', () => {
			acc = {}
			result = getResult({})(acc)
			expect(result).toBe(acc)

			result = getResult({ foo })(acc)
			expect(result).toBe(acc)

			acc = { content: true }
			result = getResult({})(acc)
			expect(result).toBe(acc)

			result = getResult({ foo })(acc)
			expect(result).toBe(acc)
		})
	})
})
