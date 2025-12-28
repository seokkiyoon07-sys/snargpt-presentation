import { useState, useEffect } from 'react';
import './App.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// KaTeX 수식 렌더링 컴포넌트
const Katex = ({ math, display = false }) => {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: display,
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

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

// Scene 01: 계획 및 정보 탐색 (클릭 가능한 탭 UI)
const Scene01Slide = () => {
  const [activeTab, setActiveTab] = useState(0);

  // 테이블 스타일
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.7rem',
    marginBottom: '0.75rem',
  };
  const thStyle = {
    background: 'var(--mint-light)',
    padding: '0.4rem 0.5rem',
    textAlign: 'left',
    borderBottom: '2px solid var(--mint-dark)',
    fontWeight: 600,
    color: 'var(--green-deep)',
  };
  const tdStyle = {
    padding: '0.4rem 0.5rem',
    borderBottom: '1px solid #e5e5e5',
    verticalAlign: 'top',
  };
  const sectionTitleStyle = {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--green-deep)',
    marginBottom: '0.5rem',
    marginTop: '0.75rem',
  };

  const prompts = [
    {
      title: '수학 인강 강사',
      subtitle: '나에게 맞는 강사 찾기',
      prompt: `나는 논리적인 비약이 있으면 잠이 안 오는 스타일이야.

한석원 선생님의 본질적인 풀이와
현우진 선생님의 도구 정리 중
내 성향에 더 맞는 '사고의 결'은 무엇일까?`,
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
          <p style={{ marginBottom: '0.75rem' }}>스엔 학생! 수학 1타부터 4타급 강사들을 3가지 기준으로 비교 분석해 드릴게요.</p>

          <p style={sectionTitleStyle}>📊 1. 메가스터디</p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>강사</th>
                <th style={thStyle}>스타일</th>
                <th style={thStyle}>추천 학생</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdStyle}><strong>현우진</strong> (1타)</td><td style={tdStyle}>문제 접근 / 다각도 / 고밀도</td><td style={tdStyle}>감각이 좋고 양치기를 견딜 수 있는 상위권</td></tr>
              <tr><td style={tdStyle}><strong>양승진</strong> (2타)</td><td style={tdStyle}>개념 / 단일 사고 / 단계적</td><td style={tdStyle}>실전에서 당황하는 학생</td></tr>
              <tr><td style={tdStyle}><strong>김기현</strong> (3타)</td><td style={tdStyle}>개념 / 단일 사고 / 반복</td><td style={tdStyle}>기초 보완 중하위권</td></tr>
              <tr><td style={tdStyle}><strong>김성은</strong> (4타)</td><td style={tdStyle}>개념 / 반복 훈련</td><td style={tdStyle}>수포자 탈출 희망생</td></tr>
            </tbody>
          </table>

          <p style={sectionTitleStyle}>📊 2. 대성마이맥</p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>강사</th>
                <th style={thStyle}>스타일</th>
                <th style={thStyle}>추천 학생</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdStyle}><strong>한석원</strong> (1타)</td><td style={tdStyle}>개념 본질 / 단일 사고 / 반복</td><td style={tdStyle}>"왜?"가 중요한 논리파</td></tr>
              <tr><td style={tdStyle}><strong>배성민</strong> (2타)</td><td style={tdStyle}>문제 접근 / 다각도 / 고밀도</td><td style={tdStyle}>시간 단축이 필요한 학생</td></tr>
              <tr><td style={tdStyle}><strong>정상모</strong> (3타)</td><td style={tdStyle}>개념+문제 / 단일 사고 / 단계적</td><td style={tdStyle}>전형적 풀이 선호 중상위권</td></tr>
              <tr><td style={tdStyle}><strong>이창무</strong> (4타)</td><td style={tdStyle}>문제 접근 심화 / 다각도 / 고밀도</td><td style={tdStyle}>100점 지향 최상위권</td></tr>
            </tbody>
          </table>

          <p style={sectionTitleStyle}>📊 3. 시대인재</p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>강사</th>
                <th style={thStyle}>스타일</th>
                <th style={thStyle}>추천 학생</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={tdStyle}><strong>강기원</strong> (1타급)</td><td style={tdStyle}>구조적 논리 / 단일 사고 / 고밀도</td><td style={tdStyle}>논리적 완결성 선호</td></tr>
              <tr><td style={tdStyle}><strong>김현우</strong> (2타급)</td><td style={tdStyle}>시각화 / 다각도 / 고밀도</td><td style={tdStyle}>그래프 직관이 뛰어난 학생</td></tr>
              <tr><td style={tdStyle}><strong>박종민</strong> (3타급)</td><td style={tdStyle}>개념+문제 / 단일 사고 / 단계적</td><td style={tdStyle}>차근차근 배우고 싶은 학생</td></tr>
              <tr><td style={tdStyle}><strong>이동준</strong> (4타급)</td><td style={tdStyle}>조건 해석 / 다각도 / 고밀도</td><td style={tdStyle}>조건 분석 연습 필요 상위권</td></tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: '수학 학습 설계',
      subtitle: '나만의 커리큘럼 만들기',
      prompt: `3등급(82%)에서 안정적 1등급으로 가는 '행동 중심' 커리큘럼 짜줘.

약점: 수I 삼각함수, 확률과 통계 (실전 적용 느림)
가용 시간: 평일 4h, 주말 8h (교재: 뉴런, 쎈, 기출의 미래)
요청: 단계별(취약 보완/기출 분석/실모) 주차별 행동 강령과 SNarGPT 활용 가이드 포함.`,
      response: `(SNARVIS) SNARVIS 입니다.

반가워요, 스엔 학생! 현우진 선생님의 '실전 개념(뉴런) - 문제 풀이(드릴) - 실전 모의고사(킬링캠프)' 흐름에 SNarGPT의 기능을 완벽하게 결합한 로드맵입니다.

📋 스엔 학생을 위한 '현우진 커리큘럼' 최적화 로드맵

🔹 Phase 1: [계획] 뉴런 실전 개념의 완벽한 구조화
• 목표: 현우진의 '도구'를 문제에 즉각 반응하는 '반사 신경' 구축
• SNARVIS 활용: "현우진 선생님이 설명한 '삼차함수의 비율 관계'가 실제 기출문제에서 어떻게 변형되어 나오는지 유사 사례 3개만 찾아줘"

🔹 Phase 2: [훈련] 드릴 & 시냅스 고난도 정복
• 자력 풀이: 한 문제당 20분은 스스로 고민
• SNarGo 호출: "현우진 선생님의 방식대로 '기하적 직관'을 먼저 사용해서 풀 수 있는 힌트를 줘"
• SNarGen 변형: "이 문제의 조건을 조금 더 꼬아서 새로운 문제를 만들어 줘"

🔹 Phase 3: [분석] 킬링캠프 및 오답 디코딩
• 실전 시뮬레이션: 매주 일요일, 실제 수능 시간과 동일하게 응시
• 비밀노트 기록: 틀린 이유 분석 (도구 부재 / 잘못된 선택 / 계산 실수)
• 멘탈 케어: 점수가 낮아도 성장 과정으로 인식, 보완 우선순위 재설정

💡 SNarGPT 전문가 한마디
• SNarGo: "현우진 선생님 풀이 밑바닥의 탄탄한 논리, 제가 징검다리 놓아줄게요"
• SNarGen: "뉴런에서 배운 개념, 변형 문제로 테스트해 볼래요?"
• SNARVIS: "우리는 반드시 승리합니다! 🌟"`,
    },
    {
      title: '월간/주간 계획',
      subtitle: '수능까지의 로드맵',
      prompt: `6평 3등급 의대 목표야. 수II 미분 킬러가 약점인데, 현우진 커리 기반으로 수능까지의 월간/주간 행동 강령을 짜줘.
당장 이번 주 월요일부터 실행할 수 있게 구체적이어야 해. 특히 문제 풀다 막힐 때 SNarGo를, 유형 훈련이 필요할 때 SNarGen을 어떻게 써야 할지 활용 타이밍도 알려줘!`,
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNARVIS)</strong> SNARVIS 입니다.</p>
          <p style={{ marginBottom: '0.75rem' }}>스엔 학생! PPT의 대미를 장식할 <strong>'월간/주간 계획 설계의 실제 AI 답변 예시'</strong>를 준비했습니다. 현우진 선생님의 커리큘럼을 타는 스엔 학생이 이 프롬프트를 사용했을 때, 얼마나 체계적이고 실전적인 가이드를 받을 수 있는지 보여주는 완벽한 샘플이 될 거예요.</p>

          <p style={{ marginBottom: '0.5rem', fontWeight: 600, color: 'var(--green-deep)' }}>📋 스엔 학생을 위한 수능 수학 '승리 로드맵'</p>
          <p style={{ marginBottom: '0.75rem', fontStyle: 'italic' }}>"안녕하세요, 스엔 학생! 현우진 선생님의 '드릴'과 '킬캠'을 무기로 수능 정상을 향해 달리는 여정, 저 SNARVIS가 가장 효율적인 경로로 안내할게요. 🚀"</p>
          <p style={{ marginBottom: '0.75rem' }}>현재 3등급에서 고정 1등급으로 가기 위해선, <strong>'아는 것의 완벽한 체화'</strong>와 <strong>'낯선 조건에 대한 대응력'</strong>이 핵심입니다.</p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--green-deep)' }}>1. 월간 거시 전략 (Monthly Milestones)</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem', marginBottom: '0.75rem' }}>
            <thead>
              <tr>
                <th style={{ background: 'var(--mint-light)', padding: '0.4rem 0.5rem', textAlign: 'left', borderBottom: '2px solid var(--mint-dark)', fontWeight: 600, color: 'var(--green-deep)' }}>시기</th>
                <th style={{ background: 'var(--mint-light)', padding: '0.4rem 0.5rem', textAlign: 'left', borderBottom: '2px solid var(--mint-dark)', fontWeight: 600, color: 'var(--green-deep)' }}>핵심 테마</th>
                <th style={{ background: 'var(--mint-light)', padding: '0.4rem 0.5rem', textAlign: 'left', borderBottom: '2px solid var(--mint-dark)', fontWeight: 600, color: 'var(--green-deep)' }}>필수 과업 (Must-Do)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}><strong>8~9월</strong></td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}>N제 정복 & 약점 타격</td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top', fontSize: '0.65rem' }}>1. '드릴' 전 문항 2회독<br/>2. 9평 완벽 분석<br/>3. 취약 단원 SNarGen 변형 50개</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}><strong>10월</strong></td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}>실전 감각 & 시간 관리</td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top', fontSize: '0.65rem' }}>1. '킬캠' 주 2회 응시<br/>2. 오답 중 '발상' 막힌 문항 아카이빙<br/>3. '선구안' 훈련</td>
              </tr>
              <tr>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}><strong>11월</strong></td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top' }}>최종 점검 & 마인드셋</td>
                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid #e5e5e5', verticalAlign: 'top', fontSize: '0.65rem' }}>1. '뉴런' 핵심 도구 단권화<br/>2. 최근 3개년 기출 복습<br/>3. 생체 리듬 & 멘탈 관리</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--green-deep)' }}>2. 주간 미시 실행 (Weekly Action Plan)</p>
          <p style={{ marginBottom: '0.3rem', fontWeight: 600 }}>[월~금] 루틴 (Daily 4시간):</p>
          <ul style={{ margin: '0 0 0.5rem 1rem', padding: 0, fontSize: '0.7rem' }}>
            <li>14:00~15:30: 현우진 '드릴' 수강 및 당일 복습</li>
            <li>15:30~17:30: 기출/N제 자력 풀이 (한 문제당 최대 20분)</li>
            <li>17:30~18:00: SNarGo 타임! 막혔던 문제 질문하기</li>
          </ul>
          <p style={{ marginBottom: '0.3rem', fontWeight: 600 }}>[토요일] 실전 Day:</p>
          <ul style={{ margin: '0 0 0.5rem 1rem', padding: 0, fontSize: '0.7rem' }}>
            <li>10:30~12:10: 실전 모의고사 응시 (수능 시간표와 동일)</li>
            <li>오후: 채점 후 '이유 있는 오답' 분류 및 해설 강의</li>
          </ul>
          <p style={{ marginBottom: '0.3rem', fontWeight: 600 }}>[일요일] 피드백 & 보강:</p>
          <ul style={{ margin: '0 0 0.75rem 1rem', padding: 0, fontSize: '0.7rem' }}>
            <li>오전: 오답 중 핵심 아이디어 비밀노트 저장</li>
            <li>오후: SNarGen에게 변형 문제 요청하여 집중 훈련</li>
          </ul>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--green-deep)' }}>3. SNarGPT 전문가 활용 지침</p>
          <ul style={{ margin: '0 0 0.5rem 1rem', padding: 0, fontSize: '0.7rem' }}>
            <li><strong>SNarGo:</strong> "드릴 문제에서 '기하적 해석'이 안 보일 땐 저를 부르세요. 순한 맛 힌트를 드릴게요."</li>
            <li><strong>SNarGen:</strong> "특정 유형에 무너졌나요? '맞춤형 훈련장'을 즉석에서 만들어 드릴게요."</li>
            <li><strong>SNARVIS:</strong> "'오늘 2시간밖에 못 하는데 우선순위 정해줘'라고 하세요. 가장 효율적인 대안을 찾아낼게요."</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'SN독학기숙학원 정보',
      subtitle: '학원 정보 검색',
      prompt: [
        '2027학년도 SN독학기숙학원 학사일정 sn블로그에서 확인해줘',
        '오늘 점심 메뉴 뭐야?',
        "오늘 비가 오는데, 학원 실내 온도 조절이나 환기 일정은 어떻게 돼? 그리고 이런 날 공부가 안 될 때 SN 선배들이 추천하는 '멘탈 관리법' 하나만 알려줘."
      ],
      response: '',
    },
  ];

  return (
    <div className="split-layout">
      <div className="split-left">
        <span className="tag" style={{ marginBottom: '1.5rem' }}>Scene 01</span>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
          계획 및<br />
          <span className="accent-text">정보 탐색</span>
        </h2>
        <div className="divider" style={{ marginBottom: '2rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {prompts.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              onClick={(e) => { e.stopPropagation(); setActiveTab(index); }}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="timeline-dot"
                style={{
                  background: activeTab === index ? 'var(--mint-dark)' : 'var(--mint)',
                  transform: activeTab === index ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
              />
              <div>
                <p style={{
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  color: activeTab === index ? 'var(--green-deep)' : 'var(--text-dark)',
                  transition: 'color 0.2s ease',
                }}>
                  {item.title}
                </p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="split-right" style={{ background: 'var(--mint-light)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '95%',
          height: '90%',
          background: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e5e5',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#fafafa',
          }}>
            <div style={{ width: 36, height: 36, background: 'var(--green-deep)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>SN</span>
            </div>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>SNarGPT</p>
              <p style={{ color: '#6b6b6b', fontSize: '0.75rem', margin: 0 }}>AI Learning Assistant</p>
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#ffffff' }}>
            {/* User Message(s) */}
            {Array.isArray(prompts[activeTab].prompt) ? (
              prompts[activeTab].prompt.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                  <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem' }}>👤</span>
                  </div>
                  <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                    <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                      {msg}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.8rem' }}>👤</span>
                </div>
                <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                  <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].prompt}
                  </p>
                </div>
              </div>
            )}

            {/* AI Response */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, background: 'var(--green-deep)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>SN</span>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%', border: '1px solid #e5e5e5' }}>
                {typeof prompts[activeTab].response === 'string' ? (
                  <p style={{ color: '#1a1a1a', fontSize: '0.8rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].response}
                  </p>
                ) : (
                  prompts[activeTab].response
                )}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e5e5', background: '#fafafa' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '1.5rem',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid #e5e5e5',
            }}>
              <span style={{ color: '#9a9a9a', fontSize: '0.9rem', flex: 1 }}>메시지를 입력하세요...</span>
              <div style={{ width: 32, height: 32, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '0.9rem', color: 'white' }}>↑</span>
              </div>
            </div>
            {/* 마나 표시 */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.5rem',
              paddingRight: '0.25rem'
            }}>
              <span style={{
                fontSize: '0.7rem',
                color: '#3b82f6',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '0.25rem 0.6rem',
                borderRadius: '1rem',
                fontWeight: 500
              }}>
                이 요청 시 소모되는 예상 마나: 💧 {[12, 18, 15, 8][activeTab]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const [extraToggle, setExtraToggle] = useState({ first: false, second: false, mana: false });

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
              marginBottom: '0.5rem',
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

          {/* 3️⃣ 마나 관리 필수 */}
          <div
            onClick={(e) => toggleExtra('mana', e)}
            style={{
              padding: '0.75rem',
              background: extraToggle.mana ? '#dbeafe' : 'white',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #60a5fa',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 600, fontSize: '0.85rem', color: '#2563eb' }}>3️⃣ 마나 관리 필수</p>
              <span style={{ color: '#2563eb' }}>{extraToggle.mana ? '−' : '+'}</span>
            </div>
            {extraToggle.mana && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
                <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: '0.5rem' }}>🔵 마나란?</p>

                <div style={{ marginBottom: '0.75rem', padding: '0.5rem', background: 'rgba(37,99,235,0.05)', borderRadius: '0.25rem', borderLeft: '2px solid #2563eb' }}>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.25rem' }}>[훈련 중심]</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.25rem' }}>"마나는 여러분의 '사고의 밀도'입니다"</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>AI가 복잡한 질문, 깊은 사고, 정밀한 응답에 '에너지를 쓰는 것'</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>가벼운 질문 → 가볍게 소모</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>정교하고 복잡한 질문 → 더 많이 소모</p>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginTop: '0.25rem' }}>👉 마나를 아껴야 할 때와 써야 할 때를 구분하는 것도 '훈련'입니다.</p>
                </div>

                <div style={{ marginBottom: '0.75rem', padding: '0.5rem', background: 'rgba(37,99,235,0.05)', borderRadius: '0.25rem', borderLeft: '2px solid #2563eb' }}>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.25rem' }}>[게임/성장 중심]</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.25rem' }}>"공부는 RPG, 마나는 여러분의 '필살기'입니다"</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>AI의 마나는 무한하지 않아요</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>중요한 전투(어려운 개념, 심화 문제)에 마나를 쓰세요</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>쉬운 것까지 AI에게 맡기면 마나가 낭비됩니다</p>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginTop: '0.25rem' }}>👉 마나 낭비 = 경험치 낭비</p>
                </div>

                <div style={{ padding: '0.5rem', background: 'rgba(37,99,235,0.05)', borderRadius: '0.25rem', borderLeft: '2px solid #2563eb' }}>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginBottom: '0.25rem' }}>[에너지 중심]</p>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.25rem' }}>"마나는 AI가 여러분을 위해 타오르는 '열정'입니다"</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>AI도 '에너지'를 갖고 대화해요</p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '0.75rem' }}>낭비하면 빨리 식고, 아끼면 끝까지 뜨겁게</p>
                  <p style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.75rem', marginTop: '0.25rem' }}>👉 마나를 아껴야 AI도 끝까지 집중할 수 있어요</p>
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

