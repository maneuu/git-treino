const btn = document.getElementById("surpriseBtn");
btn.addEventListener("click", () => {
  // Cores e emojis aleatórios para diversão!
  const cores = ["#ffd700", "#ff69b4", "#00fa9a", "#1e90ff", "#ffa500"];
  const emojis = ["🎉", "🚀", "🥳", "😎", "✨", "💻", "🦄"];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.body.style.background = cor;
  btn.textContent = `Você ganhou um ${emoji}! Clique de novo!`;
});
