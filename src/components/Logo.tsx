export default function Logo({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Bombay Darbar"
    >
      <defs>
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd984" />
          <stop offset="50%" stopColor="#e5a93b" />
          <stop offset="100%" stopColor="#af7c1c" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGold)" strokeWidth="1.5" />
      <path
        d="M28 72V52c0-6 3-10 6-13 4-4 9-6 16-6s12 2 16 6c3 3 6 7 6 13v20"
        fill="none"
        stroke="url(#logoGold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 72V50c0-8 6-14 14-14s14 6 14 14v22"
        fill="none"
        stroke="url(#logoGold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="30" r="3" fill="url(#logoGold)" />
      <line x1="28" y1="72" x2="72" y2="72" stroke="url(#logoGold)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
