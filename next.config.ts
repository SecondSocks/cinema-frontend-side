import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,  // Скрывает технологию Next.js
  optimizeFonts: false,  // Убирает оптимизацию шрифтов
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
  },
  async rewrites() {
      return [
        {
          source: '/api/:path*',  // Путь, который будет перенаправлен
          destination: 'http://localhost:4200/api/:path*',  // Новый путь
        },
        {
          source: '/uploads/:path*',
          destination: 'http://localhost:4200/uploads/:path*',
        }
      ]
  },
}

export default nextConfig
