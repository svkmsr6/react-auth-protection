import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <>
      <header id="main-header">
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
