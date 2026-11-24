document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('[data-announcement]');
  if (!banner) return;

  const key = `webdocs-announcement-${banner.dataset.announcementKey}`;
  const dismissButton = banner.querySelector('.announcement-dismiss');

  try {
    if (localStorage.getItem(key) === 'dismissed') banner.hidden = true;
  } catch {
    // Keep the announcement visible if browser storage is unavailable.
  }

  dismissButton?.addEventListener('click', () => {
    banner.hidden = true;
    try {
      localStorage.setItem(key, 'dismissed');
    } catch {
      // The announcement remains dismissed for this page view.
    }
  });
});
