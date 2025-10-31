// To yha p ye jo folder create hua hai isse generally hoga ye like ki
// ki agar mai /sign-in/sign-in---sk-Yha-Mai-Kuch/  bhi likhunga wo sign-in page p hi jayega okkh!..

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center mt-20 dark:bg-black dark:text-white">
      <SignIn />
    </section>
  );
}
