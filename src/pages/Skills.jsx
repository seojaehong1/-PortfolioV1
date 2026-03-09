import { Link } from 'react-router-dom'

// 스킬 카테고리 데이터
const skillCategories = [
  {
    title: 'Infra / DevOps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: 'primary',
    skills: [
      { name: 'AWS EKS', level: 85, highlight: true },
      { name: 'Kubernetes', level: 85, highlight: true },
      { name: 'Docker', level: 85 },
      { name: 'AWS (EC2, ALB, ECR)', level: 80 },
      { name: 'Helm', level: 75 },
      { name: 'Linux', level: 80 },
    ],
  },
  {
    title: 'CI/CD & Monitoring',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'emerald',
    skills: [
      { name: 'Prometheus', level: 80, highlight: true },
      { name: 'Grafana', level: 80, highlight: true },
      { name: 'GitHub Actions', level: 80 },
      { name: 'ArgoCD', level: 75 },
      { name: 'k6 (부하테스트)', level: 80 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'blue',
    skills: [
      { name: 'Java 17', level: 85 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Cloud', level: 80 },
      { name: 'Spring Data JPA', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'RabbitMQ', level: 75 },
    ],
  },
  {
    title: 'Database',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: 'violet',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
]

// 강조 스킬 (AWS EKS, Prometheus/Grafana)
const highlightedSkills = [
  {
    name: 'AWS EKS + Kubernetes',
    category: 'Infra / DevOps',
    description: '9개 MSA 서비스를 AWS EKS에 배포. HPA(CPU 70%, 메모리 80%)로 자동 스케일링 구성, ALB와 ECR을 활용한 서비스 라우팅 및 이미지 관리.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm6.138 14.788l-1.188-.326a4.185 4.185 0 01-.406.636l.528 1.072a.252.252 0 01-.096.324l-.892.516a.252.252 0 01-.336-.072l-.672-1.008a4.2 4.2 0 01-.756.096v1.2a.252.252 0 01-.252.252h-1.032a.252.252 0 01-.252-.252v-1.2a4.185 4.185 0 01-.756-.096l-.672 1.008a.252.252 0 01-.336.072l-.892-.516a.252.252 0 01-.096-.324l.528-1.072a4.185 4.185 0 01-.406-.636l-1.188.326a.252.252 0 01-.3-.168l-.288-.996a.252.252 0 01.168-.3l1.2-.336v-.012a4.2 4.2 0 01.048-.756l-1.068-.54a.252.252 0 01-.108-.336l.504-.888a.252.252 0 01.336-.108l1.02.516c.156-.204.336-.396.528-.564l-.54-1.08a.252.252 0 01.084-.336l.888-.516a.252.252 0 01.336.084l.54 1.068c.24-.072.492-.12.744-.144V7.2a.252.252 0 01.252-.252h1.032a.252.252 0 01.252.252v1.152c.252.024.504.072.744.144l.54-1.068a.252.252 0 01.336-.084l.888.516a.252.252 0 01.084.336l-.54 1.08c.192.168.372.36.528.564l1.02-.516a.252.252 0 01.336.108l.504.888a.252.252 0 01-.108.336l-1.068.54c.024.252.048.504.048.756v.012l1.2.336a.252.252 0 01.168.3l-.288.996a.252.252 0 01-.3.168zM12 10.2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z" />
      </svg>
    ),
  },
  {
    name: 'Prometheus + Grafana',
    category: 'Monitoring',
    description: 'Prometheus로 메트릭 수집, Grafana 대시보드 구성. k6 부하테스트(100/500/1000 VU)로 HPA 스케일링 지연 구간 발견 및 임계값 최적화.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

// 색상 맵핑
const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-600',
    bar: 'bg-primary-500',
    highlight: 'bg-primary-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    bar: 'bg-emerald-500',
    highlight: 'bg-emerald-100',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    bar: 'bg-blue-500',
    highlight: 'bg-blue-100',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
    bar: 'bg-violet-500',
    highlight: 'bg-violet-100',
  },
}

export default function Skills() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="section-container mb-16">
        <div className="text-center">
          <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Skills</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900">
            기술 스택
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            AWS 클라우드 인프라부터 Kubernetes, CI/CD, 모니터링까지 DevOps 기술 스택을 보유하고 있습니다.
          </p>
        </div>
      </section>

      {/* Highlighted Skills */}
      <section className="section-container mb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          핵심 역량
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {highlightedSkills.map((skill) => (
            <div
              key={skill.name}
              className="card p-6 border-2 border-primary-200 bg-gradient-to-br from-primary-50/50 to-white"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary-100 text-primary-700 rounded-full border border-primary-200">
                      Core
                    </span>
                  </div>
                  <span className="text-sm text-slate-500">{skill.category}</span>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Categories */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const colors = colorClasses[category.color]
            return (
              <div key={category.title} className="card p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${skill.highlight ? 'text-primary-700' : 'text-slate-700'}`}>
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">{skill.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            skill.highlight ? 'bg-primary-500' : colors.bar
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tech Overview */}
      <section className="section-container mt-16">
        <div className="card p-8 bg-slate-50">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">기술 요약</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">6+</div>
              <div className="text-sm text-slate-500 mt-1">Infra/DevOps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">6+</div>
              <div className="text-sm text-slate-500 mt-1">CI/CD & Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-slate-500 mt-1">Backend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">2+</div>
              <div className="text-sm text-slate-500 mt-1">Database</div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-container text-center mt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors"
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