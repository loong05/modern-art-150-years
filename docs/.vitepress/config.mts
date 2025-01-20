import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/modern-art-150-years/',
  title: "《现代艺术 150 年：一个未完成的故事》提及作品图集",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],
    siteTitle: '原书目录',
    sidebar: [
      {
        items: [
          { text: '导论：你在看什么', link: '/ch00' },
          { text: '1 泉 1917', link: '/ch01' },
          { text: '2 前印象派：走向真实 1820 - 1970', link: '/ch02' },
          { text: '3 印象派：现代生活的画家 1870 - 1890', link: '/ch03' },
          { text: '4 后印象派：拓展领域 1880 - 1906', items:[
            { text: '梵高与表现主义', link: '/ch04a' },
            { text: '保罗·高更和象征主义', link: '/ch04b' },
            { text: '修拉的点彩画派', link: '/ch04c' },
          ] },
          { text: '5 塞尚：吾人之父 1839 - 1906', link: '/ch05' },
          { text: '6 原始主义 1880 - 1930 野兽派 1905 - 1910：原始的呐喊', link: '/ch06',items:[
            { text: '原始主义雕塑', link: '/ch06a' },
          ] },
          { text: '7 立体主义：另一种视角 1907 - 1914', link: '/ch07' },
          { text: '8 未来主义：快进 1909 - 1919', link: '/ch08' },
          { text: '9 康定斯基/俄耳甫斯主义/青骑士：音乐之声 1910 - 1914', link: '/ch09' },
          { text: '10 至上主义/构成主义：俄国人 1915 - 192', link: '/ch10' },
          { text: '11 新造型主义：网格 1917 - 1931', link: '/ch11' },
          { text: '12 包豪斯：校园重聚 1919 - 1933', link: '/ch12',items:[
            { text: '包豪斯', link: '/ch12a' },
          ] },
          { text: '13 达达主义：混乱的秩序 1916 - 1923', link: '/ch13' },
          { text: '14 超现实主义：以梦为生 1924 - 19453', link: '/ch14' },
          { text: '15 抽象表现主义：宏大的姿态 1943 - 1970', link: '/ch15' },
          { text: '16 波普艺术：零售疗法 1956 - 1970', link: '/ch16' },
          { text: '17 观念主义/激流派/贫穷主义/行为艺术：心灵游戏 1952 年至今', link: '/ch17',items:[
            { text: '新现实主义', link: '/ch17a' },
            { text: '贫穷艺术', link: '/ch17b' },
            { text: '激流派', link: '/ch17c' },
            { text: '观念艺术', link: '/ch17d' },
          ] },
          { text: '18 极简主义：无题 1960 - 1975', link: '/ch18' },
          { text: '19 后现代主义：假身份 1970 - 198', link: '/ch19' },
          { text: '20 今日艺术：名利场 1988 - 2008 至今', link: '/ch20' },
        ]
      }
    ],
  }
})
