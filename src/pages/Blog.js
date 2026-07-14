import React from 'react';
import { PenSquare, Bell } from 'lucide-react';

export default function Blog() {
  return (
    <div style={{
      minHeight: '60vh',
      padding: '10rem 1.5rem 6rem',
      textAlign: 'center',
      background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 100%)'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        margin: '0 auto 1.5rem',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
        color: '#fff'
      }}>
        <PenSquare size={28} />
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>
        Blog <span style={{
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Coming Soon</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
        I'm working on write-ups about my internship projects, machine learning
        experiments, and full-stack builds — check back soon, or reach out
        directly if you'd like to hear about a specific project sooner.
      </p>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#6366f1',
        fontWeight: 600,
        fontSize: '0.95rem'
      }}>
        <Bell size={16} /> New posts will appear here first
      </div>
    </div>
  );
}
