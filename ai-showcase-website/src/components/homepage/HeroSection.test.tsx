import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import HeroSection from './HeroSection';
import { describe, it, expect } from 'vitest';

describe('HeroSection', () => {
  it('renders the main headline', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );
    expect(screen.getByText(/Revolutionizing Industries with AI/i)).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );
    // Updated to match the new button text "Explore Our Solutions"
    expect(screen.getByRole('link', { name: /Explore Our Solutions/i })).toBeInTheDocument();
  });
});
