import vue from "@vitejs/plugin-vue";
import httpImport from "import-http/rollup";
import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  root: __dirname,
  plugins: [
    vue(),
    httpImport(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
