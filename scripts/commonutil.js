async function loadDataFromFile(fileName) {
  try {
    const response = await fetch('data/' + fileName);
    if (!response.ok) {
      throw new Error('Failed to fetch ' + fileName);
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading file: ' + fileName, error);
    return null;
  }
}

function loadArrayFromData(data) {
  return data
    .split('\n')
    .map(link => link.trim())
    .filter(link => link);
}