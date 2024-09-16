import { useEffect, useState } from "react";

// Define the type for mouse position
interface MousePosition {
  x: number ;
  y: number ;
}

export default function useMousePosition() {
  // Use the MousePosition interface as the type for the state
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: -100, y: -100 });

  useEffect(() => {
    // Define the type for the event as MouseEvent
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
