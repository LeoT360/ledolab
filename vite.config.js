import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, loadEnv } from 'vite'
import { siteConfig } from './src/config/site.js'

// Genera sitemap.xml y robots.txt con la URL definida en .env (VITE_SITE_URL)
const seoFiles = (siteUrl) => ({
  name: 'ledolab-seo-files',
  generateBundle() {
    const paths = ['/', '/edicion', '/web', ...(siteConfig.showPortfolio ? ['/portafolio'] : [])]
    const urls = paths.map((path) => `  <url><loc>${siteUrl}${path === '/' ? '/' : path}</loc></url>`).join('\n')

    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
    this.emitFile({
      type: 'asset',
      fileName: 'robots.txt',
      source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '')

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      seoFiles(siteUrl),
    ],
  }
})
