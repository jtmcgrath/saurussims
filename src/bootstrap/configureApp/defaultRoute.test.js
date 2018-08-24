import addDefaultRoute from './defaultRoute'

describe('bootstrap/addDefaultRoute', () => {
    const route = 'route'

    it('should pass the route through', () => {
        const result = addDefaultRoute({}, route)

        expect(result).toBe(route)
    })

    describe('when a defaultRoute has already been defined', () => {
        it('should throw an error', () => {
            expect(() =>
                addDefaultRoute({ defaultRoute: true }, route)
            ).toThrow()
        })
    })

    describe('when the provided `defaultRoute` is not a string', () => {
        it('should throw an error', () => {
            expect(() => addDefaultRoute({}, null)).toThrow()
            expect(() => addDefaultRoute({}, undefined)).toThrow()
            expect(() => addDefaultRoute({}, false)).toThrow()
            expect(() => addDefaultRoute({}, true)).toThrow()
            expect(() => addDefaultRoute({}, {})).toThrow()
            expect(() => addDefaultRoute({}, [])).toThrow()
            expect(() => addDefaultRoute({}, () => {})).toThrow()
        })
    })
})
