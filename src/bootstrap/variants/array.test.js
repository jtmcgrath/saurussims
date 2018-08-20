import array from './array'

describe('bootstrap/builders/array', () => {
	let result, acc, customGetResult
	const getResult = array({ name: 'content' })
	const foo = 'foo'
	const bar = 'bar'
	const baz = 'baz'
	const qux = 'qux'

	describe('when the config contains the specified name', () => {
		it('should merge the value into the accumulator', () => {
			result = getResult({ content: [foo] })({})
			expect(result).toEqual({ content: [foo] })

			result = getResult({ content: [foo, bar] })({})
			expect(result).toEqual({ content: [foo, bar] })

			result = getResult({ content: [foo] })({ content: [bar] })
			expect(result).toEqual({ content: [bar, foo] })

			result = getResult({ content: [foo, bar] })({ content: [baz] })
			expect(result).toEqual({ content: [baz, foo, bar] })

			result = getResult({ content: [foo] })({ content: [bar, baz] })
			expect(result).toEqual({ content: [bar, baz, foo] })

			result = getResult({ content: [foo, bar] })({ content: [baz, qux] })
			expect(result).toEqual({ content: [baz, qux, foo, bar] })
		})

		describe('when the config is not an array', () => {
			it('should throw an error', () => {
				expect(() => getResult({ content: 1 })({})).toThrow()
				expect(() => getResult({ content: 'string' })({})).toThrow()
				expect(() => getResult({ content: {} })({})).toThrow()
				expect(() => getResult({ content: () => {} })({})).toThrow()
			})
		})

		describe('when a duplicate value is being pushed to the array', () => {
			it('should merge them value into the accumulator', () => {
				result = getResult({ content: [foo, foo] })({
					content: [foo, foo],
				})
				expect(result).toEqual({ content: [foo, foo, foo, foo] })
			})

			describe('if a preventDuplicates function is defined', () => {
				it('should throw an error', () => {
					customGetResult = array({
						name: 'content',
						preventDuplicates: x => y => x === y,
					})

					expect(() =>
						customGetResult({ content: [foo] })({ content: [foo] })
					).toThrow()

					expect(() =>
						customGetResult({ content: [foo, bar] })({
							content: [foo, baz],
						})
					).toThrow()

					customGetResult = array({
						name: 'content',
						preventDuplicates: x => y => x.name === y.name,
					})

					expect(() =>
						customGetResult({ content: [{ name: foo }] })({
							content: [{ name: foo }],
						})
					).toThrow()

					expect(() =>
						customGetResult({
							content: [{ name: foo }, { name: bar }],
						})({
							content: [{ name: foo }, { name: baz }],
						})
					).toThrow()
				})
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
