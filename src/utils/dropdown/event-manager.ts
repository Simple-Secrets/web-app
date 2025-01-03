import { handleTouchStart, handleTouchEnd } from './handlers';

export function setupDropdownListeners(selector: string) {
  const dropdownLinks = document.querySelectorAll<HTMLAnchorElement>(selector);

  dropdownLinks.forEach((link) => {
    link.addEventListener('touchstart', handleTouchStart);
    link.addEventListener('touchend', handleTouchEnd);
  });

  return () => {
    dropdownLinks.forEach((link) => {
      link.removeEventListener('touchstart', handleTouchStart);
      link.removeEventListener('touchend', handleTouchEnd);
    });
  };
}