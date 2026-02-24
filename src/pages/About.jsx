import { Link } from 'react-router-dom'
import profileImg from '../assets/profile.jpg'

// 타임라인 데이터
const timeline = [
  {
    year: '2026.02',
    title: '중앙정보기술인재개발원 수료',
    subtitle: '클라우드 기반 MSA 개발자 양성과정',
    description: 'Spring Cloud, Kubernetes 기반 분산 시스템 설계 및 구현 역량 강화. MSA 기반 카페 관리 시스템과 AI 가격 예측 서비스 통합 프로젝트 수행.',
    highlight: true,
    award: '최종 프로젝트 대상',
  },
  {
    year: '2025 - 2026',
    title: '동서울대학교 학사학위 전공심화',
    subtitle: '컴퓨터소프트웨어학과 (4년제 학사)',
    description: 'MSA 아키텍처 및 AI 모델링 등 고급 기술 역량 확보. 4년 전 과정 동안 최상위권 학업 성취도 유지.',
    highlight: true,
    award: '총장상 (학년대표)',
  },
  {
    year: '2024.11',
    title: '제11회 캡스톤디자인 경진대회',
    subtitle: '동서울대학교',
    description: '초기 MSA 구조 설계와 팀 협업을 통해 실무형 프로젝트 구현 역량을 검증받음.',
    highlight: false,
    award: '장려상',
  },
  {
    year: '2022 - 2025',
    title: '동서울대학교 전문학사',
    subtitle: '컴퓨터소프트웨어과 (3년제)',
    description: '백엔드 개발 및 인프라의 기초를 탄탄히 다짐. Java, Spring Boot, 데이터베이스 설계 역량 확보.',
    highlight: false,
  },
]

