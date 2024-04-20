export const openModal = () => {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  overlay.classList.remove("hidden");
  modal.classList.remove("translate-y-full");
};

export function closeModal() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  modal.classList.add("translate-y-full");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 100);
}
