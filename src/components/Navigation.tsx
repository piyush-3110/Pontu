interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const links = ['Home', 'Pontu', 'Strategy', 'Why Pontu'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3e8]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-end items-center">
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => onNavigate(link)}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  currentPage === link
                    ? 'text-[#d4af37]'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
