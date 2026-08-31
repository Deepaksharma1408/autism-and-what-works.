import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const NewsletterSection = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFirstName('');
      setEmail('');
    }, 800);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FFFDF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FFEAC7]/60 via-[#FFDED3]/40 to-[#F2DEFA]/40 rounded-3xl p-8 sm:p-12 border border-[#FF7A59]/20 shadow-soft-md text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 bg-[#FF7A59] text-white px-3.5 py-1 rounded-full text-xs font-extrabold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Welcome Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get 10% Off Your First Order 🌈
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto mt-3 mb-8">
            Join our parent community for your 10% discount code, new sensory tool updates, and exclusive family offers.
          </p>

          {status === 'success' ? (
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border border-emerald-200 text-emerald-800 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <h3 className="text-lg font-black">Thank You! You're Subscribed! 🎉</h3>
              <p className="text-xs font-semibold mt-1 text-slate-600">
                Check your inbox for your 10% discount code: <span className="font-extrabold text-[#FF7A59]">WELCOME10</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white/90 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF7A59] min-h-[44px]"
                />
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white/90 text-slate-900 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF7A59] min-h-[44px]"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs font-bold text-rose-600 text-left">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF7A59] hover:bg-[#E86645] text-white font-extrabold text-base shadow-md button-lift min-h-[44px]"
              >
                {status === 'submitting' ? 'Submitting...' : 'Get My 10% Off Code'}
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 font-semibold mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};
