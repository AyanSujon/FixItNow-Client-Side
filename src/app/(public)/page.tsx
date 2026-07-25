import { getMe } from "@/services/getMe";

export default  async function Home() {

  const user = await getMe();
  console.log(user)

  return (
<div>
  <h1>main page</h1>
</div>
  );
}
