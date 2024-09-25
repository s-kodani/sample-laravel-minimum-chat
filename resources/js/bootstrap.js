import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allow your team to quickly build robust real-time web applications.
 */

import './echo';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('send').addEventListener('click', () => {
      const message = document.getElementById('message').value;
      if (message) {
      axios.post('/send', { message: message }).then(() => {
          document.getElementById('message').value = '';
      });
      }
  });
});

window.Echo.channel('chat').listen('.NewMessage', (e) => {
  const messageElm = document.createElement("li");
  messageElm.textContent = e.message

  document.getElementById('entries').appendChild(messageElm);
});