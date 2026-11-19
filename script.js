// FF AIM LOCK - simulator panel only. Does not interact with Free Fire.
(() => {
  const modes = {
    head: { button: document.getElementById('headToggle'), card: document.getElementById('headCard'), state: document.getElementById('headState'), log: document.getElementById('headLog') },
    body: { button: document.getElementById('bodyToggle'), card: document.getElementById('bodyCard'), state: document.getElementById('bodyState'), log: document.getElementById('bodyLog') }
  };

  const message = document.getElementById('consoleMessage');
  const resetButton = document.getElementById('resetButton');

  function setMode(name, enabled) {
    const mode = modes[name];
    mode.button.setAttribute('aria-pressed', String(enabled));
    mode.button.setAttribute('aria-label', `${enabled ? 'Nonaktifkan' : 'Aktifkan'} ${name === 'head' ? 'Head' : 'Body'} Focus`);
    mode.card.classList.toggle('active', enabled);
    mode.state.textContent = enabled ? 'ACTIVE' : 'OFFLINE';
    mode.log.textContent = enabled ? 'ENABLED' : 'DISABLED';
    mode.log.className = enabled ? 'on' : 'off';

    const label = name === 'head' ? 'HEAD FOCUS' : 'BODY FOCUS';
    message.textContent = enabled
      ? `> ${label} simulation activated.`
      : `> ${label} simulation deactivated.`;
  }

  Object.entries(modes).forEach(([name, mode]) => {
    mode.button.addEventListener('click', () => {
      const currentlyEnabled = mode.button.getAttribute('aria-pressed') === 'true';
      setMode(name, !currentlyEnabled);
    });
  });

  resetButton.addEventListener('click', () => {
    setMode('head', false);
    setMode('body', false);
    message.textContent = '> All modes reset. Simulator ready.';
  });
})();
