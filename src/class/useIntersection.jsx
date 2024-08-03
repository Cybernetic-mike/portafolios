import React, { useEffect, useRef, useState } from "react";

export default function useIntersection(opciones = {}) {
  const elementRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        setIsIntersecting(entry.isIntersecting);
      });
    }, opciones);
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [opciones]);
  return [elementRef, isIntersecting];
}
