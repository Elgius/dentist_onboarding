import { useState } from 'react'
import type { Scene } from '../story'

export function ToothMark() {
  return <svg width="40" height="42" viewBox="0 0 40 42" fill="none" aria-hidden="true"><path d="M20 7C7-2 2 11 8 24c2 5 2 13 6 13s3-13 6-13 2 13 6 13 4-8 6-13C38 11 33-2 20 7Z" fill="#E4EBDD" stroke="#426B56" strokeWidth="2" /></svg>
}

function House() {
  return <g>
    <ellipse cx="232" cy="302" rx="190" ry="15" fill="#CBD8C8" />
    <path d="M68 160L98 135H354L387 160V290H68Z" fill="#FAF9F5" stroke="#426B56" strokeWidth="3" />
    <path d="M58 158L228 60L398 158" fill="#C1D1BC" stroke="#426B56" strokeWidth="4" strokeLinejoin="round" />
    <rect x="199" y="194" width="63" height="96" rx="9" fill="#426B56" /><circle cx="248" cy="242" r="3" fill="#EFDC98" />
    <rect x="101" y="195" width="63" height="52" rx="8" fill="#E4EBDD" stroke="#426B56" strokeWidth="3" /><path d="M132 196V247M101 221H164" stroke="#426B56" strokeWidth="2" />
    <rect x="296" y="195" width="63" height="52" rx="8" fill="#E4EBDD" stroke="#426B56" strokeWidth="3" /><path d="M327 196V247M296 221H359" stroke="#426B56" strokeWidth="2" />
    <circle cx="230" cy="142" r="30" fill="#EFDC98" /><path d="M229 127C214 117 211 133 218 145c2 4 1 11 5 11 4 0 2-12 6-12 4 0 3 12 7 12s3-7 5-11c7-12 4-28-12-18Z" fill="#FAF9F5" stroke="#426B56" strokeWidth="2" />
    <path d="M42 290V244M42 270C15 267 16 242 42 250M42 261C64 260 68 232 42 240" stroke="#426B56" strokeWidth="4" fill="#B7CAA9" />
    <circle cx="357" cy="62" r="27" fill="#EFDC98" /><path d="M90 68h20M100 58v20" stroke="#426B56" strokeWidth="3" />
  </g>
}

function Car({ sage = false }: { sage?: boolean }) {
  return <g className={sage ? 'car car--sage' : 'car car--yellow'}><g transform={sage ? 'translate(82 0) scale(-1 1)' : undefined}>
    <path d="M8 20L17 7Q19 4 25 4H49Q53 4 57 10L64 20H72Q78 20 78 26V32H4V26Q4 20 8 20Z" fill={sage ? '#B7CAA9' : '#EFDC98'} stroke="#426B56" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M20 9H34V20H13ZM39 9H48L56 20H39Z" fill="#FAF9F5" stroke="#426B56" strokeWidth="2" />
    <circle cx="19" cy="32" r="8" fill="#426B56" /><circle cx="62" cy="32" r="8" fill="#426B56" /><circle cx="19" cy="32" r="3" fill="#FAF9F5" /><circle cx="62" cy="32" r="3" fill="#FAF9F5" />
  </g></g>
}

