import { createApp } from './createApp'

describe('bootstrap/createApp', () => {
	it('provides a getConfig callback which returns the app', () => {
		const app = createApp()({ test: true })
		expect(app.getConfig).toBeDefined()
		expect(app.getConfig()).toEqual({ test: true })
	})

	it('adds the provided configCallbacks to the app', () => {
		let currentConfig = { initial: true }
		const spy = jest.fn()
		const test = (config, value) => {
			spy(config, value)
			return value
		}
		const app = createApp({ something: test })(currentConfig)
		currentConfig = app.getConfig()
		expect(app.test).toBeDefined()
		expect(spy).toHaveBeenCalledTimes(0)
		expect(currentConfig).toEqual({ initial: true })

		app.test('test')
		currentConfig = app.getConfig()
		expect(spy).toHaveBeenCalledTimes(1)
		expect(spy).toHaveBeenCalledWith({ initial: true }, 'test')
		expect(currentConfig).toEqual({
			initial: true,
			something: 'test',
		})

		app.test('testAgain')
		currentConfig = app.getConfig()
		expect(spy).toHaveBeenCalledTimes(2)
		expect(spy).toHaveBeenCalledWith(
			{ initial: true, something: 'test' },
			'testAgain'
		)
		expect(currentConfig).toEqual({
			initial: true,
			something: 'testAgain',
		})
	})

	it('exposes the initialConfig', () => {
		const initialConfig = { foo: 'bar', baz: true }
		const app = createApp()(initialConfig)

		expect(app.initialConfig).toBe(initialConfig)
	})

	describe('addRequiredKey', () => {
        let app
        const addSomething = (_, b) => b

        beforeEach(() => {
            app = createApp({ something: addSomething })()
            app.addRequiredKey('something')
        })

		describe('when the config contains a required key', () => {
			it('should work', () => {
				app.addSomething('test')

				expect(app.getConfig()).toEqual({ something: 'test' })
			})
		})

		describe('when the config does not contain a required key', () => {
			it('should throw an error', () => {
				expect(() => app.getConfig()).toThrow()
			})
		})
	})
})
