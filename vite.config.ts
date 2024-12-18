// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { resolve } from "path";
// import dts from "vite-plugin-dts";
// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     lib: {
//       entry: resolve(__dirname, "packages/react/src/index.ts"),
//       name: "TimepickerKitReact",
//       formats: ["es", "umd"],
//       fileName: (format) => `timepicker-kit-react.${format}.js`,
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
//   css: {
//     postcss: {
//       plugins: [tailwindcss, autoprefixer],
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { resolve, dirname } from "path";
// import { fileURLToPath } from "url";
// import dts from "vite-plugin-dts";
// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     lib: {
//       entry: resolve(__dirname, "packages/react/src/index.ts"),
//       name: "TimepickerKitReact",
//       formats: ["es", "umd"],
//       fileName: (format) => `timepicker-kit-react.${format}.js`,
//     },
//     rollupOptions: {
//       external: ["react", "react-dom"],
//       output: {
//         globals: {
//           react: "React",
//           "react-dom": "ReactDOM",
//         },
//       },
//     },
//   },
//   css: {
//     postcss: {
//       plugins: [tailwindcss, autoprefixer],
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/react/src/index.ts"),
      name: "TimepickerKitReact",
      formats: ["es", "umd"],
      fileName: (format) => `timepicker-kit-react.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
