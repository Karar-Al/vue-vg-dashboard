import state from "../state";

export function showModal(modalName) {
  state.activeModal = modalName;
}
