import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-10 dark:bg-black dark:text-white">
      <SignUp />
    </section>
  );
}
