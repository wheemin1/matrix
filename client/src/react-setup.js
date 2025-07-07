// react-setup.js
// This file ensures React is properly loaded before the main application

// Make sure React is available globally
window.React = window.React || require('react');

// Log React version for debugging
console.log('React version:', window.React.version);
