import { useForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import SectionHeading from '../components/SectionHeading'
import ContactLink from '../components/ContactLink'
import Button from '../components/Button'
import { personalInfo } from '../data/personal'
import { LuMail, LuGithub, LuLinkedin, LuCircleCheck, LuCircleAlert, LuSend } from 'react-icons/lu'

// Contact section with Formspree email submission and react-hook-form client validation.
export default function Contact() {
  // Read configured Formspree ID from environment variables with safe fallback.
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'unconfigured'
  const [formspreeState, sendToFormspree, resetFormspree] = useFormspree(formspreeFormId)

  // Validate on touched so error messages only appear after user interacts with a field.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onTouched'
  })

  // Submit valid form data to Formspree backend endpoint.
  const onSubmit = async (data) => {
    try {
      await sendToFormspree(data)
      if (formspreeState.errors) {
        console.error('Formspree submission errors:', formspreeState.errors)
      }
    } catch (err) {
      console.error('Formspree network error:', err)
    }
  }

  // Clear all input fields and reset submission status to allow sending another message.
  const handleReset = () => {
    reset()
    resetFormspree()
  }

  return (
    <section id="contact" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Section intro and direct communication channels */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              tag="Let's Connect"
              title="Have a project or an"
              highlight="opportunity?"
              subtitle="I'm open to full-time roles, internships, collaborations, or just a friendly hello!"
            />

            <div className="space-y-3.5 pt-1">
              <ContactLink
                icon={LuMail}
                label="Email"
                value={personalInfo.social.email}
                href={`mailto:${personalInfo.social.email}`}
                iconColor="var(--accent)"
                isExternal={false}
              />
              <ContactLink
                icon={LuGithub}
                label="GitHub"
                value="github.com/dhruvpatel012"
                href={personalInfo.social.github}
                iconColor="var(--ink)"
                isExternal={true}
              />
              <ContactLink
                icon={LuLinkedin}
                label="LinkedIn"
                value="linkedin.com/in/dhruv-patel-012"
                href={personalInfo.social.linkedin}
                iconColor="#0A66C2"
                isExternal={true}
              />
            </div>
          </div>

          {/* Right Column: Interactive contact form card */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[8px_8px_0_var(--shadow-hard)]">
            {/* Success state displayed after message is submitted to Formspree */}
            {formspreeState.succeeded ? (
              <div className="py-8 sm:py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] text-white border-2 border-[var(--border-ink)] shadow-[4px_4px_0_var(--border-ink)] flex items-center justify-center -rotate-2">
                  <LuCircleCheck className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-[var(--ink)] font-display">
                    Message received!
                  </h3>
                  <p className="text-sm font-bold text-[var(--ink-muted)] max-w-md">
                    Thanks for reaching out! I'll read your note and get back to you soon.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 px-5 py-2 rounded-full text-xs font-bold bg-[var(--bg)] text-[var(--ink)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--border-ink)] transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-5">
                
                {/* Formspree submission error banner */}
                {formspreeState.errors && formspreeState.errors.length > 0 && (
                  <div className="p-4 rounded-xl bg-[var(--accent-2)] text-white border-2 border-[var(--border-ink)] shadow-[3px_3px_0_var(--border-ink)] flex items-center gap-2.5 text-xs font-bold">
                    <LuCircleAlert className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please try again or reach out via email directly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)]"
                    >
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      placeholder="Enter your name"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--bg-card-inner)] border-2 text-[var(--ink)] placeholder-[var(--ink-muted)]/70 font-medium focus:outline-none transition-all ${
                        errors.name
                          ? 'border-[var(--accent-2)] shadow-[3px_3px_0_var(--accent-2)]'
                          : 'border-[var(--border-ink)] focus:border-[var(--accent)] focus:shadow-[4px_4px_0_var(--accent)]'
                      }`}
                      {...register('name', {
                        required: 'Please enter your name.'
                      })}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs font-bold text-[var(--accent-2)] mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)]"
                    >
                      Your Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--bg-card-inner)] border-2 text-[var(--ink)] placeholder-[var(--ink-muted)]/70 font-medium focus:outline-none transition-all ${
                        errors.email
                          ? 'border-[var(--accent-2)] shadow-[3px_3px_0_var(--accent-2)]'
                          : 'border-[var(--border-ink)] focus:border-[var(--accent)] focus:shadow-[4px_4px_0_var(--accent)]'
                      }`}
                      {...register('email', {
                        required: 'Please enter a valid email.',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email.'
                        }
                      })}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs font-bold text-[var(--accent-2)] mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)]"
                  >
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Type your message here..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[var(--bg-card-inner)] border-2 text-[var(--ink)] placeholder-[var(--ink-muted)]/70 font-medium focus:outline-none transition-all resize-y min-h-[110px] ${
                      errors.message
                        ? 'border-[var(--accent-2)] shadow-[3px_3px_0_var(--accent-2)]'
                        : 'border-[var(--border-ink)] focus:border-[var(--accent)] focus:shadow-[4px_4px_0_var(--accent)]'
                    }`}
                    {...register('message', {
                      required: 'Message should be at least 10 characters.',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters.'
                      }
                    })}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs font-bold text-[var(--accent-2)] mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={formspreeState.submitting}
                    className="w-full sm:w-auto min-w-[160px]"
                  >
                    <LuSend className="w-4 h-4" />
                    <span>
                      {formspreeState.submitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
