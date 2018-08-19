const postConfig = {
    routeComponents: {
        post: () => null,
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
