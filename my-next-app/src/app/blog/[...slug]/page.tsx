const CatchAllRoute = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  console.log(await params);

  return <div>CatchAllRoute </div>;
};

export default CatchAllRoute;