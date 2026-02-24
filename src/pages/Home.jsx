import { Link } from 'react-router-dom'

// 프로젝트 데이터 - WatchTek 맞춤
const projects = [
  {
    id: 'msa',
    title: '분산 시스템 모니터링이 가능한 MSA 플랫폼',
    description:
      'Eureka 기반 서비스 디스커버리와 실시간 헬스체크, Gateway를 통한 트래픽 라우팅 및 로드밸런싱을 구현한 9개 마이크로서비스 시스템.',
    tags: ['Spring Cloud', 'Eureka', 'Gateway', 'RabbitMQ', 'Kubernetes'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: '실시간 데이터 수집 및 분석 파이프라인',
    description:
      'Playwright 기반 비동기 크롤링부터 PostgreSQL 저장, PyTorch 모델 추론, Weaviate 벡터 검색까지 End-to-End 데이터 파이프라인 구축.',
    tags: ['PyTorch', 'PostgreSQL', 'Weaviate', 'Playwright', 'Flask'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

// 핵심 역량
const coreCompetencies = [
  {
    title: '분산 시스템',
    desc: 'MSA 설계 및 서비스 간 통신',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: '클라우드 네이티브',
    desc: 'Docker, Kubernetes 운영',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: '데이터 파이프라인',
    desc: '수집, 저장, 분석, 시각화',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: '실시간 모니터링',
    desc: '헬스체크 및 로그 분석',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

// 기술 스택
const techStack = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Python', category: 'Data' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'PostgreSQL', category: 'Database' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-8">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span className="text-sm font-medium text-primary-700">Full-Stack Developer</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              <span className="block">분산 시스템 · 데이터 파이프라인</span>
              <span className="text-primary-600">풀스택 개발자</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              안정적이고 확장 가능한 시스템을 설계합니다.
              <br className="hidden md:block" />
              MSA부터 AI 데이터 분석까지, End-to-End 개발이 가능합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/projects" className="btn-primary flex items-center gap-2">
                프로젝트 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                연락하기
              </Link>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span key={tech.name} className="tag">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreCompetencies.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Projects</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">주요 프로젝트</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              실무 수준의 분산 시스템 설계와 데이터 파이프라인 구축 경험
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to="/projects"
                className="group card p-8 hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-100 transition-colors">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-slate-400 group-hover:text-primary-600 transition-colors">
                  <span className="text-sm font-medium">자세히 보기</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              모든 프로젝트 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Skills</span>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 mb-6">기술 스택</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                백엔드 개발부터 클라우드 인프라, 데이터 엔지니어링까지
                <br />
                End-to-End 개발에 필요한 기술 스택을 보유하고 있습니다.
              </p>
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                전체 기술 스택 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Content - Skills Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Java', icon: '☕' },
                  { name: 'Spring', icon: '🌱' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'Docker', icon: '🐳' },
                  { name: 'K8s', icon: '☸️' },
                  { name: 'PostgreSQL', icon: '🐘' },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="card-dark p-4 text-center hover:border-primary-300 transition-colors"
                  >
                    <span className="text-2xl mb-2 block">{skill.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            함께 일하고 싶으신가요?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            분산 시스템 설계, 데이터 파이프라인 구축, 클라우드 인프라 관리에 대해
            이야기 나누고 싶습니다.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            연락하기
          </Link>
        </div>
      </section>
    </>
  )
}