"use client";

import { Check } from "../components/checkbox";
import { useState } from "react";
type Props = {
  children: React.ReactNode;
};
function ContentBox(props: Props) {
  return (
    <div className="text-black bg-white font-normal text-sm leading-relaxed mt-8 rounded-lg p-5 shadow-md w-full">
      {props.children}
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState(1);
  const styles = {
    keyframes: `
      @keyframes floatUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `,
    container: {
      animation: "floatUp 2s ease-out forwards",
    },
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-4/5">
        {step === 1 && (
          <>
            <ContentBox>
              <h2 className=" text-2xl font-semibold text-center text-gray-800 mb-2">
                ランドバリー
              </h2>
              <p className="mt-4 text-lg">
                一歩を踏み出すあなたへ。新たな場所での体験が待っています。
              </p>
              <h2 className="text-2xl font-semibold mb-1 mt-4">
                こんな方におすすめ
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  自分が今住んでいる場所以外に住むことを考えているけれど、一歩踏み出せない方
                </li>
                <li>
                  好きなことや価値観をベースに、新しい地域での生活を体験したい方
                </li>
                <li>新たな気づきやインスピレーションを求めている方</li>
              </ul>
              <h2 className="text-2xl font-semibold mb-1 mt-4">
                ランドバリーの特徴
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>強制的な体験：</strong>
                  あなたの趣味やライフスタイルに基づいて、ランダムに選ばれる体験が提供されます。
                </li>
                <li>
                  <strong>多様な体験：</strong>
                  全国各地の出会ったことのない体験が、新たな発見や気づきをもたらします。
                </li>
                <li>
                  <strong>移住のきっかけ：</strong>
                  新しい場所での生活体験を通じて、移住先の選択肢が広がります。
                </li>
              </ul>
              <h2 className="text-2xl font-semibold  mb-1 mt-4">
                ランドバリーがもたらすもの
              </h2>
              <ul className="list-disc list-inside">
                <li>新たな場所での挑戦と発見</li>
                <li>移住への不安の解消</li>
                <li>自分に合った住む場所を見つけるための具体的な体験</li>
              </ul>
            </ContentBox>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setStep(2)}
                className="text-black bg-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                はじめる
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <ContentBox>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                1. 宿泊日数
              </h2>
              <p className="text-lg text-gray-700 text-left mb-4">
                宿泊日数を参考にツアーを提案します。
              </p>
              <div className="flex gap-3  flex-wrap">
                <Check>1泊2日</Check>
                <Check>2泊3日</Check>
                <Check>3泊4日</Check>
                <Check>5泊6日</Check>
              </div>
            </ContentBox>
            <ContentBox>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                2. 希望エリア
              </h2>
              <p className="text-lg text-gray-700 text-left mb-4">
                希望エリアを参考にツアーを提案します。
              </p>
              <div className="flex gap-3  flex-wrap">
                <Check>北海道</Check>
                <Check>東北</Check>
                <Check>関東</Check>
                <Check>中部</Check>
                <Check>近畿</Check>
                <Check>中国</Check>
                <Check>四国</Check>
                <Check>九州</Check>
                <Check>沖縄</Check>
                <Check>おまかせ</Check>
              </div>
            </ContentBox>
            <ContentBox>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                3. 旅行の目的
              </h2>
              <p className="text-lg text-gray-700 text-left mb-4">
                あなたの求める旅行の目的を参考にツアーを提案します。
              </p>
              <div className="flex gap-3  flex-wrap">
                <Check>観光</Check>
                <Check>ビーチ</Check>
                <Check>登山</Check>
                <Check>キャンプ</Check>
                <Check>ショッピング</Check>
                <Check>歴史探索</Check>
                <Check>自然探検</Check>
                <Check>美食巡り</Check>
                <Check>文化体験</Check>
                <Check>アドベンチャースポーツ</Check>
                <Check>温泉</Check>
                <Check>クルーズ</Check>
                <Check>リラクゼーション</Check>
                <Check>写真撮影</Check>
                <Check>フェス</Check>
                <Check>家族旅行</Check>
                <Check>ビジネス旅行</Check>
                <Check>自己探求</Check>
                <Check>乗馬</Check>
                <Check>サーフィン</Check>
                <Check>海水浴</Check>
                <Check>その他</Check>
              </div>
            </ContentBox>
            <ContentBox>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                4. 旅行に求める環境
              </h2>
              <p className="text-lg text-gray-700 text-left mb-4">
                あなたの求める環境を参考にツアーを提案します。
              </p>
              <div className="flex gap-3  flex-wrap">
                <Check>山</Check>
                <Check>海</Check>
                <Check>川</Check>
                <Check>島</Check>
                <Check>湖</Check>
                <Check>市街地</Check>
                <Check>田舎</Check>
                <Check>都市</Check>
                <Check>農村</Check>
                <Check>漁村</Check>
                <Check>その他自然</Check>
              </div>
            </ContentBox>
            <ContentBox>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                5. 希望のツアー提供者
              </h2>
              <p className="text-lg text-gray-700 text-left mb-4">
                あなたの求める環境を参考にツアーを提案します。
              </p>
              <div className="flex gap-3  flex-wrap">
                <Check>地元の人</Check>
                <Check>選択した趣味に詳しいプロ</Check>
                <Check>旅行代理店</Check>
                <Check>おまかせ</Check>
              </div>
            </ContentBox>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setStep(3)}
                className="text-black bg-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
              >
                旅行を予約する
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <div style={styles.container}>
            <ContentBox>
              <style>{styles.keyframes}</style>
              <h2 className="border-l-4 pl-2 border-indigo-500 text-2xl font-semibold text-left text-gray-800 mb-2">
                良い旅を！
              </h2>
              <p className="text-lg text-gray-700 text-left">
                ご旅行の予定をお伝えするために、2～3日後にメールをお送りします。
                <br />
                旅行の日程についての詳細を楽しみにお待ちください。
                <br />
                素晴らしい旅になりますように！
              </p>
            </ContentBox>
          </div>
        )}
      </div>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
