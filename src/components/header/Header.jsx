import React, { useEffect, useState } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_1.jpg'
import HeaderSocials from './HeaderSocials'

const CODE_LINES = [
  'const engineer = {',
  '  name: "Jin Xianwen",',
  '  role: "Software & Data Engineer",',
  '};',
  '',
  'while (engineer.learning) {',
  '  engineer.build();',
  '  engineer.improve();',
  '}',
  '',
  '// 5+ yrs | Java, Go, Python, Spring, Flink, Kafka, K8s, Docker, ML',
]

const TYPING_SPEED = 35
const LINE_DELAY = 450
const RESTART_DELAY = 3500

export const Header = () => {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (lineIndex >= CODE_LINES.length) {
      const restartTimer = setTimeout(() => {
        setLineIndex(0)
        setCharIndex(0)
      }, RESTART_DELAY)

      return () => clearTimeout(restartTimer)
    }

    const currentLine = CODE_LINES[lineIndex]

    if (charIndex < currentLine.length) {
      const typingTimer = setTimeout(() => {
        setCharIndex((previous) => previous + 1)
      }, TYPING_SPEED)

      return () => clearTimeout(typingTimer)
    }

    const lineTimer = setTimeout(() => {
      setLineIndex((previous) => previous + 1)
      setCharIndex(0)
    }, LINE_DELAY)

    return () => clearTimeout(lineTimer)
  }, [lineIndex, charIndex])

  const visibleLines = CODE_LINES.slice(0, lineIndex + 1)

  return (
    <header className="header">
      <div className="header__grid">

        {/* ─────────────── Content ─────────────── */}
        <div className="header__content">

          <div className="header__eyebrow">
            <span className="header__eyebrow-dot" />
            <span>Available for new opportunities</span>
          </div>

          <p className="header__tagline">
            &gt; initializing developer profile_
          </p>

          <h1>
            Jin <span>Xianwen</span>
          </h1>

          <h2>
            Software &amp; Data Engineer
          </h2>

          <p className="header__intro">
            Building reliable, scalable systems and data platforms
            with a focus on backend engineering, distributed systems,
            and modern AI.
          </p>

          {/* ─────────────── Code Window ─────────────── */}
          <div
            className="header__code"
            aria-label="Developer profile code"
          >
            <div className="header__code-header">
              <div className="header__window-controls">
                <span />
                <span />
                <span />
              </div>

              <span className="header__filename">
                engineer.js
              </span>

              <span className="header__code-status">
                ● LIVE
              </span>
            </div>

            <div className="header__code-body">
              {visibleLines.map((line, index) => {
                const isCurrentLine = index === lineIndex
                const displayedText = isCurrentLine
                  ? line.slice(0, charIndex)
                  : line

                return (
                  <div
                    key={`${index}-${line}`}
                    className="header__code-line"
                  >
                    <span className="header__line-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="header__line-prompt">
                      ›
                    </span>

                    <span className="header__line-text">
                      {displayedText}

                      {isCurrentLine &&
                        charIndex < line.length && (
                          <span
                            className="header__code-caret"
                            aria-hidden="true"
                          >
                            ▌
                          </span>
                        )}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <CTA />

          <HeaderSocials />
        </div>

        {/* ─────────────── Visual ─────────────── */}
        <div className="header__visual">

          <div className="header__image-wrapper">
            <div className="header__image-glow" />

            <div className="me">
              <img
                src={ME}
                alt="Jin Xianwen"
                fetchPriority="high"
              />

              <div className="header__scanline" />
              <div className="header__image-overlay" />
            </div>

            <div className="header__image-label">
              <span>PROFILE</span>
              <span>01 / 01</span>
            </div>
          </div>

          {/* ─────────────── Status Card ─────────────── */}
          <div className="header__status-card">

            <div className="header__status-heading">
              <span className="header__status-indicator" />
              SYSTEM STATUS
            </div>

            <div className="header__status-row">
              <span>Status</span>
              <strong>ONLINE</strong>
            </div>

            <div className="header__status-row">
              <span>Availability</span>
              <strong>OPEN TO WORK</strong>
            </div>

            <div className="header__status-row">
              <span>Location</span>
              <strong>ITALY</strong>
            </div>

          </div>
        </div>

        {/* ─────────────── Scroll Indicator ─────────────── */}
        <a
          href="#about"
          className="scroll__down"
          aria-label="Scroll to about section"
        >
          <span>Scroll</span>
          <span className="scroll__arrow">↓</span>
        </a>

      </div>
    </header>
  )
}

export default Header