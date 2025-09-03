// script.js
// Optional: Add scale animation or sound if you want.
// Currently minimal, mostly handled by CSS.
document.querySelector(".profile-container").addEventListener("mouseover", () => {
  console.log("Hovered on profile image");
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-items span");
  const total = items.length;
  items.forEach((item, i) => {
    const angle = (360 / total) * i;
    item.style.transform = `rotate(${angle}deg) translate(120px) rotate(-${angle}deg) scale(0.5)`;
  });

  const container = document.querySelector(".profile-container");
  container.addEventListener("mouseenter", () => {
    items.forEach((item, i) => {
      const angle = (360 / total) * i;
      item.style.opacity = "1";
      item.style.transform = `rotate(${angle}deg) translate(120px) rotate(-${angle}deg) scale(1)`;
    });
  });

  container.addEventListener("mouseleave", () => {
    items.forEach((item, i) => {
      const angle = (360 / total) * i;
      item.style.opacity = "0";
      item.style.transform = `rotate(${angle}deg) translate(120px) rotate(-${angle}deg) scale(0.5)`;
    });
  });
});
function handleMenuClick(event, section) {
  event.stopPropagation();
  window.location.href = `/${section}`;
}