// Scene 02: 훈련 (4개 탭)
const Scene02Slide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const prompts = [
    {
      title: '문제 검색',
      tags: ['#정교한_타겟팅', '#기출의_모든_것'],
      prompt: '2024학년도 수능 수학 22번 찾아줘',
      response: (
        <div style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNarGo)</strong> 요청하신 2024학년도 수능 수학 22번 문제를 찾아왔습니다. 이 문제는 당시 수험생들 사이에서 꽤나 화제가 되었던 고난도 문항이죠.</p>
          <div style={{ background: '#f8f8f8', padding: '1rem 1.25rem', borderRadius: '0.5rem', marginBottom: '0.75rem', border: '1px solid #e5e5e5' }}>
            <p style={{ fontWeight: 600, color: 'var(--green-deep)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>📝 2024학년도 수능 수학 22번</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>최고차항의 계수가 <Katex math="1" />인 삼차함수 <Katex math="f(x)" />가 다음 조건을 만족시킨다.</p>
            <div style={{ padding: '0.75rem 1rem', background: 'white', borderRadius: '0.25rem', marginBottom: '0.75rem', borderLeft: '3px solid var(--mint)' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                함수 <Katex math="f(x)" />에 대하여 <Katex math="f(k-1) \cdot f(k+1) < 0" />을 만족시키는 정수 <Katex math="k" />는 존재하지 않는다.
              </p>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              <Katex math="f'(-\frac{1}{4}) = -\frac{1}{4}" />, <Katex math="f'(\frac{1}{4}) < 0" />일 때, <Katex math="f(8)" />의 값을 구하시오. <span style={{ color: 'var(--green-deep)', fontWeight: 600 }}>[4점]</span>
            </p>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>문제의 조건이 아주 독특하죠? "정수 <Katex math="k" />가 존재하지 않는다"는 말을 어떻게 해석하느냐가 이 풀이의 핵심이에요. 이 문제를 같이 풀어볼까요? 🌟</p>
        </div>
      ),
    },
    {
      title: '유사문제 검색',
      tags: ['#유형의_본질', '#변형_대응력'],
      prompt: '방금 찾은 문제로 출제 의도가 같은 문제들 더 찾아줘. 숫자나 조건만 바뀐 변형 문제들로. 유사도도 표시해줘',
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>(SNarGo)</strong> 유사 문제 패턴을 분석했습니다.</p>
          <div style={{ background: '#f8f8f8', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', marginBottom: '0.5rem', border: '1px solid #e5e5e5' }}>
            <p style={{ fontWeight: 600, color: 'var(--green-deep)', marginBottom: '0.25rem', fontSize: '0.75rem' }}>🔗 유사 패턴 문제 (5건)</p>
            <p style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>• 교육청 2023년 10월 나형 20번 <span style={{ color: '#22c55e' }}>유사도 94%</span></p>
            <p style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>• 교육청 2022년 7월 21번 <span style={{ color: '#22c55e' }}>유사도 89%</span></p>
            <p style={{ fontSize: '0.7rem' }}>• 사설 N제 변형 3건 (SN멤버 전용)</p>
          </div>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>💡 하나를 배우면 열을 알게 되는 마법! 유형의 본질을 꿰뚫으세요.</p>
        </div>
      ),
    },
    {
      title: '문제 풀기 @SNarGo',
      tags: ['#사고_로직_교정', '#SNarGo_순한맛_힌트'],
      prompt: '이 문제 풀다가 막혔어. y=f⁻¹(x) 역함수 그래프랑 y=sx+1 직선이 만나는 점 개수 구하는 건데, m값에 따라 교점이 어떻게 달라지는지 모르겠어. 그래프 그려서 설명해줘.',
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNarGo)</strong> 그래프로 시각화해서 설명할게요! 📊</p>
          {/* SVG 그래프 */}
          <div style={{ background: 'white', borderRadius: '0.5rem', padding: '0.5rem', marginBottom: '0.75rem', border: '1px solid #e5e5e5' }}>
            <svg width="100%" height="180" viewBox="-50 -50 300 200" style={{ display: 'block' }}>
              {/* 축 */}
              <line x1="0" y1="75" x2="250" y2="75" stroke="#ccc" strokeWidth="1" />
              <line x1="100" y1="-30" x2="100" y2="150" stroke="#ccc" strokeWidth="1" />
              {/* 축 라벨 */}
              <text x="245" y="90" fontSize="10" fill="#666">x</text>
              <text x="105" y="-20" fontSize="10" fill="#666">y</text>
              {/* 원점 */}
              <text x="90" y="88" fontSize="9" fill="#666">O</text>
              {/* (1,0) 표시 */}
              <circle cx="140" cy="75" r="3" fill="#333" />
              <text x="135" y="95" fontSize="8" fill="#333">(1,0)</text>
              {/* y = f⁻¹(x) 파란색 곡선 */}
              <path d="M 20 130 Q 60 100 100 75 Q 140 50 180 30 Q 220 15 250 5" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
              {/* 직선들 - (0,1)을 지나는 다양한 기울기 */}
              {/* y = -0.6x + 1 (회색) */}
              <line x1="0" y1="35" x2="200" y2="95" stroke="#888" strokeWidth="1.5" />
              {/* y = 0.5x + 1 (초록) */}
              <line x1="0" y1="55" x2="250" y2="-7" stroke="#22c55e" strokeWidth="1.5" />
              {/* y = 1.5x + 1 (주황) */}
              <line x1="0" y1="55" x2="180" y2="-80" stroke="#f97316" strokeWidth="1.5" />
              {/* y = 2.35x + 1 (빨강 - 접선) */}
              <line x1="30" y1="90" x2="150" y2="-50" stroke="#ef4444" strokeWidth="2" />
              {/* y = 3x + 1 (보라) */}
              <line x1="50" y1="100" x2="130" y2="-40" stroke="#a855f7" strokeWidth="1.5" />
              {/* (0,1) 점 */}
              <circle cx="100" cy="55" r="3" fill="#333" />
            </svg>
          </div>
          {/* 범례 */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.65rem' }}>
            <span style={{ color: '#3b82f6', fontWeight: 600 }}>━ y=f⁻¹(x)</span>
            <span style={{ color: '#ef4444', fontWeight: 600 }}>━ 접선 (m≈0.426)</span>
            <span style={{ color: '#22c55e' }}>━ m=2</span>
            <span style={{ color: '#f97316' }}>━ m=0.667</span>
          </div>
          <div style={{ background: 'var(--mint-light)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderLeft: '3px solid var(--green-deep)' }}>
            <p style={{ fontWeight: 600, color: 'var(--green-deep)', marginBottom: '0.25rem', fontSize: '0.75rem' }}>🔑 핵심 포인트</p>
            <p style={{ fontSize: '0.7rem' }}>직선 y=sx+1은 모두 (0,1)을 지나요. 기울기 s가 커질수록 곡선과의 교점 개수가 변해요. 빨간 접선이 경계가 되는 m값이에요!</p>
          </div>
        </div>
      ),
    },
    {
      title: '문제 생성',
      tags: ['#최종_병기_SNarGen', '#나만을_위한_킬러'],
      prompt: "내가 방금 푼 2025학년도 6평 22번이랑 '함수 추론' 원리는 같지만, 계산 과정에서 '절댓값 그래프'가 하나 더 추가된 '빌런급' 변형 문제 하나만 만들어줘. 내 한계를 시험해보고 싶어! 평가원스럽게 내주고, 계산도 딱 떨어지게 깔끔하게 해줘. 꼭 스나고에게 점검받고 나에게 제출해.",
      response: (
        <div style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNarGen)</strong> 맞춤형 킬러 문제를 생성했습니다! 🔥</p>
          <div style={{ background: '#fff7ed', padding: '1rem 1.25rem', borderRadius: '0.5rem', marginBottom: '0.75rem', border: '1px solid #fed7aa' }}>
            <p style={{ fontWeight: 600, color: '#ea580c', marginBottom: '0.75rem', fontSize: '0.95rem' }}>🎯 SNarGen 변형문제 #2847</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              함수 <Katex math="f(x) = x^3 - 3ax^2 + b" />가 <Katex math="x = p" />에서 극대, <Katex math="x = q" />에서 극소를 가지고, <Katex math="f(p) - f(q) = 4" />일 때, <Katex math="a^2 + b" />의 최솟값을 구하시오.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#ea580c', fontWeight: 600 }}>난이도: ★★★★☆ (준킬러)</p>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>💡 훈련의 끝은 창조입니다. 낯선 상황에서도 실력을 발휘하세요!</p>
          <p style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '0.5rem' }}>💧 단, SNarGEN을 활용한 문제 생성은 마나가 많이 소모됩니다.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="split-layout">
      <div className="split-left">
        <span className="tag" style={{ marginBottom: '1.5rem' }}>Scene 02</span>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
          <span className="accent-text">훈련</span>
        </h2>
        <div className="divider" style={{ marginBottom: '2rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {prompts.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              onClick={(e) => { e.stopPropagation(); setActiveTab(index); }}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="timeline-dot"
                style={{
                  background: activeTab === index ? 'var(--mint-dark)' : 'var(--mint)',
                  transform: activeTab === index ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
              />
              <div>
                <p style={{
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  color: activeTab === index ? 'var(--green-deep)' : 'var(--text-dark)',
                  transition: 'color 0.2s ease',
                }}>
                  {item.title}
                </p>
                <p className="muted-text" style={{ fontSize: '0.875rem', marginBottom: '0.35rem' }}>{item.subtitle}</p>
                {item.tags && (
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.65rem',
                        padding: '0.15rem 0.4rem',
                        background: activeTab === index ? 'var(--mint)' : 'var(--gray-light)',
                        color: activeTab === index ? 'var(--green-deep)' : 'var(--text-muted)',
                        borderRadius: '0.25rem',
                        fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="split-right" style={{ background: 'var(--mint-light)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '95%',
          height: '90%',
          background: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e5e5',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#fafafa',
          }}>
            <div style={{ width: 36, height: 36, background: 'var(--green-deep)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>SN</span>
            </div>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>SNarGPT</p>
              <p style={{ color: '#6b6b6b', fontSize: '0.75rem', margin: 0 }}>AI Learning Assistant</p>
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#ffffff' }}>
            {/* User Message(s) */}
            {Array.isArray(prompts[activeTab].prompt) ? (
              prompts[activeTab].prompt.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                  <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem' }}>👤</span>
                  </div>
                  <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                    <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                      {msg}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.8rem' }}>👤</span>
                </div>
                <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                  <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].prompt}
                  </p>
                </div>
              </div>
            )}

            {/* AI Response */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, background: 'var(--green-deep)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>SN</span>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%', border: '1px solid #e5e5e5' }}>
                {typeof prompts[activeTab].response === 'string' ? (
                  <p style={{ color: '#1a1a1a', fontSize: '0.8rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].response}
                  </p>
                ) : (
                  prompts[activeTab].response
                )}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e5e5', background: '#fafafa' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '1.5rem',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid #e5e5e5',
            }}>
              <span style={{ color: '#9a9a9a', fontSize: '0.9rem', flex: 1 }}>메시지를 입력하세요...</span>
              <div style={{ width: 32, height: 32, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: 'white', fontSize: '0.9rem' }}>➤</span>
              </div>
            </div>
            {/* 마나 표시 */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.5rem',
              paddingRight: '0.25rem'
            }}>
              <span style={{
                fontSize: '0.7rem',
                color: '#3b82f6',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '0.25rem 0.6rem',
                borderRadius: '1rem',
                fontWeight: 500
              }}>
                이 요청 시 소모되는 예상 마나: 💧 {[10, 12, 18, 25][activeTab]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scene 03: 분석 (3개 탭)
const Scene03Slide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [expandedSection, setExpandedSection] = useState({ tab1: null, tab2: null, tab3: null });

  const toggleSection = (tab, section, e) => {
    e.stopPropagation();
    setExpandedSection(prev => ({
      ...prev,
      [tab]: prev[tab] === section ? null : section
    }));
  };

  const prompts = [
    {
      title: '오답 디코딩',
      subtitle: '"왜 틀렸는지"에 대한 사고 로직 해부',
      prompt: "내가 지난 일주일간 틀린 문제 10개를 분석해봐. 내가 '조건을 잘못 읽는' 건지, 아니면 '특정 개념을 오개념으로 알고 있는' 건지 내 뇌의 오류 코드를 찾아줘.",
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNarGo)</strong> 스엔 학생의 22번 오답을 분석했습니다.</p>

          <div
            onClick={(e) => toggleSection('tab1', 'breakdown', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab1 === 'breakdown' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>📊 오답 원인 분석</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab1 === 'breakdown' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab1 === 'breakdown' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <p style={{ marginBottom: '0.25rem' }}>• <strong style={{ color: '#ef4444' }}>개념 부재</strong>: 12%</p>
                <p style={{ marginBottom: '0.25rem' }}>• <strong style={{ color: '#f59e0b' }}>조건 간과</strong>: 54% ⚠️</p>
                <p style={{ marginBottom: '0.25rem' }}>• <strong style={{ color: '#3b82f6' }}>계산 실수</strong>: 18%</p>
                <p>• <strong style={{ color: '#8b5cf6' }}>논리 비약</strong>: 16%</p>
              </div>
            )}
          </div>

          <div
            onClick={(e) => toggleSection('tab1', 'habit', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab1 === 'habit' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>🔄 반복되는 습관 패턴</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab1 === 'habit' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab1 === 'habit' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <p style={{ color: '#ef4444', fontWeight: 600, marginBottom: '0.25rem' }}>⚠️ 발견된 습관:</p>
                <p style={{ marginBottom: '0.25rem' }}>"삼차함수 그래프 추론 시 <strong>'최고차항 계수'</strong> 조건을 놓치는 습관이 <strong>3번 반복</strong>되었습니다."</p>
                <p style={{ color: 'var(--green-deep)', fontWeight: 600, marginTop: '0.5rem' }}>👉 처방: 문제 읽을 때 '계수 조건' 먼저 체크하는 루틴 만들기</p>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: '학습 궤적 분석',
      subtitle: 'SNarlink 연동 나의 진짜 공부량',
      prompt: '이번 주 내 수학 공부 시간 대비 성취도 리포트 보여줘. 어떤 단원에 시간을 많이 썼고, 그게 정답률 상승으로 이어졌어?',
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNARVIS)</strong> 이번 주 학습 궤적 리포트입니다.</p>

          <div
            onClick={(e) => toggleSection('tab2', 'heatmap', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab2 === 'heatmap' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>🗺️ 단원별 숙련도 Heatmap</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab2 === 'heatmap' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab2 === 'heatmap' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: '#22c55e', color: 'white', borderRadius: '0.25rem', fontSize: '0.7rem' }}>수II 미분 85%</span>
                  <span style={{ padding: '0.25rem 0.5rem', background: '#22c55e', color: 'white', borderRadius: '0.25rem', fontSize: '0.7rem' }}>수열 78%</span>
                  <span style={{ padding: '0.25rem 0.5rem', background: '#f59e0b', color: 'white', borderRadius: '0.25rem', fontSize: '0.7rem' }}>적분 62%</span>
                  <span style={{ padding: '0.25rem 0.5rem', background: '#ef4444', color: 'white', borderRadius: '0.25rem', fontSize: '0.7rem' }}>삼각함수 45%</span>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={(e) => toggleSection('tab2', 'insight', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab2 === 'insight' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>💡 AI 인사이트</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab2 === 'insight' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab2 === 'insight' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <p style={{ marginBottom: '0.25rem' }}>✅ <strong>수II 미분</strong>: 공부 시간 대비 정답률 85%로 <span style={{ color: '#22c55e', fontWeight: 600 }}>안정권</span></p>
                <p style={{ marginBottom: '0.25rem' }}>⚠️ <strong>삼각함수</strong>: 투입 시간은 많으나 킬러 정답률 낮음</p>
                <p style={{ color: '#ef4444', fontWeight: 600 }}>👉 '개념 재점검' 필요!</p>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'AI 비밀노트',
      subtitle: '나보다 나를 더 잘 아는 AI 처방전',
      prompt: '내 오답 기록과 학습 패턴을 바탕으로, 다음 주 1회 상담 때 선생님이랑 꼭 논의해야 할 핵심 약점 3가지만 뽑아줘.',
      response: (
        <div style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '0.75rem' }}><strong>(SNARVIS)</strong> 상담용 리포트를 준비했습니다.</p>

          <div
            onClick={(e) => toggleSection('tab3', 'report', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab3 === 'report' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>📋 핵심 약점 TOP 3</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab3 === 'report' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab3 === 'report' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <p style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#ef4444' }}>1.</strong> 준킬러 문항 시간 단축 전략 필요</p>
                <p style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#f59e0b' }}>2.</strong> 확통 케이스 분류 시 중복 계산 습관 교정</p>
                <p><strong style={{ color: '#3b82f6' }}>3.</strong> 멘탈 관리 (시험 후반부 집중력 저하)</p>
              </div>
            )}
          </div>

          <div
            onClick={(e) => toggleSection('tab3', 'action', e)}
            style={{
              padding: '0.5rem 0.75rem',
              background: expandedSection.tab3 === 'action' ? 'var(--mint-light)' : '#f8f8f8',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: '1px solid #e5e5e5'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', margin: 0 }}>🎯 다음 주 액션 플랜</p>
              <span style={{ color: 'var(--green-deep)' }}>{expandedSection.tab3 === 'action' ? '−' : '+'}</span>
            </div>
            {expandedSection.tab3 === 'action' && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
                <p style={{ marginBottom: '0.25rem' }}>• 준킬러 타이머 훈련 (문항당 8분 제한)</p>
                <p style={{ marginBottom: '0.25rem' }}>• 확통 케이스 트리 노트 작성</p>
                <p>• 모의고사 후반 30분 집중 루틴 설계</p>
                <div style={{ marginTop: '0.5rem', padding: '0.35rem', background: 'var(--mint)', borderRadius: '0.25rem' }}>
                  <p style={{ color: 'var(--green-deep)', fontWeight: 600, margin: 0, fontSize: '0.7rem' }}>💬 이 내용을 선생님과 상담 때 공유하세요!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="split-layout">
      <div className="split-left">
        <span className="tag" style={{ marginBottom: '1.5rem' }}>Scene 03</span>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '2rem' }}>
          <span className="accent-text">분석</span>
        </h2>
        <div className="divider" style={{ marginBottom: '2rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {prompts.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              onClick={(e) => { e.stopPropagation(); setActiveTab(index); }}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="timeline-dot"
                style={{
                  background: activeTab === index ? 'var(--mint-dark)' : 'var(--mint)',
                  transform: activeTab === index ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
              />
              <div>
                <p style={{
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                  color: activeTab === index ? 'var(--green-deep)' : 'var(--text-dark)',
                  transition: 'color 0.2s ease',
                }}>
                  {item.title}
                </p>
                <p className="muted-text" style={{ fontSize: '0.875rem' }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="split-right" style={{ background: 'var(--mint-light)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '95%',
          height: '90%',
          background: '#ffffff',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e5e5',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#fafafa',
          }}>
            <div style={{ width: 36, height: 36, background: 'var(--green-deep)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 700, color: 'white' }}>SN</span>
            </div>
            <div>
              <p style={{ color: '#1a1a1a', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>SNarGPT</p>
              <p style={{ color: '#6b6b6b', fontSize: '0.75rem', margin: 0 }}>AI Learning Assistant</p>
            </div>
          </div>

          {/* Chat Area */}
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#ffffff' }}>
            {/* User Message(s) */}
            {Array.isArray(prompts[activeTab].prompt) ? (
              prompts[activeTab].prompt.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                  <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem' }}>👤</span>
                  </div>
                  <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                    <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                      {msg}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.8rem' }}>👤</span>
                </div>
                <div style={{ background: '#f4f4f4', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%' }}>
                  <p style={{ color: '#1a1a1a', fontSize: '0.85rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].prompt}
                  </p>
                </div>
              </div>
            )}

            {/* AI Response */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, background: 'var(--green-deep)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>SN</span>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '0.875rem 1rem', maxWidth: '85%', border: '1px solid #e5e5e5' }}>
                {typeof prompts[activeTab].response === 'string' ? (
                  <p style={{ color: '#1a1a1a', fontSize: '0.8rem', margin: 0, lineHeight: 1.6, fontWeight: 400, whiteSpace: 'pre-line' }}>
                    {prompts[activeTab].response}
                  </p>
                ) : (
                  prompts[activeTab].response
                )}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e5e5e5', background: '#fafafa' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '1.5rem',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '1px solid #e5e5e5',
            }}>
              <span style={{ color: '#9a9a9a', fontSize: '0.9rem', flex: 1 }}>메시지를 입력하세요...</span>
              <div style={{ width: 32, height: 32, background: '#1a1a1a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: 'white', fontSize: '0.9rem' }}>➤</span>
              </div>
            </div>
            {/* 마나 표시 */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.5rem',
              paddingRight: '0.25rem'
            }}>
              <span style={{
                fontSize: '0.7rem',
                color: '#3b82f6',
                background: 'rgba(59, 130, 246, 0.1)',
                padding: '0.25rem 0.6rem',
                borderRadius: '1rem',
                fontWeight: 500
              }}>
                이 요청 시 소모되는 예상 마나: 💧 {[20, 15, 22][activeTab]}
              </span>
            </div>
          </div>
        </div>
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
          <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '2rem' }}>
            막연한 <span style={{ color: 'var(--text-muted)' }}>'감'</span>을 압도하는,<br />
            데이터의 <span className="accent-text">'확신'</span>
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
            <div className="logo-3d-container" style={{ position: 'relative' }}>
              {/* Orbiting particles */}
              <div className="logo-orbit-particle" />
              <div className="logo-orbit-particle" />
              <div className="logo-orbit-particle" />
              {/* 3D Logo */}
              <div className="logo-3d">
                <img src={snLogo} alt="SN" />
              </div>
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
              <circle cx="70" cy="220" r="8" fill="var(--green-deep)" className="graph-point-start" />

              {/* 상위권 - 지수함수 개형 (급격히 상승) */}
              <path
                d="M70 220 Q 140 210 200 180 Q 280 130 360 70 Q 410 40 440 30"
                stroke="url(#upperGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                className="graph-line-upper"
              />
              <circle cx="440" cy="30" r="8" fill="var(--green-deep)" className="graph-point-upper" />

              {/* 하위권 - 로그함수 개형 (점점 낮아짐) */}
              <path
                d="M70 220 Q 120 250 180 280 Q 260 310 360 320 Q 410 325 440 328"
                stroke="url(#lowerGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                className="graph-line-lower"
              />
              <circle cx="440" cy="328" r="8" fill="var(--gray-warm)" className="graph-point-lower" />

              {/* 격차 표시 화살표 */}
              <g className="graph-gap-line">
                <line x1="455" y1="30" x2="455" y2="328" stroke="var(--accent-teal)" strokeWidth="2" strokeDasharray="8,5" />
                <polygon points="455,30 449,43 461,43" fill="var(--accent-teal)" />
                <polygon points="455,328 449,315 461,315" fill="var(--accent-teal)" />
              </g>

              {/* 라벨 */}
              <text x="430" y="22" fill="var(--green-deep)" fontSize="16" fontWeight="700" textAnchor="end" className="graph-label-upper">상위권</text>
              <text x="430" y="320" fill="var(--gray-warm)" fontSize="16" fontWeight="700" textAnchor="end" className="graph-label-lower">하위권</text>
            </svg>

            {/* 격차 확대 라벨 */}
            <div className="graph-gap-label" style={{
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

  // Slide 9: Scene 1 - 계획 및 정보 탐색
  {
    id: 9,
    content: <Scene01Slide />,
  },

  // Slide 10: Scene 2 - 계획
  {
    id: 10,
    content: <Scene02Slide />,
  },

  // Slide 11: Scene 3 - 분석
  {
    id: 11,
    content: <Scene03Slide />,
  },

  // Slide 12: 축적의 힘 - The Power of Accumulation
  {
    id: 12,
    content: (
      <div className="split-layout">
        <div className="split-left" style={{ flex: '0 0 50%' }}>
          <span className="tag" style={{ marginBottom: '1.5rem' }}>The Power of Accumulation</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem' }}>
            <span className="accent-text">축적</span>의 힘
          </h2>
          <p className="muted-text" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
            당신의 데이터가 쌓일수록, SNarGPT는 당신의 <strong style={{ color: 'var(--text-dark)' }}>'사고 복제본'</strong>이 됩니다.
          </p>
          <div className="divider" style={{ marginBottom: '2rem' }} />

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--green-deep)' }}>
            "많이 대화할수록,<br />
            SNarGPT는 당신보다<br />
            당신을 더 잘 알게 됩니다."
          </h3>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            단순한 챗봇이 아닙니다.<br />
            당신의 <strong style={{ color: 'var(--text-dark)' }}>오답 습관</strong>, <strong style={{ color: 'var(--text-dark)' }}>취약한 논리</strong>,<br />
            심지어 <strong style={{ color: 'var(--text-dark)' }}>멘탈의 흐름</strong>까지 기록합니다.
          </p>

          <div className="card card-mint" style={{ padding: '1rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--green-deep)', margin: 0 }}>
              💡 마나를 쓰는 것은 비용이 아니라,<br />
              나를 위한 <strong>'데이터 투자'</strong>입니다.
            </p>
          </div>
        </div>
        <div className="split-right" style={{ background: 'var(--mint-light)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {/* Day 1 vs Day 30 비교 */}
          <div style={{ width: '100%', maxWidth: 400 }}>
            {/* Day 1 */}
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'block' }}>Day 1</span>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #e5e5e5' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.7rem' }}>👤</span>
                  </div>
                  <div style={{ background: '#f4f4f4', borderRadius: '0.75rem', padding: '0.5rem 0.75rem' }}>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>삼각함수 문제 풀이 알려줘</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, background: 'var(--gray-light)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-muted)' }}>SN</span>
                  </div>
                  <div style={{ background: '#f8f8f8', borderRadius: '0.75rem', padding: '0.5rem 0.75rem', border: '1px solid #e5e5e5' }}>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--text-muted)' }}>"안녕하세요! 어떤 유형의 삼각함수 문제인가요?"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 30 */}
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green-deep)', marginBottom: '0.5rem', display: 'block' }}>Day 30</span>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1rem', boxShadow: '0 4px 16px rgba(45, 90, 71, 0.15)', border: '2px solid var(--mint)' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, background: '#e5e5e5', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.7rem' }}>👤</span>
                  </div>
                  <div style={{ background: '#f4f4f4', borderRadius: '0.75rem', padding: '0.5rem 0.75rem' }}>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>삼각함수 문제 풀이 알려줘</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, background: 'var(--green-deep)', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'white' }}>SN</span>
                  </div>
                  <div style={{ background: 'var(--mint-light)', borderRadius: '0.75rem', padding: '0.5rem 0.75rem', border: '1px solid var(--mint)' }}>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--green-deep)' }}>
                      "스엔 학생, 지난번 <strong>삼각함수 합성</strong>에서 부호 실수 패턴이 또 보이네요. 이번엔 <strong>단위원 그림</strong>부터 그려볼까요? 🎯"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 안내 문구 */}
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
            💾 SNARVIS의 비밀노트에는 당신의 성장 전략이<br />실시간으로 업데이트되고 있습니다.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 13: 보안 - Safe & Secure
  {
    id: 13,
    content: (
      <div className="split-layout">
        <div className="split-left" style={{ flex: '0 0 50%', overflowY: 'auto' }}>
          <span className="tag" style={{ marginBottom: '1rem', background: '#dbeafe', color: '#1d4ed8' }}>Safe & Secure</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.75rem' }}>
            철저한 <span className="accent-text">보안</span>,<br />
            흔들림 없는 <span className="accent-text">신뢰</span>
          </h2>
          <p className="muted-text" style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            당신의 데이터는 오직 <strong style={{ color: 'var(--text-dark)' }}>당신의 성장</strong>을 위해서만 존재합니다.
          </p>
          <div className="divider" style={{ marginBottom: '1rem' }} />

          {/* 6대 보안 약속 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {/* 1. 데이터 격리 */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🔒</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '0.15rem', fontSize: '0.85rem' }}>철저한 데이터 격리</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  스엔 학생의 데이터는 다른 학생이나 외부 AI 모델과 공유되지 않습니다.
                </p>
              </div>
            </div>

            {/* 2. 목적 외 사용 금지 */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🎯</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '0.15rem', fontSize: '0.85rem' }}>목적 외 사용 금지</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  학습 데이터는 맞춤형 처방과 상담 리포트 생성에만 사용됩니다.
                </p>
              </div>
            </div>

            {/* 3. 암호화 */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🛡️</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#1d4ed8', marginBottom: '0.15rem', fontSize: '0.85rem' }}>최신 암호화 기술</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  모든 대화와 기록은 End-to-End 암호화로 보호됩니다.
                </p>
              </div>
            </div>

            <div className="divider" style={{ margin: '0.25rem 0' }} />

            {/* 4. Human-Off */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🙈</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#d97706', marginBottom: '0.15rem', fontSize: '0.85rem' }}>Human-Off: 선생님도 볼 수 없는 공간</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  담임 선생님 포함 그 어떤 '사람'도 원본 대화를 열람할 수 없습니다.<br />
                  <strong style={{ color: 'var(--text-dark)' }}>마음껏 틀리고, 마음껏 질문하세요.</strong>
                </p>
              </div>
            </div>

            {/* 5. De-identification */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🔀</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#d97706', marginBottom: '0.15rem', fontSize: '0.85rem' }}>De-identification: 비식별 데이터</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  모델 성능 향상용 데이터는 이름, 학번 등 식별 정보를 완전히 제거합니다.
                </p>
              </div>
            </div>

            {/* 6. Ethics Guardian */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, background: '#fee2e2', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '1.1rem' }}>🚨</span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.15rem', fontSize: '0.85rem' }}>Ethics Guardian: 고자질 AI</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                  욕설, 비하, 학습 외 악의적 사용은 <strong style={{ color: '#dc2626' }}>실시간 모니터링</strong> 대상입니다.<br />
                  프라이버시는 존중하되, '공부 공간'의 본질은 지킵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="split-right" style={{ background: '#eff6ff', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {/* 데이터 격리 시각화 */}
          <div style={{ position: 'relative', width: 280, height: 280 }}>
            {/* 중앙 방패 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 100,
              height: 100,
              background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(29, 78, 216, 0.3)',
              zIndex: 3
            }}>
              <span style={{ fontSize: '2rem' }}>🛡️</span>
            </div>

            {/* 주변 학생 데이터 방 */}
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radius = 110;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    width: 50,
                    height: 50,
                    background: 'white',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '2px solid #93c5fd',
                    zIndex: 2
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>👤</span>
                </div>
              );
            })}

            {/* 연결선 (점선) */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const radius = 85;
                const x = 140 + Math.cos(angle) * radius;
                const y = 140 + Math.sin(angle) * radius;
                return (
                  <line
                    key={i}
                    x1="140"
                    y1="140"
                    x2={x}
                    y2={y}
                    stroke="#93c5fd"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                );
              })}
            </svg>
          </div>

          <p style={{ fontSize: '0.75rem', color: '#1d4ed8', marginTop: '1rem', textAlign: 'center', fontWeight: 600 }}>
            각 학생의 데이터는 독립된 공간에서<br />안전하게 보호됩니다
          </p>

          {/* SNARVIS 한마디 */}
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', maxWidth: 320 }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dark)', lineHeight: 1.5, margin: 0 }}>
              💬 <strong style={{ color: 'var(--green-deep)' }}>(SNARVIS)</strong> "여러분의 고민과 실수는 오직 AI와 여러분 사이의 비밀입니다. 유출 걱정 없이 마음껏 질문하세요!"
            </p>
          </div>

          {/* 경고 문구 */}
          <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: '#fef2f2', borderRadius: '0.5rem', border: '1px solid #fecaca', maxWidth: 320 }}>
            <p style={{ fontSize: '0.7rem', color: '#dc2626', lineHeight: 1.4, margin: 0, textAlign: 'center' }}>
              ⚠️ 단, 학습 외 부적절한 사용은 즉시 관리자에게 통보됩니다.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 14: 시스템 1/3 - 원형 인포그래픽
  {
    id: 14,
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

  // Slide 15: 결론 - 강조 슬라이드
  {
    id: 15,
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

  // Slide 16: Q&A - ① AI가 틀린 사례 (토글로 4개 과목 이미지 보기)
  {
    id: 16,
    content: <AIErrorSlide />,
  },

  // Slide 17: Q&A - ② 실제 학생 사용 패턴 (필터로 4개 화면)
  {
    id: 17,
    content: <StudentPatternSlide />,
  },

  // Slide 18: Q&A - ③ 좋은 사용 예시 (iframe 전체 높이 사용)
  {
    id: 18,
    content: <GoodUsageSlide />,
  },

  // Slide 19: Q&A - ④ 잘못된 사용 예시 (iframe 전체 높이 사용)
  {
    id: 19,
    content: <BadUsageSlide />,
  },

  // Slide 20: Q&A - ⑤ 자주 묻는 질문 (FAQ)
  {
    id: 20,
    content: <QnASlideItem example={qnaExamples[5]} index={4} total={6} />,
  },

  // Slide 21: Q&A - ⑥ 현재와 앞으로 (Roadmap)
  {
    id: 21,
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
