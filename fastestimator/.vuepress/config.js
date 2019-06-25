module.exports = {
    title: 'FastEstimator',
    description: 'Just Playing Around',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Tutorial', 
             items: [ 
                 {text: 'install', link: '/tutorial/install/'},
                 {text: 'build model', link: '/tutorial/build/'},
                 {text: 'train model', link: '/tutorial/train/'}
             ]
            },
            {text: 'API', link: '/api/'},
            {text: 'Github', link: 'https://github.com/fastestimator/fastestimator'}
        ],
        sidebar: 'auto',
        displayAllHeaders: true
    }
}