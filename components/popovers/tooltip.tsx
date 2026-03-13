import React, { useState, useRef, ReactNode } from "react";

// How to use: <Tooltip trigger={<button>Hover me</button>} content="This is a tooltip" position="top" />

interface TooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  trigger,
  content,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});

  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleToggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  const calculatePosition = () => {
    if (triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top, left;

      switch (position) {
        case "top":
          top = triggerRect.top - tooltipRect.height - 10;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + 10;
          left =
            triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "left":
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - 10;
          break;
        case "right":
          top =
            triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + 10;
          break;
        default:
          break;
      }

      setPositionStyle({ top, left });
    }
  };

  const handleMouseEnter = () => {
    calculatePosition();
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            backgroundColor: "#333",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
            zIndex: 999,
            ...positionStyle,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
