module.exports = {
    head: [
        ['link', {rel: 'icon', href: './images/favicon.png'}]
    ],
    title: 'FastEstimator',
    description: 'Just Playing Around',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Tutorial', 
             items: [ 
                 {text: 'install', link: '/install.md'},
                 {text: 'build model', link: '/model.md'},
                 {text: 'train model', link: '/train.md'}
             ]
            },
            {text: 'API', link: '/api.md'},
            {text: 'Github', link: 'https://github.com/fastestimator/fastestimator'}
        ],
        sidebar: 'auto',
        displayAllHeaders: true
    }
}