import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        {/* 기존 스타일시트 유지 */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* 카카오톡 등 링크 미리보기를 위한 설정(OG 태그) 추가 */}
        <meta property="og:title" content="EUNYEON | 종합 건물 관리 및 보안 서비스" />
        <meta property="og:description" content="안전하고 체계적인 건물 관리 서비스를 제공합니다." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  )
})
