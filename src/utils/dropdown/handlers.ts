export function handleTouchStart(event: TouchEvent) {
  const link = event.currentTarget as HTMLAnchorElement;

  link.style.pointerEvents = 'auto';
}

export function handleTouchEnd(event: TouchEvent) {
  const link = event.currentTarget as HTMLAnchorElement;

  link.style.pointerEvents = '';
  link.click();
}