/* Émulateur multi-appareils (iframe) — porté depuis Portfolio UI UX */

const VALID_DEVICES = ['desktop', 'tablet', 'mobile'];

const DEVICE_LABELS = { desktop: 'bureau', tablet: 'tablette', mobile: 'mobile' };

const DEVICE_VIEWPORTS = {
    desktop: { width: 1280, height: 800, padTop: 0 },
    tablet: { width: 768, height: 1024, padTop: 0 },
    mobile: { width: 375, height: 812, padTop: 28 }
};

const IFRAME_INLINE_STYLE_PROPS = [
    'position', 'top', 'left', 'width', 'height', 'maxWidth', 'maxHeight',
    'margin', 'paddingTop', 'boxSizing', 'display', 'transform', 'transformOrigin',
    'background', 'border', 'pointerEvents'
];

const initializedPreviews = new WeakSet();

function getSharedDeviceIframe(preview) {
    return preview.querySelector('.device-preview__iframe');
}

function getDevicePreviewIframes(preview) {
    const iframe = getSharedDeviceIframe(preview);
    return iframe ? [iframe] : [];
}

function isDevicePreviewCardMode(preview) {
    return !preview.classList.contains('device-preview--fullscreen')
        && !preview.classList.contains('is-fullscreen');
}

function clearSharedIframeInlineStyles(preview) {
    const iframe = getSharedDeviceIframe(preview);
    if (!iframe) return;

    IFRAME_INLINE_STYLE_PROPS.forEach((prop) => {
        const kebab = prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        iframe.style.removeProperty(kebab);
    });
}

function clearStageScale(stage) {
    if (!stage) return;
    stage.style.removeProperty('transform');
    stage.style.removeProperty('transform-origin');
    stage.style.removeProperty('margin-bottom');
}

function attachSharedIframeToDevice(preview, device) {
    const iframe = getSharedDeviceIframe(preview);
    const screen = preview.querySelector(`[data-device-screen="${device}"]`);
    if (!iframe || !screen || iframe.parentElement === screen) return;

    screen.appendChild(iframe);

    const baseTitle = iframe.dataset.titleBase || iframe.title.split(' — ')[0] || 'Aperçu';
    iframe.dataset.titleBase = baseTitle;
    iframe.title = `${baseTitle} — ${DEVICE_LABELS[device] || device}`;
}

function applyCardIframeScale(preview) {
    const device = preview.dataset.device || 'desktop';
    const viewport = DEVICE_VIEWPORTS[device];
    const iframe = getSharedDeviceIframe(preview);
    const screen = preview.querySelector('.device-frame.is-active .device-frame__screen');

    if (!viewport || !iframe || !screen) return;

    const screenWidth = screen.clientWidth;
    if (!screenWidth) return;

    const scale = screenWidth / viewport.width;

    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '50%';
    iframe.style.width = `${viewport.width}px`;
    iframe.style.height = `${viewport.height}px`;
    iframe.style.maxWidth = 'none';
    iframe.style.maxHeight = 'none';
    iframe.style.margin = '0';
    iframe.style.paddingTop = viewport.padTop ? `${viewport.padTop}px` : '0';
    iframe.style.boxSizing = 'border-box';
    iframe.style.display = 'block';
    iframe.style.transform = `translateX(-50%) scale(${scale})`;
    iframe.style.transformOrigin = 'top center';
    iframe.style.background = '#fff';
    iframe.style.border = 'none';
    iframe.style.pointerEvents = 'auto';
}

function updateViewportScaling(preview) {
    const stage = preview.querySelector('.device-preview__stage');
    if (!stage) return;

    clearStageScale(stage);

    if (!isDevicePreviewCardMode(preview)) {
        clearSharedIframeInlineStyles(preview);
        return;
    }

    clearSharedIframeInlineStyles(preview);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            if (!CSS.supports('width', '1cqw')) {
                applyCardIframeScale(preview);
            }
        });
    });
}

function setDevicePreview(preview, device) {
    preview.querySelectorAll('.device-btn').forEach(btn => {
        btn.classList.toggle('device-btn--active', btn.dataset.device === device);
        btn.setAttribute('aria-selected', btn.dataset.device === device ? 'true' : 'false');
    });

    preview.dataset.device = device;

    preview.querySelectorAll('[data-device-screen]').forEach(screen => {
        const frame = screen.closest('.device-frame');
        const isActive = screen.dataset.deviceScreen === device;
        if (frame) frame.classList.toggle('is-active', isActive);
    });

    attachSharedIframeToDevice(preview, device);
    updateViewportScaling(preview);
}

function updateDevicePreviewBodyLock() {
    const anyOpen = document.querySelector('.device-preview--fullscreen');
    document.body.classList.toggle('device-preview-fs-open', !!anyOpen);
}

