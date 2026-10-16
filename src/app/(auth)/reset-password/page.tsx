'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

const apiBase = (process.env.NEXT_PUBLIC_API_URL || '/api').replace(/\/+$/, '');

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const resetToken = query.get('token') || '';
    const resetEmail = query.get('email') || '';
    setToken(resetToken);
    setEmail(resetEmail);
    setIsResetMode(Boolean(resetToken && resetEmail));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    if (isResetMode && newPassword !== confirmPassword) {
      setMessage('The passwords do not match.');
      return;
    }
    if (isResetMode && newPassword.length < 8) {
      setMessage('Use a password with at least 8 characters.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${apiBase}/users/reset-password`,
        {
          method: isResetMode ? 'PATCH' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            isResetMode ? { token, email, newPassword } : { email }
          ),
        }
      );
      const data = await response.json();
      setMessage(
        response.ok
          ? data.msg || (isResetMode ? 'Password updated.' : 'Check your email for instructions.')
          : data.msg || 'Unable to process the request. Please try again.'
      );
      if (response.ok && isResetMode && data.status === 1) {
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch {
      setMessage('Unable to connect. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link href="/login" className="text-sm font-medium text-blue-700 hover:underline">
          ← Back to login
        </Link>
        <h1 className="mt-6 text-2xl font-semibold text-slate-900">
          {isResetMode ? 'Choose a new password' : 'Reset your password'}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {isResetMode
            ? 'Choose a new password with at least 8 characters.'
            : 'Enter your account email. If an account exists, we will send reset instructions.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="reset-email" className="mb-1 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="reset-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              readOnly={isResetMode}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 read-only:bg-slate-100"
            />
          </div>

          {isResetMode && (
            <>
              <div>
                <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-slate-700">
                  New password
                </label>
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-slate-700">
                  Confirm new password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </>
          )}

          {message && (
            <p role="status" aria-live="polite" className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Please wait…' : isResetMode ? 'Update password' : 'Send reset link'}
          </button>
        </form>
      </section>
    </main>
  );
}
