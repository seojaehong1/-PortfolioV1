import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'

// 기술 뱃지 컴포넌트
const TechBadge = ({ name }) => (
  <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-50 text-primary-700 border border-primary-200">
    {name}
  </span>
)

// 데모 영상 컴포넌트
const DemoVideo = ({ src, title }) => (
  <div className="card p-6 mb-10">
    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      데모 영상
    </h3>
    <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video">
      <video
        src={src}
        controls
        className="w-full h-full object-contain"
        poster=""
      >
        브라우저가 비디오를 지원하지 않습니다.
      </video>
    </div>
    <p className="mt-3 text-sm text-slate-500 text-center">{title}</p>
  </div>
)

// GitHub 버튼
const GitHubButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-lg text-white text-sm font-medium transition-colors"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
    GitHub
  </a>
)

// MSA 프로젝트 상세 컴포넌트
const MSAProjectDetail = ({ project }) => (
  <>
    {/* Demo Video */}
    {project.demoVideo && (
      <DemoVideo src={project.demoVideo} title="MSA 플랫폼 시연 영상 - 서비스 간 통신 및 장애 대응" />
    )}

    {/* Architecture Flow */}
    <div className="card p-8 mb-10">
      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
        서비스 통신 아키텍처
      </h3>

      {/* Flow Diagram */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="px-4 py-3 bg-white border border-slate-200 rounded-lg text-center">
            <span className="text-sm font-medium text-slate-700">Client</span>
          </div>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="px-4 py-3 bg-primary-600 rounded-lg text-center">
            <span className="text-sm font-medium text-white">Gateway</span>
            <span className="block text-xs text-primary-200">:8000</span>
          </div>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="px-4 py-3 bg-emerald-600 rounded-lg text-center">
            <span className="text-sm font-medium text-white">Eureka</span>
            <span className="block text-xs text-emerald-200">:8761</span>
          </div>
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="px-4 py-3 bg-slate-700 rounded-lg text-center">
            <span className="text-sm font-medium text-white">Services</span>
            <span className="block text-xs text-slate-400">x7</span>
          </div>
        </div>
      </div>

      {/* RabbitMQ */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">RabbitMQ 비동기 메시징</h4>
            <p className="text-sm text-slate-600">
              주문→재고 동기화, 알림 발송 등 서비스 간 비동기 통신. 메시지 큐로 결합도를 낮추고 장애 전파 방지.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Key Features */}
    <div className="card p-8 mb-10 border-2 border-primary-200 bg-gradient-to-br from-primary-50/30 to-white">
      <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        서비스 모니터링 및 장애 대응
      </h3>
      <p className="text-sm text-slate-500 mb-8">
        "9개 서비스가 분산되어 있을 때, 장애를 어떻게 빠르게 감지하고 전파를 막을 것인가?"에 대한 고민
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {project.keyFeatures.map((feature, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-${feature.color}-100 flex items-center justify-center`}>
                <svg className={`w-5 h-5 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                <span className={`text-xs text-${feature.color}-600 font-medium`}>{feature.subtitle}</span>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">—</span>
                  <span dangerouslySetInnerHTML={{
                    __html: item.text.replace(item.highlight, `<strong class="text-slate-700">${item.highlight}</strong>`)
                  }} />
                </li>
              ))}
            </ul>
            {feature.quote && (
              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500 italic">"{feature.quote}"</p>
              </div>
            )}
            {feature.codeExample && (
              <div className="mt-4 p-3 bg-slate-50 rounded-lg font-mono text-xs text-slate-600">
                <pre>{feature.codeExample}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Resilience Strategies */}
      <div className="mt-6 bg-rose-50 border border-rose-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">장애 전파 방지 전략</h4>
            <span className="text-xs text-rose-600 font-medium">"한 서비스의 장애가 전체 시스템을 마비시키면 안 된다"</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.resilienceStrategies.map((strategy, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-rose-100">
              <h5 className="font-medium text-slate-900 mb-2 text-sm">{strategy.title}</h5>
              <p className="text-xs text-slate-600">{strategy.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Code Snippet */}
      <div className="mt-6 bg-slate-800 rounded-xl p-6">
        <h4 className="font-semibold text-white mb-4 text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          실제 구현 코드 (OrderService.java)
        </h4>
        <pre className="text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">{project.codeSnippet}</pre>
      </div>

      {/* Challenges */}
      <div className="mt-6 p-4 bg-slate-100 rounded-xl border-l-4 border-primary-500">
        <h4 className="font-semibold text-slate-900 mb-2 text-sm">개발하며 고민했던 점</h4>
        <ul className="text-sm text-slate-600 space-y-2">
          {project.challenges.map((c, idx) => (
            <li key={idx}>• "{c.problem}" → <strong>{c.solution}</strong></li>
          ))}
        </ul>
      </div>
    </div>

    {/* Services Grid */}
    <div className="mb-10">
      <h3 className="text-lg font-bold text-slate-900 mb-6">9개 서비스 구성</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.services.map((service) => (
          <div key={service.name} className="card p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-slate-900">{service.name}</h4>
              <span className="text-xs text-slate-500">:{service.port}</span>
            </div>
            <p className="text-sm text-slate-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </>
)

// 시스템 색상 맵
const systemColors = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', icon: 'bg-blue-500' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-500' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-500' },
}

// AI 프로젝트 상세 컴포넌트
const AIProjectDetail = ({ project }) => (
  <>
    {/* Demo Video */}
    {project.demoVideo && (
      <DemoVideo src={project.demoVideo} title="AI 가격 분석 시스템 시연 영상 - 전체 기능 데모" />
    )}

    {/* Pipeline Overview */}
    <div className="card p-8 mb-10">
      <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        데이터 파이프라인
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {project.pipeline.map((item) => (
          <div key={item.step} className="relative">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <span className="text-xs font-semibold text-primary-600 uppercase">{item.tech}</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* 3 Systems */}
    <div className="mb-10">
      <h3 className="text-xl font-bold text-slate-900 mb-2">3개 핵심 시스템</h3>
      <p className="text-slate-500 mb-8">각 시스템은 독립적으로 동작하며, 공통 데이터 파이프라인을 공유합니다.</p>

      <div className="space-y-8">
        {project.systems.map((system, idx) => {
          const colors = systemColors[system.color] || systemColors.blue
          return (
            <div key={system.id} className={`card p-8 ${colors.border} border-2`}>
              {/* System Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center text-white font-bold text-lg`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{system.name}</h4>
                    <span className={`text-sm ${colors.badge} px-2 py-0.5 rounded-full`}>{system.subtitle}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{system.description}</p>

              {/* Screenshots Gallery */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-slate-700 mb-4">화면 스크린샷</h5>
                <div className={`grid gap-4 ${system.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {system.images.map((img, imgIdx) => (
                    <div key={imgIdx} className="group">
                      <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                        <img
                          src={img.src}
                          alt={img.caption}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-500 text-center">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className={`${colors.bg} rounded-xl p-6`}>
                <h5 className="text-sm font-semibold text-slate-700 mb-4">주요 기능</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {system.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-slate-400 mt-0.5">—</span>
                      <span dangerouslySetInnerHTML={{
                        __html: feature.text.replace(feature.highlight, `<strong class="text-slate-700">${feature.highlight}</strong>`)
                      }} />
                    </li>
                  ))}
                </ul>
                {system.techDetail && (
                  <div className="mt-4 p-3 bg-white/70 rounded-lg">
                    <code className="text-xs text-slate-600">{system.techDetail}</code>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>

    {/* 4-Model Ensemble */}
    <div className="card p-8 mb-10 bg-gradient-to-br from-amber-50/50 to-white border-2 border-amber-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">4-Model Ensemble 전략</h4>
          <span className="text-xs text-amber-600 font-medium">"가격대별로 다른 모델이 강점을 가진다"</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {project.ensembleModels.map((model, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 border border-amber-100">
            <h5 className="font-medium text-slate-900 mb-2 text-sm">{model.name}</h5>
            <p className="text-xs text-slate-600">{model.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Challenges */}
    <div className="card p-8 mb-10">
      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        개발하며 고민했던 점
      </h4>
      <div className="space-y-3">
        {project.challenges.map((c, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
            <span className="text-rose-500 font-bold">Q.</span>
            <div>
              <p className="text-sm text-slate-700 mb-1">"{c.problem}"</p>
              <p className="text-sm text-slate-600">→ <strong className="text-emerald-600">{c.solution}</strong></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

  // 프로젝트가 없으면 목록 페이지로 리다이렉트
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="pt-20 pb-20">
      {/* Page Header */}
      <section className="bg-slate-50 py-16">
        <div className="section-container">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              모든 프로젝트
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {project.title}
              </h1>
              <p className="text-slate-600 max-w-2xl leading-relaxed">
                {project.shortDesc}
              </p>
            </div>
            <GitHubButton href={project.github} />
          </div>

          {/* Tech Stack */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="section-container">
          {project.id === 'msa' ? (
            <MSAProjectDetail project={project} />
          ) : (
            <AIProjectDetail project={project} />
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="section-container">
        <div className="flex justify-between items-center py-8 border-t border-slate-200">
          <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            모든 프로젝트
          </Link>
          <Link to="/contact" className="btn-primary">
            프로젝트 문의하기
          </Link>
        </div>
      </section>
    </div>
  )
}
