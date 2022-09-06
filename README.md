
<br />
<div align="center">
<img src="https://i.niupic.com/images/2022/09/06/a54h.png" alt="Logo" width="80" height="80">

<h3 align="center">ImgUp 图片上传平台</h3>

  <p align="center">
    <br />
    <a href="https://xinjn.github.io/imgup/index.html">View Demo</a>
    ·
    <a href="https://github.com/Xinjn/imgup/issues">Report Bug</a>
    ·
    <a href="https://github.com/Xinjn/imgup/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 项目介绍

图片上传平台是⽤于快速⽣成在线图⽚链接的图床⼯具，简单⾼效。⽤⼾可以定制图⽚⼤⼩、浏览已上传的图⽚。开发了首页、鉴权、历史、用户、关于等6个页面，实现了登录注册、图⽚上传、图⽚定制、发布历史展⽰等功能。

### Built With

* [![React][React-url]][React-url]
* [![Webpack][Webpack]][Webpack]
* [![Ant design][Ant design]][Ant design]
* [![Github Actions][GithubAction]][GithubAction-url]

### 业务逻辑

* 项目使用 React-Create-App 基础模板和 Antd UI 组件库开发的图片上传平台，使用 Styled-Components 做CSS预处理。
* 通过 React-Router 实现路由跳转，通过 i18next 开发项目国际化功能。
* 基于 Mobx 实现状态管理，使用 LeanCloud 进行数据库储存。
* 使用 Webpack 进行项目打包编译。
* 负责页面中原型和UI制作。

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Xinjn/mall-platform.git
   ```
2. Install dependencies
   ```sh
   yarn add
   ```
3. Start development server
    ```sh
    yarn start
    ```
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[Ant design]: https://img.shields.io/badge/ant%20design-35495E?style=for-the-badge&logo=ant%20design
[React-url]: https://img.shields.io/badge/React-35495E?style=for-the-badge&logo=react
[Webpack]: https://img.shields.io/badge/webpack-35495E?style=for-the-badge&logo=webpack
[contributors-shield]: https://img.shields.io/github/contributors/youth-camp-root/web-monitor-dashboard.svg?style=for-the-badge
[contributors-url]: https://github.com/youth-camp-root/web-monitor-dashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/youth-camp-root/web-monitor-dashboard.svg?style=for-the-badge
[forks-url]: https://github.com/youth-camp-root/web-monitor-dashboard/network/members
[stars-shield]: https://img.shields.io/github/stars/youth-camp-root/web-monitor-dashboard.svg?style=for-the-badge
[stars-url]: https://github.com/youth-camp-root/web-monitor-dashboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/youth-camp-root/web-monitor-dashboard.svg?style=for-the-badge
[issues-url]: https://github.com/youth-camp-root/web-monitor-dashboard/issues
[license-shield]: https://img.shields.io/github/license/youth-camp-root/web-monitor-dashboard?style=for-the-badge
[license-url]: https://github.com/youth-camp-root/web-monitor-dashboard/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Vite]: https://img.shields.io/badge/Vite-35495E?style=for-the-badge&logo=Vite
[vite-url]: https://vitejs.dev/
[GithubAction]: https://img.shields.io/badge/Github%20Action-35495E?style=for-the-badge&logo=GitHub+Actions
[GithubAction-url]: https://githubaction.com
[ArcoDesign]: https://img.shields.io/badge/Arco.Design-35495E?style=for-the-badge&logo=data:image/png;base64,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
[ArcoDesign-url]: https://arco-design.com/