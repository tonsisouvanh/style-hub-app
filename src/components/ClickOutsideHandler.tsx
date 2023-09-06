import { useEffect, useRef, ReactNode } from "react";

interface ClickOutsideHandlerProps {
  children: ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

const ClickOutsideHandler = ({
  children,
  setIsOpen,
}: ClickOutsideHandlerProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Call the onClickOutside callback when clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return <div ref={divRef}>{children}</div>;
};

export default ClickOutsideHandler;
