import { useEffect, useRef, ReactNode } from "react";

interface ClickOutsideHandlerProps {
  children: ReactNode;
  onClickOutside: (isOpen: boolean) => void;
}

const ClickOutsideHandler = ({
  children,
  onClickOutside,
}: ClickOutsideHandlerProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        onClickOutside(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [divRef, onClickOutside]);
  return <div ref={divRef}>{children}</div>;
};

export default ClickOutsideHandler;
