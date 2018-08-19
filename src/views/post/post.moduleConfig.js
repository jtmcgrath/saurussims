import Test from 'shared/test'

const postConfig = {
    routeComponents: {
        post: Test,
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
