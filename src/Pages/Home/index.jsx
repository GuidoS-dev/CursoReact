import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
