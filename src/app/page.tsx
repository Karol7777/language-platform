import { HomeHeader } from '@/components/HomeHeader/HomeHeader';
import { FeatureGrid } from '@/components/FeatureGrid/FeatureGrid';
import { UserBox } from '@/components/UserBox/UserBox';

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <FeatureGrid />
      <UserBox />
    </main>
  );
}
