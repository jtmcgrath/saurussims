import { get, toQueryString } from './general'

describe('get', () => {
	let value
	const test1 = {
		a: {
			b: {
				c: {
					d: {
						e: 'test 1 passed!',
					},
				},
			},
		},
	}
	const test2 = [[, [, , [, , , [, , , , 'test 2 passed!']]]]]
	const test3 = {
		a: [
			{
				b: [{ c: 'test 3 passed!' }],
			},
		],
	}

	describe('when the path exists', () => {
		it('should return the value', () => {
			value = get(test1, 'a', 'b', 'c', 'd', 'e')
			expect(value).toBe('test 1 passed!')

			value = get(test2, 0, 1, 2, 3, 4)
			expect(value).toBe('test 2 passed!')

			value = get(test3, 'a', 0, 'b', 0, 'c')
			expect(value).toBe('test 3 passed!')
		})
	})

	describe('when the path does not exist', () => {
		it('should return undefined', () => {
			value = get(test1, 'd', 'e', 'f')
			expect(value).toBe(undefined)

			value = get(test2, 1, 0, 0)
			expect(value).toBe(undefined)

			value = get(test3, 'a', 1, 'b')
			expect(value).toBe(undefined)
		})
	})
})

describe('toQueryString', () => {
	it('should construct a query string', () => {
		const includeKey2 = true
		const keyValuePairs = [
			['key1', 'value1'],
			includeKey2 && ['key2', 'value2'],
			['key3', 'value3'],
		]

		const queryString = toQueryString(keyValuePairs)

		expect(queryString).toBe('&key1=value1&key2=value2&key3=value3')
	})

	describe('when falsy values are included', () => {
		it('should not include the falsy values in the string', () => {
			const includeKey2 = false
			const keyValuePairs = [
				null,
				false,
				['key1', 'value1'],
				includeKey2 && ['key2', 'value2'],
				['key3', 'value3'],
				undefined,
				['key4', 'value4'],
			]

			const queryString = toQueryString(keyValuePairs)

			expect(queryString).toBe('&key1=value1&key3=value3&key4=value4')
		})
	})

	describe('when incorrect values are included', () => {
		it('should throw an error', () => {
			expect(() => toQueryString([9])).toThrow()
			expect(() => toQueryString([{ an: 'object' }])).toThrow()
			expect(() => toQueryString(['string'])).toThrow()
		})
	})
})
