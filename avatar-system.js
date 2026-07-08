(function () {
  const defaultProfile = {
    name: "",
    gender: "Male"
  };

  function getProfile() {
    return {
      name: localStorage.getItem("safeReachName") || defaultProfile.name,
      gender: localStorage.getItem("safeReachGender") || defaultProfile.gender
    };
  }

  function saveProfile(name, gender) {
    localStorage.setItem("safeReachName", name || defaultProfile.name);
    localStorage.setItem("safeReachGender", gender || defaultProfile.gender);
  }

  function getAvatarState() {
    return localStorage.getItem("safeReachAvatarState") || "normal";
  }

  function setAvatarState(state) {
    localStorage.setItem("safeReachAvatarState", state);
  }

  function avatarFace(state) {
    const faces = {
      normal: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      journey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M7 9h2"></path><path d="M15 9h2"></path></svg>`,
      alert: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 15h8"></path><circle cx="9" cy="9" r="1"></circle><circle cx="15" cy="9" r="1"></circle></svg>`,
      sos: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 15c0-3 8-3 8 0"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      sent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 15c0-3 8-3 8 0"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      safe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      cancelled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M7 9h2"></path><path d="M15 9h2"></path></svg>`
    };

    return faces[state] || faces.normal;
  }

  function avatarGesture(state) {
    const gestures = {
      normal: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>`,
      journey: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
      alert: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
      sos: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
      sent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
      safe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      cancelled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
    };

    return gestures[state] || gestures.normal;
  }

  function avatarLabel(state) {
    const labels = {
      normal: "Ready",
      journey: "Journey Active",
      alert: "Stay Alert",
      sos: "SOS Ready",
      sent: "Emergency Sent",
      safe: "You Are Safe",
      cancelled: "SOS Cancelled"
    };

    return labels[state] || labels.normal;
  }

  function createAvatarHTML(state) {
    const profile = getProfile();
    const genderClass = profile.gender.toLowerCase() === "female" ? "female" : "male";
    const initial = profile.name ? profile.name.charAt(0).toUpperCase() : "?";

    return `
      <div class="sr-avatar ${genderClass} state-${state}" title="${profile.name || 'User'} — ${avatarLabel(state)}">
        <div class="sr-avatar-head">
          <span class="sr-avatar-hair"></span>
          <span class="sr-avatar-face">${avatarFace(state)}</span>
        </div>
        <div class="sr-avatar-body">
          <span class="sr-avatar-gesture">${avatarGesture(state)}</span>
        </div>
        <span class="sr-avatar-initial">${initial}</span>
      </div>
    `;
  }

  function injectAvatarStyles() {
    if (document.getElementById("safeReachAvatarStyles")) return;

    const style = document.createElement("style");
    style.id = "safeReachAvatarStyles";

    style.textContent = `
      .sr-avatar {
        position: relative;
        width: 86px;
        height: 104px;
        display: grid;
        place-items: center;
        margin: 0 auto;
        border-radius: 24px 24px 18px 18px;
        overflow: hidden;
        background: linear-gradient(145deg, #1b2a6e, #10143f);
        border: 2px solid #66a8ff;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
      }

      .sr-avatar.female {
        border-color: #ff75a9;
        background: linear-gradient(145deg, #7a2b7c, #301a5c);
      }

      .sr-avatar-head {
        position: absolute;
        top: 12px;
        width: 54px;
        height: 54px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: #f2c6a8;
        overflow: hidden;
      }

      .sr-avatar-hair {
        position: absolute;
        top: -7px;
        width: 58px;
        height: 28px;
        border-radius: 50% 50% 30% 30%;
        background: #27203b;
      }

      .sr-avatar.female .sr-avatar-hair {
        top: -4px;
        width: 62px;
        height: 43px;
        border-radius: 52% 52% 40% 40%;
        background: #3b1f3d;
      }

      .sr-avatar-face {
        position: relative;
        z-index: 1;
        margin-top: 9px;
        font-size: 28px;
        line-height: 1;
      }

      .sr-avatar-body {
        position: absolute;
        bottom: -8px;
        width: 74px;
        height: 48px;
        display: grid;
        place-items: center;
        border-radius: 36px 36px 0 0;
        background: linear-gradient(145deg, #4d79ff, #2539aa);
      }

      .sr-avatar.female .sr-avatar-body {
        background: linear-gradient(145deg, #ff79a8, #a03cc5);
      }

      .sr-avatar-gesture {
        margin-top: -10px;
        font-size: 24px;
      }

      .sr-avatar-initial {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 20px;
        height: 20px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(255, 255, 255, 0.75);
        border-radius: 50%;
        color: white;
        font-size: 10px;
        font-weight: 800;
        background: #6f35dc;
      }

      .sr-avatar.state-sos,
      .sr-avatar.state-sent {
        animation: srAvatarEmergency 0.9s infinite alternate;
      }

      .sr-avatar.state-safe {
        animation: srAvatarSafe 1.3s infinite alternate;
      }

      @keyframes srAvatarEmergency {
        from { transform: translateX(-2px); }
        to { transform: translateX(2px); }
      }

      @keyframes srAvatarSafe {
        from { transform: translateY(0); }
        to { transform: translateY(-4px); }
      }
    `;

    document.head.appendChild(style);
  }

  function renderAvatar(target, state) {
    const element = typeof target === "string" ? document.querySelector(target) : target;

    if (!element) return;

    const currentState = state || getAvatarState();
    injectAvatarStyles();
    element.innerHTML = createAvatarHTML(currentState);
  }

  window.SafeReachAvatar = {
    getProfile,
    saveProfile,
    getAvatarState,
    setAvatarState,
    renderAvatar,
    avatarLabel
  };
})();