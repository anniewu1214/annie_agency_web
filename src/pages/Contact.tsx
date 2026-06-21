import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

interface FormData {
  name: string
  company: string
  email: string
  website: string
  inquireTypes: string[]
  message: string
}

interface FormErrors {
  name?: string
  email?: string
}

const INQUIRE_OPTIONS = [
  'Brand Strategy & Market Entry',
  'PR & Media Relations',
  'Content & Digital Growth',
  'Spatial & Offline Experience',
]

const INITIAL_FORM: FormData = {
  name: '',
  company: '',
  email: '',
  website: '',
  inquireTypes: [],
  message: '',
}

function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleCheckboxChange = (option: string) => {
    setForm((prev) => {
      const types = prev.inquireTypes.includes(option)
        ? prev.inquireTypes.filter((t) => t !== option)
        : [...prev.inquireTypes, option]
      return { ...prev, inquireTypes: types }
    })
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) {
      newErrors.name = 'Name is required.'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.success}>
            <h2 className={styles.successTitle}>Thank You</h2>
            <p className={styles.successText}>
              Thank you for reaching out. We have received your inquiry and will
              review your project details shortly. Expect a response within 3
              business days.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.intro}>
          We work with brands that share our commitment to aesthetic rigor and
          long-term vision. Please provide your details below, and we will get
          back to you to discuss how we can elevate your presence in the Chinese
          market.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-name">
              Name<span className={styles.required}>*</span>
            </label>
            <input
              id="contact-name"
              className={styles.input}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-company">
              Company / Brand Name
            </label>
            <input
              id="contact-company"
              className={styles.input}
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              Email Address<span className={styles.required}>*</span>
            </label>
            <input
              id="contact-email"
              className={styles.input}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              spellCheck={false}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-website">
              Website / Social Media Link
            </label>
            <input
              id="contact-website"
              className={styles.input}
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              autoComplete="url"
              inputMode="url"
              spellCheck={false}
            />
          </div>

          <div className={styles.field}>
            <span className={styles.label}>Inquire Type</span>
            <div className={styles.checkboxGroup}>
              {INQUIRE_OPTIONS.map((option) => (
                <label key={option} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={form.inquireTypes.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className={styles.textarea}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your project goals and requirements…"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
