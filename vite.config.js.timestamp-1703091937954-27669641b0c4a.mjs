// vite.config.js
import { defineConfig } from "file:///C:/laragon/www/MovieWikiApp/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/laragon/www/MovieWikiApp/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///C:/laragon/www/MovieWikiApp/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.tsx",
      refresh: true
    }),
    react()
  ],
  css: {
    modules: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxNb3ZpZVdpa2lBcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXE1vdmllV2lraUFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovbGFyYWdvbi93d3cvTW92aWVXaWtpQXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBsYXJhdmVsIGZyb20gXCJsYXJhdmVsLXZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBcInJlc291cmNlcy9qcy9hcHAudHN4XCIsXG4gICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICAgcmVhY3QoKSxcbiAgICBdLFxuICAgIGNzczoge1xuICAgICAgICBtb2R1bGVzOiB0cnVlLFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlEsU0FBUyxvQkFBb0I7QUFDeFMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QsU0FBUztBQUFBLEVBQ2I7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