function getDevicePreviewMount(preview) {
    const mountId = preview.dataset.fsMountId;
    if (mountId) {
        const el = document.getElementById(mountId);
        if (el) return el;
    }
    return document.getElementById('modalDeviceMount');
}

function mountDevicePreviewForFullscreen(preview) {
    const mount = preview.parentElement;
    if (mount?.id) {
        preview.dataset.fsMountId = mount.id;
    }

    document.body.appendChild(preview);
    preview.classList.add('device-preview--fullscreen');
    clearStageScale(preview.querySelector('.device-preview__stage'));
}

function unmountDevicePreviewFromFullscreen(preview) {
    preview.classList.remove('device-preview--fullscreen');

    const mount = getDevicePreviewMount(preview);
    if (mount) {
        mount.appendChild(preview);
    }

    clearSharedIframeInlineStyles(preview);
    const currentDevice = preview.dataset.device || 'desktop';
    setDevicePreview(preview, VALID_DEVICES.includes(currentDevice) ? currentDevice : 'desktop');
    hidePreviewInModal(preview);
    updateDevicePreviewBodyLock();
}

function setDevicePreviewFullscreen(preview, open) {
    const shouldOpen = typeof open === 'boolean' ? open : !preview.classList.contains('device-preview--fullscreen');

    if (shouldOpen) {
        document.querySelectorAll('.device-preview--fullscreen').forEach(other => {
            if (other !== preview) setDevicePreviewFullscreen(other, false);
        });
        ensureDemoIframeLoaded(preview);
        preview.classList.remove('device-preview--dormant');
        preview.setAttribute('aria-hidden', 'false');
        mountDevicePreviewForFullscreen(preview);
    } else {
        unmountDevicePreviewFromFullscreen(preview);
    }

    preview.classList.toggle('is-fullscreen', shouldOpen);
    updateDevicePreviewBodyLock();

    const btn = preview.querySelector('.device-preview__fs-btn');
    if (btn) {
        btn.setAttribute('aria-pressed', shouldOpen ? 'true' : 'false');
        btn.setAttribute('aria-label', shouldOpen ? 'Quitter le plein écran' : 'Plein écran');
        btn.title = shouldOpen ? 'Quitter le plein écran' : 'Plein écran';
        const icon = btn.querySelector('i');
        if (icon) icon.className = shouldOpen ? 'fas fa-compress' : 'fas fa-expand';
    }

    updateViewportScaling(preview);
}

function closeAllDevicePreviewFullscreen() {
    document.querySelectorAll('.device-preview--fullscreen').forEach(preview => {
        setDevicePreviewFullscreen(preview, false);
    });
}

function ensureDemoIframeLoaded(preview) {
    const iframe = getSharedDeviceIframe(preview);
    const demoUrl = preview?.dataset.demoUrl || iframe?.dataset.demoSrc;
    if (!iframe || !demoUrl) return;

    if (iframe.src !== demoUrl && iframe.dataset.demoSrc !== demoUrl) {
        iframe.dataset.demoSrc = demoUrl;
    }

    const targetSrc = iframe.dataset.demoSrc;
    if (iframe.src !== targetSrc && !iframe.src.endsWith(targetSrc)) {
        iframe.src = targetSrc;
    }
}

function hidePreviewInModal(preview) {
    if (!preview) return;
    preview.classList.add('device-preview--dormant');
    preview.setAttribute('aria-hidden', 'true');
}

