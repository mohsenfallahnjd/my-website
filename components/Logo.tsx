export default function Logo({ className, size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="200" height="200" fill="white" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, sans-serif"
        fontSize="120px"
        fontWeight="bold"
        fill="#0000FF"
      >
        MF
      </text>
    </svg>
  );
}
