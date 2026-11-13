import MenuHome from '@/components/Menu/MenuHome';
import MenuMenu from '@/components/Menu/MenuMenu';
import MenuLocation from '@/components/Menu/MenuLocation';

export const metadata = {
  title: 'Menu | TEST Claude Photos',
  description: 'Explore our menu of traditional Lebanese dishes, featuring fresh ingredients and local flavors in Batroun.',
  keywords: 'Batroun restaurant menu, Lebanese cuisine, fresh food Batroun'
};

export default function MenuPage() {
  return (
    <div className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      <MenuHome />
      <MenuMenu />
      <MenuLocation />
    </div>
  );
}
