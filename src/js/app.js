const formEL = document.forms.ytUrlForm;
const resultDiv = document.querySelector("#result-div");

console.log(formEL);

formEL.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = new URL(formEL.ytUrl.value);
  console.log(url);
  console.log(url.host);
  if (url.host === "www.youtube.com") {
    if (url.pathname === "/watch" && url.searchParams.get("v")) {
      const videoId = url.searchParams.get("v");
      showImg(videoId);
      console.log(videoId);
    } else if (url.pathname === "/playlist") {
      alert(
        "You provided a playlist URL; please provide the video URL instead. "
      );
    } else {
      alert("please enter valid url ");
    }
  } else {
    alert(
      `you hav entered ${url.host}'s url is not valid make sure your url is belongs to "www.youtube.com"`
    );
  }
});

function showImg(id) {
  const imgURl = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  const imgEl = resultDiv.querySelector("#img");
  const downloadEl = resultDiv.querySelector("#download>a");
  downloadEl.href = imgURl;

  imgEl.src = imgURl;

  resultDiv.classList.remove("hidden");
}
