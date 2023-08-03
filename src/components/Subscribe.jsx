const Subscribe = () => {
  return (
    <section className="-mt-10 translate-y-1/2 lg:mt-0">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#33A4E3] bg-[url('/subscribe-bg.png')] bg-cover bg-center bg-no-repeat px-4 py-10 lg:flex-row lg:items-end lg:px-20 lg:py-16">
          <div className="max-w-sm text-center text-white lg:text-left">
            <h2 className="mb-3 text-4xl font-bold lg:text-[40px]">
              Get our pro offers
            </h2>
            <p>
              Create a visual identity for your company, and an overall brand
            </p>
          </div>
          <form className="flex w-full max-w-md rounded bg-white p-1 sm:p-2">
            <input
              className="w-full border-none p-2 text-base font-medium placeholder-[#A8A9B1] outline-none"
              type="email"
              placeholder="Type your email here"
            />
            <button
              type="submit"
              className="rounded bg-[#0F415C] px-3 py-3 text-sm font-medium text-white sm:px-4 sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
