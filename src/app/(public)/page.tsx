import { getMe } from "@/services/getMe";
import Hero from "./_components/Hero";

export default  async function Home() {

  const user = await getMe();
  console.log(user)

  return (
<div>
  <Hero/>
  <h1>main page</h1>
</div>
  );
}
