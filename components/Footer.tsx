import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-surface-container-low border-t border-outline-variant">
        <div className="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-space-lg">
          <span className="font-title-md text-title-md uppercase text-on-surface">
            TEST Claude Photos
          </span>
          <p className="font-body-sm text-body-sm text-secondary">
            © {new Date().getFullYear()} TEST Claude Photos. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
