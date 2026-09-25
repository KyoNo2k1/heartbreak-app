import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An Ủi - Một chỗ để nghỉ ngơi khi thất tình",
  description:
    "Trang web nhỏ để an ủi bạn khi bạn thất tình, với vài lời tử tế và vài con tim bay lên trời.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
