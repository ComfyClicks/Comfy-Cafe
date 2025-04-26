// Helper functions for element creation
function createElement(tag, className = null, textContent = null) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent !== null) element.textContent = textContent;
  return element;
}

function createContactDetail(icon, content, isHTML = false) {
  const detailDiv = createElement('div', 'contact-detail');
  const iconSpan = createElement('span', 'contact-icon', icon);
  const contentP = createElement('p');
  
  if (isHTML) {
    contentP.innerHTML = content;
  } else {
    contentP.textContent = content;
  }
  
  detailDiv.append(iconSpan, contentP);
  return detailDiv;
}

function appendMultiple(parent, children) {
  const fragment = document.createDocumentFragment();
  children.forEach(child => fragment.appendChild(child));
  parent.appendChild(fragment);
}

function createFormField(type, id, labelText, required = false) {
  const fieldDiv = createElement('div', 'form-field');
  
  const label = createElement('label', null, labelText);
  label.setAttribute('for', id);
  
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = id;
  if (required) input.required = true;
  
  fieldDiv.append(label, input);
  return fieldDiv;
}

function contactPage() {
  const contactContainer = createElement('div', 'contact-container');
  
  // Contact Information Section
  const infoSection = createElement('section', 'contact-info-section');
  const cafeInfo = createElement('div', 'cafe-info');
  
  const cafeName = createElement('h2', null, 'Comfy Cafe');
  const tagline = createElement('p', 'tagline', 'The comfiest cup of coffee in the world');
  
  const addressDiv = createContactDetail('📍', '123 Comfy Street<br>Paris, France 75008', true);
  const phoneDiv = createContactDetail('📞', '(555) 123-4567');
  const emailDiv = createContactDetail('✉️', 'hello@comfycafe.com');
  const hoursDiv = createContactDetail('🕒', 'Monday-Friday: 7am - 8pm<br>Saturday-Sunday: 7am - 9pm', true);
  
  const socialDiv = createElement('div', 'social-links');
  
  ['Instagram', 'Github'].forEach(platform => {
    const socialLink = createElement('a', 'social-link', platform);
    socialLink.href = `https://${platform.toLowerCase()}.com/comfyclicks`;
    socialLink.target = '_blank';
    socialDiv.appendChild(socialLink);
  });
  
  appendMultiple(cafeInfo, [
    cafeName, tagline, addressDiv, phoneDiv, emailDiv, hoursDiv, socialDiv
  ]);
  infoSection.appendChild(cafeInfo);
  
  // Map Section
  const mapSection = createElement('section', 'map-section');
  const mapContainer = createElement('div', 'map-container');
  mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5106.841867971144!2d2.308114636116401!3d48.86671632379263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc518637631%3A0x7c6b92d2c2465999!2zQ2hhbXBzLcOJbHlzw6llcywgUGFyaXMsIEZyYW5jZQ!5e0!3m2!1sen!2sus!4v1744957795273!5m2!1sen!2sus" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  
  const mapInfo = createElement('div', 'map-info');
  const directionsBtn = createElement('a', 'directions-btn', 'Get Directions');
  directionsBtn.href = 'https://maps.app.goo.gl/viW1uyVZKDRN2d3Q8';
  directionsBtn.target = '_blank';
  
  const parkingInfo = createElement('p', null, 'Metro and bus stops nearby on Avenue des Champs-Élysées.');
  
  mapInfo.append(directionsBtn, parkingInfo);
  mapSection.append(mapContainer, mapInfo);
  
  // Contact Form Section
  const formSection = createElement('section', 'contact-form-section');
  const formHeading = createElement('h2', null, 'Send Us a Message');
  const contactForm = createElement('form', 'contact-form');
  
  const nameField = createFormField('text', 'name', 'Your Name', true);
  const emailField = createFormField('email', 'email', 'Your Email', true);
  
  // Subject dropdown
  const subjectField = createElement('div', 'form-field');
  const subjectLabel = createElement('label', null, 'Subject');
  subjectLabel.setAttribute('for', 'subject');
  
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
  
  subjectField.append(subjectLabel, subjectSelect);
  
  // Message text area
  const messageField = createElement('div', 'form-field');
  const messageLabel = createElement('label', null, 'Your Message');
  messageLabel.setAttribute('for', 'message');
  
  const messageTextarea = document.createElement('textarea');
  messageTextarea.id = 'message';
  messageTextarea.name = 'message';
  messageTextarea.rows = 5;
  messageTextarea.required = true;
  
  messageField.append(messageLabel, messageTextarea);
  
  // Submit button and privacy notice
  const submitButton = createElement('button', 'submit-btn', 'Send Message');
  submitButton.type = 'submit';
  
  const privacyNotice = createElement('p', 'privacy-notice', 
    'Your information will be used only to respond to your inquiry and will never be shared with third parties.');
  
  appendMultiple(contactForm, [
    nameField, emailField, subjectField, messageField, submitButton, privacyNotice
  ]);
  formSection.append(formHeading, contactForm);
  
  // FAQ Section
  const faqSection = createElement('section', 'faq-section');
  const faqHeading = createElement('h2', null, 'Frequently Asked Questions');
  const faqList = createElement('div', 'faq-list');
  
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
    const faqItem = createElement('div', 'faq-item');
    const question = createElement('h3', null, faq.question);
    const answer = createElement('p', null, faq.answer);
    faqItem.append(question, answer);
    faqList.appendChild(faqItem);
  });
  
  faqSection.append(faqHeading, faqList);
  
  // Accessibility Section
  const accessibilitySection = createElement('section', 'accessibility-section');
  const accessibilityHeading = createElement('h2', null, 'Accessibility');
  const accessibilityInfo = createElement('div', 'accessibility-info');
  
  const wheelchairInfo = createElement('p');
  wheelchairInfo.innerHTML = '<strong>♿️ Wheelchair Access:</strong> Our café is fully wheelchair accessible with a ramp at the entrance and accessible restrooms.';
  
  const allergenInfo = createElement('p');
  allergenInfo.innerHTML = '<strong>🥜 Allergens:</strong> We offer gluten-free, dairy-free, and nut-free options. Please inform our staff about any allergies or dietary restrictions.';
  
  const additionalInfo = createElement('p');
  additionalInfo.innerHTML = '<strong>🔊 Additional Accommodations:</strong> We provide large-print menus upon request and welcome service animals.';
  
  appendMultiple(accessibilityInfo, [wheelchairInfo, allergenInfo, additionalInfo]);
  accessibilitySection.append(accessibilityHeading, accessibilityInfo);
  
  // Append all sections to container
  appendMultiple(contactContainer, [
    infoSection, mapSection, formSection, faqSection, accessibilitySection
  ]);
  
  return contactContainer;
}

export default contactPage;