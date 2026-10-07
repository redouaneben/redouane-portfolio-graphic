/**
 * URL de base des médias portfolio.
 *
 * Vercel Blob (après upload de realisation_optimized_blob/) :
 *   window.PORTFOLIO_ASSETS_BASE = 'https://XXXX.public.blob.vercel-storage.com/';
 *
 * Supabase (fallback actuel) :
 *   .../storage/v1/object/public/assets/
 */
window.PORTFOLIO_ASSETS_BASE = window.PORTFOLIO_ASSETS_BASE
    || 'https://kuntmymcafnywqlqzcdb.supabase.co/storage/v1/object/public/assets/';

// Les cartes essaient cover-card.webp en premier (repli auto sur cover.webp).
// Uploader cover-card.webp + cover.gif légers depuis realisation_optimized_blob/.
