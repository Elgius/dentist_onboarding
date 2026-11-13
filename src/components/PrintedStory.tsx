import { storySteps } from '../story'
import { Illustration } from './Illustration'
import { StoryVisual } from './StoryVisual'

const togetherPrompts = [
  'Who is coming with me?',
  'Can I find the entrance in the picture?',
  'What could I bring to help me while I wait?',
  'What would I like to ask the team?',
  'Can I point to the chair and the light?',
  'What would I like the dentist to explain?',
  'Let’s practise my pause signal together.',
  'What would I like to remember about my visit?',
]

function ToothBuddy() {
  return <svg viewBox="0 0 160 170" fill="none" aria-hidden="true">
    <path d="M80 29C37 2 17 32 32 76c9 25 9 65 26 65 16 0 7-43 22-43s6 43 22 43c17 0 17-40 26-65C143 32 123 2 80 29Z" fill="white" stroke="#426b56" strokeWidth="4" />
    <circle cx="61" cy="61" r="4" fill="#233c38" /><circle cx="99" cy="61" r="4" fill="#233c38" />
    <path d="M68 76q12 13 24 0" stroke="#233c38" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="48" cy="74" rx="9" ry="5" fill="#f4c4ae" /><ellipse cx="112" cy="74" rx="9" ry="5" fill="#f4c4ae" />
    <path d="M20 17v18M11 26h18M139 104v16M131 112h16" stroke="#b58935" strokeWidth="3" strokeLinecap="round" />
  </svg>
}

function PageFooter({ page }: { page: number }) {
  return <footer className="print-page-footer"><span>My first dental visit · Read at my pace</span><span>{page} / 9</span></footer>
}

export function PrintedStory() {
  return <div className="printed-story">
    <section className="print-cover">
      <div className="print-book-label"><span>A story to explore together</span><span>8 little steps</span></div>
      <div className="print-cover-title"><div><p className="print-kicker">Hello, dentist!</p><h1>My first<br />dental visit</h1></div><ToothBuddy /></div>
      <p className="print-cover-intro">Let’s see what my visit might be like.<br />I can take it one little step at a time.</p>
      <div className="print-cover-picture"><Illustration scene="clinic" /><span className="print-cover-sticker">My visit.<br />My own pace.</span></div>
      <div className="print-name">This story belongs to <span /></div>
      <section className="print-journey" aria-label="My visit in little steps"><h2>Let’s look inside...</h2><ol>{storySteps.map((step, index) => <li key={step.scene}><span>{index + 1}</span>{step.label}</li>)}</ol></section>
      <p className="print-cover-note">Read with someone you trust. You can pause or read a favourite page again. Every visit can be different.</p>
      <PageFooter page={1} />
    </section>
    {storySteps.map((step, index) => <article className={`printed-step printed-step--${step.scene}`} key={step.scene}>
      <header className="print-step-header"><span className="print-step-number">{index + 1}</span><span>{step.label}</span><span className="print-step-count">Step {index + 1} of 8</span></header>
      <h2>{step.title}</h2>
      <StoryVisual scene={step.scene} printMode />
      <div className="print-story-words">{step.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
      <aside className="print-sensory"><span className="print-sensory-icon" aria-hidden="true">?</span><div><h3>What might I notice?</h3><p>{step.sensory}</p></div></aside>
      <div className="print-together"><ToothBuddy /><div><h3>Let’s explore together</h3><p>{togetherPrompts[index]}</p></div></div>
      <PageFooter page={index + 2} />
    </article>)}
  </div>
}
