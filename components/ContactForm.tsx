export default function ContactForm() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* TITLE */}
        <h2 className="text-3xl font-extrabold text-[#0B0B23] mb-14">
          Let’s get in touch!
        </h2>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div
            className="
              bg-[#070B2A] rounded-2xl px-10 py-8 text-white
              transition-transform duration-200
              hover:scale-[1.03]
            "
          >
            <p className="text-sm opacity-70 mb-2">Phone</p>
            <p className="text-xl font-semibold">+00 000-000-000</p>
          </div>

          <div
            className="
              bg-[#070B2A] rounded-2xl px-10 py-8 text-white
              transition-transform duration-200
              hover:scale-[1.03]
            "
          >
            <p className="text-sm opacity-70 mb-2">Email</p>
            <p className="text-xl font-semibold">support@inovarit.com</p>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-[#9FE3F0] rounded-[36px] px-10 py-14 md:px-16">
          <h3 className="text-2xl font-extrabold text-[#0B0B23] mb-2">
            Send Us Message
          </h3>
          <p className="text-sm text-[#0B0B23]/70 mb-10 max-w-xl">
            Have any questions regarding our services? Send us your message.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* INPUTS */}
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="
                h-[52px]
                px-5
                rounded-xl
                bg-white
                text-sm
                outline-none
                border border-black/10
                shadow-sm
                focus:border-[#0B0B23]/30
                focus:shadow-md
              "
            />

            <input
              type="email"
              placeholder="Enter Your Email Address..."
              className="
                h-[52px]
                px-5
                rounded-xl
                bg-white
                text-sm
                outline-none
                border border-black/10
                shadow-sm
                focus:border-[#0B0B23]/30
                focus:shadow-md
              "
            />

            <input
              type="text"
              placeholder="Enter Your Company..."
              className="
                h-[52px]
                px-5
                rounded-xl
                bg-white
                text-sm
                outline-none
                border border-black/10
                shadow-sm
                focus:border-[#0B0B23]/30
                focus:shadow-md
              "
            />

            <input
              type="text"
              placeholder="Enter Your Phone..."
              className="
                h-[52px]
                px-5
                rounded-xl
                bg-white
                text-sm
                outline-none
                border border-black/10
                shadow-sm
                focus:border-[#0B0B23]/30
                focus:shadow-md
              "
            />

            <textarea
              placeholder="Enter Your Message..."
              rows={4}
              className="
                md:col-span-2
                px-5 py-4
                rounded-xl
                bg-white
                text-sm
                outline-none
                border border-black/10
                shadow-sm
                resize-none
                focus:border-[#0B0B23]/30
                focus:shadow-md
              "
            />

            {/* CHECK + BUTTON */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
              <label className="flex items-start gap-3 text-xs text-[#0B0B23]/70 max-w-lg leading-relaxed">
                <input type="checkbox" className="mt-1" />
                By ticking this box, I am consenting to be sent monthly articles
                and promotions through Inovar IT newsletter.
              </label>

              <button
                type="submit"
                className="
                  px-12 py-3
                  bg-[#0B0B23]
                  text-white
                  rounded-xl
                  font-semibold
                  hover:opacity-90
                  transition
                "
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
