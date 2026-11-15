/** Shared black-hole (cursor) state, written by pointer events and read by the physics + cursor. */
export const hole = { x: -9999, y: -9999, active: false, level: 0, bursts: 0 };

if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    hole.x = e.clientX; hole.y = e.clientY; hole.active = true;
  }, { passive: true });
  document.addEventListener('mouseleave', () => { hole.active = false; });
}
