import { get } from './general'

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
