const form = document.contactForm;

function getInput() {
  return form.querySelectorAll('.form-container input, textarea');
}

function sendEmail(field) {
  const anchorTag = form.querySelector('.enviar > a');

  let formData = new FormData();
  formData.set(field.name, field.value);

  const subject = formData.get('subject');
  const userName = formData.get('userName');
  const userEmail = formData.get('email');
  const bodyText = formData.get('body');

  const body = `
                  Enviado por: ${userName}, ${userEmail}.
                  ${bodyText}
                  `;

  anchorTag.href = `mailto:gameszaum@gmail.com?subject=${subject}&body=${body}`;
}

function handleChange() {
  const input = getInput();

  input.forEach(field => {
    if (!field.value) {
      return;
    }

    sendEmail(field);
  });
}

function handleSubmit() {
  const input = getInput();

  input.forEach(field => {
    if (!field.value) {
      field.setAttribute('invalid', 'true');

      return;
    }

    field.setAttribute('invalid', 'false');
    window.location.href = './pages/sucess-form.html';
  });
}

form.onsubmit = handleSubmit;
getInput().forEach(input => (input.onchange = handleChange));
