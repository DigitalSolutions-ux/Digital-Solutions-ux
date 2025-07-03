document.addEventListener('DOMContentLoaded', () => {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (!chatbotContainer) return;

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

        // Mostrar el mensaje del usuario
        appendMessage(userMessage, 'user');
        chatInput.value = '';

        // Mostrar indicador de "escribiendo..."
        const typingIndicator = appendMessage('DigiBot está escribiendo...', 'bot typing');
        
        try {
            // Enviar mensaje al backend (nuestra función en la nube)
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('La respuesta del servidor no fue exitosa.');
            }

            const data = await response.json();
            const botResponse = data.response;

            // Quitar "escribiendo..." y mostrar la respuesta del bot
            chatBody.removeChild(typingIndicator);
            appendMessage(botResponse, 'bot');

        } catch (error) {
            chatBody.removeChild(typingIndicator);
            appendMessage('Lo siento, algo salió mal. Por favor, intenta de nuevo más tarde.', 'bot');
            console.error('Error al contactar al chatbot:', error);
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Función para añadir mensajes al cuerpo del chat (CORREGIDA)
    function appendMessage(text, type) {
        const messageDiv = document.createElement('div');
        
        // La corrección está aquí. Usamos className para añadir múltiples clases.
        messageDiv.className = `message ${type}`;
        
        messageDiv.innerText = text;
        chatBody.appendChild(messageDiv);
        // Hacer scroll hasta el final
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageDiv;
    }
});