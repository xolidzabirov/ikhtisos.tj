
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head />
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