// 핵심 가치
const coreValues = [
  {
    title: '관찰 가능성 (Observability)',
    description: '시스템의 내부 상태를 외부에서 추론할 수 있도록 설계합니다. 로그, 메트릭, 트레이싱의 3요소를 통해 문제를 빠르게 파악합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: '장애 전파 방지',
    description: '하나의 서비스 장애가 전체 시스템을 마비시키지 않도록 설계합니다. 비동기 처리와 Circuit Breaker 패턴을 적용합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '지속적 학습',
    description: '새로운 기술을 꾸준히 학습하고 프로젝트에 적용합니다. 3+1 과정을 통해 이론과 실무의 균형을 갖추었습니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]

// 수상 경력 (별도 섹션)
const awards = [
  {
    name: '최종 프로젝트 발표회 대상',
    organization: '중앙정보기술인재개발원',
    year: '2026.02',
    description: '국비지원 교육 최종 프로젝트 발표회',
    achievement: 'MSA 기반 카페 관리 시스템과 AI 가격 예측 서비스를 통합한 프로젝트로 기술적 완성도와 실무 능력을 증명',
    featured: true,
  },
  {
    name: '학업우수상 총장상',
    organization: '동서울대학교',
    year: '2026.02',
    description: '졸업식 학년대표 수상',
    achievement: '4년 전 과정 동안 최상위권의 학업 성취도를 유지했음을 인정받음',
    featured: true,
  },
]

// 증서 & 상장 이미지
const certificates = [
  {
    category: '상장',
    items: [
      { src: '/images/about/testimonial_1.jpg', title: '최종 프로젝트 대상', org: '중앙정보기술인재개발원' },
      { src: '/images/about/testimonial_2.jpg', title: '학업우수상 총장상', org: '동서울대학교' },
      { src: '/images/about/testimonial_3.jpg', title: '캡스톤디자인 장려상', org: '동서울대학교' },
    ]
  },
  {
    category: '증서',
    items: [
      { src: '/images/about/completion_1.jpg', title: '교육수료증', org: '중앙정보기술인재개발원' },
      { src: '/images/about/completion_2.jpg', title: '학위증서 (학사)', org: '동서울대학교' },
    ]
  }
]

// 장학금 & 추가 수상
const scholarships = [
  {
    name: '성적 우수 장학금',
    organization: '동서울대학교',
    year: '2025.08',
    description: '4학년 1학기 등록금 전액 면제',
    detail: '전공 심화 과정에서의 성실함을 증명',
  },
  {
    name: '모범장학금',
    organization: '동서울대학교',
    year: '2026.06',
    description: '학업 성적 및 학교 생활 태도 인정',
    detail: '전반적인 학교 생활에서의 모범적 태도',
  },
  {
    name: '캡스톤디자인 경진대회 장려상',
    organization: '동서울대학교',
    year: '2024.11',
    description: '제11회 캡스톤디자인 경진대회',
    detail: '초기 MSA 구조 설계와 팀 협업을 통한 실무형 프로젝트 구현',
  },
]

export default function About() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={profileImg}
                    alt="프로필 사진"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold">3+1 학사</span>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-700 rounded-full mb-4">
                ABOUT ME
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                안녕하세요,<br />
                <span className="text-primary-600">신뢰할 수 있는 시스템</span>을 만드는<br />
                개발자입니다.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                3년제 전문학사 과정에서 <strong>백엔드와 인프라의 기초</strong>를 다지고,
                1년 학사 전공심화 과정을 통해 <strong>MSA 아키텍처와 AI 모델링</strong> 역량을 확보했습니다.
                <br /><br />
                <span className="text-primary-600 font-medium">
                  "시스템의 안정성을 책임지는 모니터링 기술의 핵심은 관찰 가능성(Observability)에 있다"
                </span>는 것을 프로젝트를 통해 깨달았습니다.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/projects" className="btn-primary">
                  프로젝트 보기
                </Link>
                <Link to="/contact" className="btn-secondary">
                  연락하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">Awards</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">수상 경력</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, idx) => (
              <div
                key={award.name}
                className="relative bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </div>

                {/* Award Name */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 mt-2">
                  {award.name}
                </h3>

                {/* Organization & Year */}
                <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                  <span>{award.organization}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{award.year}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4">
                  {award.description}
                </p>

                {/* Achievement */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-700">
                    {award.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 장학금 & 추가 수상 */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-sm font-medium text-slate-500 mb-6 text-center uppercase tracking-wider">장학금 & 추가 수상</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scholarships.map((item) => (
                <div key={item.name} className="bg-white border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.organization}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 증서 & 상장 갤러리 */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-sm font-medium text-slate-500 mb-8 text-center uppercase tracking-wider">증서 & 상장</h3>

            {certificates.map((group) => (
              <div key={group.category} className="mb-8">
                <h4 className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
                  {group.category}
                </h4>
                <div className={`grid gap-4 ${group.items.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {group.items.map((cert, idx) => (
                    <div key={idx} className="group">
                      <div className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-slate-300 transition-colors">
                        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                          <img
                            src={cert.src}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-medium text-slate-900 text-sm">{cert.title}</h5>
                          <p className="text-xs text-slate-500">{cert.org}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Education</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">학력 & 교육</h2>
            <p className="mt-4 text-slate-600">
              이론적 깊이와 실질적인 구현 능력을 모두 갖추기 위한 여정
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-8 w-0.5 h-full bg-slate-200"></div>
                )}

                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 ${
                    item.highlight
                      ? 'bg-primary-600 border-primary-200'
                      : 'bg-slate-400 border-slate-200'
                  }`}
                ></div>

                {/* Content */}
                <div
                  className={`ml-6 p-6 rounded-xl ${
                    item.highlight
                      ? 'bg-gradient-to-r from-primary-50 to-white border-2 border-primary-200 shadow-lg'
                      : 'bg-slate-50 border border-slate-200'
                  }`}
                >
                  {/* Year Badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                      item.highlight
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.year}
                  </span>

                  {/* Award Badge (if exists) */}
                  {item.award && (
                    <span className="inline-block ml-2 px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {item.award}
                    </span>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{item.title}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-2">{item.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Values</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">개발 철학</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              프로젝트를 통해 깨달은, 신뢰할 수 있는 시스템을 만들기 위한 핵심 가치
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aspiration */}
      <section className="py-20 bg-slate-900">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              시스템의 안정성을 책임지는 모니터링 기술의 핵심은
              <span className="text-white font-medium"> 관찰 가능성(Observability)</span>에 있다는 것을
              프로젝트를 통해 깨달았습니다.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm mb-12">
              <span className="px-4 py-2 bg-slate-800 text-slate-400 rounded-lg border border-slate-700">
                서비스 디스커버리
              </span>
              <span className="px-4 py-2 bg-slate-800 text-slate-400 rounded-lg border border-slate-700">
                분산 시스템 모니터링
              </span>
              <span className="px-4 py-2 bg-slate-800 text-slate-400 rounded-lg border border-slate-700">
                장애 전파 방지
              </span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              연락하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-container text-center pt-16">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          홈으로 돌아가기
        </Link>
      </section>
    </div>
  )
}