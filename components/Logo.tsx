interface LogoProps {
  iconSize?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({
  iconSize = 28,
  showText = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* 8-pointed Vergina sun — ancient Greek/Macedonian symbol */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold shrink-0"
        aria-hidden="true"
      >
        {/* Outer decorative ring */}
        <circle
          cx="20"
          cy="20"
          r="18.5"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        {/* 8-pointed star — outer r=13, inner r=6, center (20,20) */}
        <path
          d="M20 7 L22.3 14.5 L29.2 10.8 L25.5 17.7 L33 20 L25.5 22.3 L29.2 29.2 L22.3 25.5 L20 33 L17.7 25.5 L10.8 29.2 L14.5 22.3 L7 20 L14.5 17.7 L10.8 10.8 L17.7 14.5 Z"
          fill="currentColor"
        />
        {/* Central dot */}
        <circle cx="20" cy="20" r="2.5" fill="var(--bg-secondary, #1a1208)" />
      </svg>

      {showText && (
        <span className="font-heading text-xl font-bold text-gold tracking-[0.2em]">
          MYTHICA
        </span>
      )}
    </div>
  );
}
