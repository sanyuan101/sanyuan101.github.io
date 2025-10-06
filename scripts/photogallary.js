async function loadDataFromFile() {
  try {
    const response = await fetch('data/photos.txt');
    if (!response.ok) {
      throw new Error('Failed to fetch photos.txt');
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading photo file names:', error);
    return null;
  }
}

function loadArrayFromData(data) {
  return data
    .split('\n')
    .map(link => link.trim())
    .filter(link => link);
}

function getPhotoInfo(data) {
  const inforElements = data.split('|');
  return {
    fileName: inforElements[0],
    caption: inforElements[1]
  }
}

async function loadPhotos() {
  const photosData = await loadDataFromFile();
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