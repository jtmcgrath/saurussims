import addRouteComponents from './routeComponents'

describe('bootstrap/addRouteComponents', () => {
    let result
    const foo = 'foo'
    const bar = 'bar'
    const baz = 'baz'
    const qux = 'qux'

    it('should add the routeComponents to the condig.routeComponents object', () => {
        result = addRouteComponents({ routeComponents: {} }, { foo })
        expect(result).toEqual({ foo })

        result = addRouteComponents({ routeComponents: {} }, { foo, bar })
        expect(result).toEqual({ foo, bar })

        result = addRouteComponents({ routeComponents: { foo } }, { bar })
        expect(result).toEqual({ foo, bar })

        result = addRouteComponents({ routeComponents: { foo, bar } }, { baz })
        expect(result).toEqual({ foo, bar, baz })

        result = addRouteComponents({ routeComponents: { foo } }, { bar, baz })
        expect(result).toEqual({ foo, bar, baz })

        result = addRouteComponents({ routeComponents: { foo, bar } }, { baz, qux })
        expect(result).toEqual({ foo, bar, baz, qux })
    })

    describe('when a dependency has already been defined', () => {
        it('should throw an error', () => {
            expect(() =>
                addRouteComponents({ routeComponents: { foo } }, { foo })
            ).toThrow()
        })
    })

    describe('when the provided `routeComponents` is not an object', () => {
        it('should throw an error', () => {
            expect(() => addRouteComponents({}, null)).toThrow()
            expect(() => addRouteComponents({}, undefined)).toThrow()
            expect(() => addRouteComponents({}, false)).toThrow()
            expect(() => addRouteComponents({}, true)).toThrow()
            expect(() => addRouteComponents({}, 'string')).toThrow()
            expect(() => addRouteComponents({}, [])).toThrow()
            expect(() => addRouteComponents({}, () => { })).toThrow()
        })
    })
})
