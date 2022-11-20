const vidurl = "https://www.youtube.com/watch?v=-JTq1BFBwmo";
fetch(`https://noembed.com/embed?dataType=json&url=${vidurl}`)
  .then((res) => res.json())
  .then((data) => (document.querySelector("#title").textContent = data.title));
