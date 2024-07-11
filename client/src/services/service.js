

async function GET(URL) {
    try {
        const response = await fetch(URL);
        const result = await response.json();

        if (!response.ok) {
            console.log('Network response was not ok.');
        }

        return result;

    } catch { (() => console.log('Something is wrong with GET Request!')) };
};

async function POST(URL, data) {
    try {
        console.log('You are in post function!');

        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            console.log('POST request did not return a successful response');
        }
    } catch (error) {
        console.log('Something is wrong with POST request:', error);
    }
}

async function DELETE(URL) {
    try {
        const result = await fetch(URL, { method: 'DELETE' });
        return result;
    } catch (error) {
        console.log('TI SI TAPAK I NE MOJESH EDIN DELETE REQUEST DA NAPRAVISH');
    }
};

async function PUT(url, data) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('PUT request failed');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error with PUT request:', error);
        throw error;
    }
}

export { GET, POST, DELETE, PUT };
