import './globals.css'
// import { Inter } from 'next/font/google'
import AuthStatus from "../components/authStatus"
import ReactQueryProvider from "@/app/reactquery-provider";
import AuthProvider from '@/app/auth-provider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyGHPay',
  description: 'Partner transactions monitoring portal',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`bg-image sm:bg-image-sm md:bg-image-md`}>
          <ToastContainer />
          <ReactQueryProvider>
            <AuthStatus>{children}</AuthStatus>
          </ReactQueryProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
