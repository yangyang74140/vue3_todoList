/// <reference types="vite/client" />

// 解决找不到模块或相应的类型声明
// Cannot find module '../views/HomeView.vue' or its corresponding type declarations.
declare module "*.vue" {
  import { App, defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
