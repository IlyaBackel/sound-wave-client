export default function DarkLogo({ size }: { size: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width={size}
            height={size}
        >
            <defs>
                <linearGradient id="dark_logo_bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1A0B2E" />
                    <stop offset="100%" stopColor="#0F051D" />
                </linearGradient>

                <linearGradient id="dark_logo_neon" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C77DFF" />
                    <stop offset="50%" stopColor="#9D4EDD" />
                    <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>

                <filter id="dark_logo_glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" result="blur1" />
                    <feGaussianBlur stdDeviation="16" result="blur2" />
                    <feMerge>
                        <feMergeNode in="blur2" />
                        <feMergeNode in="blur1" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="dark_logo_shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#7B2CBF" floodOpacity="0.3" />
                </filter>
            </defs>

            <g filter="url(#dark_logo_shadow)">
                <circle cx="250" cy="250" r="220" fill="url(#dark_logo_bg)" stroke="url(#dark_logo_neon)" strokeWidth="6" />

                <path
                    d="M 80 270 Q 130 220, 180 270 T 280 270 T 380 270"
                    fill="none"
                    stroke="#9D4EDD"
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.3"
                />
                <path
                    d="M 100 300 Q 160 260, 220 300 T 340 300"
                    fill="none"
                    stroke="#C77DFF"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.2"
                />

                <g filter="url(#dark_logo_glow)" fill="none" stroke="url(#dark_logo_neon)" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 205 175 C 150 150, 135 210, 185 235 C 235 260, 215 325, 150 300" strokeWidth="26" />
                    <path d="M 255 175 L 285 305 L 325 220 L 365 305 L 395 175" strokeWidth="26" />
                </g>
            </g>
        </svg>
    )
}