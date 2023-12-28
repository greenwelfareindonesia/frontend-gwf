import Container from "../../components/container";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="fixed top-0 left-0 w-full p-4 text-center bg-primary-2">
        <h1 className="text-3xl font-light tracking-wide text-light-1">SERVER ERROR</h1>
      </div>
      <Container className="p-8 space-y-4 text-center border border-primary-2">
        <h1 className="text-4xl font-semibold text-primary-1">404 - File or directory not found.</h1>
        <p className="text-lg text-dark">
          The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </Container>
    </section>
  );
};

export default NotFound;
