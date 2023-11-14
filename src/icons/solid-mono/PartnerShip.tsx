import IconProps from 'types/icon';

const PartnerShip = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 256 234.72"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-inject icon-svg solid-mono ${className || 'icon-svg-xs text-primary me-4'}`}
    >
      <g data-name="Layer 2">
        <path
          className="fill-primary"
          d="M5.25 106.72A5.34 5.34 0 000 112.05v98.64a2.68 2.68 0 002.67 2.67H28a5.33 5.33 0 005.13-3.87L56.7 126.3a10.66 10.66 0 00-6.6-12.92c-9.67-3.52-24.5-7-44.85-6.66zm229.42 58.64c-21.33 0-64 27-85.33 27S104 176 104 176s28.74 5.33 45.33 5.33 21.33-5.66 21.33-13.33c0-18.67-31.72-21.57-47.75-24-15.74-8.77-23.92-15.69-50-17.9a28.85 28.85 0 01-.81 4.54l-21.43 75.55c24.27 11 66.05 28.53 88 28.53 32 0 117.32-42.67 117.32-53.33s-10.65-16-21.31-16z"
        />
        <path
          className="fill-secondary"
          d="M250.75 128a5.34 5.34 0 005.25-5.33V24a2.68 2.68 0 00-2.67-2.67H228a5.33 5.33 0 00-5.13 3.87l-23.6 83.19a10.66 10.66 0 006.6 12.92c9.7 3.55 24.53 7.04 44.88 6.69zM21.33 69.36c21.33 0 64-27 85.33-27S152 58.69 152 58.69s-28.72-5.33-45.31-5.33S85.34 59 85.34 66.69c0 18.67 31.72 21.57 47.75 24 15.74 8.77 23.92 15.69 50 17.9a28.85 28.85 0 01.81-4.54l21.43-75.52C181.06 17.49 139.28 0 117.34 0 85.33 0 0 42.69 0 53.36s10.67 16 21.33 16z"
        />
      </g>
    </svg>
  );
};

export default PartnerShip;
