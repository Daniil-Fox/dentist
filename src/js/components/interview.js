const modalVideo = document.querySelector(".modal-video");
if (modalVideo) {
  const interviewBlocks = document.querySelectorAll(".interview__video");
  const modalBody = modalVideo.querySelector(".modal__body");
  const modalClose = modalVideo.querySelector(".modal__close");
  const video = modalVideo.querySelector(".modal__iframe");
  interviewBlocks.forEach((block) => {
    const dataSrc = block.dataset.videoSrc;

    block.addEventListener("click", (e) => {
      video.src = dataSrc;
      modalVideo.classList.add("active");
    });
  });

  modalBody.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  modalVideo.addEventListener("click", (e) => {
    modalVideo.classList.remove("active");
    video.src = "";
  });
  modalClose.addEventListener("click", (e) => {
    modalVideo.classList.remove("active");
    video.src = "";
  });
}
