// Create a small application that retrieves and displays user data based on a user ID. 
// The data should be fetched from a simulated API 
// You should handle the asynchronous operation using JavaScript promises, async, and await.

// Simulate fetching user data from an API
function fetchuserData(userId) {
    return new Promise((resolve, reject) => {
       
            if (userId === '006') {
                resolve({ id: '006', name: 'Hridoy Hasan', age: 30, job: 'SQA' });
            } else if (userId === '018') {
                resolve({ id: '018', name: 'Zarin Tasnim', age: 24, job: 'Teacher' });
            } else {
                reject('User not found');
            }
    });
}

async function getuserInfo() {
    const userId = prompt('Enter user ID: '); 
 if (userId === '006' || userId === '018') {
    try {
        const userdata = await fetchuserData(userId);
        console.log('User Data:', userdata);
    } catch (error) {
        console.log('Error:', error); //rejected promise is handled by catch block
    }
}
    else {
            console.log('Error: Invalid ID format. Please enter "006" or "018".');
        }
}

getuserInfo();