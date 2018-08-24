import bootstrap from './bootstrap'

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

	it('should call each dependency with the returned config data', () => {
		bootstrap(() => app, [foo, bar])()

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

	it('should merge the resolved dependencies into the config', () => {
		const result = bootstrap(() => app, [foo, bar])()

		expect(result).resolves.toEqual({
			bar: 'barConfig',
			foo: 'fooConfig',
			dependencies: { bar: 'barDependency', foo: 'fooDependency' },
		})
	})
})
