// ============================================================
// config.js — Configuration Supabase
// Remplacez VOTRE_ID et VOTRE_CLÉ_ANON par vos vraies valeurs
// Supabase → Settings → API
// ============================================================

const SUPABASE_URL = 'https://ydbkxmmkfskxruhdxypx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYmt4bW1rZnNreHJ1aGR4eXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MzcyNjQsImV4cCI6MjEwMjUxMzI2NH0.AHtR_743BDR_77HPIbQ3c6w_3pahcLoD4cEzGq2ya44'

// URL de la Supabase Edge Function (configurée après)
const EDGE_FUNCTION_URL = `${SUPABASE_URL}/functions/v1/send-inspection`

// URL de base GitHub Pages
const APP_URL = 'https://mrbrownoff.github.io/inspectlift'

// Email destinataire
const DEFAULT_TO_EMAIL = 'brun.cedric@gmail.com'
