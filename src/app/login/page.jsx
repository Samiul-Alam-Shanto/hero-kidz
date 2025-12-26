import AuthForm from "@/components/forms/AuthForm";

export default function AuthPage() {
  return (
    <main className="relative min-h-screen mesh-gradient flex items-center justify-center p-6 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />

      <AuthForm />
    </main>
  );
}
