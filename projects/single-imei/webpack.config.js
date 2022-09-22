const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "singleImei",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        
        name: "singleImei",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './projects/single-imei/src/app/app.component.ts',
            './Module': './projects/single-imei/src/app/block-unblock/block-unblock.module.ts'
        },        
       
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' , eager: true}, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true}, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
