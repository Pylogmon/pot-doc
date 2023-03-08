import { defaultTheme } from 'vuepress'
import { commentPlugin } from "vuepress-plugin-comment2";
import { searchPlugin } from '@vuepress/plugin-search'

export default {
    title: 'pot | 一个跨平台划词翻译软件',
    description: '一个跨平台划词翻译软件',
    theme: defaultTheme({
        // 默认主题配置
        logo: '/icon.png',
        navbar: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '软件下载', link: 'https://github.com/Pylogmon/pot/releases' },
            { text: 'Github', link: 'https://github.com/Pylogmon/pot' },
        ],
        smoothScroll: true,
        sidebar: [
            {
                text: '指南',
                children: [
                    '/guide/',
                    '/guide/install',
                    '/guide/config',
                    {
                        text: 'API服务申请',
                        link: '/guide/api/',
                        children: [
                            '/guide/api/baidu',
                            '/guide/api/chatgpt',
                            '/guide/api/caiyun',
                            '/guide/api/tencent'
                        ]
                    }
                ]
            },

        ]
    }),
    plugins: [
        commentPlugin({
            // 插件选项
            provider: "Giscus", //评论服务提供者。
            comment: true, //启用评论功能
            repo: "Pylogmon/pot", //远程仓库
            repoId: "R_kgDOJCp3Ww", //对应自己的仓库Id
            category: "Announcements",
            categoryId: "DIC_kwDOJCp3W84CUrQM", //对应自己的分类Id
            darkTheme: "dark",
            lightTheme: "light"
        }),
        searchPlugin({
            // 配置项
        }),
    ],
}