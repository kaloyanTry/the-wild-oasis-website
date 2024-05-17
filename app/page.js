import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>The Wild Oasis. Wellcoms to Paradise!</h1>
      <Link href='/cabins'>Explore cabins</Link>
    </>
  );
}
