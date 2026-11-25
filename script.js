const viewIds = ['about', 'ongoing', 'completed', 'workflows', 'publications'];

function switchView(viewId) {
  if (!viewIds.includes(viewId)) return;

  document.querySelectorAll('.view-pane').forEach((pane) => {
    const isActive = pane.id === `view-${viewId}`;
    pane.classList.toggle('active', isActive);
    pane.hidden = !isActive;
  });

  document.querySelectorAll('.tab-btn').forEach((button) => {
    const isActive = button.id === `btn-${viewId}`;
    button.classList.toggle('active', isActive);
    button.classList.toggle('text-slate-600', !isActive);
    button.setAttribute('aria-selected', String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });
}

document.querySelectorAll('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => switchView(button.dataset.view));
});

document.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLElement && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable)) return;

  const viewId = viewIds[Number(event.key) - 1];
  if (viewId) switchView(viewId);
});

switchView('about');

const projectAbstracts = document.querySelectorAll('details.project-abstract');

document.addEventListener('click', (event) => {
  const openAbstract = document.querySelector('details.project-abstract[open]');
  if (openAbstract && !openAbstract.closest('article').contains(event.target)) openAbstract.open = false;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') projectAbstracts.forEach((details) => { details.open = false; });
});

const heroCopy = document.getElementById('hero-copy');
const profileGroup = document.getElementById('profile-group');
const profilePhoto = profileGroup.children[1];

function fitProfilePhoto() {
  profilePhoto.style.width = '';
  profilePhoto.style.height = '';
  if (window.innerWidth < 768) return;

  const header = profileGroup.closest('header');
  const baselineHeight = header.offsetHeight;
  const note = profileGroup.children[0];
  const location = profileGroup.children[2];
  const noteStyle = getComputedStyle(note);
  const locationStyle = getComputedStyle(location);
  const surroundingHeight = note.offsetHeight + parseFloat(noteStyle.marginBottom)
    + location.offsetHeight + parseFloat(locationStyle.marginTop);
  const availableHeight = Math.floor(heroCopy.offsetHeight - surroundingHeight);
  let low = 144;
  let high = Math.min(260, Math.max(144, Math.floor(availableHeight * 955 / 1109)));
  while (low < high) {
    const candidate = Math.ceil((low + high) / 2);
    profilePhoto.style.width = `${candidate}px`;
    if (header.offsetHeight <= baselineHeight) low = candidate;
    else high = candidate - 1;
  }
  profilePhoto.style.width = `${low}px`;
}

fitProfilePhoto();
window.addEventListener('resize', fitProfilePhoto);
document.fonts.ready.then(fitProfilePhoto);
