import { useState, useEffect } from 'react';
import './App.css';

// 이미지 imports (Vite가 빌드 시 올바른 경로로 변환)
import snLogo from '/sn-logo.png';
import leesedol from '/leesedol1.png';
import capyPaste from '/capy_paste.jpg';
import brain from '/brain.png';
import otani from '/otani.png';
import studentStupid from '/student_stupid1.png';
import koreanImg from '/korean.png';
import math1Img from '/math1.png';
import biology2Img from '/biology2.png';
import earthscienceImg from '/earthscience.png';
import mathcase1Img from '/mathcase1.png';
import mathcase2Img from '/mathcase2.png';
import history1Img from '/history1.png';
import history2Img from '/history2.png';
import dokdoImg from '/dokdo.png';
import socialImg from '/social.png';

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

// Slide 4: 핵심 질문 컴포넌트 (클릭 시 텍스트 변경)
const CoreQuestionSlide = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center', cursor: 'pointer' }}
      onClick={(e) => { e.stopPropagation(); setClicked(!clicked); }}
    >
      <DecorativeCircles />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
        <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '2rem', display: 'inline-block' }}>
          {clicked ? 'The Answer' : 'Core Question'}
        </span>
        {!clicked ? (
          <>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '2rem' }}>
              "여러분은 <span className="accent-text">왜 틀렸는지</span><br />
              알고 틀립니까, 모르고 틀립니까?<br />
              그리고 데이터로 남습니까?"
            </h2>
            <div style={{ width: 80, height: 3, background: 'var(--mint)', margin: '2rem auto' }} />
            <p className="muted-text" style={{ fontSize: '1.25rem' }}>
              이유를 모르는 틀림은 '훈련'이 아니라 <strong style={{ color: 'var(--mint)' }}>'반복 노동'</strong>일 뿐입니다.
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.6, marginBottom: '2rem' }}>
              지금은 점수를 만드는 시기가 아니라,<br />
              <span className="accent-text">판단과 사고 로직을 훈련하는 시기</span>입니다.
            </h2>
            <div style={{ width: 80, height: 3, background: 'var(--mint)', margin: '2rem auto' }} />
            <p style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.6 }}>
              그래서 그 훈련은<br />
              <span className="accent-text">사람마다 달라야 합니다.</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

// MLB 지표 데이터
const mlbMetrics = [
  { title: 'Launch Angle', baseball: '공을 어떤 각도로 쳤는가', study: '문제를 어떤 개념·관점에서 접근했는가' },
  { title: 'Exit Velocity', baseball: '얼마나 강하게 맞았는가', study: '운이 아닌 논리로 밀어붙인 풀이인가' },
  { title: 'Hard Hit Rate', baseball: '아웃이어도 잘 맞은 타구 비율', study: '틀렸어도 사고 방향이 맞았던 풀이의 비율' },
  { title: 'Barrel Rate', baseball: '각도·속도가 이상적인 타구', study: '조건 해석 → 개념 선택 → 계산 흐름이 모두 맞은 재현 가능한 풀이' },
  { title: 'Swing & Miss Rate', baseball: '헛스윙이 나는 비율', study: '개념 선택부터 실패한 접근 불가 문제' },
  { title: 'Chase Rate', baseball: '스트라이크존 밖 공에 속는 비율', study: '불필요한 조건·함정 문장에 끌려가는 판단 습관' },
  { title: 'Plate Discipline', baseball: '치지 말아야 할 공을 참는 능력', study: '계산 전에 버릴 수 있는 선택지를 버리는 판단력' },
  { title: 'Spin Rate 대응', baseball: '회전수 변화에 따른 반응', study: '조건이 바뀌었을 때 사고가 흔들리는지 여부' },
  { title: 'Spray Chart', baseball: '타구 분포 시각화', study: '오답이 몰리는 단원·유형 분포' },
  { title: 'Split Data', baseball: '상황별 성적 차이', study: '시간 압박·고난도 상황에서의 사고 안정성' },
];

