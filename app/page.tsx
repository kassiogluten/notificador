import { Button } from "@/components/ui/button";
import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="gap-8 flex min-h-screen flex-col items-center justify-evenly p-2 lg:p-12  ">
      <Image src="/logo.png" width={255} height={172} alt="Logo" />
      <section className="container w-full flex flex-col-reverse md:flex-row gap-4 sm:gap-12 items-center justify-center">
        <div className="flex-1 text-primary gap-4 p-2 lg:p-8 flex flex-col ">
          <h1 className="text-4xl text-purple-500">
            <b>Notificações e automações</b> via Whatsapp
          </h1>
          <p className="text-xl ">
            Experimente a <b>conveniência e eficiência</b> das notificações e
            automações personalizadas via WhatsApp.
          </p>
          <p className="text-xl ">
            Receba alertas diretamente em seu número ou nos números de seus
            clientes, nos <b>momentos cruciais</b>, tais como:
          </p>
          <ul className="space-y-2">
            <li>• Quando um cliente preenche um formulário de contato</li>
            <li>• Após a conclusão de uma venda</li>
            <li>• Quando um produto está prestes a ficar sem estoque</li>
            <li>• Em datas e horários específicos programados</li>
            <li>• No vencimento de contas</li>
          </ul>
          <p className="text-muted">
            Mantenha o controle total das suas notificações, com a capacidade de
            adicionar, pausar ou excluir automações de forma individual. Estamos
            aqui para <b>simplificar e aprimorar a comunicação</b>, garantindo
            que você esteja sempre no comando das interações importantes.
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
