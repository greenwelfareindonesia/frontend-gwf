import Container from "../../components/container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const DetailDonate = () => {
  return (
    <>
      <Navbar />
      <Container className="pt-24 pb-16 text-center text-primary-1">
        <div className="space-y-8 mb-28">
          <h2 className="text-5xl font-light tracking-wide">Mobile Banking & ATM</h2>
          <p className="text-lg font-light">Bank Syariah Indonesia</p>
        </div>
        <div className="mb-10 space-y-1 text-2xl">
          <h4 className="font-light">Account Number: BSI 3030520202 a/n</h4>
          <h4 className="font-light">Indonesia Greenwelfare Foundation</h4>
        </div>
        <div className="font-light">
          <p>Please transfer your donation nominal manually to the Bank Account above</p>
          <p>If you would like to reconfirm your donation transaction, contact +62 856 9514 3631 (Yovinka Ignacia)</p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DetailDonate;
