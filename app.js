/* ==========================================================================
   Modern Personal Portfolio Website - Interactive Application Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // State management for user profile & theme
  const defaultProfile = {
    name: "Alex Chen",
    role: "Senior UX Designer & Full-Stack Developer",
    location: "San Francisco, CA (UTC-7)",
    experienceYears: "8+",
    vibe: "Dark-Mode Tech",
    targetAudience: "Recruiters & Hiring Managers in Enterprise SaaS and AI Platforms",
    valueProp: "Architecting high-performance digital products that bridge complex backend engineering with human-centered UX design.",
    bio1: "With over 8 years of experience leading product design and full-stack architecture, I specialize in transforming complex workflows into intuitive, lightning-fast web applications.",
    bio2: "My core engineering philosophy centers on radical performance, WCAG AA accessibility, and modular design systems that scale seamlessly across teams.",
    bio3: "Having led key initiatives for growth-stage AI startups and enterprise platforms, I thrive at the intersection of reactive frontend logic and resilient backend microservices.",
    bio4: "Outside of commercial projects, I actively contribute to open-source UI libraries, publish technical essays on web performance, and mentor emerging developers.",
    email: "alex.chen.dev@example.com",
    avatarUrl: "",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    twitter: "https://twitter.com/example",
    dribbble: "https://dribbble.com/example"
  };

  const projectsData = [
    {
      id: "project-1",
      title: "OmniFlow AI Engine",
      tagline: "Enterprise Workflow Automation Platform",
      category: "Full-Stack / AI",
      problemImpact: "Legacy enterprise workflows suffered from 40% latency bottlenecks and confusing multi-tab administration UI. Re-engineered the platform with a reactive canvas UI and streaming WebSocket backend, increasing throughput by 3x and cutting task completion time by 62%.",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL"],
      svgBg: "linear-gradient(135deg, #1e293b, #0f172a)",
      svgAccent: "#38bdf8",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-2",
      title: "Apex Design System",
      tagline: "Accessible Multi-Brand Component Library",
      category: "Design System / UI",
      problemImpact: "Product teams across 4 business units faced inconsistent UI components and poor WCAG compliance. Created a unified, themeable design system with 45+ accessible tokens and web components, standardizing UI development and reducing sprint delivery time by 35%.",
      tags: ["Figma", "Web Components", "CSS Variables", "Storybook", "Accessibility"],
      svgBg: "linear-gradient(135deg, #312e81, #1e1b4b)",
      svgAccent: "#818cf8",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-3",
      title: "HyperScale Analytics Dashboard",
      tagline: "Real-Time Telemetry & Data Visualization",
      category: "Data Visualization",
      problemImpact: "Data scientists struggled with slow static reports when analyzing millions of real-time telemetry events. Designed an interactive WebGL analytics dashboard that streams sub-second metrics, empowering engineers to detect anomaly spikes instantly.",
      tags: ["Next.js", "D3.js", "Canvas API", "GraphQL", "Tailwind"],
      svgBg: "linear-gradient(135deg, #064e3b, #022c22)",
      svgAccent: "#10b981",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "project-4",
      title: "Pulse Mobile Health App",
      tagline: "Biometric Monitoring & Telehealth Portal",
      category: "Mobile / UX",
      problemImpact: "Patients with chronic conditions lacked an easy way to log daily vitals and securely consult with physicians. Designed a mobile-first telemetry app with end-to-end encryption, resulting in 94% patient satisfaction and a 4.9/5 store rating.",
      tags: ["React Native", "UX Research", "Design Systems", "REST API", "HIPAA"],
      svgBg: "linear-gradient(135deg, #701a75, #4c0519)",
      svgAccent: "#f43f5e",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  // --- Element References ---
  const themeSelect = document.getElementById('themeSelect');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const contactForm = document.getElementById('contactForm');
  const toastContainer = document.getElementById('toastContainer');
  
  // Customizer & Profile View References
  const avatarFileInput = document.getElementById('avatarFileInput');
  const headerAvatarBtn = document.getElementById('headerAvatarBtn');
  const customizerTriggerBtn = document.getElementById('customizerTriggerBtn');
  const customizerModal = document.getElementById('customizerModal');
  const closeCustomizerModal = document.getElementById('closeCustomizerModal');
  const customizerModalTitle = document.getElementById('customizerModalTitle');
  const customizerModalSub = document.getElementById('customizerModalSub');
  
  const profileViewContainer = document.getElementById('profileViewContainer');
  const profileEditContainer = document.getElementById('profileEditContainer');
  const enterEditModeBtn = document.getElementById('enterEditModeBtn');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  
  const uploadAvatarBtn = document.getElementById('uploadAvatarBtn');
  const removeAvatarBtn = document.getElementById('removeAvatarBtn');
  const customizerForm = document.getElementById('customizerForm');
  const resetCustomizerBtn = document.getElementById('resetCustomizerBtn');

  // Floating FAB & Dedicated Inbox Modal References
  const floatingInboxBtn = document.getElementById('floatingInboxBtn');
  const floatingInboxBadge = document.getElementById('floatingInboxBadge');
  const inboxModal = document.getElementById('inboxModal');
  const closeInboxModal = document.getElementById('closeInboxModal');
  const modalRefreshInboxBtn = document.getElementById('modalRefreshInboxBtn');
  const modalClearInboxBtn = document.getElementById('modalClearInboxBtn');
  const standaloneInboxList = document.getElementById('standaloneInboxList');
  const inboxModalSub = document.getElementById('inboxModalSub');
  
  const toggleInboxBtn = document.getElementById('toggleInboxBtn');
  const inboxContainer = document.getElementById('inboxContainer');
  const inboxMessagesList = document.getElementById('inboxMessagesList');
  const inboxBadgeCount = document.getElementById('inboxBadgeCount');
  const refreshInboxBtn = document.getElementById('refreshInboxBtn');

  // Chatbox Drawer References
  const chatboxModal = document.getElementById('chatboxModal');
  const closeChatboxModal = document.getElementById('closeChatboxModal');
  const chatRecipientAvatar = document.getElementById('chatRecipientAvatar');
  const chatRecipientName = document.getElementById('chatRecipientName');
  const chatRecipientEmail = document.getElementById('chatRecipientEmail');
  const chatThreadBody = document.getElementById('chatThreadBody');
  const chatInputForm = document.getElementById('chatInputForm');
  const chatInputText = document.getElementById('chatInputText');

  // Lightbox References
  const viewProfileAvatar = document.getElementById('viewProfileAvatar');
  const viewAvatarHint = document.getElementById('viewAvatarHint');
  const avatarLightboxModal = document.getElementById('avatarLightboxModal');
  const closeAvatarLightbox = document.getElementById('closeAvatarLightbox');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxUploadBtn = document.getElementById('lightboxUploadBtn');

  // Project Modal References
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');

  let activeChatMsg = null;
  let allMessagesCache = [];

  // --- Theme Controller ---
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark-tech';
  setTheme(savedTheme);

  if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }

  // --- Mobile Drawer Controller ---
  if (mobileToggle && mobileNavDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
      const isOpen = mobileNavDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Toast Notification System ---
  function showToast(message, icon = '✓') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${escapeHtml(message)}</span>`;
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- Direct Email Copy Button ---
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const emailText = document.getElementById('profileEmailText')?.textContent || defaultProfile.email;
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('Email address copied to clipboard!', '📋');
      }).catch(() => {
        showToast('Failed to copy email automatically.', '⚠️');
      });
    });
  }

  // --- Contact Form Submission Handler (Backend Integration) ---
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required form fields.', '⚠️');
        return;
      }

      if (!validateEmail(email)) {
        showToast('Please enter a valid email address.', '⚠️');
        return;
      }

      const payload = { name, email, message };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          const result = await response.json();
          showToast(result.message || `Thank you, ${name}! Your message has been received!`, '📬');
        } else {
          saveMessageLocally(payload);
          showToast(`Thank you, ${name}! Message saved to inbox.`, '📬');
        }
      } catch (err) {
        saveMessageLocally(payload);
        showToast(`Thank you, ${name}! Message saved to inbox.`, '📬');
      }

      contactForm.reset();
      fetchMessages();
    });
  }

  function saveMessageLocally(payload) {
    let localMsgs = JSON.parse(localStorage.getItem('portfolio_received_messages') || '[]');
    localMsgs.unshift({
      id: 'msg_' + Date.now(),
      name: payload.name,
      email: payload.email,
      message: payload.message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('portfolio_received_messages', JSON.stringify(localMsgs));
  }

  // --- Inbox & Messages Fetcher ---
  async function fetchMessages() {
    let serverMsgs = [];

    try {
      const res = await fetch('/api/messages');
      if (res.ok) {
        const data = await res.json();
        serverMsgs = data.messages || [];
      }
    } catch(e) {
      // Local fallback
    }

    const localMsgs = JSON.parse(localStorage.getItem('portfolio_received_messages') || '[]');
    const combined = [...serverMsgs, ...localMsgs];
    const uniqueMessages = Array.from(new Map(combined.map(m => [m.id || m.timestamp, m])).values());

    uniqueMessages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    allMessagesCache = uniqueMessages;

    // Update Badge Counters
    if (inboxBadgeCount) inboxBadgeCount.textContent = uniqueMessages.length;
    if (floatingInboxBadge) floatingInboxBadge.textContent = uniqueMessages.length;
    if (inboxModalSub) inboxModalSub.textContent = `Showing ${uniqueMessages.length} received message(s)`;

    const renderHtml = uniqueMessages.length === 0 
      ? `<p style="font-size: 0.9rem; color: var(--text-muted); text-align: center; padding: 2rem;">No messages received yet.</p>`
      : uniqueMessages.map(m => `
        <div class="inbox-item" data-msg-id="${m.id}">
          <div class="inbox-header">
            <div>
              <span class="inbox-sender-name">${escapeHtml(m.name)}</span>
              <span class="inbox-sender-email">${escapeHtml(m.email)}</span>
            </div>
          </div>
          <p class="inbox-body">"${escapeHtml(m.message)}"</p>
          <div class="inbox-actions-row">
            <button type="button" class="btn btn-primary open-chat-btn" data-id="${m.id}" style="padding: 0.35rem 0.85rem; font-size: 0.82rem;">
              💬 Open Chat / Reply
            </button>
            <button type="button" class="btn btn-secondary delete-msg-btn" data-id="${m.id}" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; color: #f43f5e; border-color: rgba(244, 63, 94, 0.3);">
              🗑️ Delete
            </button>
          </div>
        </div>
      `).join('');

    if (inboxMessagesList) inboxMessagesList.innerHTML = renderHtml;
    if (standaloneInboxList) standaloneInboxList.innerHTML = renderHtml;

    // Attach Event Handlers
    document.querySelectorAll('.open-chat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const msgId = btn.getAttribute('data-id');
        const targetMsg = allMessagesCache.find(m => m.id === msgId);
        if (targetMsg) openChatbox(targetMsg);
      });
    });

    document.querySelectorAll('.delete-msg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const msgId = btn.getAttribute('data-id');
        deleteMessage(msgId);
      });
    });
  }

  // --- Real-Time Portfolio Chatbox Drawer System ---
  function openChatbox(msg) {
    activeChatMsg = msg;
    if (!chatboxModal) return;

    if (chatRecipientAvatar) {
      chatRecipientAvatar.textContent = msg.name.charAt(0).toUpperCase();
    }
    if (chatRecipientName) chatRecipientName.textContent = msg.name;
    if (chatRecipientEmail) chatRecipientEmail.textContent = msg.email;

    if (inboxModal) inboxModal.classList.remove('open');
    if (customizerModal) customizerModal.classList.remove('open');

    chatboxModal.classList.add('open');
    chatboxModal.setAttribute('aria-hidden', 'false');

    renderChatThread();
  }

  function formatChatDate(isoStr) {
    if (!isoStr) return "TODAY";
    try {
      const d = new Date(isoStr);
      const now = new Date();
      if (d.toDateString() === now.toDateString()) {
        return "TODAY";
      }
      return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } catch(e) {
      return isoStr;
    }
  }

  function renderChatThread() {
    if (!activeChatMsg || !chatThreadBody) return;

    const threads = JSON.parse(localStorage.getItem('portfolio_chat_threads') || '{}');
    const threadKey = activeChatMsg.id || activeChatMsg.email;
    const threadHistory = threads[threadKey] || [];

    const dateHeader = formatChatDate(activeChatMsg.timestamp);

    let html = `
      <div class="chat-date-header">${dateHeader}</div>
      <div class="chat-bubble chat-bubble-received">
        "${escapeHtml(activeChatMsg.message)}"
      </div>
    `;

    threadHistory.forEach(reply => {
      if (reply.type === 'sent') {
        html += `
          <div class="chat-bubble chat-bubble-sent">
            ${escapeHtml(reply.text)}
          </div>
        `;
      } else {
        html += `
          <div class="chat-bubble chat-bubble-received">
            ${escapeHtml(reply.text)}
          </div>
        `;
      }
    });

    chatThreadBody.innerHTML = html;
    chatThreadBody.scrollTop = chatThreadBody.scrollHeight;
  }

  if (chatInputForm) {
    chatInputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInputText.value.trim();
      if (!text || !activeChatMsg) return;

      const threadKey = activeChatMsg.id || activeChatMsg.email;
      let threads = JSON.parse(localStorage.getItem('portfolio_chat_threads') || '{}');
      if (!threads[threadKey]) threads[threadKey] = [];

      threads[threadKey].push({
        type: 'sent',
        text: text,
        timestamp: new Date().toISOString()
      });

      localStorage.setItem('portfolio_chat_threads', JSON.stringify(threads));
      chatInputText.value = '';
      renderChatThread();
      showToast(`Reply sent to ${activeChatMsg.name}! 💬`, '💬');
    });
  }

  if (closeChatboxModal && chatboxModal) {
    closeChatboxModal.addEventListener('click', () => {
      chatboxModal.classList.remove('open');
      chatboxModal.setAttribute('aria-hidden', 'true');
    });

    chatboxModal.addEventListener('click', (e) => {
      if (e.target === chatboxModal) {
        chatboxModal.classList.remove('open');
        chatboxModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function deleteMessage(id) {
    let localMsgs = JSON.parse(localStorage.getItem('portfolio_received_messages') || '[]');
    localMsgs = localMsgs.filter(m => m.id !== id);
    localStorage.setItem('portfolio_received_messages', JSON.stringify(localMsgs));
    showToast('Message deleted.', '🗑️');
    fetchMessages();
  }

  function clearAllMessages() {
    localStorage.setItem('portfolio_received_messages', JSON.stringify([]));
    showToast('Inbox cleared.', '🗑️');
    fetchMessages();
  }

  // Floating Inbox Button Handler
  if (floatingInboxBtn && inboxModal) {
    floatingInboxBtn.addEventListener('click', () => {
      fetchMessages();
      inboxModal.classList.add('open');
      inboxModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeInboxModal && inboxModal) {
    closeInboxModal.addEventListener('click', () => {
      inboxModal.classList.remove('open');
      inboxModal.setAttribute('aria-hidden', 'true');
    });

    inboxModal.addEventListener('click', (e) => {
      if (e.target === inboxModal) {
        inboxModal.classList.remove('open');
        inboxModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (modalRefreshInboxBtn) modalRefreshInboxBtn.addEventListener('click', fetchMessages);
  if (modalClearInboxBtn) modalClearInboxBtn.addEventListener('click', clearAllMessages);

  if (toggleInboxBtn && inboxContainer) {
    toggleInboxBtn.addEventListener('click', () => {
      const isVisible = inboxContainer.style.display !== 'none';
      inboxContainer.style.display = isVisible ? 'none' : 'block';
      if (!isVisible) fetchMessages();
    });
  }

  if (refreshInboxBtn) refreshInboxBtn.addEventListener('click', fetchMessages);

  fetchMessages();

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // --- Render Projects Grid ---
  const projectsGrid = document.getElementById('projectsGrid');
  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = projectsData.map(project => `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-thumb-wrap" style="background: ${project.svgBg};">
          <svg class="project-thumb-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="url(#grad-${project.id})" opacity="0.15"/>
            <circle cx="200" cy="100" r="60" stroke="${project.svgAccent}" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
            <path d="M160 100L240 100M200 60L200 140" stroke="${project.svgAccent}" stroke-width="3" stroke-linecap="round"/>
            <defs>
              <linearGradient id="grad-${project.id}" x1="0" y1="0" x2="400" y2="200" gradientUnits="userSpaceOnUse">
                <stop stop-color="${project.svgAccent}"/>
                <stop offset="1" stop-color="#000000" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="project-thumb-overlay">
            <button class="btn btn-secondary view-project-btn" data-id="${project.id}" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              View Details & Architecture
            </button>
          </div>
        </div>
        <div class="project-details">
          <div class="project-header">
            <div>
              <span class="tech-tag" style="margin-bottom: 0.35rem; display: inline-block;">${escapeHtml(project.category)}</span>
              <h3 class="project-title">${escapeHtml(project.title)}</h3>
            </div>
          </div>
          <p class="project-desc">${escapeHtml(project.problemImpact)}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tech-tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <div class="project-actions">
            <a href="${project.liveUrl}" class="project-link open-modal-trigger" data-id="${project.id}">
              <span>View Case Study</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.open-modal-trigger, .view-project-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const pId = btn.getAttribute('data-id');
        openProjectModalHandler(pId);
      });
    });
  }

  renderProjects();

  // --- Project Modal Handler ---
  function openProjectModalHandler(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !projectModal) return;

    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectTagline').textContent = project.tagline;
    document.getElementById('modalProjectDesc').textContent = project.problemImpact;
    
    const tagsContainer = document.getElementById('modalProjectTags');
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
  }

  if (closeProjectModal && projectModal) {
    closeProjectModal.addEventListener('click', () => {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
    });

    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --- Dynamic Profile Loader & Customizer Engine ---
  let currentProfile = { ...defaultProfile };

  const savedProfile = localStorage.getItem('portfolio_user_data');
  if (savedProfile) {
    try {
      currentProfile = { ...defaultProfile, ...JSON.parse(savedProfile) };
    } catch(err) {
      console.error("Failed parsing saved profile data:", err);
    }
  }

  function updateDomProfile() {
    document.querySelectorAll('.profile-name-text').forEach(el => el.textContent = currentProfile.name);
    
    document.querySelectorAll('.profile-avatar-box').forEach(el => {
      if (currentProfile.avatarUrl) {
        el.innerHTML = `<img src="${currentProfile.avatarUrl}" alt="${escapeHtml(currentProfile.name)} Avatar" class="avatar-img">`;
      } else {
        el.textContent = currentProfile.name.charAt(0).toUpperCase();
      }
    });
    
    const roleEl = document.getElementById('profileRoleText');
    if (roleEl) roleEl.textContent = currentProfile.role;

    const locationEl = document.getElementById('profileLocationText');
    if (locationEl) locationEl.textContent = currentProfile.location;

    const valPropEl = document.getElementById('profileValuePropText');
    if (valPropEl) valPropEl.textContent = currentProfile.valueProp;

    const expEl = document.getElementById('profileExpNumber');
    if (expEl) expEl.textContent = currentProfile.experienceYears;

    const bio1 = document.getElementById('bioSentence1');
    if (bio1) bio1.textContent = currentProfile.bio1;
    const bio2 = document.getElementById('bioSentence2');
    if (bio2) bio2.textContent = currentProfile.bio2;
    const bio3 = document.getElementById('bioSentence3');
    if (bio3) bio3.textContent = currentProfile.bio3;
    const bio4 = document.getElementById('bioSentence4');
    if (bio4) bio4.textContent = currentProfile.bio4;

    const audienceEl = document.getElementById('profileTargetAudienceText');
    if (audienceEl) audienceEl.textContent = currentProfile.targetAudience;

    const emailEl = document.getElementById('profileEmailText');
    if (emailEl) emailEl.textContent = currentProfile.email;

    const viewRoleText = document.getElementById('viewRoleText');
    if (viewRoleText) viewRoleText.textContent = currentProfile.role;

    const viewLocationText = document.getElementById('viewLocationText');
    if (viewLocationText) viewLocationText.textContent = currentProfile.location;

    const viewExpText = document.getElementById('viewExpText');
    if (viewExpText) viewExpText.textContent = `${currentProfile.experienceYears} Years Commercial`;

    const viewAudienceText = document.getElementById('viewAudienceText');
    if (viewAudienceText) viewAudienceText.textContent = currentProfile.targetAudience;

    const viewEmailText = document.getElementById('viewEmailText');
    if (viewEmailText) viewEmailText.textContent = currentProfile.email;

    const viewValuePropText = document.getElementById('viewValuePropText');
    if (viewValuePropText) viewValuePropText.textContent = currentProfile.valueProp;
  }

  updateDomProfile();

  // --- Profile Picture Lightbox Viewer ---
  function openAvatarLightbox() {
    if (!avatarLightboxModal) return;
    updateDomProfile();
    
    if (lightboxCaption) {
      lightboxCaption.textContent = `${currentProfile.name} — Full Profile View`;
    }

    avatarLightboxModal.classList.add('open');
    avatarLightboxModal.setAttribute('aria-hidden', 'false');
  }

  if (viewProfileAvatar) {
    viewProfileAvatar.addEventListener('click', openAvatarLightbox);
  }
  if (viewAvatarHint) {
    viewAvatarHint.addEventListener('click', openAvatarLightbox);
  }

  if (closeAvatarLightbox && avatarLightboxModal) {
    closeAvatarLightbox.addEventListener('click', () => {
      avatarLightboxModal.classList.remove('open');
      avatarLightboxModal.setAttribute('aria-hidden', 'true');
    });

    avatarLightboxModal.addEventListener('click', (e) => {
      if (e.target === avatarLightboxModal) {
        avatarLightboxModal.classList.remove('open');
        avatarLightboxModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (lightboxUploadBtn) {
    lightboxUploadBtn.addEventListener('click', () => {
      avatarLightboxModal.classList.remove('open');
      avatarLightboxModal.setAttribute('aria-hidden', 'true');
      triggerAvatarUpload();
    });
  }

  // --- Avatar File Upload Feature ---
  function triggerAvatarUpload() {
    if (avatarFileInput) avatarFileInput.click();
  }

  if (uploadAvatarBtn) {
    uploadAvatarBtn.addEventListener('click', triggerAvatarUpload);
  }

  if (avatarFileInput) {
    avatarFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (PNG, JPG, WebP).', '⚠️');
        return;
      }

      if (file.size > 3 * 1024 * 1024) {
        showToast('Image file size should be less than 3MB.', '⚠️');
        return;
      }

      const reader = new FileReader();
      reader.onload = function(event) {
        currentProfile.avatarUrl = event.target.result;
        localStorage.setItem('portfolio_user_data', JSON.stringify(currentProfile));
        updateDomProfile();
        showToast('Profile picture uploaded successfully! 📸', '✨');
      };
      reader.readAsDataURL(file);
    });
  }

  if (removeAvatarBtn) {
    removeAvatarBtn.addEventListener('click', () => {
      currentProfile.avatarUrl = "";
      localStorage.setItem('portfolio_user_data', JSON.stringify(currentProfile));
      updateDomProfile();
      showToast('Profile picture removed.', '🗑️');
    });
  }

  // --- Profile View & Edit Modal Navigation ---
  function openProfileModal(startInEditMode = false) {
    if (!customizerModal) return;
    
    if (startInEditMode) {
      showEditMode();
    } else {
      showViewMode();
    }

    customizerModal.classList.add('open');
    customizerModal.setAttribute('aria-hidden', 'false');
  }

  function showViewMode() {
    updateDomProfile();
    fetchMessages();
    if (profileViewContainer) profileViewContainer.style.display = 'flex';
    if (profileEditContainer) profileEditContainer.style.display = 'none';
    if (customizerModalTitle) customizerModalTitle.textContent = 'Personal Profile Overview';
    if (customizerModalSub) customizerModalSub.textContent = 'View profile details, check inbox, or click Edit to update info & picture.';
  }

  function showEditMode() {
    populateCustomizerForm();
    if (profileViewContainer) profileViewContainer.style.display = 'none';
    if (profileEditContainer) profileEditContainer.style.display = 'block';
    if (customizerModalTitle) customizerModalTitle.textContent = 'Edit Personal Profile';
    if (customizerModalSub) customizerModalSub.textContent = 'Update your profile picture and personal details live.';
  }

  if (headerAvatarBtn) {
    headerAvatarBtn.addEventListener('click', () => openProfileModal(false));
  }

  if (customizerTriggerBtn) {
    customizerTriggerBtn.addEventListener('click', () => openProfileModal(false));
  }

  if (enterEditModeBtn) {
    enterEditModeBtn.addEventListener('click', showEditMode);
  }

  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', showViewMode);
  }

  if (closeCustomizerModal && customizerModal) {
    closeCustomizerModal.addEventListener('click', () => {
      customizerModal.classList.remove('open');
      customizerModal.setAttribute('aria-hidden', 'true');
    });

    customizerModal.addEventListener('click', (e) => {
      if (e.target === customizerModal) {
        customizerModal.classList.remove('open');
        customizerModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Populate Customizer Form Inputs
  function populateCustomizerForm() {
    if (!customizerForm) return;
    document.getElementById('editName').value = currentProfile.name;
    document.getElementById('editRole').value = currentProfile.role;
    document.getElementById('editLocation').value = currentProfile.location;
    document.getElementById('editExperienceYears').value = currentProfile.experienceYears;
    document.getElementById('editValueProp').value = currentProfile.valueProp;
    document.getElementById('editBio1').value = currentProfile.bio1;
    document.getElementById('editBio2').value = currentProfile.bio2;
    document.getElementById('editBio3').value = currentProfile.bio3;
    document.getElementById('editBio4').value = currentProfile.bio4;
    document.getElementById('editTargetAudience').value = currentProfile.targetAudience;
    document.getElementById('editEmail').value = currentProfile.email;
  }

  if (customizerForm) {
    customizerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      currentProfile.name = document.getElementById('editName').value.trim() || defaultProfile.name;
      currentProfile.role = document.getElementById('editRole').value.trim() || defaultProfile.role;
      currentProfile.location = document.getElementById('editLocation').value.trim() || defaultProfile.location;
      currentProfile.experienceYears = document.getElementById('editExperienceYears').value.trim() || defaultProfile.experienceYears;
      currentProfile.valueProp = document.getElementById('editValueProp').value.trim() || defaultProfile.valueProp;
      currentProfile.bio1 = document.getElementById('editBio1').value.trim() || defaultProfile.bio1;
      currentProfile.bio2 = document.getElementById('editBio2').value.trim() || defaultProfile.bio2;
      currentProfile.bio3 = document.getElementById('editBio3').value.trim() || defaultProfile.bio3;
      currentProfile.bio4 = document.getElementById('editBio4').value.trim() || defaultProfile.bio4;
      currentProfile.targetAudience = document.getElementById('editTargetAudience').value.trim() || defaultProfile.targetAudience;
      currentProfile.email = document.getElementById('editEmail').value.trim() || defaultProfile.email;

      localStorage.setItem('portfolio_user_data', JSON.stringify(currentProfile));
      updateDomProfile();
      showViewMode();
      showToast('Profile & picture updated live! ✨', '✨');
    });
  }

  if (resetCustomizerBtn) {
    resetCustomizerBtn.addEventListener('click', () => {
      currentProfile = { ...defaultProfile };
      localStorage.removeItem('portfolio_user_data');
      updateDomProfile();
      populateCustomizerForm();
      showViewMode();
      showToast('Reset to default profile.', '🔄');
    });
  }

  // --- Utility Helper ---
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
