import { Button } from "@/components/ui/button";
import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="gap-8 flex min-h-screen flex-col items-center justify-between p-2 lg:p-12  ">
      <Image src="/logo.png" width={510} height={345} alt="Logo" />
      <section className="container w-full flex flex-col-reverse md:flex-row gap-4 sm:gap-12 items-center justify-center">
        <div className="flex-1 text-primary gap-4 p-2 lg:p-8 flex flex-col ">
          <h1 className="text-4xl text-purple-500">
            <b>Notificações e automações</b> via Whatsapp
          </h1>
          <p className="text-xl ">
            Alertas <b>diretamente no Whatsapp</b> em seu número ou de seus
            clientes, em momentos importantes, exemplos:
          </p>
          <ul className="space-y-2">
            <li>• Quando um cliente preencher um formulário de contato</li>
            <li>• Ao realizar uma venda</li>
            <li>• Quando um produto estiver sem estoque</li>
            <li>• Periodicamente em uma data e horário específico</li>
            <li>• No vencimento de contas</li>
          </ul>
          <p className="text-muted">
            Você está no controle das notificações, adicione, pause ou exclua as
            automações individualmente
          </p>
          <Button
            asChild
            className="bg-gradient-to-r to-violet-500 via-purple-500 from-fuchsia-500 hover:bg-purple-600 space-x-2 text-md"
          >
            <a target="_blank" href="https://wa.me/5533999583651">
              <FaWhatsapp size={20} />
              <span>Contato</span>
            </a>
          </Button>
        </div>
        <div className="flex-1">
          <Image
            src="/ilustracao-notificacao.svg"
            width={693}
            height={693}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