function StoryDrawing({ scene }: { scene: Scene }) {
  const common = { stroke: '#426B56', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return <g {...common} fill="none">
    <ellipse cx="230" cy="302" rx="155" ry="12" fill="#CBD8C8" stroke="none" />
    {scene === 'prepare' && <><path d="M95 95Q165 75 230 110Q295 75 365 95V265Q295 245 230 280Q165 245 95 265Z" fill="#FAF9F5" /><path d="M230 110V280M120 135H192M120 160H180M120 185H192" /><rect x="266" y="135" width="64" height="77" rx="12" fill="#EFDC98" /><path d="M285 160l12 12 18-25" /></>}
    {scene === 'waiting' && <><rect x="105" y="145" width="80" height="85" rx="18" fill="#FAF9F5" /><rect x="245" y="145" width="80" height="85" rx="18" fill="#FAF9F5" /><path d="M110 230V285M180 230V285M250 230V285M320 230V285" /><circle cx="325" cy="80" r="35" fill="#EFDC98" /><path d="M325 60V80L343 90" /></>}
    {scene === 'team' && <><circle cx="175" cy="110" r="39" fill="#FAF9F5" /><circle cx="295" cy="126" r="33" fill="#FAF9F5" /><path d="M105 280V218Q105 170 175 170T245 218V280Z" fill="#C1D1BC" /><path d="M255 185Q340 165 350 225V280H265" fill="#FAF9F5" /><path d="M160 115Q175 129 190 115M280 130Q295 142 310 130M175 200V239M155 220H195" /></>}
    {scene === 'chair' && <><path d="M135 125L198 217H305Q322 217 322 234Q322 250 305 250H180L102 144Q91 127 108 117Q124 108 135 125Z" fill="#C1D1BC" /><rect x="87" y="83" width="58" height="36" rx="15" fill="#FAF9F5" /><path d="M244 250V291M200 293H286M334 86V42H265" /><ellipse cx="265" cy="63" rx="36" ry="18" fill="#EFDC98" /></>}
    {scene === 'mirror' && <><circle cx="205" cy="128" r="66" fill="#FAF9F5" /><circle cx="205" cy="128" r="48" fill="#D7E4DD" /><path d="M249 179L308 271Q318 291 302 298Q289 303 278 284L225 190" fill="#C1D1BC" /><path d="M181 117l31-28M194 143l35-33M335 85h24M347 73v24" /></>}
    {scene === 'pause' && <><path d="M174 282L140 222Q132 205 144 197Q155 190 167 203L184 221V113Q184 98 197 98Q210 98 210 113V175V83Q210 68 224 68Q238 68 238 83V175V102Q238 87 252 87Q266 87 266 102V180V132Q266 117 280 117Q294 117 294 132V224Q294 269 270 282Z" fill="#FAF9F5" /><circle cx="350" cy="100" r="32" fill="#EFDC98" stroke="none" /><path d="M341 88V112M358 88V112" /></>}
    {scene === 'finish' && <><rect x="151" y="61" width="159" height="231" rx="16" fill="#FAF9F5" /><path d="M168 78L260 102V292H168Z" fill="#C1D1BC" /><circle cx="240" cy="197" r="5" fill="#426B56" /><path d="M80 187H135M115 167L135 187L115 207" /><circle cx="354" cy="97" r="28" fill="#EFDC98" stroke="none" /><path d="M342 97l8 9 17-19" /></>}
  </g>
}

export function Illustration({ animated = false, scene = 'clinic' }: { animated?: boolean; scene?: Scene }) {
  const [paused, setPaused] = useState(false)
  return <figure className={`illustration ${animated ? 'illustration--hero' : 'illustration--story'} ${paused ? 'is-paused' : ''}`}>
    <svg className="scene" viewBox={animated ? '0 0 630 430' : '0 0 460 340'} role="img" aria-label={animated || scene === 'clinic' ? 'An illustrated dental clinic, with a small road in front.' : `Illustration: ${scene === 'pause' ? 'a raised hand asking for a pause' : scene}`}>
      {animated ? <><g transform="translate(85 45)"><House /></g><rect x="55" y="355" width="520" height="28" rx="14" fill="#CED8CE" /><path d="M75 369H555" stroke="#FAF9F5" strokeWidth="2" strokeDasharray="16 16" /><Car /><Car sage /></> : scene === 'clinic' ? <House /> : <StoryDrawing scene={scene} />}
    </svg>
    {animated ? <button className="motion-toggle" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Play animation' : 'Pause animation'}</button> : <figcaption>Illustration · your clinic may look different</figcaption>}
  </figure>
}
