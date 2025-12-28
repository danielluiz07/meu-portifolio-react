import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark">
      <p>&copy; {new Date().getFullYear()} Daniel Luiz. {t.footer.rights}</p>
    </footer>
  );
}