import { Link } from 'react-router-dom'

// 연락처 정보
const contactInfo = [
  {
    name: 'Email',
    value: 'wtme3@naver.com',
    href: 'mailto:wtme3@naver.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Phone',
    value: '010-3030-7038',
    href: 'tel:01030307038',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    value: 'github.com/seojaehong1',
    href: 'https://github.com/seojaehong1',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="section-container mb-16">
        <div className="text-center">
          <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">Contact</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            연락하기
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            새로운 기회와 협업을 환영합니다.
          </p>
        </div>
      </section>

      <div className="section-container">
        <div className="max-w-md mx-auto space-y-4">
          {contactInfo.map((info) => (
            <a
              key={info.name}
              href={info.href}
              target={info.name === 'GitHub' ? '_blank' : undefined}
              rel={info.name === 'GitHub' ? 'noopener noreferrer' : undefined}
              className="group card p-5 flex items-center gap-4 hover:border-slate-300 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                {info.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500">{info.name}</p>
                <p className="text-slate-900 font-medium truncate">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Back to Home */}
      <section className="section-container text-center mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          홈으로 돌아가기
        </Link>
      </section>
    </div>
  )
}