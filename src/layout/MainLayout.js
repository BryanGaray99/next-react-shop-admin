import Header from '@components/Header';

export default function MainLayout({ children }) {
  return (
    <>
      <div className="h-screen">
        <Header />
        <main>
          <div>{children}</div>
        </main>
      </div>
    </>
  );
}
