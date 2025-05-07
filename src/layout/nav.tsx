import { For } from "solid-js";

const items = ["1", "2", "3"];

function Nav() {
  return (
    <nav flex flex-col w-17>
      <For each={items}>{(item) => <div p-2>{item}</div>}</For>
    </nav>
  );
}

export default Nav;
