import { buildPipeline } from './buildPipeline'

describe('bootstrap/buildPipeline', () => {
	let result, builderOne, builderTwo, build

	beforeEach(() => {
		builderOne = jest.fn().mockReturnValue('one')
		builderTwo = jest.fn().mockReturnValue('two')
		build = buildPipeline({ builderOne, builderTwo })
	})

	it('should work for single configs', () => {
		result = build({ one: { type: 'builderOne' } })

		expect(result).toEqual(['one'])
		expect(builderOne).toHaveBeenCalledTimes(1)
		expect(builderOne).toHaveBeenCalledWith('one', {
			type: 'builderOne',
		})
		expect(builderTwo).toHaveBeenCalledTimes(0)
	})

	it('should work when multiple builders are called', () => {
		result = build({
			one: { type: 'builderOne' },
			two: { type: 'builderTwo' },
		})

		expect(result).toEqual(['one', 'two'])
		expect(builderOne).toHaveBeenCalledTimes(1)
		expect(builderOne).toHaveBeenCalledWith('one', {
			type: 'builderOne',
		})
		expect(builderTwo).toHaveBeenCalledTimes(1)
		expect(builderTwo).toHaveBeenCalledWith('two', {
			type: 'builderTwo',
		})
	})

	it('should work when one builder is multiple times', () => {
		result = build({
			one: { type: 'builderOne' },
			two: { type: 'builderOne' },
			three: { type: 'builderOne' },
		})

		expect(result).toEqual(['one', 'one', 'one'])
		expect(builderOne).toHaveBeenCalledTimes(3)
		expect(builderOne.mock.calls[0]).toEqual([
			'one',
			{
				type: 'builderOne',
			},
		])
		expect(builderOne.mock.calls[1]).toEqual([
			'two',
			{
				type: 'builderOne',
			},
		])
		expect(builderOne.mock.calls[2]).toEqual([
			'three',
			{
				type: 'builderOne',
			},
		])
	})

	describe('when a requested builder does not exist', () => {
		it('should throw an error', () => {
			expect(() =>
				build({
					one: { type: 'builderOne' },
					two: { type: 'unknown' },
				})
			).toThrow()
		})
	})
})