// Slide 5: MLB 사례 컴포넌트 (클릭 시 10가지 지표 표시)
const MLBSlide = () => {
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <div
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
      onClick={(e) => { e.stopPropagation(); setShowMetrics(!showMetrics); }}
    >
      {!showMetrics ? (
        <>
          {/* 오른쪽 오타니 이미지 */}
          <img
            src={otani}
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
          {/* 왼쪽 텍스트 영역 */}
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
          {/* 오른쪽 상단 데이터 카드 영역 - 8가지 지표 */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            zIndex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.75rem',
          }}>
            <div className="stat-card">
              <p className="stat-label">스윙 각도</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>15°</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">배트 스피드</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>112<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>km/h</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">발사 속도</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>98<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>mph</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">회전수</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>2400<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>rpm</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">발사 각도</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>28°</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">타구 거리</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>420<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>ft</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">체류 시간</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>5.2<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>sec</span></p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Hard Hit</p>
              <p className="stat-number" style={{ fontSize: '1.5rem' }}>54<span style={{ fontSize: '0.65rem', fontWeight: 400 }}>%</span></p>
            </div>
          </div>
        </>
      ) : (
        <div style={{ width: '100%', height: '100%', padding: '1.5rem 2rem', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-cream)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Data Metrics</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              MLB에서 실제로 보는 <span className="accent-text">10가지 훈련 지표</span>
            </h2>
          </div>
          <div style={{ width: '100%', maxWidth: 1000, borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--green-deep)', color: 'white' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', borderBottom: '2px solid var(--mint)' }}>MLB 지표</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', borderBottom: '2px solid var(--mint)' }}>야구에서 의미</th>
                </tr>
              </thead>
              <tbody>
                {mlbMetrics.map((metric, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'white' : 'var(--mint-light)', borderBottom: '1px solid var(--gray-light)' }}>
                    <td style={{ padding: '0.6rem 1rem', fontWeight: 600, color: 'var(--accent-teal)', fontSize: '0.85rem' }}>{metric.title}</td>
                    <td style={{ padding: '0.6rem 1rem', color: 'var(--text-dark)', fontSize: '0.85rem' }}>{metric.baseball}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

// AI 오류 사례 이미지 배열
const aiErrorImages = [
  { src: koreanImg, label: '국어' },
  { src: math1Img, label: '수학' },
  { src: biology2Img, label: '생명과학' },
  { src: earthscienceImg, label: '지구과학' },
];

// AI 오류 사례 컴포넌트 (필터 버튼)
const AIErrorSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = aiErrorImages[currentIndex];

  return (
    <div style={{ width: '100%', height: '100%', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span className="tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>AI Limitation</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Q&A: <span className="accent-text">① AI가 틀린 사례</span>
        </h2>
        {/* 필터 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
          {aiErrorImages.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                background: currentIndex === idx ? 'var(--green-deep)' : 'var(--gray-light)',
                color: currentIndex === idx ? 'white' : 'var(--text-muted)',
              }}
            >
              {img.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img
          src={currentImage.src}
          alt={currentImage.label}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        />
      </div>
      <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        AI도 틀릴 수 있습니다. <strong style={{ color: 'var(--green-deep)' }}>검증하는 습관</strong>이 중요합니다.
      </p>
    </div>
  );
};

// 학생 사용 패턴 이미지 배열 (2개씩 묶어서 표시)
const studentPatternImages = [
  { images: [mathcase1Img, mathcase2Img], label: '수학' },
  { images: [history1Img, history2Img], label: '사탐' },
  { images: [dokdoImg], label: '독도' },
  { images: [socialImg], label: '사탐 검색' },
];

// 학생 사용 패턴 컴포넌트 (필터 버튼)
const StudentPatternSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPattern = studentPatternImages[currentIndex];

  return (
    <div style={{ width: '100%', height: '100%', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span className="tag" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Real Usage</span>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Q&A: <span className="accent-text">② 실제 학생 사용 패턴</span>
        </h2>
        {/* 필터 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1rem' }}>
          {studentPatternImages.map((pattern, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                background: currentIndex === idx ? 'var(--green-deep)' : 'var(--gray-light)',
                color: currentIndex === idx ? 'white' : 'var(--text-muted)',
              }}
            >
              {pattern.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', overflow: 'hidden' }}>
        {currentPattern.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${currentPattern.label} ${idx + 1}`}
            style={{
              maxWidth: currentPattern.images.length > 1 ? '48%' : '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 좋은 사용 예시 데이터
const goodUsagePrompts = [
  { title: '문제 검색용', tag: 'SEARCH', prompt: '"이 문제에서 쓰인 개념이 뭐야?"', desc: '개념·조건·유형을 찾는 용도' },
  { title: '오답 분석용', tag: 'ANALYZE', prompt: '"내가 틀린 문제들 유형별로 정리해줘"', desc: '같은 실수 반복 체크' },
  { title: '문제 풀이용', tag: 'SOLVE', prompt: '"이 풀이가 수능에서도 안전한 이유 설명해줘"', desc: '수능에서 안전한 풀이 확인' },
  { title: '사고 측정용', tag: 'TRAIN', prompt: '"나는 이렇게 생각했는데, 어디서 무너질까?"', desc: '답 말고 힌트만 요청', highlight: true },
];

// 좋은 사용 슬라이드 컴포넌트 (10페이지 스타일)
const GoodUsageSlide = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const handleItemClick = (idx, e) => {
    e.stopPropagation();
    setVisibleIndex(visibleIndex === idx ? -1 : idx);
  };

  return (
    <div className="split-layout">
      <div className="split-left">
        <span className="tag" style={{ marginBottom: '1rem' }}>Good Usage</span>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Q&A: ③ 이렇게 사용했으면 좋겠다 (3/5)
        </p>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem' }}>
          이렇게 사용하면<br />
          <span className="accent-text">훈련이 됩니다</span>
        </h2>
        <div className="divider" style={{ marginBottom: '1.5rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {goodUsagePrompts.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item"
              onClick={(e) => handleItemClick(idx, e)}
              style={{ cursor: 'pointer' }}
            >
              <div className="timeline-dot" />
              {idx < goodUsagePrompts.length - 1 && <div className="timeline-line" />}
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>{item.desc}</p>
                {visibleIndex === idx && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: 'var(--mint-light)',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid var(--green-deep)',
                  }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-deep)' }}>{item.prompt}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
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
  );
};

// 잘못된 사용 예시 데이터
const badUsagePrompts = [
  { title: '정답만 물어보기', prompt: '"23번 답이 뭐야?"', desc: '정답 확인만 하고 끝' },
  { title: '풀이 복붙하기', prompt: '"이 문제 풀어줘" → 복붙', desc: '사고 과정 없이 베끼기' },
  { title: '이해 없이 암기', prompt: '"그냥 공식만 알려줘"', desc: '왜 그런지 안 물어봄' },
  { title: '생각 없이 의존', prompt: '"모르겠어 그냥 알려줘"', desc: '스스로 시도 안 함' },
];

// 잘못된 사용 슬라이드 컴포넌트 (10페이지 스타일)
const BadUsageSlide = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [extraToggle, setExtraToggle] = useState({ first: false, second: false });

  const handleItemClick = (idx, e) => {
    e.stopPropagation();
    setVisibleIndex(visibleIndex === idx ? -1 : idx);
  };

  const toggleExtra = (key, e) => {
    e.stopPropagation();
    setExtraToggle(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="split-layout">
      <div className="split-left" style={{ overflowY: 'auto' }}>
        <span className="tag" style={{ marginBottom: '1rem', background: '#fee2e2', color: '#ef4444' }}>Bad Usage</span>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Q&A: ④ 이렇게 사용하면 별로다 (4/5)
        </p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.5rem' }}>
          이렇게 사용하면<br />
          <span style={{ color: '#ef4444' }}>훈련이 안 됩니다</span>
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>(훈련이 무너지는 AI 사용법)</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {badUsagePrompts.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item"
              onClick={(e) => handleItemClick(idx, e)}
              style={{ cursor: 'pointer' }}
            >
              <div className="timeline-dot" />
              {idx < badUsagePrompts.length - 1 && <div className="timeline-line" />}
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{item.title}</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}>{item.desc}</p>
                {visibleIndex === idx && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: '#fee2e2',
                    borderRadius: '0.5rem',
                    borderLeft: '3px solid #ef4444',
                  }}>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ef4444' }}>{item.prompt}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 그 외 유의할 점 토글 섹션 */}
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--gray-light)', paddingTop: '1rem' }}>
          <p style={{ fontWeight: 700, fontSize: '0.9rem', color: '#ef4444', marginBottom: '0.75rem' }}>그 외 유의할 점</p>

          {/* 1️⃣ 일반 챗봇처럼 사용 */}
          <div
            onClick={(e) => toggleExtra('first', e)}
            style={{
              padding: '0.75rem',
              background: extraToggle.first ? '#fee2e2' : 'white',
              borderRadius: '0.5rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #fca5a5',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#ef4444' }}>1️⃣ 일반 챗봇처럼 사용</p>
              <span style={{ color: '#ef4444' }}>{extraToggle.first ? '−' : '+'}</span>
            </div>
            {extraToggle.first && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <p style={{ color: '#ef4444', fontWeight: 600, marginBottom: '0.25rem' }}>❌ 예시</p>
                <p style={{ color: 'var(--text-dark)', fontStyle: 'italic' }}>"이거 문제 풀어줘"</p>
                <p style={{ color: 'var(--text-dark)', fontStyle: 'italic', marginBottom: '0.5rem' }}>"이 단어 뜻이 뭐야" (맥락 없이)</p>
                <p style={{ color: '#ef4444', fontWeight: 600, marginBottom: '0.25rem' }}>👉 결과</p>
                <p style={{ color: 'var(--text-dark)' }}>빠르긴 하지만 <strong>사고는 하나도 남지 않음</strong></p>
              </div>
            )}
          </div>

          {/* 2️⃣ AI를 억압·무시·하대하는 태도 */}
          <div
            onClick={(e) => toggleExtra('second', e)}
            style={{
              padding: '0.75rem',
              background: extraToggle.second ? '#fee2e2' : 'white',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #fca5a5',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#ef4444' }}>2️⃣ AI를 억압·무시·하대하는 태도</p>
              <span style={{ color: '#ef4444' }}>{extraToggle.second ? '−' : '+'}</span>
            </div>
            {extraToggle.second && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <p style={{ color: 'var(--text-dark)', marginBottom: '0.25rem' }}>• 욕설, 비하, 조롱 섞인 질문</p>
                <p style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>• 무리한 명령형 요청</p>
                <p style={{ color: '#ef4444', fontWeight: 600, marginBottom: '0.25rem' }}>👉 실제로 벌어지는 일:</p>
                <p style={{ color: 'var(--text-dark)' }}>• 질문의 정보량이 줄어듦</p>
                <p style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>• AI가 방어 모드로 전환</p>
                <p style={{ color: '#ef4444', fontWeight: 600 }}>답변은: 얕고, 보수적이고, 최소한으로만 나옴</p>
                <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'rgba(239,68,68,0.1)', borderRadius: '0.25rem', borderLeft: '2px solid #ef4444' }}>
                  <p style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.8rem' }}>답이 틀리진 않지만, 훈련에는 아무 도움도 안 됩니다.</p>
                </div>
              </div>
            )}
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
  );
};

// Q&A 사례 데이터
const qnaExamples = [
  {
    title: '① AI가 틀린 사례',
    tag: 'AI Limitation',
    content: <AIErrorSlide />,
    isComponent: true,
  },
  {
    title: '② 실제 학생 사용 패턴',
    tag: 'Real Usage',
    content: <StudentPatternSlide />,
    isComponent: true,
  },
  {
    title: '③ 이렇게 사용했으면 좋겠다',
    tag: 'Good Usage',
    content: <GoodUsageSlide />,
    isComponent: true,
  },
  {
    title: '④ 이렇게 사용하면 별로다',
    tag: 'Bad Usage',
    content: <BadUsageSlide />,
    isComponent: true,
  },
  {
    title: '⑥ 현재와 앞으로',
    tag: 'Roadmap',
    content: (
      <div className="split-layout">
        <div className="split-left" style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
          <span className="tag" style={{ marginBottom: '1rem' }}>Available Now</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            현재까지<br />
            <span className="accent-text">가능한 것</span>
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>수학문제 전체 검색</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>고1~3 교육청, 평가원 문제 전체<br />저작권 없는 문제 모두 검색 가능</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>유사문제 검색</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>교육청, 평가원 문제 전체 검색 가능<br />사설문제 유사도 검색 가능 (SN멤버 한정)<br />문제출력 X, 변형문제만 제공</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>문제 생성</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>평가원 스타일의 문제 생성<br />(수능 스타일, 용어, 계산난도 등 변경가능)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>인터넷 정보 검색 가능</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>학원 식단표, 교육기사, 커뮤니티 반응 등</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>유튜브 / 음성·영상 파일 분석</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>강의록 요약, 전사, 핵심문제, 퀴즈 등</p>
              </div>
            </div>
          </div>
        </div>
        <div className="split-right" style={{ display: 'flex', flexDirection: 'column', background: 'var(--mint-light)' }}>
          <span className="tag" style={{ marginBottom: '1rem', background: 'var(--mint)', color: 'var(--green-deep)' }}>Coming Soon</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            앞으로<br />
            <span className="accent-text">개발 할 것들</span>
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>수능 전문항 DB 완료</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>국어, 영어, 사탐, 과탐<br />평가원·교육청 문제</p>
                <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: 'var(--mint)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--green-deep)' }}>2월 목표</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>평가원 스타일 문제 생성 고도화</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>앞으로 더 평가원스러운 문제 생성</p>
                <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: 'var(--mint)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--green-deep)' }}>6월 목표</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>대한민국 수능 관련 전과목 강의 및 사설문제 학습</p>
                <p className="muted-text" style={{ fontSize: '0.85rem' }}>전과목 강의 데이터 및 사설문제 학습 완료</p>
                <span style={{ display: 'inline-block', marginTop: '0.5rem', padding: '0.25rem 0.5rem', background: 'var(--mint)', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--green-deep)' }}>9월 목표</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '⑤ 자주 묻는 질문',
    tag: 'FAQ',
    content: (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10rem', width: '100%', height: '100%' }}>
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="tag" style={{ marginBottom: '1rem' }}>For Students</span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1.5rem' }}>
            학생 입장에서 본<br />
            SNarGPT의<br />
            <span className="accent-text">'찐' 장점</span>
          </h2>
          <div className="divider" style={{ marginBottom: '1.5rem' }} />
          <p className="muted-text" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
            기능이 아니라<br />
            <strong style={{ color: 'var(--text-dark)' }}>여러분의 하루</strong>가<br />
            어떻게 달라지는지 보세요.
          </p>
        </div>
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>제미나이, ChatGPT 기능? 당연히 다 돼요</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}>범용 기능 + <strong style={{ color: 'var(--green-deep)' }}>입시 전문성</strong> 추가</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>수학 문제, 혼자 끙끙대지 마세요</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}><strong style={{ color: 'var(--green-deep)' }}>SNarGo</strong>가 99.9% 정확도로 단계별 풀이</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>근거 없는 추측 NO! 정확한 기출 데이터</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}><strong style={{ color: 'var(--green-deep)' }}>RAG</strong>로 실제 기출에서 실시간 검색</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>'나'를 기억하는 AI</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}>어제 공부한 것, 점심 메뉴, 외출 일정까지 다 기억</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>창의력의 끝판왕 SNarGen</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}>킬러 변형문제 생성, 개념 시각화</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-line" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>딴 길로 새지 않는 페이스메이커</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}><strong style={{ color: 'var(--green-deep)' }}>SNarKeeper</strong>가 학습 외 질문 차단</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <p style={{ fontWeight: 600, marginBottom: '0.15rem', fontSize: '0.9rem' }}>지칠 때 진심으로 응원해주는 내 편</p>
                <p className="muted-text" style={{ fontSize: '0.8rem' }}>여러분의 성공을 바라는 조력자</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// 개별 Q&A 슬라이드 컴포넌트
