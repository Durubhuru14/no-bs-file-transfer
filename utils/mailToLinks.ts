const subject = "No BS Access Request";
const body = `Hi Admin,

Please provide me with the username and password for the No BS File Transfer webapp.

Thanks,
[Your Name]`;

export const contactAdminMailto = `mailto:durubhuru01@gmail.com?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

export const contactAdminGmailLink = `https://mail.google.com/mail/?view=cm&to=durubhuru01@gmail.com&su=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
