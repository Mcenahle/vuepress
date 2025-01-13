import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';

export default defineUserConfig({
  theme: defaultTheme({
    logo: '/logo.png',
    sidebar: [
      {
        title: '指南',
        path: '/guide/',
        children: [
          '/guide/getting-started.md',
          '/guide/configuration.md',
          '/guide/deployment.md',
        ]
      },
      {
        title: 'API 文档',
        path: '/api/',
        children: [
          '/api/usage.md',
          '/api/functions.md',
        ]
      }
    ],
  }),
});
