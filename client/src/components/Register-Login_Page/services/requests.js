
const baseUrl = "http://localhost:3030";

const post = async (url, data) => {
    const response = await fetch(`${baseUrl}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
    }).catch(() => console.log('You have a problem with post request!'));

    return await response.json();
};

export default post;