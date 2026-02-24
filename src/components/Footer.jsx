import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left */}
          <div>
            <Link to="/" className="text-lg font-bold text-slate-900">
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-slate-500">
              분산 시스템 · 데이터 파이프라인
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/about" className="text-slate-500 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-slate-500 hover:text-slate-900 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Right - Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/seojaehong1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="mailto:wtme3@naver.com"
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}