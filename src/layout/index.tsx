import Main from "./main";
import Nav from "./nav";

function Layout() {
  return (
    <div flex flex-row w-screen h-screen justify-between>
      <Main />
      <Nav />
    </div>
  );
}

export default Layout;
