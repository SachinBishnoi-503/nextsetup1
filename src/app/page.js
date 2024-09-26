import BackToTop from "@/components/common/BackToTop";
import Hero from "@/components/home/Hero";
import MailJs from "@/components/home/MailJS";
import Validation from "@/components/home/Validation";

export default function Home() {
  return (
    <>
      <Hero />
      <MailJs />
      <BackToTop />
      <Validation />
    </>
  );
}
