

const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    manifest: true,
    lib: {
      // directorio base que lee los imports
      entry: path.resolve(__dirname, 'src/js/main.js'),
      name: 'MyLib',
      // Se asigna el nombre y formato que se requiere
      fileName: (format) => `assets/scripts.min.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Se valida si el archivo se llama style.css, si es asi se mete en el directorio assets con nombre personalizado
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'assets/app.min.css';
          return assetInfo.name;
        },
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})















































// import { defineConfig } from "rollup" 

// const name = ['app.min','style.min']
 
// export default defineConfig({
//   build: {
//     manifest: true,
//     rollupOptions: {
//       output: {
//         entryFileNames: `assets/[name].js`,
//         chunkFileNames: `assets/[name].js`,
//         assetFileNames: `assets/[name].[ext]`
//       }
//       // input: '/src/js/main.js'
//     }
//   }
// })




// assetFileNames: (assetInfo) => {
//   if (assetInfo.name == 'style.css')
//     return 'customname.css';
//   return assetInfo.name;
// },