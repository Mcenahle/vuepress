module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '指南',   // 侧边栏的标题
        path: '/guide/', // 链接到该目录下的某个页面
        children: [
          '/guide/getting-started.md',
          '/guide/configuration.md',
          '/guide/deployment.md'
        ]
      },
      {
        title: 'API 文档',
        path: '/api/',
        children: [
          '/api/usage.md',
          '/api/functions.md'
        ]
      }
    ]
  }
};
