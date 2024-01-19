export function createModal(msg) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    
        <div class="modal_wrapper">
      <div class="modal">
        <p>${msg}</p>
        <button id="close">OK</button>
      </div>
    </div>
    `
  );
  closeModal();
}
createModal("olá mundo");
function closeModal() {
  const modal = document.querySelector(".modal_wrapper");
  const btn = document.querySelector("#close");
  btn.addEventListener("click", () => {
    modal.remove();
  });
}
