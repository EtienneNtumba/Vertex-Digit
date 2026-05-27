'use client'
// Abstract network of nodes — pure SVG with CSS pulsations. No stock photo.
export function HeroNetwork() {
  // 12 node positions in a 600x600 viewBox, artistically distributed
  const nodes = [
    { x: 110, y: 130, r: 6 },
    { x: 235, y: 80, r: 5 },
    { x: 360, y: 140, r: 7 },
    { x: 480, y: 95, r: 5 },
    { x: 530, y: 230, r: 6 },
    { x: 430, y: 310, r: 8 },
    { x: 295, y: 250, r: 9 },
    { x: 165, y: 290, r: 5 },
    { x: 80, y: 410, r: 6 },
    { x: 230, y: 460, r: 5 },
    { x: 380, y: 480, r: 7 },
    { x: 510, y: 420, r: 6 },
  ]
  // edges defined by node indices (kept sparse and elegant)
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[6,2],[6,7],[7,0],[7,8],[8,9],[9,10],[10,5],[10,11],[11,4],[6,10],[2,6],[5,11],[1,6]
  ]

  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      {/* soft halo */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(60% 55% at 60% 40%, rgba(91,169,232,0.28), rgba(91,169,232,0) 70%)',
          filter: 'blur(8px)',
        }}
      />
      <svg viewBox="0 0 600 600" className="relative h-full w-full">
        <defs>
          <linearGradient id="vx-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1B6FD4" />
            <stop offset="100%" stopColor="#5BA9E8" />
          </linearGradient>
          <radialGradient id="vx-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5BA9E8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5BA9E8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* concentric arcs (subtle) */}
        <g stroke="#CFE2F7" strokeWidth="1" fill="none" opacity="0.7">
          <circle cx="300" cy="300" r="230" />
          <circle cx="300" cy="300" r="170" />
          <circle cx="300" cy="300" r="110" />
        </g>

        {/* edges */}
        <g stroke="url(#vx-grad)" strokeWidth="1.25" opacity="0.55">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>

        {/* nodes (pulsing) */}
        <g fill="url(#vx-grad)">
          {nodes.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r={n.r} className="node" />
          ))}
        </g>

        {/* one accent node (orange) */}
        <circle cx="360" cy="140" r="4" fill="#F59E0B" />
        <circle cx="380" cy="480" r="3.5" fill="#10B981" />
      </svg>
    </div>
  )
}

export default HeroNetwork
