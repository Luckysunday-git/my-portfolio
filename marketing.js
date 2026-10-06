document.addEventListener("DOMContentLoaded", function () {
  const hiringForm = document.getElementById("hiringForm");

  if (!hiringForm) {
    return;
  }

  hiringForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the information entered by the hirer
    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value;
    const message = document.getElementById("message").value.trim();

    // Your WhatsApp number
    const whatsappNumber = "2348118254967";

    // WhatsApp message
    const whatsappMessage = `Hello Lucky,

I am interested in hiring you for a project.

HIRER INFORMATION
━━━━━━━━━━━━━━━━━━━━

Full Name:
${name}

Company / Brand:
${company}

Email:
${email}

Phone / WhatsApp:
${phone || "Not provided"}


SERVICE NEEDED
━━━━━━━━━━━━━━━━━━━━

${service}


ESTIMATED BUDGET
━━━━━━━━━━━━━━━━━━━━

${budget || "Not specified"}


PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━

${message}


I look forward to discussing this project with you.

Thank you.`;

    // Encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  });
});
