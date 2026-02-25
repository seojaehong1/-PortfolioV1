// 프로젝트 데이터 - 새 프로젝트 추가 시 이 파일만 수정하면 됩니다

export const projects = [
  {
    id: 'msa',
    title: '분산 시스템 모니터링이 가능한 MSA 플랫폼',
    shortDesc: 'Eureka 기반 서비스 디스커버리와 실시간 헬스체크, Gateway를 통한 트래픽 라우팅 및 로드밸런싱을 구현한 9개 마이크로서비스 시스템.',
    thumbnail: '/images/msa-thumbnail.png', // 추후 이미지 추가 가능
    category: 'Backend / Infrastructure',
    techStack: ['Java 17', 'Spring Boot 3.1', 'Spring Cloud', 'Netflix Eureka', 'Spring Gateway', 'RabbitMQ', 'JWT', 'OAuth2', 'Kubernetes'],
    github: 'https://github.com/seojaehong1/teamprojectv1',
    demoVideo: '/images/msa/MSA_demo.mp4',
    featured: true,
    // 서비스 목록
    services: [
      { name: 'Eureka Server', port: '8761', desc: '서비스 등록 및 디스커버리, 실시간 헬스체크', category: 'Discovery' },
      { name: 'Gateway', port: '8000', desc: 'API 라우팅, 로드밸런싱, 통합 로깅', category: 'Gateway' },
      { name: 'Member Service', port: '8004', desc: 'JWT 인증, OAuth2 소셜 로그인', category: 'Auth' },
      { name: 'Product Service', port: '8001', desc: '상품/메뉴 CRUD 및 조회 최적화', category: 'Core' },
      { name: 'Order Service', port: '8002', desc: '주문 처리, 트랜잭션 관리', category: 'Core' },
      { name: 'Board Service', port: '8006', desc: '게시판, 댓글, 알림', category: 'Core' },
      { name: 'Inventory Service', port: '8008', desc: '재고 관리, 실시간 동기화', category: 'Core' },
      { name: 'Admin Service', port: '8007', desc: '관리자 대시보드, 회원/상품 관리', category: 'Admin' },
      { name: 'Frontend Service', port: '8005', desc: 'Thymeleaf SSR 웹 UI', category: 'Frontend' },
    ],
    // 핵심 기능
    keyFeatures: [
      {
        title: 'Eureka Dashboard 활용',
        subtitle: '실시간 서비스 상태 모니터링',
        color: 'emerald',
        items: [
          { text: '30초 주기 Heartbeat로 9개 서비스 생존 여부 실시간 체크', highlight: '30초 주기 Heartbeat' },
          { text: '서비스 인스턴스 UP/DOWN 상태를 Dashboard에서 즉시 확인', highlight: 'UP/DOWN 상태' },
          { text: '90초 동안 Heartbeat 없으면 자동 등록 해제 → Gateway 라우팅에서 제외', highlight: '자동 등록 해제' },
          { text: 'Self-preservation 모드로 네트워크 장애 vs 서비스 장애 구분', highlight: '네트워크 장애 vs 서비스 장애 구분' },
        ],
        quote: '개발 중 Order Service가 무한루프에 빠졌을 때, Eureka Dashboard에서 해당 인스턴스가 DOWN으로 바뀌는 것을 보고 빠르게 원인을 파악할 수 있었습니다.',
      },
      {
        title: 'Gateway 라우팅 및 로드밸런싱',
        subtitle: '단일 진입점에서 서비스 분배',
        color: 'primary',
        items: [
          { text: 'lb:// prefix로 Eureka 연동 로드밸런싱 (Round-Robin)', highlight: 'lb:// prefix' },
          { text: 'Path Predicate로 URL 패턴별 서비스 라우팅 설정', highlight: 'Path Predicate' },
          { text: '서비스 다운 시 Eureka 자동 감지 → 정상 인스턴스로만 분배', highlight: '정상 인스턴스로만 분배' },
          { text: 'CORS 설정을 Gateway에서 통합 관리 (K8s 환경 지원)', highlight: 'CORS 설정' },
        ],
        codeExample: `spring.cloud.gateway.routes[0].uri=lb://order-service
spring.cloud.gateway.routes[0].predicates[0]=Path=/api/order/**`,
      },
    ],
    // 장애 전파 방지 전략
    resilienceStrategies: [
      { title: 'RabbitMQ 비동기 처리', desc: 'Order → Inventory 간 메시지 큐 도입. 동기 호출 제거로 Inventory 장애가 주문 서비스에 영향 없음.' },
      { title: '메시지 큐 버퍼링', desc: 'RabbitMQ Durable Queue로 서비스 다운 시에도 메시지 보관. 복구 후 밀린 재고 차감 자동 처리.' },
      { title: 'try-catch Fallback', desc: '메시지 전송 실패 시 에러 로깅만 수행. 주문 자체는 정상 저장되어 고객 경험 유지.' },
    ],
    // 실제 코드 예시
    codeSnippet: `// 비동기 재고 차감 요청 전송 (RabbitMQ)
try {
    OrderStockMessage msg = OrderStockMessage.builder()
        .orderId(savedOrder.getOrderId())
        .items(order.getOrderItems().stream()
            .map(item -> OrderStockMessage.OrderItem.builder()
                .menuCode(item.getMenuCode())
                .quantity(item.getQuantity())
                .build())
            .collect(Collectors.toList()))
        .build();

    rabbitTemplate.convertAndSend(
        ORDER_EXCHANGE, ORDER_PLACED_ROUTING_KEY, msg);
} catch (Exception e) {
    // 메시지 전송 실패 시 로깅만, 주문은 유지
    System.err.println("Failed to publish: " + e.getMessage());
}`,
    // 고민했던 점
    challenges: [
      { problem: 'Order → Inventory 동기 호출 시 Inventory가 죽으면 주문이 실패한다', solution: 'RabbitMQ 비동기 전환으로 서비스 간 결합도 제거' },
      { problem: '메시지 전송 실패 시 주문까지 롤백되면 안 된다', solution: 'try-catch로 분리하여 주문 저장 보장, 재고는 나중에 보정' },
      { problem: '서비스가 죽었다 살아났을 때 밀린 작업은?', solution: 'Durable Queue로 메시지 영속화, 복구 시 자동 처리' },
      { problem: '9개 서비스 중 어떤 것이 죽었는지 어떻게 알까?', solution: 'Eureka Dashboard에서 UP/DOWN 상태 실시간 확인' },
    ],
  },
  {
    id: 'ai',
    title: 'AI 기반 PC 가격 분석 및 추천 시스템',
    shortDesc: '3개의 독립 시스템으로 구성된 AI 플랫폼. 가격 예측, 이미지 유사도 검색, 성능 기반 추천까지 End-to-End 데이터 파이프라인.',
    thumbnail: '/images/ai-thumbnail.png',
    category: 'Data / AI',
    techStack: ['Python', 'PyTorch', 'Flask', 'EfficientNet-B0', 'CLIP', 'Weaviate', 'PostgreSQL', 'Selenium', 'Vue.js'],
    github: 'https://github.com/seojaehong1/teamprojectv2',
    demoVideo: '/images/ai/AI_demo.mp4',
    featured: true,
    // 3개 시스템
    systems: [
      {
        id: 'system1',
        name: '가격 분석 시스템',
        subtitle: 'AI 적정가 예측 및 시세 분석',
        color: 'blue',
        description: '4-Model Ensemble로 PC 적정 가격을 예측하고, KNN 기반으로 시세 추세를 분석합니다.',
        images: [
          { src: '/images/ai/system_1_1.png', caption: 'PC 시장 동향 대시보드 - 300개 상품 실시간 추적' },
          { src: '/images/ai/system_1_2.png', caption: 'AI 적정가 분석 - 현재가 vs AI 예측가 비교' },
          { src: '/images/ai/system_1_3.png', caption: '시세 추세 그래프 - 실제 vs 예측 비교' },
        ],
        features: [
          { text: '4-Model Ensemble로 가격대별 전문화된 예측', highlight: '4-Model Ensemble' },
          { text: 'confidence_score로 예측 신뢰도 수치화 (0.0~1.0)', highlight: 'confidence_score' },
          { text: 'KNN 기반 유사 상품 시세 추세 분석', highlight: 'KNN 기반' },
          { text: '10일간 가격 변동률 및 일평균 변동률 제공', highlight: '가격 변동률' },
        ],
        techDetail: '저가/중저가/중고가/고가 구간별로 학습된 4개 모델의 예측을 앙상블하여 MAPE 8% 이하 달성',
      },
      {
        id: 'system2',
        name: '유사 상품 검색 시스템',
        subtitle: 'CLIP 이미지 임베딩 + 스펙 필터링',
        color: 'violet',
        description: 'OpenAI CLIP으로 이미지를 벡터화하고, Weaviate에서 코사인 유사도 기반 실시간 검색을 수행합니다.',
        images: [
          { src: '/images/ai/system_2_1.png', caption: '스펙 필터링 검색 - CPU/GPU/RAM 등 조건 설정' },
          { src: '/images/ai/system_2_2.png', caption: '이미지 유사도 검색 결과 - 96%+ 유사도 매칭' },
        ],
        features: [
          { text: 'CLIP 512차원 벡터 임베딩으로 이미지 특징 추출', highlight: 'CLIP 512차원' },
          { text: 'Weaviate 벡터 DB에서 코사인 유사도 검색', highlight: '코사인 유사도' },
          { text: '스펙 필터링과 이미지 검색 결합', highlight: '스펙 필터링' },
          { text: '실시간 유사 상품 Top 10 추천', highlight: 'Top 10 추천' },
        ],
        techDetail: 'Image → CLIP Encoder → 512D Vector → Weaviate → Cosine Similarity → Results',
      },
      {
        id: 'system3',
        name: '성능 기반 추천 시스템',
        subtitle: '용도별 최적 PC 추천',
        color: 'emerald',
        description: '사용 목적(사무, 개발, 게이밍, 디자인, AI)에 따라 CPU/GPU 벤치마크 점수 기반으로 최적의 PC를 추천합니다.',
        images: [
          { src: '/images/ai/system_3_1.png', caption: '사용 목적 선택 - 5가지 용도별 최적화' },
          { src: '/images/ai/system_3_2.png', caption: '추천 결과 - CPU/GPU 점수 기반 종합 점수' },
        ],
        features: [
          { text: '용도별 CPU/GPU 가중치 차등 적용 (게이밍: GPU 70%)', highlight: '가중치 차등 적용' },
          { text: '벤치마크 점수 기반 종합 성능 점수 산출', highlight: '벤치마크 점수' },
          { text: '가성비 분석 (성능/가격 비율)', highlight: '가성비 분석' },
          { text: '실시간 최저가 연동', highlight: '실시간 최저가' },
        ],
        techDetail: '종합 점수 = (CPU 점수 × CPU 비중) + (GPU 점수 × GPU 비중)',
      },
    ],
    // 파이프라인 단계
    pipeline: [
      { step: '01', title: '데이터 수집', tech: 'Selenium', desc: '4개 카테고리 × 300개 상품, 데이터 증강으로 3,600+ 학습 데이터 구축' },
      { step: '02', title: '데이터 저장', tech: 'PostgreSQL', desc: '정규화된 스키마로 상품, 가격 히스토리, 벤치마크 저장' },
      { step: '03', title: 'AI 추론', tech: 'PyTorch', desc: '4-Model Ensemble 가격 예측, KNN 시세 분석' },
      { step: '04', title: '벡터 검색', tech: 'Weaviate', desc: 'CLIP 이미지 임베딩, 코사인 유사도 검색' },
    ],
    // 4-Model Ensemble
    ensembleModels: [
      { name: 'base 모델', desc: '저가(50~100만) 2.5배 가중. 직접 가격, MSE 손실.' },
      { name: 'v1 모델', desc: '중저가(100~200만) 가중. 로그 가격, MSE 손실.' },
      { name: 'v2 모델', desc: '중고가(150~300만) 가중. 로그 가격, Huber 손실.' },
      { name: 'v3 모델', desc: '고가(300만+) 3배 가중. 직접 가격, Huber 손실.' },
    ],
    // 고민했던 점
    challenges: [
      { problem: '가격이 거의 안 변하는 횡보 상품의 추세 예측이 부정확하다', solution: 'is_flat_history 플래그와 confidence 레벨로 불확실성 명시' },
      { problem: 'KNN 예측이 시장 급등을 반영 못한다', solution: 'AI 블렌딩 로직으로 스펙 기반 예측과 혼합 (15~60% 가중)' },
      { problem: '예측값이 실제와 얼마나 다른지 알 수 없다', solution: 'trend_error, actual_change_from_db로 실시간 비교 제공' },
      { problem: '단일 모델이 모든 가격대를 잘 예측하지 못한다', solution: '4-Model Ensemble로 가격 구간별 전문화' },
    ],
  },
]

// 프로젝트 ID로 찾기
export const getProjectById = (id) => projects.find(p => p.id === id)

// Featured 프로젝트만 가져오기
export const getFeaturedProjects = () => projects.filter(p => p.featured)