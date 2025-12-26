import { useState, useEffect } from 'react';
import './App.css';

// 체크 아이콘 컴포넌트
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// 장식용 원 컴포넌트
const DecorativeCircles = () => (
  <>
    <div className="decorative-circle" style={{ width: 300, height: 300, right: -100, top: -100 }} />
    <div className="decorative-circle" style={{ width: 200, height: 200, right: 100, bottom: 100, opacity: 0.3 }} />
    <div className="decorative-circle" style={{ width: 150, height: 150, left: '40%', bottom: -50, opacity: 0.2 }} />
  </>
);

const slides = [
  // Slide 0: Title - 매거진 스타일 타이틀
  {
    id: 0,
    className: 'slide-title-bg',
    content: (
      <div className="split-layout">
        <div className="split-left">
          <p className="subtitle">SNarGPT Presentation</p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '2rem' }}>
            공부가 <span className="accent-text">'감'</span>에서<br />
            <span className="highlight-text">'훈련'</span>이 되는 순간
          </h1>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p className="muted-text" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            SN이 AI를 만드는 이유
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="img-frame-circle" style={{ width: 56, height: 56, background: 'linear-gradient(135deg, var(--mint) 0%, var(--green-deep) 100%)' }} />
            <div>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>SN독학기숙학원</p>
              <p className="muted-text" style={{ fontSize: '0.875rem' }}>대표</p>
            </div>
          </div>
        </div>
        <div className="split-right" style={{ background: 'linear-gradient(135deg, var(--mint-light) 0%, var(--mint) 100%)' }}>
          <DecorativeCircles />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div style={{ width: 260, height: 260, background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(45, 90, 71, 0.2)', overflow: 'hidden' }}>
              <img src="/sn-logo.png" alt="SN" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 1: Opening - 왼쪽 텍스트 + 오른쪽 배경 이미지
  {
    id: 1,
    content: (
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* 오른쪽 배경 이미지 */}
        <img
          src="/leesedol1.png"
          alt="이세돌 vs AlphaGo"
          className="img-grayscale"
          style={{
            position: 'absolute',
            right: '-10%',
            bottom: 0,
            height: '95%',
            width: 'auto',
          }}
        />
        {/* 왼쪽 그라데이션 오버레이 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--bg-cream) 0%, var(--bg-cream) 30%, transparent 55%)',
        }} />
        {/* 왼쪽 텍스트 영역 */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          width: '45%',
          marginLeft: '5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 2rem',
        }}>
          <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>2016년, 그날 이후</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem', textAlign: 'center' }}>
            "AI가 나오면 실력 격차는<br />
            줄어들 줄 알았다."
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <div className="quote-box" style={{ maxWidth: '400px' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-deep)', paddingTop: '1rem' }}>
              하지만 현실은 정반대였습니다.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 2: 격차의 심화 - 인포그래픽 스타일
  {
    id: 2,
    content: (
      <div className="split-layout">
        <div className="split-left" style={{ flex: '0 0 45%' }}>
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Research Finding</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            예상치 못한 결과:<br />
            <span className="accent-text">격차의 심화</span>
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <p className="muted-text" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            왜 정답을 알려주는 존재가 생겼는데<br />
            <strong style={{ color: 'var(--text-dark)' }}>격차는 더 커졌을까요?</strong>
          </p>
        </div>
        <div className="split-right" style={{ padding: '2rem', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 0 }}>
          <div style={{ position: 'relative', width: 600, height: 480, marginLeft: '-5%' }}>
            <svg width="600" height="480" viewBox="0 0 500 400">
              {/* 배경 그리드 */}
              <defs>
                <linearGradient id="upperGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--mint-dark)" />
                  <stop offset="100%" stopColor="var(--green-deep)" />
                </linearGradient>
                <linearGradient id="lowerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--gray-warm)" />
                  <stop offset="100%" stopColor="var(--gray-light)" />
                </linearGradient>
              </defs>

              {/* Y축 */}
              <line x1="70" y1="50" x2="70" y2="330" stroke="var(--gray-light)" strokeWidth="2" />
              {/* X축 */}
              <line x1="70" y1="330" x2="450" y2="330" stroke="var(--gray-light)" strokeWidth="2" />

              {/* X축 라벨 */}
              <text x="70" y="360" fill="var(--text-muted)" fontSize="14" textAnchor="middle">AI 도입</text>
              <text x="450" y="360" fill="var(--text-muted)" fontSize="14" textAnchor="middle">현재</text>

              {/* Y축 라벨 */}
              <text x="35" y="190" fill="var(--text-muted)" fontSize="14" textAnchor="middle" transform="rotate(-90, 35, 190)">실력</text>

              {/* 시작점 */}
              <circle cx="70" cy="220" r="8" fill="var(--green-deep)" />

              {/* 상위권 - 지수함수 개형 (급격히 상승) */}
              <path
                d="M70 220 Q 140 210 200 180 Q 280 130 360 70 Q 410 40 440 30"
                stroke="url(#upperGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="440" cy="30" r="8" fill="var(--green-deep)" />

              {/* 하위권 - 로그함수 개형 (점점 낮아짐) */}
              <path
                d="M70 220 Q 120 250 180 280 Q 260 310 360 320 Q 410 325 440 328"
                stroke="url(#lowerGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="440" cy="328" r="8" fill="var(--gray-warm)" />

              {/* 격차 표시 화살표 */}
              <line x1="455" y1="50" x2="455" y2="310" stroke="var(--accent-teal)" strokeWidth="2" strokeDasharray="8,5" />
              <polygon points="455,55 449,68 461,68" fill="var(--accent-teal)" />
              <polygon points="455,305 449,292 461,292" fill="var(--accent-teal)" />

              {/* 라벨 */}
              <text x="430" y="22" fill="var(--green-deep)" fontSize="16" fontWeight="700" textAnchor="end">상위권</text>
              <text x="430" y="320" fill="var(--gray-warm)" fontSize="16" fontWeight="700" textAnchor="end">하위권</text>
            </svg>

            {/* 격차 확대 라벨 */}
            <div style={{
              position: 'absolute',
              right: -10,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--green-deep)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '2px solid var(--mint)'
            }}>
              격차 확대
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: 비교 - 카드 레이아웃
  {
    id: 3,
    content: (
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* 왼쪽 배경 이미지 - 정답 생성기 */}
        <img
          src="/capy_paste.jpg"
          alt="Copy Paste"
          className="img-grayscale"
          style={{
            position: 'absolute',
            left: '-10%',
            bottom: 0,
            height: '70%',
            width: 'auto',
            opacity: 0.4,
          }}
        />
        {/* 오른쪽 배경 이미지 - 판단 훈련기 */}
        <img
          src="/brain.jpg"
          alt="Brain"
          style={{
            position: 'absolute',
            left: 'calc(50% + 60px)',
            bottom: 0,
            height: '70%',
            width: 'auto',
            opacity: 0.8,
          }}
        />

        {/* 콘텐츠 */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '3rem 5rem', paddingTop: '5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="tag" style={{ marginBottom: '1rem' }}>AI 활용 패턴 비교</span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700 }}>
              AI를 어떻게 대하느냐가 <span className="accent-text">격차를 만듭니다</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'start', maxWidth: 1000, margin: '0 auto' }}>
            <div className="comparison-card" style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.95)' }}>
              <span className="tag" style={{ background: 'var(--gray-light)', color: 'var(--text-muted)', marginBottom: '1rem', display: 'inline-block' }}>하위권</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-muted)' }}>정답 생성기</h3>
              <ul className="check-list">
                <li>
                  <span className="check-icon" style={{ background: 'var(--gray-light)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className="muted-text">AI가 시키는 대로 따라하기</span>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--gray-light)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  <span className="muted-text">결과에만 집착하는 태도</span>
                </li>
              </ul>
            </div>

            <div className="vs-badge" style={{ marginTop: '60px' }}>VS</div>

            <div className="comparison-card highlight" style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.95)' }}>
              <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>상위권</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--green-deep)' }}>판단 훈련기</h3>
              <ul className="check-list">
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  <span>AI가 왜 그 수를 두었는지 파고들기</span>
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  <span>나의 '판단 로직'을 교정하는 훈련</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 4: 핵심 질문 - 강조 슬라이드 (어두운 배경)
  {
    id: 4,
    className: 'slide-emphasis-bg',
    content: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
        <DecorativeCircles />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '2rem', display: 'inline-block' }}>Core Question</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '2rem' }}>
            "여러분은 <span className="accent-text">왜 틀렸는지</span><br />
            알고 틀립니까, 모르고 틀립니까?<br />
            그리고 데이터로 남습니까?"
          </h2>
          <div style={{ width: 80, height: 3, background: 'var(--mint)', margin: '2rem auto' }} />
          <p className="muted-text" style={{ fontSize: '1.25rem' }}>
            이유를 모르는 틀림은 '훈련'이 아니라 <strong style={{ color: 'var(--mint)' }}>'반복 노동'</strong>일 뿐입니다.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 5: MLB 사례 - 데이터 카드
  {
    id: 5,
    content: (
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* 오른쪽 오타니 이미지 */}
        <img
          src="/otani.png"
          alt="Ohtani"
          style={{
            position: 'absolute',
            right: '10%',
            bottom: 0,
            height: '90%',
            width: 'auto',
          }}
        />
        {/* 왼쪽 그라데이션 오버레이 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, var(--bg-cream) 0%, var(--bg-cream) 40%, transparent 70%)',
        }} />
        {/* 왼쪽 텍스트 영역 - 중앙 배치 */}
        <div style={{
          position: 'absolute',
          left: '5%',
          top: 0,
          bottom: 0,
          zIndex: 2,
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Case Study</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem', textAlign: 'center' }}>
            이미 야구는<br />
            <span className="accent-text">바뀌었습니다</span>
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <p className="muted-text" style={{ fontSize: '1.125rem', lineHeight: 1.7, textAlign: 'center' }}>
            MLB는 더 이상 '타격감' 같은<br />
            느낌으로 말하지 않습니다.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            모든 것이 데이터로 측정됩니다
          </p>
        </div>
        {/* 오른쪽 상단 데이터 카드 영역 - 오타니 이미지 위 */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '20%',
          zIndex: 2,
          display: 'flex',
          gap: '1rem',
        }}>
          <div className="stat-card">
            <p className="stat-label">스윙 각도</p>
            <p className="stat-number" style={{ fontSize: '1.75rem' }}>15°</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">배트 스피드</p>
            <p className="stat-number" style={{ fontSize: '1.75rem' }}>112<span style={{ fontSize: '0.75rem', fontWeight: 400 }}>km/h</span></p>
          </div>
          <div className="stat-card">
            <p className="stat-label">발사 속도</p>
            <p className="stat-number" style={{ fontSize: '1.75rem' }}>98<span style={{ fontSize: '0.75rem', fontWeight: 400 }}>mph</span></p>
          </div>
          <div className="stat-card">
            <p className="stat-label">회전수</p>
            <p className="stat-number" style={{ fontSize: '1.75rem' }}>2400<span style={{ fontSize: '0.75rem', fontWeight: 400 }}>rpm</span></p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 6: 공부의 현실
  {
    id: 6,
    content: (
      <div className="split-layout">
        <div className="split-left">
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Current Problem</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
            공부는 아직도<br />
            <span className="accent-text">'감'의 영역</span>에 있습니까?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div className="card" style={{ borderLeft: '4px solid var(--gray-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>X</span>
              <p className="muted-text" style={{ fontStyle: 'italic' }}>"오늘 컨디션이 별로라 실수했어요."</p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--gray-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>X</span>
              <p className="muted-text" style={{ fontStyle: 'italic' }}>"그냥 감이 안 좋아서 틀렸어요."</p>
            </div>
          </div>

          <div className="card card-mint">
            <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--green-deep)' }}>
              공부에도 '데이터 기반 훈련 시스템'이 필요합니다.
            </p>
          </div>
        </div>
        <div className="split-right" style={{ background: 'var(--mint-light)', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/student_stupid1.png"
            alt="눈을 가리고 시도하는 학생"
            style={{
              height: '80%',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    ),
  },

  // Slide 7: SNarGPT 소개 - 강조 슬라이드
  {
    id: 7,
    className: 'slide-emphasis-bg',
    content: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
        <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '2rem', display: 'inline-block' }}>Our Solution</span>
        <p className="muted-text" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>SN이 AI를 만든 진짜 이유</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1rem' }}>
          "학생의 사고 과정을<br />
          <span className="accent-text">숨길 수 없는 구조</span>"
        </h2>
        <p style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          +
        </p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1.5rem' }}>
          "학생의 <span className="accent-text">개인화된 데이터</span>"
        </h2>
        <p style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
          =
        </p>
        <div style={{ display: 'inline-block', padding: '1.5rem 3rem', background: 'rgba(255,255,255,0.15)', borderRadius: '1rem', backdropFilter: 'blur(10px)', marginBottom: '2rem' }}>
          <span style={{ fontSize: '2rem', fontWeight: 700 }}>학생의 <span className="accent-text">사고로직 개선</span></span>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1rem 2.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '3rem' }}>
          <div style={{ width: 48, height: 48, background: 'var(--mint)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-deep)', fontWeight: 900 }}>SN</div>
          <span style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>SNarGPT</span>
        </div>
      </div>
    ),
  },

  // Slide 8: Scene 1 - 타임라인 스타일
  {
    id: 8,
    content: (
      <div className="split-layout">
        <div className="split-left">
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Scene 01</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
            '점'의 공부를<br />
            <span className="accent-text">'선'의 훈련</span>으로
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>문제 검색</p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>원하는 문제를 광속으로 찾기</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>유사 문제 연결</p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>관련 문제들을 연결하여 패턴 파악</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>판단 로직 검증</p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>사고 과정의 오류 지점 분석</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>조건 변형 훈련</p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>다양한 조건에서의 적용력 강화</p>
              </div>
            </div>
          </div>
        </div>
        <div className="split-right" style={{ background: 'var(--mint-light)', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe
            src="https://snargpt.ai"
            title="SNarGPT"
            style={{
              width: '95%',
              height: '90%',
              border: '2px solid var(--mint)',
              borderRadius: '1rem',
              boxShadow: '0 8px 32px rgba(45, 90, 71, 0.15)',
            }}
          />
        </div>
      </div>
    ),
  },

  // Slide 9: Scene 2
  {
    id: 9,
    content: (
      <div className="split-layout">
        <div className="split-left">
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Scene 02</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
            지식의 <span className="accent-text">해상도</span>를<br />
            나에게 맞추다
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }} />
          <p className="muted-text" style={{ fontSize: '1.125rem' }}>
            지식의 양이 아닙니다.<br />
            <strong style={{ color: 'var(--text-dark)' }}>정확한 초점</strong>이 중요합니다.
          </p>
        </div>
        <div className="split-right" style={{ padding: '3rem', flexDirection: 'column', gap: '1.5rem', alignItems: 'stretch' }}>
          <div className="card card-mint">
            <p style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>나의 요청</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
              "지금 이 문제를 푸는 데 <span style={{ textDecoration: 'underline', textDecorationColor: 'var(--mint-dark)' }}>딱 필요한 만큼만</span> 알려줘"
            </p>
          </div>
          <div className="card card-mint">
            <p style={{ fontSize: '0.75rem', color: 'var(--accent-teal)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>나의 요청</p>
            <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
              "수능 범위 안에서만 이 개념의 이유를 설명해줘"
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 10: Scene 3 - AI 코치 대결
  {
    id: 10,
    content: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="tag" style={{ marginBottom: '1rem' }}>Scene 03</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700 }}>
            사고를 충돌시켜 <span className="accent-text">기준을 세우다</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', maxWidth: 900, margin: '0 auto 2rem' }}>
          <div className="card" style={{ borderTop: '4px solid var(--mint-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 40, height: 40, background: 'var(--mint-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'var(--green-deep)' }}>A</div>
              <div>
                <span style={{ fontWeight: 600, color: 'var(--accent-teal)' }}>AI Coach A</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>스나비스</p>
              </div>
            </div>
            <p style={{ fontSize: '1.125rem' }}>"이 문제를 정석대로 풀어줘."</p>
          </div>

          <div className="vs-badge">VS</div>

          <div className="card" style={{ borderTop: '4px solid var(--green-deep)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: 40, height: 40, background: 'var(--green-deep)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white' }}>B</div>
              <div>
                <span style={{ fontWeight: 600, color: 'var(--green-deep)' }}>AI Coach B</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>스나겐</p>
              </div>
            </div>
            <p style={{ fontSize: '1.125rem' }}>"이 문제를 그래프를 활용해서 풀어줘."</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="card card-mint" style={{ display: 'inline-block', padding: '1.5rem 2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ width: 40, height: 40, background: 'var(--green-deep)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white' }}>C</div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontWeight: 600, color: 'var(--green-deep)' }}>AI Coach C</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>스나고</p>
              </div>
            </div>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--green-deep)' }}>
              "둘 중에 어떤 문제 풀이가 더 깔끔한지 판단해줘."
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: 시스템 1/3 - 원형 인포그래픽
  {
    id: 11,
    content: (
      <div className="split-layout">
        <div className="split-left" style={{ flex: '0 0 45%' }}>
          <span className="tag" style={{ marginBottom: '1.5rem' }}>System Overview</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            SNarGPT는<br />
            전체 시스템의 <span className="accent-text">1/3</span>입니다
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <p className="muted-text" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            이 세 가지가 맞물려 돌아갈 때,<br />
            <strong style={{ color: 'var(--text-dark)' }}>진짜 성적이 바뀝니다.</strong>
          </p>
        </div>
        <div className="split-right" style={{ padding: '3rem' }}>
          <div style={{ position: 'relative', width: 450, height: 420 }}>
            {/* 연결선 SVG - 원 뒤로 가도록 zIndex: 1 */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
              {/* SNarlink 중앙(85, 335) → SNarGPT 중앙(225, 90) */}
              <line x1="85" y1="335" x2="225" y2="90" stroke="var(--mint-dark)" strokeWidth="3" strokeDasharray="8,4" />
              {/* 주1회상담 중앙(365, 335) → SNarGPT 중앙(225, 90) */}
              <line x1="365" y1="335" x2="225" y2="90" stroke="var(--mint-dark)" strokeWidth="3" strokeDasharray="8,4" />
              {/* SNarlink 중앙(85, 335) → 주1회상담 중앙(365, 335) */}
              <line x1="85" y1="335" x2="365" y2="335" stroke="var(--mint-dark)" strokeWidth="3" strokeDasharray="8,4" />
            </svg>
            {/* 3개의 원 - zIndex로 선 위에 표시 */}
            <div className="stat-bubble" style={{ width: 180, height: 180, position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
              <span style={{ fontSize: '0.875rem', textAlign: 'center', lineHeight: 1.3 }}>사고 방식<br /><strong style={{ fontSize: '1.125rem' }}>SNarGPT</strong></span>
            </div>
            <div style={{ width: 170, height: 170, position: 'absolute', bottom: 0, left: 0, background: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--gray-light)', zIndex: 2 }}>
              <span style={{ fontSize: '0.875rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 1.3 }}>실제 학습량 데이터 측정<br /><strong style={{ color: 'var(--text-dark)', fontSize: '1.125rem' }}>SNarlink</strong></span>
            </div>
            <div style={{ width: 170, height: 170, position: 'absolute', bottom: 0, right: 0, background: 'white', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--gray-light)', zIndex: 2 }}>
              <span style={{ fontSize: '0.875rem', textAlign: 'center', color: 'var(--text-muted)', lineHeight: 1.3 }}>선생님 리포트<br /><strong style={{ color: 'var(--text-dark)', fontSize: '1.125rem' }}>주 1회 상담</strong></span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 12: 결론 - 강조 슬라이드
  {
    id: 12,
    className: 'slide-emphasis-bg',
    content: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
        <DecorativeCircles />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '2rem', display: 'inline-block' }}>Conclusion</span>
          <p className="muted-text" style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>마지막으로 이 말만 기억하세요.</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.5, marginBottom: '1.5rem' }}>
            AI는<br />
            여러분 대신 공부해주지 않습니다.
          </h2>
          <div style={{ width: 80, height: 3, background: 'var(--mint)', margin: '2rem auto' }} />
          <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            하지만<br />
            여러분이 <span className="accent-text">어떻게 틀리고 있는지</span>를<br />
            데이터로 보여줍니다.
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '3rem' }}>
            그래서 수능을<br />
            시험이 아니라, <span className="accent-text">이길 수 있는 훈련</span>으로 바꿉니다.
          </p>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
            성공의 경험을 만들어 갑니다.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <div style={{ width: 60, height: 60, background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src="/sn-logo.png" alt="SN" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    ),
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const progressWidth = ((currentSlide + 1) / slides.length) * 100;

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''} ${slide.className || ''}`}
          id={`slide-${slide.id}`}
        >
          {slide.content}
        </div>
      ))}

      {/* 페이지 인디케이터 */}
      <div className="page-indicator">
        <span style={{ fontWeight: 600, color: 'var(--green-deep)' }}>{String(currentSlide + 1).padStart(2, '0')}</span>
        <span> / {String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Navigation Overlay */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', display: 'flex', gap: '0.75rem', zIndex: 50 }}>
        <div className="nav-btn" onClick={prevSlide}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="nav-btn" onClick={nextSlide}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
    </>
  );
}

export default App;
