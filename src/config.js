module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: '指南',   // 侧边栏的标题
        path: '/guide/', // 链接到该目录下的某个页面
        children: [
          '/guide/install-datapack',
          '/guide/install-shadowpack',
          '/guide/install-save'
        ]
      },
    ]
  }
};
