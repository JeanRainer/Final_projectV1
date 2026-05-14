function showCard(event, title, description) {
  const card = document.getElementById('hover-card');
  const cardTitle = document.getElementById('card-title');
  const cardText = document.getElementById('card-text');
  
  // 1. Inject content properties dynamically
  cardTitle.textContent = title;
  cardText.textContent = description;
  
  // 2. Identify layout offset boundaries relative to the globe-wrapper box
  const wrapper = event.target.parentElement;
  const rect = wrapper.getBoundingClientRect();
  
  // 3. Compute position offsets (adds +15px spacing from the cursor point)
  const x = event.clientX - rect.left + 15;
  const y = event.clientY - rect.top + 15;
  
  // 4. Update element positions and force visible state
  card.style.left = `${x}px`;
  card.style.top = `${y}px`;
  card.style.display = 'block';
}

function hideCard() {
  const card = document.getElementById('hover-card');
  card.style.display = 'none';
}
