import { Link } from 'react-router-dom'

// 프로젝트 데이터 - 인프라/DevOps 강조
const projects = [
  {
    id: 'msa',
    title: 'AWS EKS 기반 MSA 인프라 구축',
    description:
      '9개 마이크로서비스를 AWS EKS에 배포하고, HPA로 자동 스케일링 구성. Prometheus/Grafana 모니터링과 k6 부하테스트로 성능 최적화.',
    tags: ['AWS EKS', 'Kubernetes', 'HPA', 'Prometheus', 'Grafana'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: '대규모 데이터 파이프라인 구축 및 운영',
    description:
      'Playwright 기반 비동기 크롤러로 3,600+ 데이터 수집. PostgreSQL 저장, AI 모델 추론까지 End-to-End 파이프라인 구축 및 모니터링.',
    tags: ['Python', 'PostgreSQL', 'Docker', 'Data Pipeline'],
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
    title: 'AWS EKS',
    desc: 'Kubernetes 클러스터 설계/운영',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Auto Scaling',
    desc: 'HPA 기반 자동 스케일링',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Monitoring',
    desc: 'Prometheus/Grafana 구성',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'CI/CD',
    desc: 'GitHub Actions + ArgoCD',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

// 기술 스택
const techStack = [
  { name: 'AWS EKS', category: 'Cloud' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Istio', category: 'Service Mesh' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'Grafana', category: 'Monitoring' },
  { name: 'ArgoCD', category: 'CI/CD' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200">
                <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                <span className="text-sm font-medium text-primary-700">DevOps Engineer</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1.5 6.5v11L12 22l10.5-4.5v-11L12 2zm0 2.31l7.36 3.15v7.08L12 17.69l-7.36-3.15V7.46L12 4.31z"/>
                  <path d="M12 6.46L6.82 8.69v4.62L12 15.54l5.18-2.23V8.69L12 6.46z"/>
                </svg>
                <span className="text-sm font-medium text-amber-700">AWS SAA Certified</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              <span className="block">AWS EKS · Kubernetes</span>
              <span className="text-primary-600">인프라 엔지니어</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              안정적이고 확장 가능한 인프라를 설계합니다.
              <br className="hidden md:block" />
              9개 MSA 서비스 배포부터 모니터링, 자동 스케일링까지.
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
              AWS EKS 기반 인프라 구축과 모니터링 시스템 운영 경험
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
                AWS 클라우드 인프라부터 Kubernetes 오케스트레이션,
                <br />
                모니터링 및 CI/CD 파이프라인까지 DevOps 기술 스택을 보유하고 있습니다.
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
                  { name: 'AWS EKS', icon: '☁️' },
                  { name: 'K8s', icon: '☸️' },
                  { name: 'Terraform', icon: '🏗️' },
                  { name: 'Istio', icon: '🔒' },
                  { name: 'Prometheus', icon: '🔥' },
                  { name: 'ArgoCD', icon: '🔄' },
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
            AWS 클라우드 인프라, Kubernetes 운영, CI/CD 파이프라인 구축에 대해
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