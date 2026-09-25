"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "Không sao đâu, đau một chút rồi sẽ ổn thôi. Bạn không cần phải mạnh mẽ ngay bây giờ.",
  "Người không xứng đáng ở lại thì việc họ rời đi là một món quà, dù bây giờ chưa thấy vậy.",
  "Bạn đã yêu bằng cả trái tim, điều đó chưa bao giờ là sai.",
  "Hãy khóc nếu cần. Nước mắt không làm bạn yếu đuối, nó cho thấy bạn từng thật lòng.",
  "Rồi sẽ có một ngày bạn nhớ lại chuyện này mà mỉm cười, vì bạn đã bước qua được.",
  "Bạn xứng đáng với một tình yêu không khiến bạn phải nghi ngờ giá trị của mình.",
  "Hôm nay chỉ cần thở thôi cũng là một chiến thắng rồi.",
  "Trái tim bạn đang bận sửa chữa chính nó. Hãy cho nó thời gian.",
  "Không ai có thể lấy đi những điều tốt đẹp bạn đã từng cảm nhận. Chúng vẫn là của bạn.",
  "Bạn không cô đơn đâu, có rất nhiều người đã đi qua và đã ổn trở lại.",
];

const songs = [
  { title: "Cứ Chill Thôi", artist: "để tim nhẹ lại" },
  { title: "Một Bước Yêu Vạn Dặm Đau", artist: "khóc cho đã rồi thôi" },
  { title: "Sao Ta Không Còn Như Xưa", artist: "chậm lại và cảm nhận" },
  { title: "Tuý Âm", artist: "hát thật to cho hết buồn" },
];

const steps = [
  { title: "Hít vào", duration: "4 giây" },
  { title: "Giữ lại", duration: "4 giây" },
  { title: "Thở ra", duration: "6 giây" },
];

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 6,
        size: 14 + Math.random() * 22,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-0 animate-floatUp select-none opacity-0"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState<number | null>(null);
  const [breathing, setBreathing] = useState(false);

  const newQuote = () => {
    let next = Math.floor(Math.random() * quotes.length);
    if (next === quoteIndex) next = (next + 1) % quotes.length;
    setQuoteIndex(next);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#2a1420] via-[#1a0f16] to-[#0d080b] text-blush-50">
      <FloatingHearts />

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm uppercase tracking-[0.3em] text-blush-300"
        >
          một góc nhỏ để nghỉ ngơi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="animate-pulseSoft text-5xl font-extrabold sm:text-7xl"
        >
          Ăn Ủi 💗
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-md text-blush-100/80"
        >
          Nếu hôm nay bạn thất tình, dừng lại một chút ở đây. Không cần vội,
          không cần ổn ngay. Bạn chỉ cần ở đây thôi.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={newQuote}
          className="mt-10 rounded-full bg-blush-500 px-8 py-3 font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:bg-blush-400"
        >
          Bấm để được an ủi
        </motion.button>

        <div className="mt-8 h-24 max-w-xl px-4">
          <AnimatePresence mode="wait">
            {quoteIndex !== null && (
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="text-lg italic text-blush-100"
              >
                “{quotes[quoteIndex]}”
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-blush-300/70"
        >
          ↓ cuộn xuống nếu bạn muốn ở lại thêm chút nữa
        </motion.div>
      </section>

      {/* Breathing exercise */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Thở cùng nhau một chút nhé
        </motion.h2>
        <p className="mt-3 max-w-md text-blush-100/70">
          Bấm nút và làm theo nhịp thở bên dưới trong vài vòng.
        </p>

        <motion.button
          onClick={() => setBreathing((b) => !b)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 rounded-full border border-blush-300/50 px-6 py-2 text-sm text-blush-200 hover:bg-blush-500/20"
        >
          {breathing ? "Dừng lại" : "Bắt đầu thở"}
        </motion.button>

        <div className="relative mt-12 flex h-56 w-56 items-center justify-center">
          <motion.div
            animate={
              breathing
                ? { scale: [1, 1.6, 1.6, 1], opacity: [0.6, 1, 1, 0.6] }
                : { scale: 1, opacity: 0.6 }
            }
            transition={
              breathing
                ? { duration: 14, times: [0, 0.28, 0.57, 1], repeat: Infinity }
                : { duration: 0.5 }
            }
            className="absolute h-40 w-40 rounded-full bg-blush-500/40 blur-xl"
          />
          <motion.div
            animate={
              breathing
                ? { scale: [1, 1.4, 1.4, 1] }
                : { scale: 1 }
            }
            transition={
              breathing
                ? { duration: 14, times: [0, 0.28, 0.57, 1], repeat: Infinity }
                : { duration: 0.5 }
            }
            className="flex h-32 w-32 items-center justify-center rounded-full bg-blush-400 text-sm font-semibold text-white shadow-xl"
          >
            {breathing ? "Thở..." : "Sẵn sàng"}
          </motion.div>
        </div>

        <div className="mt-10 flex gap-6 text-sm text-blush-200/70">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              <span className="font-semibold text-blush-100">{s.title}</span>
              <span>{s.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Comfort songs */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Vài giai điệu để nghe cho đã
        </motion.h2>
        <p className="mt-3 max-w-md text-blush-100/70">
          Đôi khi khóc theo một bài hát cũng là một cách chữa lành.
        </p>

        <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
          {songs.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-blush-300/20 bg-white/5 p-5 text-left backdrop-blur"
            >
              <p className="font-semibold text-blush-100">🎵 {s.title}</p>
              <p className="text-sm text-blush-200/70">{s.artist}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 max-w-md text-sm text-blush-200/60"
        >
          Dù hôm nay có tệ đến đâu, ngày mai bạn vẫn sẽ thức dậy, vẫn sẽ ổn.
          Cảm ơn bạn vì đã ghé qua đây. 💗
        </motion.p>
      </section>
    </main>
  );
}
