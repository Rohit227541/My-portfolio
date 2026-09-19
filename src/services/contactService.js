const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm({ name, email, subject, message }) {
  const errors = {}
  if (!name || name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!email || !EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (!subject || subject.trim().length < 3) errors.subject = 'Please add a subject (min 3 characters).'
  if (!message || message.trim().length < 10) errors.message = 'Please describe your project (min 10 characters).'
  return errors
}

// Service layer — swap the body with a real API / EmailJS / backend call later.
// Currently resolves locally so UI never shows a fake "sent" without a real path;
// wire it to your endpoint and it will surface real success/error states.
export async function submitContactForm(payload, { signal } = {}) {
  const errors = validateContactForm(payload)
  if (Object.keys(errors).length > 0) {
    const err = new Error('Validation failed')
    err.errors = errors
    throw err
  }

  // TODO: replace with real endpoint, e.g.:
  // const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal })
  // if (!res.ok) throw new Error('Failed to send message. Please try WhatsApp or email directly.')
  // return res.json()

  // Placeholder transport: simulate network, then instruct to connect backend.
  await new Promise((resolve, reject) => {
    const t = setTimeout(resolve, 800)
    if (signal) signal.addEventListener('abort', () => { clearTimeout(t); reject(new DOMException('Aborted', 'AbortError')) })
  })
  throw new Error('Contact backend not connected yet — please reach me on WhatsApp or email directly.')
}
