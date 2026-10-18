import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'سپهر | ورود و ثبت‌نام', description: 'رابط کاربری مالی با طراحی تیره و سبز زمردی، فارسی و راست‌چین' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
