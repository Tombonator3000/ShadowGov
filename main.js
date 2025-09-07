import { mountStartScreen } from './js/modules/ui.js';
import { initAudio, setMode, onNowPlayingChange } from './js/modules/audio.js';
import './js/modules/config.js'; // ensure CONFIG loaded
import './js/modules/core.js';   // state/engine side effects
import './js/modules/newspaper.js'; // headlines (extracted)
try { await import('./js/legacy/shadow-cards.legacy.js'); } catch(e) {}

initAudio({ enabled:false });
setMode('menu');
onNowPlayingChange(()=>{});

mountStartScreen();

// Load expansions like in R3
const packs = [
  'expansions/opposition-pack.js',
  'expansions/gov-ops-pack.js',
  'expansions/probing-time-expansion.js',
  'expansions/floridaman-expansion.js',
  'expansions/coldwar-expansion.js'
];
for(const p of packs){ try { await import('./'+p); console.log('[Pack loaded]', p); } catch(e){ console.warn('Pack failed', p, e); } }
