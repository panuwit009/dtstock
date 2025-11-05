import { Header } from "./components/header";
import { Form } from "./components/form";

export default function Login ({ setIslogin }: { setIslogin: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div
      className="h-dvh w-dvw flex justify-center items-center
      bg-gradient-to-br from-sky-300 via-sky-200 to-white"
    >
      <main className="border-white/30 border w-[95%] md:w-[40%] max-w-md max-h-full bg-white/80 rounded-2xl shadow-2xl p-8">
        <Header />
        <Form setIslogin={setIslogin} />        
      </main>
    </div>
  );
}
