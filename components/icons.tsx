
import React from 'react';

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: "w-6 h-6",
  shapeRendering: "crispEdges" as const
};

export const HomeIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M4 10V20H8V14H16V20H20V10L12 3L4 10Z" />
  </svg>
);

export const SearchIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M10 4A6 6 0 1 0 10 16A6 6 0 0 0 10 4ZM2 10A8 8 0 1 1 14.32 15.68L20 21.36L18.64 22.72L13 17.08A8 8 0 0 1 2 10Z" />
  </svg>
);

export const LibraryIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M4 6H20V8H4V6M4 10H20V12H4V10M4 14H14V16H4V14M16 14V20L22 17L16 14Z" />
  </svg>
);

export const PlusIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M10 4H14V10H20V14H14V20H10V14H4V10H10V4Z" />
  </svg>
);

export const ClockIcon: React.FC = () => (
  <svg {...iconProps} className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V12L16.5 15.5L15.08 16.92L11 12.83V7Z" />
  </svg>
);

export const HashIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5">
        <path d="M8 10H12V4H8V10ZM14 4V10H18V4H14ZM8 18V12H12V18H8ZM14 12H18V18H14V12Z"/>
    </svg>
);

export const MusicNoteIcon: React.FC<{className?: string}> = ({className}) => (
    <svg {...iconProps} className={`w-5 h-5 ${className}`}>
        <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
    </svg>
);

export const PlayIcon: React.FC<{className?: string}> = ({className}) => (
    <svg {...iconProps} className={className}>
        <path d="M8 5V19L19 12L8 5Z" />
    </svg>
);

export const PauseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg {...iconProps} className={className}>
        <path d="M6 19H10V5H6V19M14 5V19H18V5H14Z" />
    </svg>
);

export const NextIcon: React.FC = () => (
    <svg {...iconProps} className="w-8 h-8">
        <path d="M6 18V6L14 12L6 18M16 6H18V18H16V6Z" />
    </svg>
);

export const PrevIcon: React.FC = () => (
    <svg {...iconProps} className="w-8 h-8">
        <path d="M18 18L10 12L18 6V18M8 6H6V18H8V6Z" />
    </svg>
);

export const VolumeIcon: React.FC = () => (
    <svg {...iconProps}>
        <path d="M3 9V15H7L12 20V4L7 9H3M14 8.81C14 7.21 12.94 5.89 11.5 5.37V18.63C12.94 18.11 14 16.79 14 15.19V15.12L14 8.81Z" />
    </svg>
);
