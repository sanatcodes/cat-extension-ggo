// function replaceImages() {
//     const images = document.querySelectorAll('img');
//     images.forEach((img) => {
//       fetch('https://cataas.com/cat')
//         .then(response => response.blob())
//         .then(blob => {
//           const url = URL.createObjectURL(blob);
//           img.src = url;
//         });
//     });
//   }

//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'replaceImages') {
//       replaceImages();
//       sendResponse({ status: 'done' });
//     }
//   });

const catImages = [
  chrome.runtime.getURL("images/cat1.jpeg"),
  chrome.runtime.getURL("images/cat2.jpeg"),
  chrome.runtime.getURL("images/cat3.jpeg"),
];

function replaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    const randomCatImage =
      catImages[Math.floor(Math.random() * catImages.length)];
    img.src = randomCatImage;
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "replaceImages") {
    console.log("Received replaceImages action");
    replaceImages();
    sendResponse({ status: "done" });
  }
});
