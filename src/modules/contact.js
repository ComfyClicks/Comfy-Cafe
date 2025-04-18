const contactPage = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  
  // Contact Information Section
  const infoSection = document.createElement('section');
  infoSection.classList.add('contact-info-section');
  
  const cafeInfo = document.createElement('div');
  cafeInfo.classList.add('cafe-info');
  
  const cafeName = document.createElement('h2');
  cafeName.textContent = 'Comfy Cafe';
  
  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.textContent = 'The comfiest cup of coffee in the world';
  
  const addressDiv = document.createElement('div');
  addressDiv.classList.add('contact-detail');
  
  const addressIcon = document.createElement('span');
  addressIcon.classList.add('contact-icon');
  addressIcon.textContent = '📍';
  
  const address = document.createElement('p');
  address.innerHTML = '123 Comfy Street<br>Paris, France 75008';
  
  addressDiv.appendChild(addressIcon);
  addressDiv.appendChild(address);
  
  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('contact-detail');
  
  const phoneIcon = document.createElement('span');
  phoneIcon.classList.add('contact-icon');
  phoneIcon.textContent = '📞';
  
  const phone = document.createElement('p');
  phone.textContent = '(555) 123-4567';
  
  phoneDiv.appendChild(phoneIcon);
  phoneDiv.appendChild(phone);
  
  const emailDiv = document.createElement('div');
  emailDiv.classList.add('contact-detail');
  
  const emailIcon = document.createElement('span');
  emailIcon.classList.add('contact-icon');
  emailIcon.textContent = '✉️';
  
  const email = document.createElement('p');
  email.textContent = 'hello@comfycafe.com';
  
  emailDiv.appendChild(emailIcon);
  emailDiv.appendChild(email);
  
  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('contact-detail');
  
  const hoursIcon = document.createElement('span');
  hoursIcon.classList.add('contact-icon');
  hoursIcon.textContent = '🕒';
  
  const hours = document.createElement('p');
  hours.innerHTML = 'Monday-Friday: 7am - 8pm<br>Saturday-Sunday: 7am - 9pm';
  
  hoursDiv.appendChild(hoursIcon);
  hoursDiv.appendChild(hours);
  
  const socialDiv = document.createElement('div');
  socialDiv.classList.add('social-links');
  
  ['Instagram', 'Twitter'].forEach(platform => {
    const socialLink = document.createElement('a');
    socialLink.href = `https://${platform.toLowerCase()}.com/comfyclicks`;
    socialLink.textContent = platform;
    socialLink.target = '_blank';
    socialLink.classList.add('social-link');
    socialDiv.appendChild(socialLink);
  });
  
  cafeInfo.appendChild(cafeName);
  cafeInfo.appendChild(tagline);
  cafeInfo.appendChild(addressDiv);
  cafeInfo.appendChild(phoneDiv);
  cafeInfo.appendChild(emailDiv);
  cafeInfo.appendChild(hoursDiv);
  cafeInfo.appendChild(socialDiv);
  
  infoSection.appendChild(cafeInfo);
  
  // Map Section
  const mapSection = document.createElement('section');
  mapSection.classList.add('map-section');
  
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5106.841867971144!2d2.308114636116401!3d48.86671632379263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc518637631%3A0x7c6b92d2c2465999!2zQ2hhbXBzLcOJbHlzw6llcywgUGFyaXMsIEZyYW5jZQ!5e0!3m2!1sen!2sus!4v1744957795273!5m2!1sen!2sus" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  
  const mapInfo = document.createElement('div');
  mapInfo.classList.add('map-info');
  
  const directionsBtn = document.createElement('a');
  directionsBtn.href = 'https://maps.app.goo.gl/viW1uyVZKDRN2d3Q8';
  directionsBtn.target = '_blank';
  directionsBtn.classList.add('directions-btn');
  directionsBtn.textContent = 'Get Directions';
  
  const parkingInfo = document.createElement('p');
  parkingInfo.textContent = 'Metro and bus stops nearby on Avenue des Champs-Élysées.';
  
  mapInfo.appendChild(directionsBtn);
  mapInfo.appendChild(parkingInfo);
  
  mapSection.appendChild(mapContainer);
  mapSection.appendChild(mapInfo);
  
  // Contact Form
  const formSection = document.createElement('section');
  formSection.classList.add('contact-form-section');
  
  const formHeading = document.createElement('h2');
  formHeading.textContent = 'Send Us a Message';
  
  const contactForm = document.createElement('form');
  contactForm.classList.add('contact-form');
  
  // Name field
  const nameField = createFormField('text', 'name', 'Your Name', true);
  
  // Email field
  const emailField = createFormField('email', 'email', 'Your Email', true);
  
  // Subject dropdown
  const subjectField = document.createElement('div');
  subjectField.classList.add('form-field');
  
  const subjectLabel = document.createElement('label');
  subjectLabel.setAttribute('for', 'subject');
  subjectLabel.textContent = 'Subject';
  
  const subjectSelect = document.createElement('select');
  subjectSelect.id = 'subject';
  subjectSelect.name = 'subject';
  subjectSelect.required = true;
  
  const subjects = ['General Inquiry', 'Reservation Request', 'Feedback', 'Catering/Events'];
  
  subjects.forEach(subj => {
    const option = document.createElement('option');
    option.value = subj.toLowerCase().replace(/\s+/g, '-');
    option.textContent = subj;
    subjectSelect.appendChild(option);
  });
  
  subjectField.appendChild(subjectLabel);
  subjectField.appendChild(subjectSelect);
  
  // Message textarea
  const messageField = document.createElement('div');
  messageField.classList.add('form-field');
  
  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Your Message';
  
  const messageTextarea = document.createElement('textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.rows = 5;
  messageTextarea.required = true;
  
  messageField.appendChild(messageLabel);
  messageField.appendChild(messageTextarea);
  
  // Submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('submit-btn');
  submitButton.textContent = 'Send Message';
  
  // Privacy notice
  const privacyNotice = document.createElement('p');
  privacyNotice.classList.add('privacy-notice');
  privacyNotice.textContent = 'Your information will be used only to respond to your inquiry and will never be shared with third parties.';
  
  contactForm.appendChild(nameField);
  contactForm.appendChild(emailField);
  contactForm.appendChild(subjectField);
  contactForm.appendChild(messageField);
  contactForm.appendChild(submitButton);
  contactForm.appendChild(privacyNotice);
  
  formSection.appendChild(formHeading);
  formSection.appendChild(contactForm);
  
  // FAQ Section
  const faqSection = document.createElement('section');
  faqSection.classList.add('faq-section');
  
  const faqHeading = document.createElement('h2');
  faqHeading.textContent = 'Frequently Asked Questions';
  
  const faqList = document.createElement('div');
  faqList.classList.add('faq-list');
  
  const faqs = [
    {
      question: 'Do you have Wi-Fi?',
      answer: 'Yes! We offer free high-speed Wi-Fi to all our customers.'
    },
    {
      question: 'Is there outdoor seating?',
      answer: 'We have a lovely patio area with many tables available on a first-come, first-served basis.'
    },
    {
      question: 'Do you cater private events?',
      answer: 'Absolutely! We offer catering services and can host private events after hours. Please contact us at events@comfycafe.com for details.'
    },
    {
      question: 'Are pets allowed?',
      answer: 'Well-behaved pets are welcome!'
    }
  ];
  
  faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');
    
    const question = document.createElement('h3');
    question.textContent = faq.question;
    
    const answer = document.createElement('p');
    answer.textContent = faq.answer;
    
    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    
    faqList.appendChild(faqItem);
  });
  
  faqSection.appendChild(faqHeading);
  faqSection.appendChild(faqList);
  
  // Accessibility Section
  const accessibilitySection = document.createElement('section');
  accessibilitySection.classList.add('accessibility-section');
  
  const accessibilityHeading = document.createElement('h2');
  accessibilityHeading.textContent = 'Accessibility';
  
  const accessibilityInfo = document.createElement('div');
  accessibilityInfo.classList.add('accessibility-info');
  
  const wheelchairInfo = document.createElement('p');
  wheelchairInfo.innerHTML = '<strong>♿️ Wheelchair Access:</strong> Our café is fully wheelchair accessible with a ramp at the entrance and accessible restrooms.';
  
  const allergenInfo = document.createElement('p');
  allergenInfo.innerHTML = '<strong>🥜 Allergens:</strong> We offer gluten-free, dairy-free, and nut-free options. Please inform our staff about any allergies or dietary restrictions.';
  
  const additionalInfo = document.createElement('p');
  additionalInfo.innerHTML = '<strong>🔊 Additional Accommodations:</strong> We provide large-print menus upon request and welcome service animals.';
  
  accessibilityInfo.appendChild(wheelchairInfo);
  accessibilityInfo.appendChild(allergenInfo);
  accessibilityInfo.appendChild(additionalInfo);
  
  accessibilitySection.appendChild(accessibilityHeading);
  accessibilitySection.appendChild(accessibilityInfo);
  
  // Append all sections to container
  contactContainer.appendChild(infoSection);
  contactContainer.appendChild(mapSection);
  contactContainer.appendChild(formSection);
  contactContainer.appendChild(faqSection);
  contactContainer.appendChild(accessibilitySection);
  
  return contactContainer;
};

// Helper function to create form fields
function createFormField(type, id, labelText, required = false) {
  const fieldDiv = document.createElement('div');
  fieldDiv.classList.add('form-field');
  
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = labelText;
  
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = id;
  if (required) input.required = true;
  
  fieldDiv.appendChild(label);
  fieldDiv.appendChild(input);
  
  return fieldDiv;
}

export default contactPage;