// 프로젝트 데이터 - 새 프로젝트 추가 시 이 파일만 수정하면 됩니다

export const projects = [
  {
    id: 'msa',
    title: 'AWS EKS 기반 MSA 인프라 구축 및 운영',
    shortDesc: '9개 마이크로서비스를 AWS EKS에 배포하고, HPA 자동 스케일링과 Prometheus/Grafana 모니터링 구성으로 안정적인 인프라 운영.',
    thumbnail: '/images/msa-thumbnail.png',
    category: 'Infrastructure / DevOps',
    techStack: ['AWS EKS', 'Kubernetes', 'HPA', 'ALB', 'ECR', 'Prometheus', 'Grafana', 'Helm', 'Docker', 'GitHub Actions'],
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
        title: 'AWS EKS 클러스터 구성',
        subtitle: '9개 MSA 서비스 Kubernetes 배포',
        color: 'primary',
        items: [
          { text: '9개 마이크로서비스(Eureka, Gateway, Member, Product, Order, Inventory, Board, Admin, Frontend) EKS 배포', highlight: '9개 마이크로서비스' },
          { text: 'ECR(Elastic Container Registry)로 컨테이너 이미지 관리', highlight: 'ECR' },
          { text: 'ALB(Application Load Balancer) 설정으로 서비스 라우팅', highlight: 'ALB' },
          { text: 'k8s 디렉토리 구조(base, hpa, services, mysql) 설계로 배포 설정 체계화', highlight: 'k8s 디렉토리 구조' },
        ],
        quote: '팀원 3명이 백엔드 개발에 집중할 수 있도록 인프라 환경 구축을 전담했습니다.',
      },
      {
        title: 'HPA 자동 스케일링',
        subtitle: '트래픽 변동 대응 Pod 자동 확장',
        color: 'emerald',
        items: [
          { text: 'CPU 70%, 메모리 80% 임계값 설정으로 자동 스케일링 트리거', highlight: 'CPU 70%, 메모리 80%' },
          { text: '최소 2개 → 최대 10개 Pod 자동 확장/축소', highlight: '최소 2개 → 최대 10개' },
          { text: 'Scale-up 즉시 실행, Scale-down 5분 안정화 기간 후 실행', highlight: '5분 안정화 기간' },
          { text: '트래픽 변동에 안정적으로 대응하는 인프라 구성', highlight: '안정적 대응' },
        ],
        codeExample: `# HPA 설정 예시
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        averageUtilization: 70`,
      },
      {
        title: 'Prometheus/Grafana 모니터링',
        subtitle: '실시간 메트릭 수집 및 시각화',
        color: 'blue',
        items: [
          { text: 'Prometheus로 CPU, 메모리, 네트워크 메트릭 수집', highlight: 'Prometheus' },
          { text: 'Grafana 대시보드로 주요 서비스 상태 실시간 시각화', highlight: 'Grafana 대시보드' },
          { text: 'Pod 리소스 사용량 및 HPA 스케일링 이벤트 모니터링', highlight: 'HPA 스케일링 이벤트' },
          { text: '장애 발생 시 빠른 원인 파악 가능', highlight: '빠른 원인 파악' },
        ],
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
    // Terraform IaC
    terraformIaC: {
      title: 'Terraform으로 EKS 인프라 코드화',
      description: 'eksctl로 생성한 인프라를 Terraform으로 전환하여 인프라 변경 이력 추적 및 재현 가능한 환경 구축',
      resources: 22,
      files: ['vpc.tf', 'eks.tf', 'variables.tf', 'outputs.tf'],
      benefits: [
        { before: 'VPC 생성: 자동(불투명)', after: '코드에 명시(투명)' },
        { before: '변경 추적: 불가', after: 'Git으로 이력 관리' },
        { before: '상태 관리: 없음', after: 'tfstate로 변경분만 적용' },
      ],
      clusterConfig: {
        k8sVersion: '1.32',
        nodeType: 't3.large × 3',
        vpc: '192.168.0.0/16 (Public/Private × 2 AZ)',
        natGateway: 'Single (비용 절약)',
        addons: ['EBS CSI Driver', 'OIDC 연동'],
      },
    },
    // Istio 서비스 메시
    istioServiceMesh: {
      title: 'Istio 서비스 메시 구현',
      description: '서비스 간 통신 보안 강화 및 트래픽 관리',
      features: [
        { name: 'Sidecar 주입', desc: 'namespace 라벨로 자동 주입 (istio-injection=enabled), 전체 14 Pod에 Envoy proxy 주입' },
        { name: 'mTLS STRICT', desc: '서비스 간 모든 통신 강제 암호화, Istio가 인증서 자동 발급/갱신' },
        { name: 'Kiali 트래픽 그래프', desc: '서비스 간 트래픽 흐름 시각화, 100% Success Rate 달성' },
      ],
    },
    // EFK 로깅
    efkLogging: {
      title: 'EFK 스택 로그 파이프라인',
      description: 'Elasticsearch + Fluentd + Kibana로 중앙 집중식 로그 관리',
      stack: {
        elasticsearch: '7.17.3',
        fluentd: 'DaemonSet 기반 노드별 로그 수집',
        kibana: '로그 검색 및 시각화',
      },
      metrics: {
        totalHits: 1190,
        appFilteredHits: 761,
        indexPattern: 'tori-app',
      },
    },
    // Chaos Mesh 장애 시뮬레이션
    chaosMesh: {
      title: 'Chaos Mesh 장애 시뮬레이션',
      description: 'Kubernetes 자가 치유 능력 검증을 위한 카오스 엔지니어링',
      experiments: [
        { name: 'Pod Kill', result: '63초 만에 자동 복구', validation: 'K8s 자가 치유 능력 검증' },
      ],
      dashboard: 'Chaos Dashboard에서 실험 관리',
    },
    // 7단계 보안 설계
    securityDesign: {
      title: '7단계 다계층 보안 설계',
      description: '외부에서 내부로 갈수록 세밀한 접근 제어',
      layers: [
        { name: 'Shield Standard', desc: '네트워크 DDoS 자동 방어' },
        { name: 'WAF', desc: 'SQL Injection, XSS, Rate Limit 차단' },
        { name: 'ACM + ALB', desc: 'HTTPS(TLS) 암호화' },
        { name: 'NACL', desc: '서브넷 레벨 방화벽' },
        { name: 'Security Group', desc: '인스턴스 레벨 방화벽 (SG ID 참조)' },
        { name: 'Network Policy', desc: 'Pod 레벨 접근 제어 (최소 권한)' },
        { name: 'mTLS', desc: '서비스 간 양방향 인증 + 암호화' },
      ],
      securityGroups: [
        { name: 'ALB SG', rule: '0.0.0.0/0 → 80, 443 허용' },
        { name: '노드 SG', rule: 'ALB SG에서만 인바운드 허용' },
        { name: 'RDS SG', rule: '노드 SG에서 3306만 허용' },
      ],
    },
    // 성능 튜닝 ADR
    performanceTuning: {
      title: 'k6 부하테스트 & 성능 튜닝',
      loadTestResults: [
        { vu: 100, avgResponse: '1.0s', errorRate: '0%' },
        { vu: 500, avgResponse: '4.83s', errorRate: '0%' },
        { vu: 1000, avgResponse: '9.74s', errorRate: '0%' },
      ],
      adr: [
        {
          id: 'ADR-004',
          title: '커넥션 풀 튜닝',
          problem: 'HikariCP 기본값 10개로 동시 요청 처리 한계',
          solution: 'maximum-pool-size 50으로 확대',
          result: '응답시간 44% 개선 (4.83s → 2.71s)',
          tradeoff: '에러율 0% → 7.74% (MySQL max_connections 한계)',
        },
        {
          id: 'ADR-005',
          title: '타임아웃 설정',
          problem: '타임아웃 없이 요청 무한 대기 가능',
          solution: 'Gateway 레벨 response-timeout 5000ms 설정',
          result: '느린 요청 조기 차단 → 시스템 안정성 향상',
        },
      ],
      improvements: [
        'MySQL max_connections 조정 (DB 서버 한계 상향)',
        'Read Replica 도입 (읽기/쓰기 분리)',
        'Redis 캐싱 도입 (DB 부하 감소)',
        'RDS Proxy 도입 (커넥션 통합 관리)',
      ],
    },
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
  {
    id: 'fridge',
    title: '냉장고를 부탁해',
    shortDesc: '가족 단위 가정을 위한 식료품 관리 어플리케이션. Django REST API 설계, AWS 배포, Nginx 리버스 프록시 구성.',
    thumbnail: '/images/fridge-thumbnail.png',
    category: 'Backend / Mobile',
    techStack: ['Django', 'Python', 'Android Studio', 'Nginx', 'AWS', 'PostgreSQL'],
    github: 'https://github.com/seojaehong1/teamprojectv3',
    featured: false,
    // 주요 기능
    keyFeatures: [
      {
        title: '식료품 유통기한 관리',
        subtitle: 'OCR 기반 자동 인식 및 알림',
        color: 'emerald',
        items: [
          { text: '유통기한 임박 식료품 자동 알림 시스템', highlight: '자동 알림' },
          { text: 'OCR을 통한 유통기한 자동 인식', highlight: 'OCR' },
          { text: '냉장고별/카테고리별 식료품 분류 관리', highlight: '분류 관리' },
        ],
      },
      {
        title: '레시피 추천 시스템',
        subtitle: '보유 재료 기반 맞춤 추천',
        color: 'blue',
        items: [
          { text: '냉장고 내 보유 재료 기반 레시피 추천 API 구현', highlight: '레시피 추천 API' },
          { text: '재료 매칭 알고리즘으로 활용 가능한 레시피 필터링', highlight: '재료 매칭' },
          { text: '유통기한 임박 재료 우선 사용 레시피 추천', highlight: '임박 재료 우선' },
        ],
      },
      {
        title: '음식물 쓰레기 배출량 추적',
        subtitle: '환경 친화적 소비 유도',
        color: 'violet',
        items: [
          { text: '월별/주별 음식물 쓰레기 배출량 통계', highlight: '배출량 통계' },
          { text: '가족 구성원별 배출량 비교 분석', highlight: '구성원별 비교' },
          { text: '배출량 감소 목표 설정 및 달성 현황', highlight: '목표 설정' },
        ],
      },
    ],
    // 담당 역할
    responsibilities: [
      '로그인 기능 제외 전체 백엔드 API 설계 및 구현',
      'Django REST Framework 기반 RESTful API 개발',
      '레시피 추천 API 구현 (재료 매칭 알고리즘)',
      '유통기한 알림 API 구현',
      'Nginx 리버스 프록시 설정',
      'Android 앱과 API 연동',
      'AWS EC2 배포 환경 구성',
    ],
    // 고민했던 점
    challenges: [
      { problem: '다양한 형식의 유통기한 표기를 어떻게 파싱할 것인가', solution: '정규식 기반 날짜 파싱 로직 구현, 여러 포맷 지원' },
      { problem: 'Android 앱과 Django 백엔드 간 실시간 동기화', solution: 'REST API + 폴링 방식으로 데이터 동기화 구현' },
      { problem: '가족 구성원 간 냉장고 공유 시 동시성 문제', solution: '낙관적 락(Optimistic Lock)으로 충돌 방지' },
    ],
    // 성과
    achievement: {
      title: "캡스톤디자인 경진대회 '장려상' 수상",
      subtitle: '동서울대학교 제11회 캡스톤디자인 경진대회',
    },
  },
]

// 프로젝트 ID로 찾기
export const getProjectById = (id) => projects.find(p => p.id === id)

// Featured 프로젝트만 가져오기
export const getFeaturedProjects = () => projects.filter(p => p.featured)