"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3989,6370],{23989:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var i=a(3414),r=a(8587);const s={id:"@jupyterlab/theme-light-extension:plugin",description:"Adds a light theme.",requires:[i.IThemeManager,r.ITranslator],activate:(e,t,a)=>{const i=a.load("jupyterlab");t.register({name:"JupyterLab Light",displayName:i.__("JupyterLab Light"),isLight:!0,themeScrollbars:!1,load:()=>t.loadCSS("@jupyterlab/theme-light-extension/index.css"),unload:()=>Promise.resolve(void 0)})},autoStart:!0}}}]);