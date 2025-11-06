import { Header } from "./components/header";
import { Form } from "./components/form";

export default function Login ({ setIslogin }: { setIslogin: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div
      className="min-h-dvh max-w-dvw flex justify-center items-center
      bg-gradient-to-br from-sky-300 via-sky-200 to-white px-4"
    >
      <main className="border-white/30 border w-sm md:w-md bg-white/80 rounded-2xl shadow-2xl pt-8 pb-4 xl:pb-8 px-8 my-8">
        <Header />
        <Form setIslogin={setIslogin} />        
      </main>
    </div>
  );
}
