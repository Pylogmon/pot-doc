module.exports = {
    title: 'pot | 一个跨平台划词翻译软件',
    description: '一个跨平台划词翻译软件',
    themeConfig: {
        logo: '/icon.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/Pylogmon/pot' },
        ],
        smoothScroll: true,
        sidebar: [
            {
                title: '指南',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/guide/',
                    '/guide/install',
                    '/guide/config',
                    {
                        title: 'API服务申请',
                        path: '/guide/api/',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            '/guide/api/baidu',
                            '/guide/api/chatgpt',
                            '/guide/api/caiyun',
                        ]
                    }
                ]
            }
        ]
    }
}