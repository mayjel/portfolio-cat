
export function createImage(img) {
    const imgDiv = document.createElement('div');
    imgDiv.innerHTML = `<img src="${img}" alt="cutie dog">`;
    return imgDiv;
  }
  