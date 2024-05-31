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
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-0">
        <div className="w-4/5">
          {step === 1 && (
            <>
              <ContentBox>
                <h2 className=" text-4xl font-semibold text-left text-gray-800">
                  ランドバリー
                </h2>
                <p className="mt-2 text-lg">
                  一歩を踏み出すあなたへ。新たな場所での体験が待っています。
                </p>
                <h2 className="text-2xl font-semibold mb-1 mt-8">
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
                  ツアーの提案者を選択してください。
                  <br />
                  提案者によって、提案されるツアーが異なります。
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
      </main>
    </>
  );
}
