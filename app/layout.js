export const metadata = {
  title: 'Hi Arena',
  description: 'A simple greeting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
