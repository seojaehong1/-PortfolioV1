import { Link } from 'react-router-dom'

// 스킬 카테고리 데이터
const skillCategories = [
  {
    title: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'primary',
    skills: [
      { name: 'Java 17', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Cloud', level: 80 },
      { name: 'Spring Security', level: 75 },
      { name: 'JPA/Hibernate', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'RabbitMQ', level: 70 },
    ],
  },
  {
    title: 'AI / Data',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'emerald',
    skills: [
      { name: 'PyTorch', level: 80 },
      { name: 'EfficientNet', level: 75 },
      { name: 'CLIP', level: 70 },
      { name: 'Weaviate', level: 75, highlight: true },
      { name: 'Playwright', level: 85 },
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 80 },
      { name: 'Scikit-learn', level: 70 },
    ],
  },
  {
    title: 'DevOps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'blue',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75, highlight: true },
      { name: 'Netflix Eureka', level: 80 },
      { name: 'Spring Gateway', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'Linux', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'violet',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Vue.js', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Thymeleaf', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
]

// 강조 스킬 (Kubernetes, Weaviate)
const highlightedSkills = [
  {
    name: 'Kubernetes',
    category: 'DevOps',
    description: 'MSA 프로젝트를 K8s 환경에 배포. Pod, Service, Deployment, ConfigMap 등을 활용한 컨테이너 오케스트레이션 경험.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm6.138 14.788l-1.188-.326a4.185 4.185 0 01-.406.636l.528 1.072a.252.252 0 01-.096.324l-.892.516a.252.252 0 01-.336-.072l-.672-1.008a4.2 4.2 0 01-.756.096v1.2a.252.252 0 01-.252.252h-1.032a.252.252 0 01-.252-.252v-1.2a4.185 4.185 0 01-.756-.096l-.672 1.008a.252.252 0 01-.336.072l-.892-.516a.252.252 0 01-.096-.324l.528-1.072a4.185 4.185 0 01-.406-.636l-1.188.326a.252.252 0 01-.3-.168l-.288-.996a.252.252 0 01.168-.3l1.2-.336v-.012a4.2 4.2 0 01.048-.756l-1.068-.54a.252.252 0 01-.108-.336l.504-.888a.252.252 0 01.336-.108l1.02.516c.156-.204.336-.396.528-.564l-.54-1.08a.252.252 0 01.084-.336l.888-.516a.252.252 0 01.336.084l.54 1.068c.24-.072.492-.12.744-.144V7.2a.252.252 0 01.252-.252h1.032a.252.252 0 01.252.252v1.152c.252.024.504.072.744.144l.54-1.068a.252.252 0 01.336-.084l.888.516a.252.252 0 01.084.336l-.54 1.08c.192.168.372.36.528.564l1.02-.516a.252.252 0 01.336.108l.504.888a.252.252 0 01-.108.336l-1.068.54c.024.252.048.504.048.756v.012l1.2.336a.252.252 0 01.168.3l-.288.996a.252.252 0 01-.3.168zM12 10.2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z" />
      </svg>
    ),
  },
  {
    name: 'Weaviate',
    category: 'AI / Data',
    description: 'CLIP 모델로 이미지를 벡터화하고, Weaviate에서 코사인 유사도 기반 실시간 검색 구현. 벡터 DB 설계 및 인덱싱 경험.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
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
            백엔드부터 AI/ML, DevOps까지 End-to-End 개발에 필요한 기술 스택을 보유하고 있습니다.
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
              <div className="text-3xl font-bold text-primary-600">9+</div>
              <div className="text-sm text-slate-500 mt-1">Backend Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">8+</div>
              <div className="text-sm text-slate-500 mt-1">AI/Data Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">7+</div>
              <div className="text-sm text-slate-500 mt-1">DevOps Skills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600">6+</div>
              <div className="text-sm text-slate-500 mt-1">Frontend Skills</div>
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