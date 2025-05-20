import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import { describe, it, expect } from 'vitest';

describe('AboutPage', () => {
  it('renders the page title', () => {
    render(<AboutPage />);
    // Updated to match the new title "About AI Showcase Inc."
    expect(screen.getByText(/About AI Showcase Inc./i)).toBeInTheDocument();
  });

  it('renders the "Our Story" section', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Our Story/i)).toBeInTheDocument();
  });

  it('renders the "Our Mission & Vision" section', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Our Mission & Vision/i)).toBeInTheDocument();
  });
});
