import { TodoProvider } from "./context/TodoProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
