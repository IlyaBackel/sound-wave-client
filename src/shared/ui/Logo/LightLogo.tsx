export default function LightLogo({ size }: { size: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width={size}
            height={size}
        >
            <defs>
                <linearGradient id="light_logo_bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5F0FF" />
                    <stop offset="100%" stopColor="#E6D6FF" />
                </linearGradient>

                <linearGradient id="light_logo_border" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9D4EDD" />
                    <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>

                <linearGradient id="light_logo_text" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7B2CBF" />
                    <stop offset="50%" stopColor="#9D4EDD" />
                    <stop offset="100%" stopColor="#C77DFF" />
                </linearGradient>

                <filter id="light_logo_shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#3C096C" floodOpacity="0.15" />
                </filter>
            </defs>

            <g filter="url(#light_logo_shadow)">
                <circle cx="250" cy="250" r="220" fill="url(#light_logo_bg)" stroke="url(#light_logo_border)" strokeWidth="8" />
                <path
                    d="M 90 280 Q 140 240, 190 280 T 290 280 T 390 280"
                    fill="none"
                    stroke="url(#light_logo_text)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    opacity="0.4"
                />
                <g fill="none" stroke="url(#light_logo_text)" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 205 175 C 150 150, 135 210, 185 235 C 235 260, 215 325, 150 300" strokeWidth="28" />
                    <path d="M 255 175 L 285 305 L 325 220 L 365 305 L 395 175" strokeWidth="28" />
                </g>
            </g>
        </svg>
    )
}
