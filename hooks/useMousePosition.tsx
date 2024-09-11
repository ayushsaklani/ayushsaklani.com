import { useEffect, useState } from "react";

// Define the type for mouse position
interface MousePosition {
  x: number | null;
  y: number | null;
}

export default function useMousePosition() {
  // Use the MousePosition interface as the type for the state
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

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
