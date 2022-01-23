import Image from "next/image";

export default function About() {
  const width = 1000;
  return (
    <section className="relative p-3 bg-zinc-100 rounded-xl mx-2 shadow-md ">
      <div className="grid md:grid-cols-2">
        <div className="relative flex justify-center items-center">
          <div className="md:hidden">
            <Image
              src="/images/portfolio/about-3.jpg"
              height={100}
              width={100}
              alt="me"
              className="rounded-full "
            />
          </div>
          <div className="hidden md:inline-flex">
            <Image
              src="/images/portfolio/about-3.jpg"
              height={300}
              width={300}
              alt="me"
              className="rounded-full hidden"
            />
          </div>
        </div>
        <div className="mt-5 ml-5 flex-cols justify-center items-center">
          <h1 className="mt-5 flex text-center justify-center">
            Yusuke Yoshioka
          </h1>
          <p className="flex justify-center text-center">WEB DEVELOPER</p>
          <br />
          <p>
            Iotエンジニアとして５年間データ解析、ウェブアプリケーション作成を行っております。
            Webアプリケーションの作成は、Javascriptのフレームワークである
            Reactjs,
            Nextjsを使用した現代的でSEOに強いアプリケーション作成を行っております.
          </p>
        </div>
      </div>
      <div className="border-bloack"></div>
    </section>
  );
}
