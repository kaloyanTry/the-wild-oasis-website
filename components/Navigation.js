import Link from 'next/link';

const Navigation = () => {
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
          <Link
            href='/account'
            className='hover:text-accent-400 transition-colors'
          >
            Guest area
          </Link>
        </li>
        <li>
          <Link
            href='/users'
            className='hover:text-accent-400 transition-colors'
          >
            Oasis Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
