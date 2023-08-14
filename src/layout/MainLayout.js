import Header from '@components/Header';
import Nav from '@common/Nav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="h-screen">
        <Header />
        {/* <Nav /> */}
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
