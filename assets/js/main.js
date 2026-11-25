document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.doc-article pre').forEach((pre) => {
    const code = pre.querySelector('code');
    if (!code || pre.closest('[data-tabs]')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.append(pre);

    const button = document.createElement('button');
    button.className = 'code-copy-button';
    button.type = 'button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code');
    wrapper.append(button);

    let resetTimer;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.innerText);
        button.textContent = 'Copied';
        button.setAttribute('aria-label', 'Copied');
      } catch {
        button.textContent = 'Copy failed';
        button.setAttribute('aria-label', 'Copy failed');
      }

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code');
      }, 2000);
    });
  });

  document.querySelectorAll('[data-tabs]').forEach((group, groupIndex) => {
    const list = group.querySelector('[role="tablist"]');
    const panels = [...group.querySelectorAll('.tab-panel')];
    if (!list || panels.length === 0) return;

    panels.forEach((panel, index) => {
      const tabId = `tab-${groupIndex}-${index}`;
      const panelId = `tabpanel-${groupIndex}-${index}`;
      const button = document.createElement('button');
      button.className = 'tab-button';
      button.type = 'button';
      button.id = tabId;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', panelId);
      button.setAttribute('aria-selected', String(index === 0));
      button.tabIndex = index === 0 ? 0 : -1;
      button.textContent = panel.dataset.tabTitle;
      panel.id = panelId;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tabId);
      panel.hidden = index !== 0;
      list.append(button);

      button.addEventListener('click', () => {
        panels.forEach((target, targetIndex) => {
          const selected = targetIndex === index;
          target.hidden = !selected;
          const targetButton = list.children[targetIndex];
          targetButton.setAttribute('aria-selected', String(selected));
          targetButton.tabIndex = selected ? 0 : -1;
        });
      });

      button.addEventListener('keydown', (event) => {
        let nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % panels.length;
        else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + panels.length) % panels.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = panels.length - 1;
        else return;

        event.preventDefault();
        list.children[nextIndex].focus();
        list.children[nextIndex].click();
      });
    });
  });

  document.querySelectorAll('.sidebar-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const submenu = document.getElementById(button.getAttribute('aria-controls'));
      if (!submenu) return;

      button.setAttribute('aria-expanded', String(!expanded));
      submenu.hidden = expanded;
      button.closest('.sidebar-item')?.classList.toggle('is-open', !expanded);
    });
  });

  const sidebar = document.querySelector('[data-docs-sidebar]');
  const sidebarToggle = document.querySelector('[data-sidebar-toggle]');
  const sidebarBackdrop = document.querySelector('[data-sidebar-backdrop]');
  const mobileViewport = window.matchMedia('(max-width: 720px)');

  if (sidebar && sidebarToggle && sidebarBackdrop) {
    const closeSidebar = (restoreFocus = false) => {
      sidebar.classList.remove('is-visible');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.setAttribute('aria-label', 'Open documentation menu');
      sidebarBackdrop.hidden = true;
      document.body.classList.remove('sidebar-open');
      if (restoreFocus) sidebarToggle.focus();
    };

    sidebarToggle.addEventListener('click', () => {
      const expanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeSidebar();
        return;
      }

      sidebar.classList.add('is-visible');
      sidebarToggle.setAttribute('aria-expanded', 'true');
      sidebarToggle.setAttribute('aria-label', 'Close documentation menu');
      sidebarBackdrop.hidden = false;
      document.body.classList.add('sidebar-open');
      const currentPage = sidebar.querySelector('a[aria-current="page"]');
      (currentPage || sidebar.querySelector('a'))?.focus();
    });

    sidebarBackdrop.addEventListener('click', () => closeSidebar(true));
    sidebar.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeSidebar();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && sidebarToggle.getAttribute('aria-expanded') === 'true') {
        closeSidebar(true);
      }
    });

    mobileViewport.addEventListener('change', (event) => {
      if (!event.matches) closeSidebar();
    });
  }

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
