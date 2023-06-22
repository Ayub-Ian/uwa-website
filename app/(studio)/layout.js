import '../globals.css'

export const metadata = {
    title: "Ushauri Wellness Africa",
    description:
      "Non-profit organization dedicated to promoting mental health, drug and substance awareness, financial literacy and civic education",
  };

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}