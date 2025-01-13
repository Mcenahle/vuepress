export default {
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Foo',
        prefix: '/foo/',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          'bar.md', // 解析为 `/foo/bar.md`
          '/ray.md', // 解析为 `/ray.md`
        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
}
