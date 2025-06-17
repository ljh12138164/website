export const generateStaticParams = async () => {
  return [{ locale: "zh" }, { locale: "en" }];
};

export default async function Home() {
  return <div>Home</div>;
}
