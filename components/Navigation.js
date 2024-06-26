import Link from 'next/link';
import { auth } from '@/lib/auth';

const Navigation = async () => {
  const session = await auth();
  // console.log(session);

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16'>
        <li>
          <Link
            href='/cabins'
            className='hover:text-accent-400 transition-colors'
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors flex items-center gap-4'
            >
              <img
                className='h-8 rounded-full'
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy='no-referrer'
              />
              <span> Guest area</span>
            </Link>
          ) : (
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors'
            >
              Guest area
            </Link>
          )}
        </li>
        <li>
          <Link
            href='/users'
            className='hover:text-accent-400 transition-colors '
          >
            Oasis Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
