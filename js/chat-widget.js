function toggleChat() {
    const chat = document.getElementById("chat-body");
    const header = document.getElementById("chat-header");
    const isOpen = chat.style.display === "block";
  
    chat.style.display = isOpen ? "none" : "block";
    header.classList.toggle("open", !isOpen);
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      askQuestion();
    }
  }
  
  async function askQuestion() {
    const input = document.getElementById("chat-input");
    const question = input.value.trim();
    if (!question) return;
  
    const log = document.getElementById("chat-log");
  
    // Add user message with fade-in class
    log.innerHTML += `<p class="chat-entry fade-in"><strong>You:</strong> ${question}</p>`;
    input.value = "";
  
    // Add typing indicator
    const typingIndicator = document.createElement("p");
    typingIndicator.className = "chat-entry typing-indicator";
    typingIndicator.textContent = "Bot is thinking...";    
    log.appendChild(typingIndicator);
    log.scrollTop = log.scrollHeight;
  
    try {
        const response = await fetch('https://chatbot-backend-aslo.onrender.com/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
          });
          
  
      const data = await response.json();
  
      // Remove typing indicator
      typingIndicator.remove();
  
      // Add bot response
      log.innerHTML += `<p class="chat-entry fade-in"><strong>Bot:</strong> ${data.answer}</p>`;
      log.scrollTop = log.scrollHeight;
  
    } catch (error) {
      typingIndicator.remove();
      log.innerHTML += `<p class="chat-entry fade-in"><strong>Bot:</strong> Oops! Something went wrong.</p>`;
      console.error(error);
    }
  }
  