import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // 웹에서 요청을 보낼 때 보안상 필요한 설정 (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type' } })
  }

  try {
    // 폼에서 입력한 정보 가져오기
    const { name, phone, service, message } = await req.json()

    // Resend를 통해 관리자 이메일로 알림 보내기
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Eunyeon Website <onboarding@resend.dev>', // Resend 기본 발신자
        to: ['kgh7274@gmail.com'], // 🚨 여기에 알림을 받을 본인의 진짜 이메일 주소를 적으세요!
        subject: `[새로운 문의 접수] ${name} 님 (${service})`,
        html: `
          <h2>새로운 홈페이지 문의가 접수되었습니다.</h2>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>연락처:</strong> ${phone}</p>
          <p><strong>서비스:</strong> ${service}</p>
          <p><strong>문의내용:</strong><br/>${message}</p>
        `,
      })
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      status: 400,
    })
  }
})