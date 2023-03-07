module.exports = {
    title: 'pot | 一个跨平台划词翻译软件',
    description: '一个跨平台划词翻译软件',
    themeConfig: {
        logo: '/icon.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '软件下载', link: 'https://github.com/Pylogmon/pot/releases' },
            { text: 'Github', link: 'https://github.com/Pylogmon/pot' },
        ],
        smoothScroll: true,
        sidebar: [
            {
                title: '指南',
                path: '/guide/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/guide/',
                    '/guide/install',
                    '/guide/config',
                ]
            },
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
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',

            // 其他的 Vssue 配置
            owner: 'Pylogmon',
            repo: 'pot-doc',
            clientId: 'be5aa203f63bad46b22a',
            clientSecret: process.env.CLIENT_SECRET || '',
        },
    },
}