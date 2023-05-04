'use client';

export default function FancyButton() {
  function updateCords(e: any) {
    const button = document.querySelector('button');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button?.style.setProperty('--left', x + "px");
    button?.style.setProperty('--top', y + "px");
  }

  return (
    <button onMouseDown={updateCords}>
      Directionaly aware
    </button>
  )
}