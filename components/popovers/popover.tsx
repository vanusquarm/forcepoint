import React, { useState, useRef, useEffect } from "react";

// How to use: <Tooltip trigger={<button>Hover me</button>} content="This is a tooltip" position="top" />

interface PopoverProps {
  trigger: React.RefObject<HTMLDivElement>;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [positionStyle, setPositionStyle] = useState<{
    top?: number;
    left?: number;
  }>({});

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (trigger.current && popoverRef.current) {
        const triggerRect = trigger.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();

        let top, left;

        switch (position) {
          case "top":
            top = triggerRect.top - popoverRect.height - 10;
            left =
              triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
            break;
          case "bottom":
            top = triggerRect.bottom + 10;
            left =
              triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
            break;
          case "left":
            top =
              triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
            left = triggerRect.left - popoverRect.width - 10;
            break;
          case "right":
            top =
              triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
            left = triggerRect.right + 10;
            break;
          default:
            break;
        }

        setPositionStyle({ top, left });
      }
    };

    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, position, trigger]);

  const handleTogglePopover = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ position: "relative" }}>
      <div onClick={handleTogglePopover} ref={trigger}>
        {/* Content for the trigger element */}
        {trigger && trigger.current && trigger.current.innerHTML}
      </div>

      {isVisible && (
        <div
          ref={popoverRef}
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            zIndex: 999,
            ...positionStyle,
          }}
        >
          {/* Content for the popover */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
