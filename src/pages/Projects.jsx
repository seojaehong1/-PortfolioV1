import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

// 기술 뱃지 컴포넌트
const TechBadge = ({ name }) => (
  <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-50 text-primary-700 border border-primary-200">
    {name}
  </span>
)

// 프로젝트 카드 컴포넌트
const ProjectCard = ({ project }) => (
  <Link
    to={`/projects/${project.id}`}
    className="group card overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    {/* Thumbnail Area */}
    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur text-slate-700 rounded-full shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="w-2 h-2 bg-slate-900 rounded-full block"></span>
        </div>
      )}

      {/* Icon/Visual */}
      <div className="absolute inset-0 flex items-center justify-center">
        {project.id === 'msa' ? (
          <div className="text-slate-300 group-hover:text-primary-400 transition-colors">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
        ) : (
          <div className="text-slate-300 group-hover:text-primary-400 transition-colors">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors"></div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {project.shortDesc}
      </p>

      {/* Tech Stack Preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded">
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-500 rounded">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="flex items-center text-slate-400 group-hover:text-primary-600 transition-colors">
        <span className="text-sm font-medium">자세히 보기</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </Link>
)

export default function Projects() {
  return (
    <div className="pt-20 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary-600 tracking-wider uppercase">Projects</span>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">프로젝트</h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              분산 시스템 설계부터 데이터 파이프라인 구축까지,<br />
              실무 수준의 프로젝트입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{projects.length}</div>
              <div className="text-sm text-slate-500">프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">9+</div>
              <div className="text-sm text-slate-500">마이크로서비스</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-sm text-slate-500">기술 스택</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Add More */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium">More Coming Soon</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">더 많은 프로젝트를 준비 중입니다</h3>
            <p className="text-slate-600">
              새로운 기술과 아이디어로 더 나은 프로젝트를 만들어가고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            프로젝트에 대해 더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            기술적인 내용이나 구현 방식에 대해 자세히 이야기 나누고 싶습니다.
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
    </div>
  )
}