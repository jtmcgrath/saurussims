import bootstrap from './bootstrap'

import postProcessDependencies from './configureApp/dependencies.postProcess.js'

const postProcess = [{ default: postProcessDependencies }]

jest.mock('./requireContexts', () => ({
	context: () => [],
}))

describe('bootstrap', () => {
	let app
	let dependencies
	let foo
	let bar

	beforeEach(() => {
		dependencies = {
			foo: jest.fn().mockReturnValue('fooDependency'),
			bar: jest.fn().mockReturnValue('barDependency'),
		}
		app = {
			getConfig: () => ({
				dependencies,
				foo: 'fooConfig',
				bar: 'barConfig',
			}),
		}
		foo = { default: jest.fn().mockReturnValue('fooModule') }
		bar = { default: jest.fn().mockReturnValue('barModule') }
	})

	it('should pass the app to each configureApp function', () => {
		bootstrap(() => app, [foo, bar])()

		expect(foo.default).toHaveBeenCalledTimes(1)
		expect(foo.default).toHaveBeenCalledWith(app)

		expect(bar.default).toHaveBeenCalledTimes(1)
		expect(bar.default).toHaveBeenCalledWith(app)
	})

	describe('when a post-process is defined', () => {
		it('should post-process the app', () => {
			bootstrap(() => app, [foo, bar], postProcess)()

			expect(dependencies.foo).toHaveBeenCalledTimes(1)
			expect(dependencies.foo).toHaveBeenCalledWith({
				foo: 'fooConfig',
				bar: 'barConfig',
			})

			expect(dependencies.bar).toHaveBeenCalledTimes(1)
			expect(dependencies.bar).toHaveBeenCalledWith({
				foo: 'fooConfig',
				bar: 'barConfig',
			})
		})

		it('should await the promise and return the resolved value', () => {
			const result = bootstrap(() => app, [foo, bar], postProcess)()

			expect(result).resolves.toEqual({
				bar: 'barConfig',
				foo: 'fooConfig',
				dependencies: { bar: 'barDependency', foo: 'fooDependency' },
			})
		})
	})
})
