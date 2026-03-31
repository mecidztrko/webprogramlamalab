export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Ad Soyad. Tüm hakları saklıdır.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Geliştirici Profil</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Github</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
