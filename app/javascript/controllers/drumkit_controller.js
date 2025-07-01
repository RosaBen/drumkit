import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["key"];

  connect() {
    window.addEventListener("keydown", this.playSound.bind(this));
  }

  playSound(event) {
    const key = this.keyTargets.find(
      (k) => k.dataset.key == event.keyCode
    );
    const audio = document.querySelector(
      `audio[data-key="${event.keyCode}"]`
    );
    if (!key || !audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    audio.addEventListener("ended", () => {
      key.classList.remove("playing");
    });
  }
}