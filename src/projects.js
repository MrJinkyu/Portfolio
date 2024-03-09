const thumbnails = document.querySelectorAll(".project_img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("mouseover", () => {
    switch (thumbnail.alt) {
      case "samsung_thumbnail":
        thumbnail.src = "/images/samsung_play.gif";
        break;
      case "ott_thumbnail":
        thumbnail.src = "/images/ott_play.gif";
        break;
      case "mbti_thumbnail":
        thumbnail.src = "/images/mbti_play.gif";
        break;
      default:
        break;
    }
  });
  thumbnail.addEventListener("mouseleave", () => {
    switch (thumbnail.alt) {
      case "samsung_thumbnail":
        thumbnail.src = "/images/samsung_thumbnail.png";
        break;
      case "ott_thumbnail":
        thumbnail.src = "/images/ott_thumbnail.png";
        break;
      case "mbti_thumbnail":
        thumbnail.src = "/images/mbti_thumbnail.png";
        break;
      default:
        break;
    }
  });
});
