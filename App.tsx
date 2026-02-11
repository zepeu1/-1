import { useState } from 'react';
import { characters, timeline, missions } from './data';
import { Character, FactionType, Mission } from './types';
import { 
  Zap, 
  Users, 
  ChevronRight, 
  Activity, 
  Crosshair, 
  MapPin, 
  Radio, 
  Wifi, 
  Target 
} from 'lucide-react';

const SystemTicker = () => (
  <div className="fixed top-0 left-0 right-0 z-[60] bg-neon-red/10 border-b border-neon-red/30 h-8 flex items-center overflow-hidden pointer-events-none">
    <div className="animate-marquee whitespace-nowrap text-[10px] font-mono font-bold text-neon-red flex items-center gap-8">
      <span>WARNING: ACID RAIN PREDICTED IN SECTOR 4</span>
      <span>///</span>
      <span>DISTORTION LEVELS RISING IN INCHEON</span>
      <span>///</span>
      <span>K.S.A CURFEW IN EFFECT 22:00-06:00</span>
      <span>///</span>
      <span>REPORT ANY SIGNS OF MUTATION IMMEDIATELY</span>
      <span>///</span>
      <span>WHITE BONE CULT ACTIVITY DETECTED NEAR SECTOR 9</span>
      <span>///</span>
      <span>WATER RATIONING REDUCED TO 500ML PER DAY</span>
      <span>///</span>
      <span>DO NOT APPROACH UNIDENTIFIED OBJECTS</span>
    </div>
  </div>
);

