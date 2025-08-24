// import { redirect } from "next/navigation";
import HomePage from "./home/page";

export default async function Page() {
  // const isLoggedIn = false; // aqui vai ser a verificação do token

  // if (!isLoggedIn) {
  //   redirect("/login");
  // }

  return <HomePage />;
}
