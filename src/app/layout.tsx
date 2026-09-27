import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
