// Ilustrasi dan motif SVG buatan sendiri. Semuanya dekoratif (aria-hidden) kecuali yang diberi label.

// Garis aliran angin: bergerak pelan (dimatikan saat prefers-reduced-motion).
export function Aliran({ className = '' }) {
  return (
    <svg className={`aliran ${className}`} viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path vectorEffect="non-scaling-stroke" d="M40 0 C 40 70, 112 92, 100 160 S 60 252, 122 300" />
      <path vectorEffect="non-scaling-stroke" d="M104 0 C 116 62, 188 84, 172 152 S 148 242, 208 300" />
      <path vectorEffect="non-scaling-stroke" d="M172 0 C 184 82, 250 92, 244 162 S 228 252, 290 300" />
      <path vectorEffect="non-scaling-stroke" d="M240 0 C 254 72, 318 102, 312 172 S 296 250, 356 300" />
      <path vectorEffect="non-scaling-stroke" d="M308 0 C 322 64, 382 92, 372 152 S 358 232, 400 282" />
      <path vectorEffect="non-scaling-stroke" d="M0 40 C 60 56, 70 118, 40 168 S 20 252, 70 300" />
    </svg>
  );
}

// Tanda merek: huruf P dan K dari garis, dengan garis angin di bawahnya.
export function LogoPK({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="#08202f" />
      <g fill="none" stroke="#fbfeff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 30V12h6.5a4.7 4.7 0 0 1 0 9.4H12" />
        <path d="M27 30V12M37.5 12 27 21.5M31.2 19.6 37.8 30" />
      </g>
      <path d="M9 38c3.2-2.6 6.4 2.6 9.6 0s6.4 2.6 9.6 0 6.4 2.6 9.6 0" fill="none" stroke="#7ee8ff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

// Adegan: unit AC dinding meniupkan angin, teknisi tanpa wajah berdiri dengan alat ukur tekanan.
export function Teknisi({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 360 480" role="img" aria-label="Ilustrasi teknisi AC berhelm memegang alat ukur tekanan di depan unit AC dinding">
      {/* unit AC di dinding */}
      <rect x="24" y="22" width="312" height="92" rx="28" fill="#0f3a56" stroke="#2f7aa5" strokeWidth="2" />
      <g stroke="#2f7aa5" strokeWidth="1.6" strokeLinecap="round" opacity=".7">
        <path d="M52 42h150M52 52h150M52 62h150" />
      </g>
      <rect x="258" y="38" width="58" height="30" rx="7" fill="#051722" stroke="#2f7aa5" strokeWidth="1.5" />
      <path d="M268 53h12M290 53h12" stroke="#7ee8ff" strokeWidth="6" strokeLinecap="round" />
      <rect x="44" y="82" width="272" height="20" rx="10" fill="#03131c" stroke="#2f7aa5" strokeWidth="1.5" />
      {/* hembusan angin */}
      <g className="aliran" style={{ color: '#7ee8ff' }} opacity=".6">
        <path d="M70 106 C 56 152, 104 176, 84 236 S 56 310, 92 366" />
        <path d="M128 106 C 122 160, 176 172, 152 242 S 126 306, 156 384" />
        <path d="M188 106 C 192 156, 232 176, 214 236 S 196 314, 222 372" />
        <path d="M246 106 C 258 150, 292 184, 278 244 S 262 312, 292 368" />
        <path d="M304 106 C 318 150, 330 190, 318 246" />
      </g>
      <g transform="translate(30 134)">
        <ellipse cx="150" cy="338" rx="84" ry="8" fill="#000" opacity=".28" />
        {/* selang manifold */}
        <path d="M106 178 C 84 236, 54 262, 44 320" fill="none" stroke="#03131c" strokeWidth="6" strokeLinecap="round" />
        <path d="M150 178 C 154 240, 122 282, 86 326" fill="none" stroke="#c8743c" strokeWidth="6" strokeLinecap="round" />
        {/* kaki dan sepatu */}
        <rect x="108" y="206" width="40" height="118" rx="14" fill="#eaf6fc" stroke="#8fc3e0" strokeWidth="2" />
        <rect x="152" y="206" width="40" height="118" rx="14" fill="#eaf6fc" stroke="#8fc3e0" strokeWidth="2" />
        <rect x="108" y="268" width="40" height="9" fill="#22c7ea" />
        <rect x="152" y="268" width="40" height="9" fill="#22c7ea" />
        <rect x="102" y="312" width="50" height="24" rx="9" fill="#03131c" />
        <rect x="148" y="312" width="50" height="24" rx="9" fill="#03131c" />
        {/* badan */}
        <rect x="92" y="108" width="116" height="126" rx="32" fill="#eaf6fc" stroke="#8fc3e0" strokeWidth="2" />
        <path d="M150 118v108" stroke="#8fc3e0" strokeWidth="2" />
        <rect x="164" y="138" width="30" height="26" rx="6" fill="none" stroke="#8fc3e0" strokeWidth="2" />
        <rect x="92" y="212" width="116" height="16" rx="8" fill="#03131c" />
        <rect x="142" y="212" width="16" height="16" rx="3" fill="#8fc3e0" />
        <rect x="92" y="170" width="116" height="9" fill="#22c7ea" opacity=".9" />
        {/* lengan kanan menggantung, tas alat di pinggul */}
        <path d="M200 140 L214 198 L208 246" fill="none" stroke="#8fc3e0" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M200 140 L214 198 L208 246" fill="none" stroke="#eaf6fc" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="206" y="226" width="40" height="48" rx="9" fill="#0a5a8f" stroke="#03131c" strokeWidth="2.5" />
        <path d="M214 226v-8h24v8" fill="none" stroke="#03131c" strokeWidth="5" />
        <circle cx="210" cy="250" r="13" fill="#f08a24" />
        {/* lengan kiri menyilang memegang manifold */}
        <path d="M100 142 L76 196 L112 190" fill="none" stroke="#8fc3e0" strokeWidth="31" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M100 142 L76 196 L112 190" fill="none" stroke="#eaf6fc" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="86" y="154" width="86" height="28" rx="9" fill="#0a5a8f" stroke="#03131c" strokeWidth="3" />
        <circle cx="108" cy="154" r="21" fill="#fbfeff" stroke="#03131c" strokeWidth="3" />
        <circle cx="152" cy="154" r="21" fill="#fbfeff" stroke="#03131c" strokeWidth="3" />
        <circle cx="108" cy="154" r="15" fill="none" stroke="#8fc3e0" strokeWidth="2" strokeDasharray="2 4" />
        <circle cx="152" cy="154" r="15" fill="none" stroke="#8fc3e0" strokeWidth="2" strokeDasharray="2 4" />
        <path d="M108 154 L119 144" stroke="#0a5a8f" strokeWidth="3" strokeLinecap="round" />
        <path d="M152 154 L142 142" stroke="#a3341c" strokeWidth="3" strokeLinecap="round" />
        <circle cx="108" cy="154" r="3" fill="#03131c" />
        <circle cx="152" cy="154" r="3" fill="#03131c" />
        <circle cx="114" cy="192" r="13" fill="#f08a24" />
        {/* leher, kepala polos, helm */}
        <rect x="136" y="96" width="28" height="18" rx="6" fill="#b57f55" />
        <circle cx="118" cy="84" r="6" fill="#b57f55" />
        <circle cx="182" cy="84" r="6" fill="#b57f55" />
        <circle cx="150" cy="82" r="33" fill="#c9946a" />
        <path d="M112 78a38 38 0 0 1 76 0z" fill="#22c7ea" />
        <path d="M150 40v38" stroke="#0a5a8f" strokeWidth="4" />
        <rect x="104" y="74" width="92" height="11" rx="5.5" fill="#0a5a8f" />
      </g>
    </svg>
  );
}

// Peta ilustrasi: garis pantai, laut, dan titik kecamatan. Bukan peta berskala.
export function PetaMakassar({ className = '' }) {
  const titik = [
    [36, 11], [55, 14], [43, 24], [50, 31], [37, 38], [47, 47], [34, 51],
    [56, 38], [67, 46], [78, 14], [85, 27], [82, 53], [58, 61], [44, 77],
  ];
  return (
    <svg className={className} viewBox="0 0 360 280" role="img" aria-label="Peta ilustrasi pesisir Makassar dengan titik-titik kecamatan yang dilayani">
      <rect width="360" height="280" fill="#e2f0f7" />
      <path d="M0 0H112C104 40 132 72 114 112S70 182 94 222 86 264 82 280H0Z" fill="#c6e2f1" />
      <g fill="none" stroke="#8fc3e0" strokeWidth="1.6" strokeLinecap="round">
        <path d="M14 40c10-6 20 6 30 0s20 6 30 0" />
        <path d="M10 110c10-6 20 6 30 0s20 6 30 0" />
        <path d="M18 180c10-6 20 6 30 0s20 6 30 0" />
        <path d="M12 244c10-6 20 6 30 0s20 6 30 0" />
        <path d="M118 150C170 130 190 100 250 96S330 120 360 112" strokeWidth="2.4" stroke="#fbfeff" />
        <path d="M130 56C190 70 230 40 300 62" stroke="#fbfeff" strokeWidth="2.4" />
        <path d="M150 250C190 200 250 190 360 196" stroke="#fbfeff" strokeWidth="2.4" />
        <path d="M200 0C196 80 214 170 204 280" stroke="#fbfeff" strokeWidth="2.4" />
        <path d="M280 0C290 90 270 190 300 280" stroke="#fbfeff" strokeWidth="2.4" />
      </g>
      {titik.map(([x, y], i) => (
        <g key={i}>
          <circle cx={(x / 100) * 360} cy={(y / 100) * 280} r="9" fill="#fbfeff" stroke="#08202f" strokeWidth="2" />
          <circle cx={(x / 100) * 360} cy={(y / 100) * 280} r="3.5" fill="#0a5a8f" />
        </g>
      ))}
    </svg>
  );
}

// Denah ruangan dilihat dari atas, berskala menurut panjang dan lebar yang dimasukkan.
export function DenahRuang({ panjang, lebar, matahari, atas, orang, className = '' }) {
  const s = Math.min(236 / panjang, 132 / lebar);
  const w = panjang * s;
  const h = lebar * s;
  const x0 = (320 - w) / 2;
  const y0 = (190 - h) / 2 + 8;
  const maksOrang = Math.max(0, Math.min(orang, Math.floor((w - 16) / 15)));
  return (
    <svg className={className} viewBox="0 0 320 190" role="img" aria-label="Denah ruangan dilihat dari atas, unit AC di dinding atas, hembusan angin ke dalam ruangan">
      <defs>
        <pattern id="atap" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="#8fc3e0" strokeWidth="2" />
        </pattern>
      </defs>
      <rect x={x0} y={y0} width={w} height={h} fill="#e2f0f7" stroke="#08202f" strokeWidth="2.5" />
      {atas && <rect x={x0} y={y0} width={w} height={h} fill="url(#atap)" opacity=".8" />}
      {matahari && (
        <g>
          <line x1={x0 + w} y1={y0 + h * 0.2} x2={x0 + w} y2={y0 + h * 0.8} stroke="#f08a24" strokeWidth="6" />
          <circle cx={x0 + w + 17} cy={y0 + h / 2} r="7" fill="#f08a24" />
          <g stroke="#f08a24" strokeWidth="2" strokeLinecap="round">
            <path d={`M${x0 + w + 17} ${y0 + h / 2 - 12}v-3M${x0 + w + 17} ${y0 + h / 2 + 12}v3M${x0 + w + 29} ${y0 + h / 2}h3M${x0 + w + 5} ${y0 + h / 2}h-3`} />
          </g>
        </g>
      )}
      <g fill="none" stroke="#0a5a8f" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="1 6">
        <path d={`M${x0 + w / 2 - 20} ${y0 + 12}c-4 ${h * 0.25} 6 ${h * 0.4} 0 ${h * 0.55}`} />
        <path d={`M${x0 + w / 2} ${y0 + 12}c-4 ${h * 0.3} 6 ${h * 0.5} 0 ${h * 0.7}`} />
        <path d={`M${x0 + w / 2 + 20} ${y0 + 12}c-4 ${h * 0.25} 6 ${h * 0.4} 0 ${h * 0.55}`} />
      </g>
      <rect x={x0 + w / 2 - 32} y={y0 - 4} width="64" height="14" rx="5" fill="#fbfeff" stroke="#08202f" strokeWidth="2.5" />
      <line x1={x0 + w / 2 - 24} y1={y0 + 6} x2={x0 + w / 2 + 24} y2={y0 + 6} stroke="#08202f" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: maksOrang }).map((_, i) => (
        <circle key={i} cx={x0 + 14 + i * 15} cy={y0 + h - 12} r="5" fill="#08202f" />
      ))}
    </svg>
  );
}
