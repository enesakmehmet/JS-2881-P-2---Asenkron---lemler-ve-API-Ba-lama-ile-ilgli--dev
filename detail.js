const fetchUserDetails = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get("userId"); 
        console.log(userId);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userDetailData = await response.json();
        console.log(userDetailData);
        
       
        displayUserDetails(userDetailData);
    } catch (error) {
        console.log("Kullanıcı detaylarını alırken hata oluştu", error);
    }
};

const displayUserDetails = (userDetails) => {
    const detailsContainer = document.getElementById("detailsContainer");
    
  
    detailsContainer.innerHTML = '';
    
 
    if (userDetails) {
        const userDetailHTML = `
        <div class="card" style="width: 18rem; margin-bottom: 20px;">
            <div class="card-body">
                <h5 class="card-title">${userDetails.name}</h5>
                <div class="user-details">
                    <p class="card-text"><i class="fas fa-user"></i> ${userDetails.username}</p>
                    <p class="card-text"><i class="fas fa-location-dot"></i> ${userDetails.address.city}, ${userDetails.address.street}</p>
                    <p class="card-text"><i class="fas fa-building"></i> ${userDetails.company.name}</p>
                    <p class="card-text"><i class="fas fa-envelope"></i> ${userDetails.email}</p>
                    <p class="card-text"><i class="fas fa-phone"></i> ${userDetails.phone}</p>
                </div>
            </div>
        </div>
        `;
        detailsContainer.innerHTML = userDetailHTML;
    } else {
        detailsContainer.innerHTML = '<p>Kullanıcı detayları bulunamadı.</p>';
    }
};

window.onload = () => {
    fetchUserDetails();
};