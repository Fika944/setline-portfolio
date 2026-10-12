document.getElementById('year').textContent = String(new Date().getFullYear());
const portfolio = document.getElementById('portfolio-dialog');
const projectDialog = document.getElementById('project-dialog');
const projectsByCategory = {
 publishing: [
  {title:'Art book',image:'publishing-1.webp',description:'A photography-led publication concept, combining restrained typography with tactile print finishes.'},
  {title:'Editorial magazine',image:'publishing-2.webp',description:'An editorial layout concept with a clear typographic hierarchy and a black, white and red visual rhythm.'}
 ],
 exhibition: [
  {title:'Exhibition stand',image:'exhibition-1.webp',description:'A stand concept with integrated brand surfaces, display areas and space for visitor interaction.'},
  {title:'Museum exhibition',image:'exhibition-2.webp',description:'A thematic exhibition concept combining spatial storytelling, display design and interactive media.'}
 ],
 outdoor: [
  {title:'Storefront signage',image:'outdoor-1.webp',description:'An illuminated signage concept that connects a storefront with a consistent visual identity.'},
  {title:'Facade lightbox',image:'outdoor-2.webp',description:'A large-format illuminated advertising concept designed for clear visibility after dark.'}
 ],
 graphic: [
  {title:'Visual identity',image:'graphic-1.webp',description:'A visual identity concept expressed through logo applications, stationery and printed brand materials.'},
  {title:'Packaging design',image:'graphic-2.webp',description:'A coordinated packaging concept using minimal graphics and a focused colour palette.'}
 ],
 promotional: [
  {title:'Corporate souvenir set',image:'promotional-1.webp',description:'A coordinated concept for branded everyday objects, including a notebook, pen and mug.'},
  {title:'Business gift collection',image:'promotional-2.webp',description:'A corporate gift concept combining useful products, considered presentation and brand applications.'}
 ]
};
function openProject(project) {
 document.getElementById('project-title').textContent = project.title;
 const img = document.getElementById('project-image');
 img.src = 'assets/' + project.image;
 img.alt = project.title + ' — concept project';
 document.getElementById('project-description').textContent = project.description;
 projectDialog.showModal();
}
document.querySelectorAll('[data-category]').forEach(button => {
 button.addEventListener('click', () => {
  document.getElementById('portfolio-title').textContent = button.dataset.title;
  const grid = document.getElementById('portfolio-grid');
  grid.replaceChildren();
  projectsByCategory[button.dataset.category].forEach(project => {
   const card = document.createElement('button');
   card.type = 'button'; card.className = 'project-card';
   const img = document.createElement('img');img.src='assets/'+project.image;img.alt=project.title+' — concept project';img.loading='lazy';
   const name = document.createElement('h3');name.textContent=project.title;
   const label = document.createElement('span');label.className='concept-label';label.textContent='Concept project';
   card.append(img,name,label);card.addEventListener('click',()=>openProject(project));grid.append(card);
  });
  portfolio.showModal();document.body.classList.add('modal-open');
 });
});
[portfolio,projectDialog].forEach(dialog => {
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{if(!portfolio.open&&!projectDialog.open)document.body.classList.remove('modal-open');});
 dialog.addEventListener('click',event=>{
  if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();}
 });
});
