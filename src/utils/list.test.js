import { generateList, generateListAroundCenter } from './list'

describe('generateList', () => {
	it('should return an array of the correct length', () => {
		expect(generateList(0, 5).length).toBe(6)
		expect(generateList(1, 100).length).toBe(100)
		expect(generateList(-5, 5).length).toBe(11)
		expect(generateList(5, -5).length).toBe(11)
	})

	it('should return the correct sequence of integers', () => {
		expect(generateList(0, 1)).toEqual([0, 1])
		expect(generateList(1, 5)).toEqual([1, 2, 3, 4, 5])
		expect(generateList(-5, 0)).toEqual([-5, -4, -3, -2, -1, 0])
		expect(generateList(1, -1)).toEqual([-1, 0, 1])
	})
})

describe('generateListAroundCenter', () => {
	it('should return the correct sequence of integers', () => {
		expect(generateListAroundCenter(2, 20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
		expect(generateListAroundCenter(8, 20)).toEqual([
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
		])
		expect(generateListAroundCenter(18, 20)).toEqual([
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
		])
	})
})
