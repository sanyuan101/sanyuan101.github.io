
function getPerformaceVideoInfo(data) {
  const videoInfoElements = data.split('|');
  return {
    caption: videoInfoElements[0],
    link: videoInfoElements[1]
  }
}

async function loadVideos() {
  const videosData = await loadDataFromFile('performancevideos.txt');
  if (!videosData) {
    console.error('No data loaded from file.');
    return;
  }
  const videoInfoArray = loadArrayFromData(videosData);
  const divElement = document.getElementById('videodiv');
  divElement.innerHTML = ''; // Clear existing list

  videoInfoArray.forEach(performanceVideoData => {
    console.log(performanceVideoData);
    const performanceVideo = getPerformaceVideoInfo(performanceVideoData);
    console.log(performanceVideo);

    const div = document.createElement('div');
    div.className = 'performancevideo';

    const divp = document.createElement('p');
    divp.className = 'performanceTitle';
    divp.textContent= performanceVideo.caption;
    
    const iframe = document.createElement('iframe');
    iframe.src = performanceVideo.link;
    iframe.width = '600';
    iframe.height = '400';

    div.appendChild(divp);
    div.appendChild(iframe);
    divElement.appendChild(div);
  });
}