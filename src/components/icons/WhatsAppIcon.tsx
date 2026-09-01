import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

/**
 * Pixel-Perfect Authentic WhatsApp Icon
 * Uses the official Meta WhatsApp vector paths with high-contrast, ultra-sharp rendering.
 * Renders beautifully on light backgrounds, dark backgrounds, and inside green CTA buttons.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5',
  size,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Official WhatsApp Green Circular Bubble Background with Tail */}
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"
        fill="#25D366"
      />

      {/* Crisp White Handset Receiver (Bold, solid & perfectly centered) */}
      <path
        d="M17.52 14.33C17.22 14.18 15.76 13.46 15.49 13.36C15.22 13.26 15.02 13.21 14.82 13.51C14.62 13.81 14.05 14.48 13.88 14.68C13.71 14.88 13.54 14.9 13.24 14.75C12.94 14.6 11.98 14.29 10.85 13.28C9.97 12.49 9.37 11.52 9.2 11.22C9.03 10.92 9.18 10.76 9.33 10.61C9.46 10.48 9.62 10.27 9.77 10.1C9.92 9.93 9.97 9.8 10.07 9.6C10.17 9.4 10.12 9.23 10.05 9.08C9.97 8.93 9.38 7.47 9.13 6.88C8.89 6.3 8.65 6.38 8.47 6.37C8.3 6.36 8.1 6.36 7.9 6.36C7.7 6.36 7.38 6.43 7.11 6.73C6.84 7.03 6.07 7.75 6.07 9.21C6.07 10.67 7.13 12.08 7.28 12.28C7.43 12.48 9.38 15.48 12.36 16.77C13.07 17.08 13.62 17.26 14.05 17.4C14.76 17.63 15.41 17.6 15.92 17.52C16.49 17.43 17.68 16.8 17.93 16.1C18.18 15.4 18.18 14.81 18.1 14.68C18.03 14.56 17.82 14.48 17.52 14.33Z"
        fill="white"
      />
    </svg>
  );
};
