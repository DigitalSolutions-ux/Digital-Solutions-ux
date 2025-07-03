document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (!chatbotContainer) return;

    // Array para guardar el historial de la conversación
    let conversationHistory = [];

    // 1. Crear la UI del Chatbot
    chatbotContainer.innerHTML = `
        <div class="chat-bubble">
            <i class="fas fa-robot"></i>
        </div>
        <div class="chat-window">
            <div class="chat-header">
                <h4>DigiBot</h4>
                <p>Tu Asistente Virtual</p>
            </div>
            <div class="chat-body">
                <div class="message bot">Hola! Soy DigiBot. ¿En qué puedo ayudarte hoy?</div>
            </div>
            <div class="chat-footer">
                <input type="text" id="chat-input" placeholder="Escribe un mensaje...">
                <button id="send-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    // 2. Obtener referencias a los elementos del DOM
    const chatBubble = chatbotContainer.querySelector('.chat-bubble');
    const chatWindow = chatbotContainer.querySelector('.chat-window');
    const chatBody = chatbotContainer.querySelector('.chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    
    // 3. Lógica para abrir y cerrar el chat
    chatBubble.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
    });

    // 4. Lógica para enviar mensajes
    const sendMessage = async () => {
        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // Añadir mensaje del usuario al historial
        conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });

        const typingIndicator = appendMessage('DigiBot está escribiendo...', 'bot typing');
        
        try {
            // Enviar mensaje Y EL HISTORIAL al backend
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: userMessage,
                    history: conversationHistory 
                }),
            });

            if (!response.ok) {
                throw new Error('La respuesta del servidor no fue exitosa.');
            }

            const data = await response.json();
            const botResponse = data.response;

            chatBody.removeChild(typingIndicator);
            appendMessage(botResponse, 'bot');

            // Añadir respuesta del bot al historial
            conversationHistory.push({ role: 'model', parts: [{ text: botResponse }] });

        } catch (error) {
            chatBody.removeChild(typingIndicator);
            appendMessage('Lo siento, algo salió mal. Por favor, intenta de nuevo más tarde.', 'bot');
            console.error('Error al contactar al chatbot:', error);
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerText = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageDiv;
    }
});
