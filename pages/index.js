import About from "../components/About";
import Layout from "../components/Layout";
import Porftfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import { getWindowSize } from "../hooks/GetWindowSize";

export default function Home() {
  const { width } = getWindowSize();

  return (
    <Layout>
      <About />
      <Skills />
      <Porftfolio width={width} />
    </Layout>
  );
}
