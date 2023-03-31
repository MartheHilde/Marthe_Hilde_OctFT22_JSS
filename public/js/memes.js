fetch('/memes')
  .then(res => res.json())
  .then(data => {
    const memesTable = document.querySelector('#memes-table tbody');

    // Loop through each meme and create a row with the relevant data
    data.forEach(meme => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${meme.id}</td>
        <td>${meme.width} x ${meme.height}</td>
        <td><img src="${meme.url}" alt="${meme.name}" width="100" height="100"></td>
        <td><a href="/memes/${meme.id}">View</a></td>
      `;
      memesTable.appendChild(row);
    });
  })
  .catch(error => console.error(error));
