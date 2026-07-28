import { getMe } from "@/services/getMe";
import Hero from "./_components/Hero";
import PopularIndustries from "./_components/PopularIndustries";

export default  async function Home() {

  const user = await getMe();
  console.log(user)

  return (
<div>
  <Hero/>
  <PopularIndustries/>
  <h1>main page</h1>
</div>
  );
}
