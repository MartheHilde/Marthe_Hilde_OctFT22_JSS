function open_new_window(location) {
  //Change button after click
  fetch(`${window.location.href}/${location}`, {
      method: 'POST'
    }).then((results) => {
      console.log(results)
      window.location.href = results.url;
    }).catch((err) => {
      console.log(err)
   });
}