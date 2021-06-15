import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div className="container mt-30">
        <Profile
          avatarUrl="https://avatars.githubusercontent.com/u/61978992?v=4"
          fullname="Nikolay Stadnik"
          username="this.is.www"
          about="Test info"
        />
      </div>
    </>
  );
}
