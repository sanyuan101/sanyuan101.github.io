function getVideoInfo(data) {
  const inforElements = data.split('|');
  return {
    videoYear: inforElements[0],
    videoDate: inforElements[1],
    videoInstrument: inforElements[2],
    videoTitle: inforElements[3],
    videoLink: inforElements[4],
    composer: inforElements[5]
  }
}

function getSelectedFilters() {
  return {
    year: document.getElementById('yearDropdown').value,
    instrument: document.getElementById('instrumentDropDown').value,
    composer: document.getElementById('composerDropDown').value
  };
}

async function loadVideoLinks() {

  /* Load video links from text file */
  const linksData = await loadDataFromFile('videolinks.txt');
  if (!linksData) {
    console.error('No data loaded from video link file.');
    return;
  }
  /* Parse the data into an array */
  const videoLinks = loadArrayFromData(linksData);

  /* Load composer intro from text file */
  const composerInfo = await loadDataFromFile('composerintro.txt');
  if (!composerInfo) {
    console.error('No data loaded from composer intro file.');
    return;
  }
  /* Parse the data into a map */
  const composerArrays = loadArrayFromData(composerInfo);
  const composerMap = new Map();
  composerArrays.forEach(entry => {
    const [name, intro] = entry.split('|');
    composerMap.set(name, intro);
  });

  const tableElement = document.getElementById('videoListTable');

  tableElement.innerHTML = `
    <tr>
      <th>Year</th>
      <th>Date</th>
      <th>Instrument</th>
      <th>Video Title</th>
      <th>Composer</th>
    </tr>
  `;

  const filters = getSelectedFilters();

  videoLinks.forEach(data => {
    const videoInfoRecord = getVideoInfo(data);
    
    if (filters.year !== 'all' && videoInfoRecord.videoYear !== filters.year) {
      return; // Skip this record if it doesn't match the selected year
    }

    if (filters.instrument !== 'all' && videoInfoRecord.videoInstrument !== filters.instrument) {
      return; // Skip this record if it doesn't match the selected year
    }

    if (filters.composer !== 'all' && videoInfoRecord.composer !== filters.composer) {
      return; // Skip this record if it doesn't match the selected year
    }

    const tr = document.createElement('tr');

    const tdYear = document.createElement('td');
    tdYear.textContent = videoInfoRecord.videoYear; 
    tr.appendChild(tdYear);

    const tdDate = document.createElement('td');
    tdDate.textContent = videoInfoRecord.videoDate;
    tr.appendChild(tdDate);

    const tdInstrument = document.createElement('td');
    tdInstrument.textContent = videoInfoRecord.videoInstrument;
    tr.appendChild(tdInstrument);

    const tdTitle = document.createElement('td');
    const a = document.createElement('a');
    a.href = videoInfoRecord.videoLink;
    a.textContent = videoInfoRecord.videoTitle;
    a.target = "_blank"; // Open in new tab
    tdTitle.appendChild(a);
    tr.appendChild(tdTitle);

    const tdComposer = document.createElement('td');
    if (videoInfoRecord.composer && composerMap.has(videoInfoRecord.composer)) {
      tdComposer.title = composerMap.get(videoInfoRecord.composer);
    }
    tdComposer.textContent = videoInfoRecord.composer;
    tr.appendChild(tdComposer);

    tableElement.appendChild(tr);
  });
}

// Add this after DOM is loaded
document.getElementById('yearDropdown').addEventListener('change', loadVideoLinks);
document.getElementById('instrumentDropDown').addEventListener('change', loadVideoLinks);
document.getElementById('composerDropDown').addEventListener('change', loadVideoLinks);