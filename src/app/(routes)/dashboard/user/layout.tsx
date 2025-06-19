import { auth } from '@/auth';
// import Providers from "@/components/Providers"; // <-- 1. QUITAMOS ESTA LÍNEA
import { Sidebar } from "@/components/sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const session = await auth();
  return (
    // <Providers> <-- 2. QUITAMOS ESTE ENVOLTORIO
      <div className="md:flex md:flex-row w-full min-h-screen">
        {/* Sidebar */}
        <Sidebar
          name={session?.user?.name}
          image={session?.user?.image}
        />
        {/* Contenido principal - Sin overflow horizontal */}
        <div className="w-full flex-1 min-w-0 overflow-x-hidden">
          {children}
        </div>
      </div>
    // </Providers> <-- 3. Y SU CIERRE
  );
}