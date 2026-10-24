import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Illustration, ToothMark } from './components/Illustration'
import { StoryVisual } from './components/StoryVisual'
import { preparationTips, storySteps } from './story'
import './App.css'

type PrintView = 'story' | 'preparation' | null
const sheetPrompts = ['My child’s name', 'How my child likes to communicate', 'Sounds, lights or sensations to discuss', 'What helps my child feel comfortable', 'Our agreed way to ask for a pause', 'Questions for the dental team']
const previewGroups = [
  { title: 'Before I go', description: 'Get to know the place.', step: 0 },
  { title: 'At the clinic', description: 'Arrive and meet the team.', step: 1 },
  { title: 'My checkup', description: 'Explore the chair and tools.', step: 4 },
  { title: 'My own pace', description: 'Ask questions or ask for a pause.', step: 6 },
]

function App() {
  const [hash, setHash] = useState(() => window.location.hash)
  const [printView, setPrintView] = useState<PrintView>(null)
  const mainRef = useRef<HTMLElement>(null)
  const storyMatch = /^#story\/([1-8])$/.exec(hash)
  const stepIndex = storyMatch ? Number(storyMatch[1]) - 1 : 0
  const page = storyMatch ? 'story' : hash === '#parents' ? 'parents' : hash === '#steps' ? 'steps' : 'home'
  const step = storySteps[stepIndex]

  useEffect(() => {
    const navigate = () => {
      setHash(window.location.hash)
      requestAnimationFrame(() => {
        mainRef.current?.focus({ preventScroll: true })
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    }
    const afterPrint = () => setPrintView(null)
    window.addEventListener('hashchange', navigate)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('hashchange', navigate)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [])

  useEffect(() => {
    document.title = `${page === 'story' ? step.label : page === 'parents' ? 'For parents & carers' : page === 'steps' ? 'All the steps' : 'Welcome'} · My first dental visit`
  }, [page, step.label])

  const print = (view: PrintView) => {
    flushSync(() => setPrintView(view))
    window.print()
  }

  return <>
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); mainRef.current?.focus() }}>Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="My first dental visit — home"><ToothMark /><span>My first dental visit</span></a>
        <nav aria-label="Main navigation">
          <a href="#steps" aria-current={page === 'story' || page === 'steps' ? 'page' : undefined}>My visit story</a>
          <a href="#parents" aria-current={page === 'parents' ? 'page' : undefined}>For parents &amp; carers</a>
          <button className="button button--small button--outline" onClick={() => print('story')}>Print the story <span aria-hidden="true">↗</span></button>
        </nav>
      </header>

      <main ref={mainRef} id="main-content" tabIndex={-1}>
        {page === 'home' && <>
          <section className="welcome-hero" aria-labelledby="welcome-title">
            <div className="welcome-copy">
              <p className="eyebrow">A little look before you go</p>
              <h1 id="welcome-title">Let’s get to know<br className="desktop-break" /> the dentist.</h1>
              <p className="welcome-description">Explore what a visit may look, sound and feel like. One small step at a time.</p>
              <div className="hero-actions"><a className="button button--primary" href="#story/1">Explore my visit <span aria-hidden="true">→</span></a><a className="button button--outline" href="#parents">I’m a parent or carer</a></div>
              <p className="small-note">Go at your own pace. You can revisit any step.</p>
            </div>
            <Illustration animated />
          </section>
          <section className="journey-preview" aria-labelledby="journey-title">
            <div className="section-heading"><h2 id="journey-title">A visit, in little steps</h2><a className="text-link" href="#steps">8 steps · explore together <span aria-hidden="true">↗</span></a></div>
            <div className="preview-grid">{previewGroups.map((group, i) => <a className="preview-item" key={group.title} href={`#story/${group.step + 1}`}><span className="step-number">0{i + 1}</span><h3>{group.title}</h3><p>{group.description}</p><span className="preview-arrow" aria-hidden="true">↗</span></a>)}</div>
          </section>
        </>}

        {page === 'steps' && <section className="steps-page">
          <p className="eyebrow">My visit story</p><h1>A visit, one step at a time.</h1><p className="lead">Start at the beginning, or choose a step to explore together.</p>
          <ol className="steps-list">{storySteps.map((item, i) => <li key={item.label}><a href={`#story/${i + 1}`}><span className="step-number">0{i + 1}</span><span><strong>{item.label}</strong><span className="step-subtitle">{item.title}</span></span><span aria-hidden="true">→</span></a></li>)}</ol>
        </section>}

        {page === 'story' && <>
          <div className="story-toolbar"><a className="text-link" href="#steps">← All the steps</a><div className="story-progress"><span>Step {stepIndex + 1} of 8</span><div className="progress-dots" aria-label="Choose a story step">{storySteps.map((item, i) => <a key={item.label} className={i <= stepIndex ? 'is-filled' : ''} href={`#story/${i + 1}`} aria-label={`Step ${i + 1}: ${item.label}`} aria-current={i === stepIndex ? 'step' : undefined}><span /></a>)}</div></div><button className="text-button toolbar-print" onClick={() => print('story')}>Print this story ↗</button></div>
          <article className="story-layout" key={stepIndex}>
            <StoryVisual key={step.scene} scene={step.scene} />
            <div className="story-copy"><p className="eyebrow">{step.label}</p><h1>{step.scene === 'clinic' ? <>This is where<br />my visit begins.</> : step.title}</h1>{step.paragraphs.map(p => <p className="story-paragraph" key={p}>{p}</p>)}<details className="sensory-details"><summary>What might I hear or see?<span className="details-symbol" aria-hidden="true" /></summary><p>{step.sensory}</p></details></div>
          </article>
          <div className="story-navigation"><a className="button button--outline" href={stepIndex ? `#story/${stepIndex}` : '#steps'}>← Back</a><p>You can stop here and come back later.</p><a className="button button--primary" href={stepIndex < 7 ? `#story/${stepIndex + 2}` : '#home'}>{stepIndex < 7 ? `Next: ${storySteps[stepIndex + 1].label.toLowerCase()}` : 'Back to the beginning'} <span aria-hidden="true">→</span></a></div>
        </>}

        {page === 'parents' && <section className="parent-page">
          <div className="parent-intro"><p className="eyebrow">For parents &amp; carers</p><h1>A little preparation, together.</h1><p className="lead">Use the story to explore the visit with your child. Pause, repeat a step, or leave it for another day — follow their pace.</p></div>
          <div className="parent-columns"><section className="preparation-tips" aria-labelledby="preparation-title"><h2 id="preparation-title">Before your appointment</h2><ol>{preparationTips.map(([title, description], i) => <li key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></section>
            <aside className="preparation-card"><p className="eyebrow">My preparation sheet</p><h2>What helps my child?</h2><p>A place to note questions, sounds or sensations to discuss, and ways your child likes to communicate.</p><button className="button button--primary" onClick={() => print('preparation')}>Print a preparation sheet <span aria-hidden="true">↗</span></button><p className="small-note">Fill it in together and bring it to your appointment.</p></aside>
          </div>
        </section>}
      </main>
      <footer className="site-footer"><p>{page === 'parents' ? 'Every child and appointment is different. Confirm arrangements with your clinic.' : 'Every visit can be different. Your dental team can explain your plan.'}</p>{page === 'parents' ? <a href="#steps">← Back to my visit story</a> : <p>Read together. Explore at your pace.</p>}</footer>
    </div>
    <div className="print-content">
      {printView === 'preparation' ? <section className="print-sheet"><p className="eyebrow">My first dental visit</p><h1>What helps my child?</h1><p>Fill this in together and bring it to your appointment.</p>{sheetPrompts.map(prompt => <div className="writing-prompt" key={prompt}><h2>{prompt}</h2><div /></div>)}<p className="small-note">Agree any pause signal and support arrangements with your dental team.</p></section> : <><h1>My first dental visit</h1><p>Read together. Explore at your own pace. Every visit can be different.</p>{storySteps.map((item, i) => <article className="printed-step" key={item.label}><p className="eyebrow">Step {i + 1} of 8 · {item.label}</p><h2>{item.title}</h2><StoryVisual scene={item.scene} />{item.paragraphs.map(p => <p key={p}>{p}</p>)}<p className="print-sensory"><strong>What might I hear or see?</strong> {item.sensory}</p></article>)}</>}
    </div>
  </>
}

export default App
