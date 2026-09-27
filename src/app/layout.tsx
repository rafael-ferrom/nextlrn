import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Study next Project',
  description: 'Learning next js and your funcionalitys'
}

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
