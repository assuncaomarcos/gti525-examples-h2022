const API_URL = 'https://api.nobelprize.org/2.1/';

function downloadJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status <= 299) {
            callback(null, xhr.response);
        } else {
            callback(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
        }
    };
    xhr.onerror = () => callback(new Error('Network request failed'));
    xhr.send();
}

const country = 'CA';
const url = `${API_URL}/laureates?birthCountry=${country}`;

downloadJSON(url, (err, data) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(data);
    }
});
