import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full flex justify-center py-4">
      <div className="w-72 sm:w-96 md:w-[28rem] lg:w-[32rem]">
        <Image
          src="/neulawlogo.png"
          alt="Women in Pre-Law Logo"
          width={512}
          height={512}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

