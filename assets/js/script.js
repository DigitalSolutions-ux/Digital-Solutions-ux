document.addEventListener('DOMContentLoaded', function() {

    // Lógica para el Formulario de Contacto General (contacto.html)
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const phoneNumber = '528147931498'; 
            const name = document.getElementById('wa-name').value;
            const email = document.getElementById('wa-email').value;
            const message = document.getElementById('wa-message').value;
            const whatsappMessage = `Hola, mi nombre es *${name}*.\n\nMi correo es: *${email}*.\n\n*Mensaje:*\n${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Lógica para la Oferta de la Página de Inicio
    const ofertaBtn = document.getElementById('oferta-whatsapp-btn');
    if(ofertaBtn) {
        ofertaBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const phoneNumber = '528147931498';
            const ofertaMessage = 'Hola, ¡estoy interesado en la oferta de la Tarjeta de Presentación Digital por $399! Me gustaría saber más.';
            const encodedOfertaMessage = encodeURIComponent(ofertaMessage);
            const finalURL = `https://wa.me/${phoneNumber}?text=${encodedOfertaMessage}`;
            window.open(finalURL, '_blank');
        });
    }

    const countdownElement = document.getElementById('countdown');
    if(countdownElement) {
        const endDate = new Date(2025, 6, 31, 23, 59, 59).getTime(); // 31 de Julio, 2025
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = endDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(document.getElementById('days')) {
                document.getElementById('days').innerText = days < 10 ? '0' + days : days;
                document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
                document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
                document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
            }

            if (distance < 0) {
                clearInterval(timer);
                countdownElement.innerHTML = '<div class="expired">¡LA OFERTA HA EXPIRADO!</div>';
                if(ofertaBtn) {
                    ofertaBtn.style.display = 'none';
                }
            }
        }, 1000);
    }

    // Lógica para Página de Servicios Interactiva
    const packageData = {
        esencial: {
            title: 'Plan Esencial – Tu Marca en Línea',
            whatsappMessage: 'Hola, estoy interesado en el Plan Esencial para sitios web de $2,499 MXN.',
            sections: {
                details: { title: 'Características Incluidas', items: ['Sitio web profesional de hasta 3 secciones (Inicio, Servicios, Contacto, etc.).', 'Hosting gratuito en Netlife Constructor Web.', 'Dominio personalizado tipo <strong>tumarca.netlife.app</strong>.', 'Diseño adaptativo (celular, tablet, PC).', 'Formulario conectado a WhatsApp o correo.', 'Certificado SSL activo (HTTPS).', 'Publicación completa y configuración del sitio.', '1 cambio gratuito después de la entrega.'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio único:</strong> $2,499 MXN', '<strong>Pagos:</strong> 50% al iniciar ($1,249.50) + 50% al entregar ($1,249.50)', '<strong>Mantenimiento mensual:</strong> $499 MXN (incluye soporte, ajustes menores, asistencia técnica, revisión y respaldo).'] }
            }
        },
        profesional: {
            title: 'Plan Profesional – Sitio Escalable y Potente',
            whatsappMessage: 'Hola, estoy interesado en el Plan Profesional para sitios web de $3,899 MXN.',
            sections: {
                details: { title: 'Características Incluidas', items: ['Sitio web multipágina profesional (secciones ilimitadas según contenido).', 'Hosting premium en <strong>Hostinger (1 año incluido)</strong>.', 'Dominio <strong>.com personalizado (1 año incluido)</strong>.', 'Certificado SSL.', 'Panel de control completo (hPanel).', 'Diseño responsive (celular, tablet, PC).', 'Integración con WhatsApp, correo, redes sociales, cotizadores, etc.', '<strong>Optimización SEO avanzada.</strong>', '2 cambios incluidos después de la entrega.'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio único:</strong> $3,899 MXN', '<strong>Pagos:</strong> 50% al iniciar ($1,949.50) + 50% al entregar ($1,949.50)', '<strong>Mantenimiento mensual:</strong> $899 MXN (incluye ajustes, actualizaciones, respaldos y asesoría técnica).'] }
            }
        },
        'tarjeta-digital': {
            title: 'Paquete Único – Tarjeta Digital Interactiva',
            whatsappMessage: 'Hola, estoy interesado en el Paquete de Tarjeta Digital Interactiva de $799 MXN.',
            sections: {
                details: { title: 'Características Incluidas', items: ['Diseño profesional con tu marca (colores, logo, estilo).', 'Dominio personalizado gratuito: <strong>tumarca.netlify.app/usuario</strong>.', '<strong>vCard</strong> para guardar tu contacto en el teléfono al instante.', 'Botones interactivos a WhatsApp, redes sociales, email y llamada.', 'Galería de fotos o portafolio (hasta 6 imágenes).', 'Sección para archivo descargable (PDF, menú, CV, catálogo, etc.).', 'Video embebido de YouTube/Vimeo (opcional).', 'Animaciones suaves y efecto scroll profesional.', 'Hasta 3 rondas de cambios incluidas.'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio único:</strong> $799 MXN', '<strong>Soporte post-entrega:</strong> Válido por 15 días vía WhatsApp.','<strong>Mantenimiento mensual:</strong> $199 MXN.'] }
            }
        },
        'shopify-pro': {
            title: 'Paquete Pro: Soporte & Optimización Shopify',
            whatsappMessage: 'Hola, estoy interesado en el Paquete Pro de Soporte y Optimización para Shopify de $2,499 MXN.',
            sections: {
                performance: { title: 'Optimización del Rendimiento', items: ['Velocidad de carga mejorada (imágenes, scripts, lazy load)', 'Eliminación de apps innecesarias', 'Limpieza de código (liquid/CSS/JS)'] },
                seo: { title: 'Revisión SEO Técnica', items: ['Corrección de títulos, descripciones, etiquetas ALT', 'Indexación en Google y optimización para buscadores', 'Optimización para redes sociales (OG tags, favicon, etc.)'] },
                support: { title: 'Soporte Técnico General', items: ['Corrección de errores en tema', 'Ajustes visuales en secciones (colores, espaciado, fuentes)', 'Configuración básica de apps esenciales (reviews, WhatsApp, analytics)'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio Base:</strong> $2,499 MXN', '<strong>Modalidad de pago:</strong> 100% al iniciar el servicio.', '<strong>Soporte post-servicio:</strong> 7 días vía WhatsApp o email para dudas.', '<strong>Ajustes:</strong> Una ronda de ajustes incluida.'] },
                addons: { title: 'Servicios Adicionales (Opcional)', items: ['<strong>Paquete de Automatizaciones:</strong> +$500 MXN', '<strong>Servicios de Edición Gráfica:</strong> +$500 MXN'] }
            }
        },
        'manychat-basico': {
            title: 'Paquete Básico - Automatiza sin Complicaciones',
            whatsappMessage: 'Hola, estoy interesado en el Paquete Básico de Automatización de $2,499 MXN.',
            sections: {
                details: { title: 'Características Incluidas', items: ['<strong>1 flujo automatizado</strong> (ventas, atención o generación de leads).', 'Aplicable en 1 canal: <strong>WhatsApp, Messenger, Instagram o Web</strong>.', 'Copy profesional para todos los mensajes del bot.', 'Personalización con tu marca (emoji, tono de voz, colores).', 'Configuración de palabras clave para respuestas automáticas.', '<strong>Video guía</strong> para que aprendas a usar y editar tu bot.', 'Soporte por WhatsApp durante el proceso de entrega.'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio único:</strong> $2,499 MXN'] },
                addons: { title: 'Extras Opcionales', items: ['<strong>+1 flujo automatizado adicional:</strong> $899 MXN', '<strong>Soporte mensual y optimización:</strong> $499 MXN'] }
            }
        },
        'manychat-pro': {
            title: 'Paquete Pro - Automatización Total para Escalar',
            whatsappMessage: 'Hola, estoy interesado en el Paquete Pro de Automatización de $4,499 MXN.',
            sections: {
                details: { title: 'Características Incluidas', items: ['<strong>Hasta 4 flujos completos</strong> (ventas, cotización, agendamiento, seguimiento, carrito abandonado, etc.).', 'Aplicable en <strong>múltiples canales simultáneamente</strong> (WhatsApp, Messenger, Instagram y/o Web).', '<strong>Integración con herramientas externas</strong> como Google Sheets, CRMs o plataformas (vía Make/Zapier).', 'Segmentación avanzada de usuarios por etiquetas y variables.', 'Diseño visual avanzado con botones, menús, galerías y formularios.', '<strong>Videollamada de capacitación</strong> de 30 minutos.', '2 rondas de ajustes post entrega gratuitos.', 'Soporte prioritario por WhatsApp durante 7 días.'] },
                investment: { title: 'Información de Inversión', items: ['<strong>Precio único:</strong> $4,499 MXN'] },
                addons: { title: 'Extras Opcionales', items: ['<strong>Soporte mensual y optimización:</strong> $899 MXN', '<strong>Nuevos flujos personalizados:</strong> desde $799 MXN c/u'] }
            }
        }
    };

    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            if (document.getElementById(tabId)) {
                document.getElementById(tabId).classList.add('active');
            }
        });
    });

    const modal = document.getElementById('details-modal');
    if(modal) {
        const closeModalBtn = document.getElementById('close-modal-btn');
        const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        function openModal(packageName) {
            const data = packageData[packageName];
            if (!data) return;
            document.getElementById('modal-title').innerText = data.title;
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = '';
            for (const key in data.sections) {
                const section = data.sections[key];
                let itemsHtml = section.items.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('');
                modalBody.innerHTML += `<div class="modal-section"><h4>${section.title}</h4><ul>${itemsHtml}</ul></div>`;
            }
            const whatsappContainer = document.getElementById('modal-whatsapp-container');
            const phoneNumber = '528147931498';
            const encodedMessage = encodeURIComponent(data.whatsappMessage);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            whatsappContainer.innerHTML = `<a href="${whatsappURL}" target="_blank" class="cta-button">¡Me Interesa! Contactar por WhatsApp</a>`;
            modal.classList.add('active');
        }
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const packageName = btn.getAttribute('data-package');
                openModal(packageName);
            });
        });
        closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Lógica para Menú Hamburguesa en Móvil
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if(hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Animación "Fade In" al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});