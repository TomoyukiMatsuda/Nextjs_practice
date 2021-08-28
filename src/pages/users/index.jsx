import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "../../components/Users";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