const CharacterCard = ({ char }: { char: Character }) => {
  return (
    <div className="group relative bg-dark-gray border border-slate-800 hover:border-slate-600 transition-all duration-300 overflow-hidden">
      {/* Image Overlay */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent z-10"></div>
        <img 
          src={`https://igx.kr/n/hM/${char.code}/1`} 
          alt={char.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-2xl font-bold font-sans text-white tracking-wider flex items-center gap-2">
            {char.name} 
            <span className="text-xs font-mono opacity-50 px-1 border border-white/20">{char.rank}</span>
          </h3>
          <p className="text-sm text-slate-400 font-mono">{char.position}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
            {char.keywords.map(k => (
                <span key={k} className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-400 px-2 py-1 rounded">
                    {k}
                </span>
            ))}
        </div>
        
        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex items-start gap-2">
            <Crosshair size={14} className="mt-1 text-neon-red shrink-0" />
            <p><span className="text-slate-500">Weapon:</span> {char.weapon}</p>
          </div>
          <div className="flex items-start gap-2">
            <Zap size={14} className="mt-1 text-neon-cyan shrink-0" />
            <p><span className="text-slate-500">Ability:</span> {char.ability}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800">
          <p className="font-mono text-xs italic text-slate-500">"{char.quote}"</p>
        </div>
      </div>

      {/* Glitch Effect on Hover */}
      <div className="absolute inset-0 bg-neon-red/5 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-overlay transition-opacity" />
    </div>
  );
};

const MissionCard = ({ mission }: { mission: Mission }) => {
  const isClosed = mission.status !== 'OPEN';
  
  return (
    <div className={`relative p-6 border ${isClosed ? 'border-slate-800 bg-slate-900/30' : 'border-slate-600 bg-slate-900/80'} hover:border-neon-red transition-colors group`}>
      <div className="flex justify-between items-start mb-4">
        <div className="font-mono text-xs text-slate-500">{mission.id}</div>
        <div className={`text-[10px] px-2 py-1 border ${
          mission.difficulty === 'SUICIDE' ? 'border-neon-red text-neon-red animate-pulse' :
          mission.difficulty === 'EXTREME' ? 'border-orange-500 text-orange-500' :
          'border-neon-cyan text-neon-cyan'
        }`}>
          {mission.difficulty}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-red transition-colors">{mission.title}</h3>
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
        <MapPin size={12} /> {mission.location}
      </div>
      
      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
        {mission.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <div className="text-xs font-mono text-slate-500">
          REWARD: <span className="text-slate-300">{mission.reward}</span>
        </div>
        <button disabled={isClosed} className={`text-xs px-3 py-1 font-bold ${
          isClosed ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-white text-black hover:bg-neon-red hover:text-white'
        } transition-colors uppercase`}>
          {mission.status === 'IN_PROGRESS' ? 'ASSIGNED' : 'ACCEPT'}
        </button>
      </div>

      {mission.status === 'IN_PROGRESS' && (
        <div className="absolute top-4 right-1/2 translate-x-1/2 -rotate-12 border-2 border-yellow-500 text-yellow-500 px-4 py-1 text-xl font-black opacity-50 pointer-events-none">
          IN PROGRESS
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeFaction, setActiveFaction] = useState<FactionType | 'ALL'>('ALL');

  const filteredCharacters = activeFaction === 'ALL' 
    ? characters 
    : characters.filter(c => c.faction === activeFaction);

  return (
    <div className="min-h-screen bg-deep-black text-slate-200 font-sans selection:bg-neon-red selection:text-white overflow-x-hidden pt-8">
      
      <SystemTicker />

      {/* Nav */}
      <nav className="fixed top-8 w-full z-50 bg-deep-black/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter text-white flex items-center gap-2">
            <Activity className="text-neon-red animate-pulse-fast" size={20} />
            DISTORTION<span className="text-slate-600">.SYS</span>
          </div>
          <div className="flex gap-6 text-xs font-mono text-slate-400">
            <a href="#world" className="hover:text-neon-cyan transition-colors">WORLD</a>
            <a href="#ops" className="hover:text-neon-cyan transition-colors">OPERATIONS</a>
            <a href="#database" className="hover:text-neon-cyan transition-colors">DATABASE</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center border-b border-slate-800 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-deep-black to-deep-black"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-4 flex justify-center">
            <span className="px-3 py-1 border border-neon-red/30 bg-neon-red/10 text-neon-red text-xs font-mono tracking-widest animate-pulse">
              WARNING: REALITY INSTABILITY DETECTED
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-white glitch-text" data-text="DISTORTION">
            DISTORTION
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-mono max-w-2xl mx-auto mb-12">
            2250 KOREA / POST-APOCALYPSE / DARK FANTASY
            <br />
            <span className="text-slate-600 text-sm">SURVIVAL RATE: 1.0%</span>
          </p>
          
          <button className="group relative px-8 py-4 bg-white text-black font-bold font-mono tracking-widest hover:bg-neon-cyan hover:text-black transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              INITIALIZE RP <ChevronRight size={16} />
            </span>
            <div className="absolute inset-0 bg-neon-cyan transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          </button>
        </div>

        <div className="absolute bottom-8 left-8 font-mono text-xs text-slate-600">
            SYSTEM_ID: KSA-2250-X<br/>
            STATUS: CRITICAL
        </div>
      </header>

      {/* World Section */}
      <section id="world" className="py-24 px-4 border-b border-slate-800 bg-dark-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <MapPin className="text-neon-cyan" />
            <h2 className="text-3xl font-bold tracking-tight">WORLDVIEW TIMELINE</h2>
          </div>

          <div className="relative border-l border-slate-700 ml-4 space-y-12">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-800 border border-slate-500 rounded-full group-hover:bg-neon-cyan group-hover:border-neon-cyan transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <span className="font-mono text-neon-cyan text-sm w-32 shrink-0">{event.year}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-2xl">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
            {[
              { label: 'K.S.A', title: 'Korea Survivors Association', desc: '서울 요새를 거점으로 한 공식 생존자 정부.', color: 'border-blue-500' },
              { label: 'White Bone', title: 'White Bone Cult', desc: '인천 기반. 뒤틀림을 구원으로 믿는 광신도 집단.', color: 'border-white' },
              { label: 'Pollution', title: 'The Distorted', desc: '전 인류의 20%. 정신을 잃은 괴물 혹은 각성자.', color: 'border-red-600' },
              { label: 'C.R.A', title: 'Civilian Rescue Assoc', desc: '강원도 기반. 이념보다 생존을 우선하는 구조대.', color: 'border-yellow-500' }
            ].map((f) => (
              <div key={f.label} className={`p-6 border-l-2 ${f.color} bg-slate-900/50`}>
                <h4 className="font-mono text-xs text-slate-500 mb-2">{f.label}</h4>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signal Intercept Section */}
      <section className="border-b border-slate-800 bg-black py-16 px-4">
        <div className="max-w-3xl mx-auto border border-slate-800 bg-slate-900/20 p-8 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neon-red/50 shadow-[0_0_10px_rgba(255,0,60,0.5)]"></div>
            
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Radio className="text-neon-red animate-pulse" size={20} />
                    <span className="font-mono text-xs text-neon-red tracking-widest">INTERCEPTED SIGNAL #992</span>
                </div>
                <Wifi className="text-slate-700" size={16} />
            </div>

            <div className="flex items-end gap-1 h-12 mb-6 opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-full bg-neon-red transition-all duration-75"
                        style={{ 
                            height: `${Math.random() * 100}%`,
                            opacity: Math.random() 
                        }}
                    ></div>
                ))}
            </div>

            <div className="font-mono text-sm text-slate-400 space-y-2">
                <p>"...치직... 타워 근처로는... 가지 마..."</p>
                <p>"...그곳은 성역이 아니야... (심한 잡음)... 사육장이다..."</p>
                <p className="text-slate-600 italic">-- SIGNAL LOST --</p>
            </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="ops" className="py-24 px-4 bg-deep-black border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Target className="text-neon-cyan" />
            <h2 className="text-3xl font-bold tracking-tight">ACTIVE OPERATIONS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="py-24 px-4 bg-dark-gray border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <Users className="text-neon-cyan" />
              <h2 className="text-3xl font-bold tracking-tight">PERSONNEL DATABASE</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {(['ALL', 'K.S.A', 'White Bone Cult', 'Pollution', 'C.R.A'] as const).map((faction) => (
                <button
                  key={faction}
                  onClick={() => setActiveFaction(faction)}
                  className={`px-4 py-2 font-mono text-xs border transition-all ${
                    activeFaction === faction 
                      ? 'bg-neon-cyan text-deep-black border-neon-cyan font-bold' 
                      : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-400'
                  }`}
                >
                  {faction}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCharacters.map((char) => (
              <CharacterCard key={char.code} char={char} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center font-mono text-xs text-slate-600">
        <p>COPYRIGHT © 2250 KOREA SURVIVORS ASSOCIATION. ALL RIGHTS RESERVED.</p>
        <p className="mt-2">UNAUTHORIZED ACCESS WILL RESULT IN IMMEDIATE TERMINATION.</p>
      </footer>
    </div>
  );
}