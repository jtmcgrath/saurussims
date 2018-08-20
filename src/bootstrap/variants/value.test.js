import value from './value'

describe('bootstrap/builders/value', () => {
	let result, acc
	const fn = () => {}
	const getResult = value({ name: 'content' })

	describe('when the config contains the specified name', () => {
		it('should add the value into the accumulator', () => {
			result = getResult({ content: 'string' })({})
			expect(result).toEqual({ content: 'string' })

			result = getResult({ content: 'string' })({ other: true })
			expect(result).toEqual({ content: 'string', other: true })

			result = getResult({ content: 10 })({})
			expect(result).toEqual({ content: 10 })

			result = getResult({ content: 10 })({ other: true })
			expect(result).toEqual({ content: 10, other: true })

			result = getResult({ content: fn })({})
			expect(result).toEqual({ content: fn })

			result = getResult({ content: fn })({ other: true })
			expect(result).toEqual({ content: fn, other: true })

			result = getResult({ content: ['value'] })({})
			expect(result).toEqual({ content: ['value'] })

			result = getResult({ content: ['value'] })({ other: true })
			expect(result).toEqual({ content: ['value'], other: true })

			result = getResult({ content: { value: 'value' } })({})
			expect(result).toEqual({ content: { value: 'value' } })

			result = getResult({ content: { value: 'value' } })({ other: true })
			expect(result).toEqual({ content: { value: 'value' }, other: true })
		})

		describe('when a duplicate name is being merged into the accumulator', () => {
			it('should throw an error', () => {
				expect(() =>
					getResult({ content: true })({ content: true })
				).toThrow()
			})
		})
	})

	describe('when the config does not contain the specified name', () => {
		it('should return the accumulator', () => {
			acc = {}
			result = getResult({})(acc)
			expect(result).toBe(acc)

			result = getResult({ foo: 'foo' })(acc)
			expect(result).toBe(acc)

			acc = { content: true }
			result = getResult({})(acc)
			expect(result).toBe(acc)

			result = getResult({ foo: 'foo' })(acc)
			expect(result).toBe(acc)
		})
	})
})
