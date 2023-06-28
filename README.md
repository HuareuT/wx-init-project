<!--
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-20 15:33:05
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-26 13:54:37
 * @FilePath: /yjgzl-app/README.md
 * @Description:
-->

### 介绍

基于 uniapp + vue3 + uni-ui 搭建的微信小程序快速开发模版。

### 目录结构

```
|-- .gitignore
|-- App.vue
|-- README.md
|-- index.html
|-- main.js
|-- manifest.json
|-- pages.json
|-- uni.scss                  uniapp内置的常用样式变量
|-- common                    存放公共资源目录，如css，less/scss
|   |-- css
|       |-- index.scss
|-- components                符合vue组件规范的uni-app组件目录
|-- api                       统一管理Api的目录
|-- meet-ui                   逐步完善此UI库-TODO
|   |-- components
|   |-- libs
|-- pages                     业务页面文件存放的目录
|   |-- index
|       |-- index.vue
|-- static                    存放静态资源目录
|-- unpackage
|-- utils                     存放公共类目录
```

### 文件与编码规范

#### Api 目录

- 按模块命名，如 common 模块，则需要创建 common/index.js，内部导出函数名则为 use[模块名]Api，如 useCommonApi；
- 方法命名则以简单易读为主，如新增操作-add，修改操作-update；

#### components 目录

- 命名采用 uniapp 推荐的规范，目录名与文件名一致；
- 统一采用短横线作为连接，如：my-card；

#### pages 目录

- 命名采用 uniapp 推荐的规范，目录名与文件名一致；
- 页面逻辑拆分，采用组件化开发方式，避免单个页面出现大量代码；
- 局部组件在当前页面文件夹新建 component，注意没有 s；
- 页面最外层 view 必须写一个名为 pages 的 class，如：`<view class="pages"></view>`
- 局部组件命名也采用短横线命名法；
- 必须使用 script setup 语法糖

#### stores 目录

- 根据模块命名，如：用户信息，则新建 user 文件;
- 用了 pinia 持久化<a href="https://ext.dcloud.net.cn/plugin?id=8081">pinia-plugin-unistorage</a>,如需使用则添加此配置，`unistorage: true `;
- 导出命名以 use[模块名]Store 的方式，如：useUserStore，并且以类 setup()方式:
- ```js
  export const useUserStore = defineStore("user", () => {
    const token = ref("");
    const userInfo = ref({});
    const setUserInfo = () => {};
    return { userInfo, setUserInfo };
  });
  ```

#### 请求库

- 使用<a href="https://ext.dcloud.net.cn/plugin?id=392">luch-request</a>进行接口请求的统一管理
-

### 快速开始
