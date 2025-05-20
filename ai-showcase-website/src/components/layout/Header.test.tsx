import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import Header from './Header';
import { describe, it, expect } from 'vitest';

describe('Header', () => {
  it('renders the site title', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText(/AI Showcase/i)).toBeInTheDocument();
  });

  it('renders the navigation bar', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    // Check for a nav element or a specific link from the Navbar
    expect(screen.getByRole('navigation')).toBeInTheDocument(); 
  });
});
