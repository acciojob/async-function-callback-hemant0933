const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.getElementById('btn');


 async function fetchFunction(callback){
	 const response1 = await fetch(url);
    const data1 = await response1.json();
// return document.getElementById('output').innerHTML = `<p>`${data1[0]}`</p>`
	 callback(data1.title);
}
document.getElementById('btn').addEventListener('click', async () => {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = 'Loading...';
  fetchFunction((title) => {
    outputDiv.textContent = title;
  });
});