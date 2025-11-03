function getPhotoInfo(data) {
  const inforElements = data.split('|');
  return {
    fileName: inforElements[0],
    caption: inforElements[1]
  }
}

async function loadPhotos() {
  const photosData = await loadDataFromFile('photos.txt');
  if (!photosData) {
    console.error('No data loaded from file.');
    return;
  }
  const photaInfoArray = loadArrayFromData(photosData);
  const divElement = document.getElementById('photodiv');
  divElement.innerHTML = ''; // Clear existing list

  photaInfoArray.forEach(photoInfoData => {
    const photoInfo = getPhotoInfo(photoInfoData);
    const div = document.createElement('div');
    div.className = 'image-item';
    const img = document.createElement('img');
    img.src = `./photos/${photoInfo.fileName}`;
    img.alt = photoInfo.fileName;
    img.className = 'photo-div';
    const p = document.createElement('p');
    p.textContent = photoInfo.caption;
    div.appendChild(img);
    div.appendChild(p);
    divElement.appendChild(div);
  });
}   