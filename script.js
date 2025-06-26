document.addEventListener("DOMContentLoaded", function() {
  // CTA Button Logic
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      alert('You clicked the CTA button!');
    });
  }

  // Slider Logic (Arrow Navigation)
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  const sliderContainer = document.querySelector('.slider-container');

  if (arrowLeft && sliderContainer) {
    arrowLeft.addEventListener('click', () => {
      sliderContainer.scrollBy({ left: -1100, behavior: 'smooth' });
    });
  }

  if (arrowRight && sliderContainer) {
    arrowRight.addEventListener('click', () => {
      sliderContainer.scrollBy({ left: 1100, behavior: 'smooth' });
    });
  }

  // Sign-In Form Logic
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const phone = document.getElementById('phone').value;

      // Fetch the mock data from the external JSON file
      fetch('mockdata.json')
        .then(response => response.json())
        .then(data => {
          const users = data.users;

          // Validate the username and phone against the mock data
          const user = users.find(user => user.username === username && user.phone === phone);

          if (user) {
            alert('تم تسجيل الدخول بنجاح!');

            // Redirect based on the user role
            switch (user.role) {
              case 'farmer':
                window.location.href = 'farmer_dashboard.html';
                break;
              case 'investor':
                window.location.href = 'investor_dashboard.html';
                break;
              case 'buyer':
                window.location.href = 'buyer_dashboard.html';
                break;
              case 'supplier':
                window.location.href = 'supplier_dashboard.html';
                break;
              default:
                alert('Unknown role!');
            }
          } else {
            alert('اسم المستخدم أو رقم الجوال غير صحيح');
          }
        })
        .catch(error => {
          console.error('Error fetching the mock data:', error);
          alert('حدث خطأ في تحميل بيانات المستخدمين');
        });
    });
  }

  // Farmer Sign-Up Logic
  document.getElementById('farmerSignUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

     // Capture Farmer form data
    const fullName = document.getElementById('farmerFullName').value;
    const phone = document.getElementById('farmerPhone').value;
    const email = document.getElementById('farmerEmail').value;
    const password = document.getElementById('farmerPassword').value;
    const farmSize = document.getElementById('farmerFarmSize').value;
    const cropType = document.getElementById('farmerCropType').value;
    const landStatus = document.querySelector('input[name="land_status"]:checked')?.value;
    const city = document.getElementById('city').value;
    const farmingType = document.querySelector('input[name="farming_type"]:checked')?.value;
    const mainCrop = document.querySelector('input[name="crop"]:checked')?.value;
    const plantingSeason = document.querySelector('input[name="season"]:checked')?.value;
    const area = document.getElementById('area').value;
    const production = document.getElementById('production').value;
    const contracting = document.querySelector('input[name="contracting"]:checked')?.value;
    const contractingParty = document.getElementById('contracting_party').value;
    const salesVolume = document.getElementById('sales_volume').value;
    const challenges = [];
    document.querySelectorAll('input[name="challenges"]:checked').forEach(challenge => challenges.push(challenge.value));

    // Create a new Farmer user object
    const newFarmer = {
      username: fullName,
      phone: phone,
      email: email,
      password: password,
      role: 'farmer',
      farmSize: farmSize,
      cropType: cropType,
      landStatus: landStatus,
      city: city,
      farmingType: farmingType,
      mainCrop: mainCrop,
      plantingSeason: plantingSeason,
      area: area,
      production: production,
      contracting: contracting,
      contractingParty: contractingParty,
      salesVolume: salesVolume,
      challenges: challenges
    };
 // Fetch the existing users from mockdata.json
  fetch('mockdata.json')
    .then(response => response.json())
    .then(data => {
      const users = data.users || []; // Get the existing users (if any)

      // Add the new user to the existing users
      users.push(newFarmer);

      // Save the updated list of users to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Confirmation alert
      alert('Farmer signed up successfully!');
      window.location.href = 'farmer_dashboard.html';
    })
    .catch(error => {
      console.error('Error fetching the mock data:', error);
      alert('حدث خطأ في تحميل بيانات المستخدمين');
    });
  });

  // Investor Sign-Up Logic
  document.getElementById('investorSignUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

       // Capture Investor form data
    const fullName = document.getElementById('investorFullName').value;
    const phone = document.getElementById('investorPhone').value;
    const email = document.getElementById('investorEmail').value;
    const password = document.getElementById('investorPassword').value;
    const landStatus = document.querySelector('input[name="land_status"]:checked')?.value;
    const fundingSource = document.getElementById('funding-source').value;
    const maxFunding = document.getElementById('max-funding').value;
    const interestRates = document.getElementById('interest-rates').value;
    const interestRate = document.getElementById('interest-rate').value;
    const duration = document.getElementById('duration').value;

    // Create a new Investor user object
    const newInvestor = {
      username: fullName,
      phone: phone,
      email: email,
      password: password,
      role: 'investor',
      landStatus: landStatus,
      fundingSource: fundingSource,
      maxFunding: maxFunding,
      interestRates: interestRates,
      interestRate: interestRate,
      duration: duration
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newInvestor);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Investor signed up successfully!');
    window.location.href = 'investor_dashboard.html';
  });

  // Buyer Sign-Up Logic
  document.getElementById('buyerSignUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

   // Capture Buyer form data
    const fullName = document.getElementById('buyerFullName').value;
    const phone = document.getElementById('buyerPhone').value;
    const email = document.getElementById('buyerEmail').value;
    const password = document.getElementById('buyerPassword').value;
    const landStatus = document.querySelector('input[name="land_status"]:checked')?.value;
    const area = document.getElementById('area').value;
    const farmingType = document.querySelector('input[name="farming_type"]:checked')?.value;
    const sampleRequest = document.querySelector('input[name="crop"]:checked')?.value;
    const notes = document.getElementById('notes').value;

    // Create a new Buyer user object
    const newBuyer = {
      username: fullName,
      phone: phone,
      email: email,
      password: password,
      role: 'buyer',
      landStatus: landStatus,
      area: area,
      farmingType: farmingType,
      sampleRequest: sampleRequest,
      notes:notes
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newBuyer);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Buyer signed up successfully!');
    window.location.href = 'buyer_dashboard.html';
  });

  // Supplier Sign-Up Logic
  document.getElementById('supplierSignUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

   // Capture Supplier form data
    const fullName = document.getElementById('supplierFullName').value;
    const phone = document.getElementById('supplierPhone').value;
    const email = document.getElementById('supplierEmail').value;
    const password = document.getElementById('supplierPassword').value;
    const productType = document.querySelector('input[name="product_type"]:checked')?.value;
    const availableProducts = document.getElementById('available-products').value;
    const minOrder = document.getElementById('min-order').value;
    const deliveryMethod = document.querySelector('input[name="delivery_method"]:checked')?.value;
    const deliveryTime = document.getElementById('delivery-time').value;

    // Create a new Supplier user object
    const newSupplier = {
      username: fullName,
      phone: phone,
      email: email,
      password: password,
      role: 'supplier',
      productType: productType,
      availableProducts: availableProducts,
      minOrder: minOrder,
      deliveryMethod: deliveryMethod,
      deliveryTime: deliveryTime
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newSupplier);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Supplier signed up successfully!');
    window.location.href = 'supplier_dashboard.html';
  });
});





