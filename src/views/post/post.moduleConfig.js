import PrintProps from 'shared/printProps'

const postConfig = {
    routeComponents: {
        post: PrintProps,
    },
    routes: [
        {
            name: 'post',
            path: '/post/:postId/:postSLug',
        },
        {
            name: 'postWithoutSlug',
            path: '/post/:postId'
        }
    ],
}

export default postConfig