function createDevicePreview(demoUrl, title, defaultDevice = 'desktop') {
    const safeUrl = demoUrl.replace(/"/g, '&quot;');
    const safeTitle = (title || 'Projet UI/UX').replace(/</g, '&lt;');

    const preview = document.createElement('div');
    preview.className = 'device-preview device-preview--modal';
    preview.dataset.device = defaultDevice;
    preview.dataset.demoUrl = demoUrl;
    preview.dataset.defaultDevice = defaultDevice;

    preview.innerHTML = `
        <div class="device-preview__header">
            <div class="device-preview__toolbar" role="tablist" aria-label="Aperçu par appareil">
                <button type="button" class="device-preview__btn device-btn device-btn--active" role="tab" data-device="desktop" aria-selected="true">
                    <i class="fas fa-desktop" aria-hidden="true"></i>
                    <span>Bureau</span>
                </button>
                <button type="button" class="device-preview__btn device-btn" role="tab" data-device="tablet" aria-selected="false">
                    <i class="fas fa-tablet-alt" aria-hidden="true"></i>
                    <span>Tablette</span>
                </button>
                <button type="button" class="device-preview__btn device-btn" role="tab" data-device="mobile" aria-selected="false">
                    <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                    <span>Mobile</span>
                </button>
            </div>
            <button type="button" class="device-preview__fs-btn" aria-label="Plein écran" aria-pressed="false" title="Plein écran">
                <i class="fas fa-expand" aria-hidden="true"></i>
            </button>
        </div>
        <div class="device-preview__stage">
            <div class="device-frame device-frame--desktop is-active" data-device-variant="desktop">
                <div class="device-frame__lid">
                    <div class="device-frame__bezel">
                        <div class="device-frame__camera" aria-hidden="true"></div>
                        <div class="device-frame__screen" data-device-screen="desktop">
                            <iframe class="device-preview__iframe" src="about:blank" data-demo-src="${safeUrl}" title="${safeTitle} — bureau" loading="eager" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div class="device-frame__base" aria-hidden="true">
                    <div class="device-frame__hinge"></div>
                    <div class="device-frame__deck"></div>
                </div>
            </div>
            <div class="device-frame device-frame--tablet" data-device-variant="tablet">
                <div class="device-frame__shell device-frame__shell--tablet">
                    <div class="device-frame__camera device-frame__camera--tablet" aria-hidden="true"></div>
                    <div class="device-frame__screen" data-device-screen="tablet"></div>
                    <div class="device-frame__home-btn" aria-hidden="true"></div>
                </div>
            </div>
            <div class="device-frame device-frame--mobile" data-device-variant="mobile">
                <div class="device-frame__shell">
                    <div class="device-frame__island" aria-hidden="true"></div>
                    <div class="device-frame__screen" data-device-screen="mobile"></div>
                    <div class="device-frame__home-bar" aria-hidden="true"></div>
                </div>
            </div>
        </div>
        <p class="device-preview__external">
            <a href="${safeUrl}" target="_blank" rel="noopener" class="device-preview__external-link">
                <i class="fas fa-external-link-alt"></i> Ouvrir dans un nouvel onglet
            </a>
        </p>
    `;

    return preview;
}

function initDevicePreview(preview) {
    if (!preview || initializedPreviews.has(preview)) {
        if (preview) updateViewportScaling(preview);
        return;
    }

    initializedPreviews.add(preview);

    const demoUrl = preview.dataset.demoUrl;
    const iframe = getSharedDeviceIframe(preview);

    if (iframe) {
        if (!iframe.dataset.titleBase) {
            iframe.dataset.titleBase = iframe.title.split(' — ')[0] || iframe.title;
        }
        if (demoUrl) {
            iframe.dataset.demoSrc = demoUrl;
        }
    }

    const defaultDevice = preview.dataset.defaultDevice || 'desktop';
    setDevicePreview(preview, VALID_DEVICES.includes(defaultDevice) ? defaultDevice : 'desktop');

    preview.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (VALID_DEVICES.includes(btn.dataset.device)) {
                setDevicePreview(preview, btn.dataset.device);
            }
        });
    });

    preview.querySelector('.device-preview__fs-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDevicePreviewFullscreen(preview);
    });

    if (!window._devicePreviewResizeBound) {
        window._devicePreviewResizeBound = true;
        window.addEventListener('resize', () => {
            document.querySelectorAll('.device-preview').forEach(p => updateViewportScaling(p));
        });
    }
}

function mountUiDevicePreview(container, demoUrl, title, defaultDevice) {
    closeAllDevicePreviewFullscreen();
    container.innerHTML = '';
    container.classList.add('modal-image-container--device');
    container.classList.remove('modal-image-container--launch');
    container.id = 'modalDeviceMount';

    const preview = createDevicePreview(demoUrl, title, defaultDevice || 'desktop');
    container.appendChild(preview);
    initDevicePreview(preview);
    ensureDemoIframeLoaded(preview);

    requestAnimationFrame(() => updateViewportScaling(preview));
}

function mountHiddenUiDevicePreview(project) {
    const mount = document.getElementById('uiDevicePreviewMount');
    if (!mount || !project?.demoUrl) return null;

    closeAllDevicePreviewFullscreen();
    mount.innerHTML = '';

    const preview = createDevicePreview(
        project.demoUrl,
        project.title,
        project.defaultDevice || 'desktop'
    );
    mount.appendChild(preview);
    initDevicePreview(preview);
    hidePreviewInModal(preview);

    return preview;
}

function openUiDevicePreviewFullscreen() {
    const preview = document.querySelector('#uiDevicePreviewMount .device-preview');
    if (preview) {
        setDevicePreviewFullscreen(preview, true);
    }
}

function teardownHiddenUiDevicePreview() {
    closeAllDevicePreviewFullscreen();
    const mount = document.getElementById('uiDevicePreviewMount');
    if (mount) {
        mount.innerHTML = '';
    }
}

function teardownUiDevicePreview(container) {
    teardownHiddenUiDevicePreview();
    if (!container) return;
    container.classList.remove('modal-image-container--device', 'modal-image-container--launch');
    container.innerHTML = '';
}
