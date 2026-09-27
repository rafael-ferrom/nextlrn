



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <h1>Header</h1>
      <body>{children}</body>
      <h1>Footer</h1>
    </html>
  );
}
