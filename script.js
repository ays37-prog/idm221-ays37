// small helper: toggle a 'mobile' wireframe layout, useful when testing responsive
document.addEventListener('keydown', e => {
  if ((e.key === 'm' || e.key === 'M') && e.altKey) {
    document.body.classList.toggle('mobile');
    console.log('toggled mobile');
  }
});