const QnASlideItem = ({ example, index, total }) => {
  return (
    <div style={{ width: '100%', height: '100%', padding: '2rem 3rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="tag" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>{example.tag}</span>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>
          Q&A: <span className="accent-text">{example.title}</span>
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          ({index + 1} / {total})
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {example.content}
      </div>
    </div>
  );
};

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
              <img src={snLogo} alt="SN" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
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
          src={leesedol}
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
          src={capyPaste}
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
          src={brain}
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

  // Slide 4: 핵심 질문 - 강조 슬라이드 (어두운 배경, 클릭 시 텍스트 변경)
  {
    id: 4,
    className: 'slide-emphasis-bg',
    content: <CoreQuestionSlide />,
  },

  // Slide 5: MLB 사례 - 데이터 카드 (클릭 시 10개 지표 표시)
  {
    id: 5,
    content: <MLBSlide />,
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
            src={studentStupid}
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

  // Slide 7: 수능의 본질 - 강조 슬라이드
  {
    id: 7,
    className: 'slide-emphasis-bg',
    content: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem', textAlign: 'center' }}>
        <DecorativeCircles />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: '2rem', display: 'inline-block' }}>The Truth</span>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            이 구조는 바둑이나 야구 이야기처럼 들리지만,<br />
            <span className="accent-text" style={{ fontWeight: 700 }}>수능은 이 구조가 가장 잔인하게 드러나는 시험</span>입니다.
          </p>
          <p style={{ fontSize: '1.5rem', lineHeight: 1.8 }}>
            같은 개념을 배우고, 같은 문제를 보는데<br />
            왜 항상 같은 학생들만 맞힐까요?
          </p>
        </div>
      </div>
    ),
  },

  // Slide 8: SNarGPT 소개 - 강조 슬라이드
  {
    id: 8,
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

  // Slide 9: Scene 1 - 타임라인 스타일
  {
    id: 9,
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

  // Slide 10: Scene 2
  {
    id: 10,
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

  // Slide 11: Scene 3 - AI 코치 대결
  {
    id: 11,
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

  // Slide 12: 시스템 1/3 - 원형 인포그래픽
  {
    id: 12,
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

  // Slide 13: 결론 - 강조 슬라이드
  {
    id: 13,
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
            <img src={snLogo} alt="SN" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: Q&A - ① AI가 틀린 사례 (토글로 4개 과목 이미지 보기)
  {
    id: 14,
    content: <AIErrorSlide />,
  },

  // Slide 15: Q&A - ② 실제 학생 사용 패턴 (필터로 4개 화면)
  {
    id: 15,
    content: <StudentPatternSlide />,
  },

  // Slide 16: Q&A - ③ 좋은 사용 예시 (iframe 전체 높이 사용)
  {
    id: 16,
    content: <GoodUsageSlide />,
  },

  // Slide 17: Q&A - ④ 잘못된 사용 예시 (iframe 전체 높이 사용)
  {
    id: 17,
    content: <BadUsageSlide />,
  },

  // Slide 18: Q&A - ⑤ 자주 묻는 질문 (FAQ)
  {
    id: 18,
    content: <QnASlideItem example={qnaExamples[5]} index={4} total={6} />,
  },

  // Slide 19: Q&A - ⑥ 현재와 앞으로 (Roadmap)
  {
    id: 19,
    content: <QnASlideItem example={qnaExamples[4]} index={5} total={6} />,
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
