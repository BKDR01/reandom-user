let apiUrl = 'https://randomuser.me/api/';

let card = document.querySelector('#card');
let textuser;   
let userData;

async function getData() {
    try {
        const response = await axios.get(apiUrl);
        const user = response.data.results[0];
        userData = user;
   
        console.log(response);

        card.innerHTML = `
        <br>
            <img src="${user.picture.large}"  class="rounded-[50%] w-[320px] h-[300px] mx-auto my-[90px] alt="User Image">
            <h2 class="font-bold text-center text-[34px]" id="textuser">${user.name.first} ${user.name.last}</h2>
            <br>
             <div class="flex gap-[20px] justify-center">
                <button class="px-4 py-4 bg-[#6C63FF] text-white text-[18px] rounded-md" onclick="showUserName()">Name</button>
                <button class="px-4 py-4 bg-[#6C63FF] text-white text-[18px] rounded-md" onclick="showEmail()">Email</button>
                <button class="px-4 py-4 bg-[#6C63FF] text-white text-[18px] rounded-md" onclick="showPhone()">Tel number</button>
                <button class="px-4 py-4 bg-[#6C63FF] text-white text-[18px] rounded-md" onclick="showBirthday()">Briyhday</button>
        </div>
        `;
        textuser = document.querySelector('#textuser');
    } catch (error) {
        console.error('VPN yoqib ishlatib koring iltimos', error);
        card.innerHTML = '<p>VPN yoqib ishlatib koring iltimos</p>';
    }
}

function showUserName() {
    if (userData && textuser) {
        textuser.innerHTML = `${userData.name.first} ${userData.name.last}`;
    }
}

function showEmail() {
    if (userData && textuser) {
        textuser.innerHTML = `${userData.email}`;
    }
}

function showPhone() {
    if (userData && textuser) {
        textuser.innerHTML = `${userData.phone}`;
    }
}

function showBirthday() {
    if (userData && textuser) {
        textuser.innerHTML = `${new Date(userData.dob.date).toLocaleDateString()}`;
    }
}
getData();
